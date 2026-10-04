/**
 * Turns the editorial outline (scripts/seed/outline.yaml) into stub entries.
 *
 *   npm run seed                 create a stub for every outline event, person and place
 *                                that has no file yet; existing files are never touched
 *   npm run seed -- --check      validate the outline and print counts without writing
 *   npm run seed -- --batches    print the research batches: which events, people and
 *                                places each batch owns
 *
 * Stubs carry `draft: true`, so the validator checks only their structure until
 * a researcher replaces them.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { parse, stringify } from 'yaml';
import { compareDated, CONFIDENCE_LEVELS, CONTENT_ROOT, ID_PATTERN, loadContent, type Confidence } from 'chronowiki/tools';

interface OutlineEvent {
  id: string;
  title: string;
  year?: number;
  end?: number;
  month?: number;
  day?: number;
  circa?: boolean;
  display?: string;
  conf: Confidence;
  order?: number;
  places?: string[];
  people?: string[];
  threads?: string[];
  follows?: string[];
  key: string;
}

type Outline = Record<string, OutlineEvent[]>;

/** How many research batches each era is split into (content plan, "Batches"). */
const BATCH_PLAN: [eras: string[], parts: number][] = [
  [['primeval-history', 'patriarchs'], 1],
  [['exodus-and-conquest'], 1],
  [['judges-and-united-monarchy'], 1],
  [['divided-kingdom'], 2],
  [['exile-and-return'], 1],
  [['second-temple'], 1],
  [['life-of-jesus'], 2],
  [['apostolic-age'], 2],
  [['church-under-rome'], 2],
  [['councils-and-empire'], 3],
  [['early-middle-ages'], 2],
  [['high-and-late-middle-ages'], 3],
  [['reformation'], 4],
  [['awakenings-and-missions'], 3],
  [['modern-and-global'], 4],
];

const outline = parse(readFileSync('scripts/seed/outline.yaml', 'utf8')) as Outline;
const content = loadContent();
const eraOrder = new Map(
  content.eras.map((era) => [era.id, (era.data as { order: number }).order] as const),
);
const threadIds = new Set(content.threads.map((t) => t.id));

// --- validate the outline ----------------------------------------------------
const problems: string[] = [];
const events: (OutlineEvent & { era: string })[] = [];
const seen = new Set<string>();

for (const [era, list] of Object.entries(outline)) {
  if (!eraOrder.has(era)) problems.push(`Unknown era "${era}"`);
  for (const event of list) {
    const where = `${era}/${event.id}`;
    if (!ID_PATTERN.test(event.id)) problems.push(`${where}: id is not kebab-case`);
    if (seen.has(event.id)) problems.push(`${where}: duplicate event id`);
    seen.add(event.id);
    if (!CONFIDENCE_LEVELS.includes(event.conf)) problems.push(`${where}: unknown conf "${event.conf}"`);
    if (event.year === undefined && event.conf !== 'undated') problems.push(`${where}: year missing`);
    if (!event.key) problems.push(`${where}: key (primary sources hint) missing`);
    if (event.conf !== 'undated' && !event.places?.length) problems.push(`${where}: a dated event needs a place`);
    for (const id of [...(event.places ?? []), ...(event.people ?? [])]) {
      if (!ID_PATTERN.test(id)) problems.push(`${where}: "${id}" is not kebab-case`);
    }
    for (const id of event.threads ?? []) {
      if (!threadIds.has(id)) problems.push(`${where}: unknown thread "${id}"`);
    }
    events.push({ ...event, era });
  }
}
for (const event of events) {
  for (const id of event.follows ?? []) {
    if (!seen.has(id)) problems.push(`${event.era}/${event.id}: follows unknown event "${id}"`);
  }
}
if (problems.length > 0) {
  console.error(problems.join('\n'));
  process.exit(1);
}

const dated = (event: OutlineEvent & { era: string }) => ({
  eraOrder: eraOrder.get(event.era)!,
  date: { start: event.year, month: event.month, day: event.day, confidence: event.conf },
  order: event.order ?? 0,
  title: event.title,
});
events.sort((a, b) => compareDated(dated(a), dated(b)));

for (const event of events) {
  for (const id of event.follows ?? []) {
    const earlier = events.find((e) => e.id === id)!;
    if (compareDated(dated(earlier), dated(event)) > 0) {
      console.warn(`note: ${event.id} follows ${id}, which comes later in the timeline`);
    }
  }
}

const peopleIds = [...new Set(events.flatMap((e) => e.people ?? []))];
const placeIds = [...new Set(events.flatMap((e) => e.places ?? []))];

// --- helpers -------------------------------------------------------------------
const SMALL_WORDS = new Set(['of', 'the', 'and', 'in', 'de', 'von', 'van', 'a', 'la', 'ben', 'bar', 't']);
const ROMAN = /^(?=[ivx]+$)x{0,3}(ix|iv|v?i{0,3})$/;

function nameFromId(id: string): string {
  return id
    .split('-')
    .map((word, index) => {
      if (index > 0 && ROMAN.test(word)) return word.toUpperCase();
      if (index > 0 && SMALL_WORDS.has(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

function writeStub(path: string, frontMatter: Record<string, unknown>, body: string): boolean {
  if (existsSync(path)) return false;
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `---\n${stringify(frontMatter, { lineWidth: 0 })}---\n\n${body}\n`);
  return true;
}

const args = new Set(process.argv.slice(2));

// --- --batches -------------------------------------------------------------------
if (args.has('--batches')) {
  const isDraft = (collection: 'events' | 'people' | 'places', id: string) => {
    const entry = content[collection].find((e) => e.id === id);
    return !entry || (entry.data as { draft?: boolean }).draft === true;
  };
  // A person or place belongs to the batch of the first event that names it.
  const owner = new Map<string, string>();
  const batches: { batch: string; era: string; events: string[]; people: string[]; places: string[] }[] = [];
  let number = 0;
  for (const [eras, parts] of BATCH_PLAN) {
    const list = events.filter((e) => eras.includes(e.era));
    const size = Math.ceil(list.length / parts);
    for (let part = 0; part < parts; part++) {
      number += 1;
      batches.push({
        batch: `B${String(number).padStart(2, '0')}`,
        era: eras.join(', '),
        events: list.slice(part * size, (part + 1) * size).map((e) => e.id),
        people: [],
        places: [],
      });
    }
  }
  for (const batch of batches) {
    for (const id of batch.events) {
      const event = events.find((e) => e.id === id)!;
      for (const [kind, ids] of [
        ['people', event.people ?? []],
        ['places', event.places ?? []],
      ] as const) {
        for (const ref of ids) {
          const key = `${kind}:${ref}`;
          if (owner.has(key)) continue;
          owner.set(key, batch.batch);
          if (isDraft(kind, ref)) batch[kind].push(ref);
        }
      }
    }
    batch.events = batch.events.filter((id) => isDraft('events', id));
  }
  console.log(JSON.stringify(batches, null, 2));
  process.exit(0);
}

console.log(
  `Outline: ${events.length} events in ${Object.keys(outline).length} eras, ` +
    `${peopleIds.length} people, ${placeIds.length} places.`,
);
if (args.has('--check')) process.exit(0);

// --- write stubs -------------------------------------------------------------------
let created = 0;

for (const event of events) {
  const date: Record<string, unknown> = {};
  if (event.year !== undefined) date.start = event.year;
  if (event.end !== undefined) date.end = event.end;
  if (event.month !== undefined) date.month = event.month;
  if (event.day !== undefined) date.day = event.day;
  if (event.circa) date.circa = true;
  if (event.display) date.display = event.display;
  date.confidence = event.conf;

  const wrote = writeStub(
    join(CONTENT_ROOT, 'events', event.era, `${event.id}.md`),
    {
      title: event.title,
      summary: 'TODO',
      era: event.era,
      date,
      order: event.order ?? 0,
      places: event.places ?? [],
      people: event.people ?? [],
      threads: event.threads ?? [],
      follows: event.follows ?? [],
      draft: true,
    },
    `Outline stub. Primary sources to start from: ${event.key}`,
  );
  if (wrote) created += 1;
}

for (const id of peopleIds) {
  const wrote = writeStub(
    join(CONTENT_ROOT, 'people', `${id}.md`),
    { name: nameFromId(id), role: 'TODO', summary: 'TODO', draft: true },
    'Outline stub.',
  );
  if (wrote) created += 1;
}

for (const id of placeIds) {
  const wrote = writeStub(
    join(CONTENT_ROOT, 'places', `${id}.md`),
    { name: nameFromId(id), modern: 'TODO', lat: 0, lon: 0, kind: 'city', region: 'levant', summary: 'TODO', draft: true },
    'Outline stub.',
  );
  if (wrote) created += 1;
}

console.log(`Created ${created} stub files. Existing files were left untouched.`);
