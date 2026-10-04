# Authoring guide

How to write an entry for Christwiki. Read this together with three finished examples:

- `src/content/events/exile-and-return/first-deportation-to-babylon.md` — Bible plus a cuneiform chronicle and a museum object
- `src/content/events/exile-and-return/fall-of-jerusalem.md` — Bible only, with a disputed year
- `src/content/events/exile-and-return/edict-of-cyrus.md` — Bible plus an inscription that gives context without naming the event

and the people, places and sources they use (`src/content/people/jehoiachin.md`, `src/content/places/babylon.md`, `src/content/sources/cyrus-cylinder.md`).

Entries are written in English. Translations are overlays on them and follow the same standard: see [i18n.md](i18n.md).

The file formats, the inline syntax and the validator come from the theme the site is built on; its own reference is [chronowiki: Entries](https://github.com/christwiki/chronowiki/blob/main/docs/entries.md). This guide adds the standard Christwiki holds its entries to.

## The standard

A reader must be able to check every claim. So:

1. **Every statement of fact in a narrative is followed by a citation of a primary source**, at the level of the passage: chapter and verse, book and section, canon number, line number.
2. **You have opened every source you cite and read the passage.** A citation you have not checked does not go in.
3. **Primary means the text or object itself**: Scripture; ancient historians and letter writers; the writings of the people involved; council acts, canons and creeds; laws and edicts; inscriptions, manuscripts and artifacts; and for modern events the documents themselves. Encyclopedias, textbooks, Wikipedia, blogs, study notes and apologetics sites are not sources. Use them to find your way, never to cite.
4. **A source written long after the event is still primary for what that author says**, and you say so in the text: "Eusebius, writing about 250 years later, reports that …". Do not present late tradition as contemporary evidence.
5. **Nothing secondary is passed off as primary.** Scholarship belongs in the `dating` note, named as scholarship (author, title, year).
6. **If you cannot support a claim from a primary source, leave it out** and say so in your report.

## Voice

- Plain, concrete English. Short sentences. No rhetorical questions, no "it is important to note", no superlatives the sources do not support.
- Tell what happened, in order, then say in one short paragraph why it matters for what came after.
- **Neutral between Christian traditions and between faith and scepticism.** Report what the sources say and attribute it: "Kings says", "Luke reports", "according to Eusebius". Do not write "God did X" in the wiki's own voice and do not write "the legend claims". For a miracle or a vision, narrate it as the source does, with the citation.
- Where traditions read an event differently (Peter's confession, the canon, justification, the filioque), state each reading in a sentence and cite a document of that tradition. Do not adjudicate.
- Where historians doubt or debate an event's historicity or date, say so briefly in the `dating` note, without taking a side unless the evidence is one-sided.
- Use "BC" and "AD". Spell out centuries. British or American spelling is fine; be consistent inside an entry.
- **Quotations:** quote only from public-domain translations, and keep quotations short. For Scripture, quote the World English Bible (the text served by `bible-api.com`, see below). Anything else is paraphrased. A phrase of two or three words in quotation marks is fine from any translation.

### What the first verified batches got wrong

The independent check of the first batches found the same few mistakes again and again. Avoid them:

- **A citation a verse or two short.** The cited range must cover everything the sentence says. Read the verses on either side.
- **Silence stated as fact.** "The ark stayed there until David" or "no inscription names him" are claims. Cite them or leave them out.
- **Order of narrative taken for order of events.** Say "the next thing Kings tells is", not "next".
- **Scholarship from memory.** Two authors merged into one book; a scholar credited with a date he never gave. Name a work only after confirming, in this task, that it exists with that author, title and year and argues what you say.
- **The quoted translation against the linked one.** Scripture links open the NRSVUE; quotations are from the World English Bible. Where the two differ in substance (the WEB sometimes emends the Hebrew, as at 1 Sam 13:1 and 2 Sam 21:19), do not quote: paraphrase, and if the difference matters say which text reads what.
- **"The accounts agree" stretched over a source that is silent.** If the chronicle does not mention the deportation, the two accounts do not agree about it. Say what each one says.
- **Parallel accounts quietly harmonised.** Where Kings and Chronicles, or two Gospels, differ, give both.
- **A summary more exact than the dating note allows.** If the note says "within months", the summary cannot say "weeks later".
- **Museum links built from a registration number.** One British Museum number can cover a dozen objects with `_2`, `_3` suffixes. Confirm that the record is the object you describe.
- **"God tells Abram" in the wiki's own voice**, most often in summaries. Write "Genesis tells how God calls Abram". The rule of attribution applies to the summary too.
- **Disputed authorship asserted.** Write "the letter to the Colossians says", not "Paul writes", for letters whose authorship scholars dispute (Ephesians, Colossians, 2 Thessalonians, 1 and 2 Timothy, Titus); "Isaiah 40–55", not "the prophet Isaiah says", for those chapters; "2 Peter", not "Peter".
- **Sweeping negatives.** "Nothing outside the Bible mentions him" is rarely checkable and often false. Say what you looked for and found, or narrow it: "no source from his own time".
- **A paraphrase of a creed or confession that drops a qualifying word.** These texts were fought over word by word. Keep the terms.
- **A gloss slipped into a cited sentence.** The citation then covers something the source does not say.
- **archive.org page links not tested.** `/page/16/` works only where the scan carries that printed number; an unnumbered page opens the cover. Open the link and check which page shows; use the leaf form (`/page/n19/`) where needed. Printed numbers can also be off by a page or two within one scan, so find the leaf by searching the scan's text and look at the page image before citing it.
- **A museum record cited for facts it does not contain**, such as the date or circumstances of a find. Cite the excavation report or the first publication for those.
- **Absolutes.** "Every later king", "throughout", "only", "several": check each against the text or soften it.
- **Restored words in an inscription reported as preserved.** Say what survives and what editors supply.
- **A scholar's judgment in the narrative voice.** "The figure should be used with caution" is an opinion; attribute it or cut it.
- **Superlatives in summaries and in people and place entries.** "The greatest king", "the largest city of its age", "the earliest mention", "the only source": each is a claim that needs a source, and most should simply go.
- **A citation with no locator and no link.** It then opens a museum record that shows no text. Give the line or section and a link to a page where it can be read.
- **Reign and death dates in a person's front matter with nothing in the body to support them.**
- **A second sentence resting on the first sentence's citation.** If it adds a fact, it needs its own.
- **"All four Gospels say", "every list has", "the accounts agree on the place"**, where one of them differs. Check each one before writing "all".
- **A scholar cited for the opposite of what he argues.** Open the work or a review of it; do not rely on which side you remember him on.
- **A writer known only through Eusebius cited as if directly.** Write "Origen, as Eusebius reports him".
- **Family relationships and regnal years hung on a citation that does not contain them.**
- **"Catholic, Orthodox and Protestant readers weigh this differently", with no document cited.** Either cite a document of each tradition named, or say which readings are given and that others are not represented.
- **Opponents' reports told in the wiki's own voice after one opening disclaimer.** Attribute each hostile claim where it stands: "Tertullian says that Marcion…".
- **Order words where the source gives none.** "Then", "later", "soon afterwards" are claims about sequence.
- **Founding dates and "chief city of" in place entries, uncited.**
- **Names not linked on first mention.**
- **A date taken from a page's address, or a page number from a viewer.** A site may redirect by article number whatever date is in the URL, and a scan viewer preloads neighbouring pages. Read the date or the page stamp on the document itself.
- **Multi-volume archive.org items linked at item level**, which opens the first volume. Link the volume and the leaf.
- **An editor's heading, marginal note or translator's restoration credited to the author.** Say whose words they are.
- **A member's, a journalist's or an organiser's text cited as an institution's own voice.** For what a church teaches or decided, cite the document the church itself issued.
- **A modern church's position cited to a document that does not state it.** If no document of that church says it, the wiki does not say it either.
- **Distinct acts flattened into one verb**: "removed all three" for two depositions and a resignation, "signed at" for a treaty's dating clause, "became" for the date of an appointment.
- **A count (of canons, signers, judges, anathemas) taken from a secondary summary.** Count them in the linked text, or leave the number out.
- **Two cited sources that disagree on a date, one silently chosen.** Give both, each with its source.
- **A title that asserts the contested point.** "X receives autocephaly" takes a side where the grant is disputed; "Y condemns Z" claims more than a letter that names no one. Title the entry by what the document is or by who acted.
- **A long report's own summary trusted over its body.** Where they differ, cite the body.
- **A CCEL link that lands on a heading-only page.** The text is usually one level down.

## Events

File: `src/content/events/<era-id>/<event-id>.md`. The stub already exists; replace its contents.

```yaml
---
title: The First Deportation to Babylon
summary: One or two sentences, at most 280 characters, shown on the timeline card. No citations here.
era: exile-and-return
date:
  start: -597          # signed year: negative is BC. There is no year 0.
  end: -586            # optional, for events with duration
  month: 3             # optional, only with confidence firm or estimated
  day: 16              # optional
  circa: true          # optional, renders "c."
  display: "587/586 BC" # optional, replaces the generated label
  confidence: firm     # firm | estimated | traditional | undated
order: 0               # tiebreak for events in the same year, in steps of 10
places: [jerusalem, babylon]      # primary place first
people: [jehoiachin, nebuchadnezzar-ii]
threads: [kingship-and-messiah]
follows: [battle-of-carchemish]   # earlier events this one grows out of
citations:
  chronicle:                      # a key you choose: lower-case letters, digits, hyphens
    source: babylonian-chronicle-abc-5   # id of a file in src/content/sources/
    at: "rev. 11–13"                     # the locator, as a reader would cite it
    url: https://…                       # deep link to the passage; omit to use the source's own url
dating: |
  Markdown. Required unless confidence is firm.
---

The narrative: three to five paragraphs, 150–450 words. An event that has to give several parties' own statements may run longer, up to 700 words (the validator's limit), as long as every sentence carries cited substance; background belongs on the people and place pages.
```

Remove `draft: true` when the entry is finished. Do not set `reviewed`; the verification pass does that.

**YAML quoting.** Put a front-matter value in double quotes whenever it contains a colon followed by a space, starts with a quotation mark, bracket or `@`, or contains ` #`. A summary such as `summary: Paul sets him beside Christ: through Adam came sin` breaks the file; write `summary: "Paul sets him beside Christ: through Adam came sin"`. The validator reports this as a `yaml` error.

### Confidence

| Value | Use when |
|---|---|
| `firm` | The year is fixed by contemporary documents and not seriously disputed. |
| `estimated` | Scholars derive the year from primary evidence, with a margin of a few years or two competing years. |
| `traditional` | The date comes from later tradition, or from adding up the Bible's own figures with no outside anchor. |
| `undated` | The source gives no datable setting (Genesis 1–11). Omit `start`. |

### The dating note

Say in two to six sentences what fixes the date: which primary source gives which regnal year or synchronism, how that converts to a calendar year, and what remains disputed. Cite the primary evidence with the usual tokens. Where the year rests on scholarship, name the work: author, *title*, year. Where there are two serious proposals, give both with a reference for each.

### Changing the outline

The stub's date, places, people, threads and follows come from the outline and are starting points. Correct them when the sources require it and mention it in your report. Keep `people` to those who act in the event, four at most as a rule, and `places` to where it happened, three at most. Do not rename, add or delete event files; propose that in your report.

## Inline syntax

| Write | Reader sees |
|---|---|
| `[[bible:2 Kings 25:8-10]]` | (2 Kings 25:8–10), linked to the passage |
| `[[bible:Jer 52:12-30; 2 Chr 36:17-21]]` | one citation covering two passages |
| `[[cite:chronicle]]` | (Babylonian Chronicle 5 rev. 11–13), linked to the deep link |
| `[[person:jeremiah]]` | Jeremiah, linked to his page |
| `[[place:babylon\|the city]]` | "the city", linked to Babylon |
| `[[event:edict-of-cyrus]]`, `[[thread:covenant]]`, `[[source:cyrus-cylinder]]`, `[[era:reformation]]` | links to those pages |

- Put the citation after the sentence or clause it supports, before the full stop. The parentheses are added for you.
- Link a person or place the first time it appears in an entry, not every time.
- A link without a label shows the target's own name or title. An event's title rarely fits in the middle of a sentence, so give event links a label: `the [[event:council-of-nicaea|council of 325]]`.
- Bible references are checked: the book, chapter and verses must exist in the NRSV numbering. Use ordinary abbreviations (`Gen`, `2 Kgs`, `Ps`, `Matt`, `1 Cor`, `1 Macc`, `Sir`).
- Ordinary Markdown works: `*emphasis*`, `> quotation`, lists. Raw HTML does not.

## Reading the sources

**Scripture.** `curl -s "https://bible-api.com/2%20kings%2024:8-17"` returns the World English Bible text. Read every passage you cite. Cite the range that supports the whole sentence, no wider. The service limits how fast it may be asked: fetch whole chapters and keep them, leave two seconds between requests, and on a 429 answer wait half a minute and try again. The same translation can be read chapter by chapter at ebible.org, for example `https://ebible.org/eng-web/2KI24.htm`.

**Everything else.** Open the page and find the passage. Prefer stable, scholarly or institutional hosts that can be linked at chapter or section level:

| Material | Hosts |
|---|---|
| Josephus, Philo | lexundria.com, penelope.uchicago.edu, perseus.tufts.edu |
| Tacitus, Suetonius, Pliny, Cassius Dio, other classical authors | penelope.uchicago.edu (LacusCurtius), perseus.tufts.edu, attalus.org |
| Church Fathers, early councils | newadvent.org/fathers, ccel.org, tertullian.org |
| Mesopotamian, Persian and Egyptian texts | livius.org, the holding museum's object record |
| Inscriptions, artifacts, manuscripts | the holding institution (britishmuseum.org, louvre.fr, imj.org.il, smb.museum, deadseascrolls.org.il, codexsinaiticus.org, bl.uk) |
| Medieval documents | sourcebooks.fordham.edu, avalon.law.yale.edu, papalencyclicals.net, dmgh.de |
| Papal and conciliar documents | vatican.va, papalencyclicals.net |
| Reformation confessions and writings | bookofconcord.org, ccel.org, projectwittenberg.org, the publishing church's own site |
| Orthodox documents | patriarchate.org, holycouncil.org, the church's own site |
| Laws, treaties, state papers | legislation.gov.uk, avalon.law.yale.edu, archives.gov, founders.archives.gov, the national archive concerned |
| Modern church and ecumenical documents | vatican.va, oikoumene.org, lausanne.org, anglicancommunion.org, lutheranworld.org |
| Public-domain books | archive.org or wikisource.org, linked to the page or chapter |

Rules for links:

- `https` only. No link shorteners, no search-result URLs, no session parameters.
- Link as close to the passage as the host allows: the chapter page, the section anchor, the object record.
- A source that exists only behind a paywall is not usable. Find a public edition or leave the claim out.
- **If a page refuses automated access** (the British Museum does), read the Internet Archive's copy of the same address (`https://web.archive.org/web/2/<the URL>`) or confirm through a web search that the exact URL exists and shows the object you mean. Cite the original address, and list it in your report under "links to check by hand". A refusal can hide a dead page: a site that answers every automated request with 403 gives the same answer for a page it has since moved or deleted. Such links are opened in a browser before a release. Where the original has gone, or refuses whole regions of the world, cite the Internet Archive's dated copy and say so in the source record.

## Sources

File: `src/content/sources/<source-id>.md`. One file per work or object, shared by every entry that cites it. **Before creating one, check whether the file exists.** If it does, use it as it is.

Ids: `author-work` (`josephus-antiquities`, `eusebius-church-history`, `tacitus-annals`, `augustine-confessions`); anonymous works by their name (`didache`, `nicene-creed-325`, `rule-of-benedict`); objects by their common name (`cyrus-cylinder`, `tel-dan-stele`); councils as `council-of-<place>-<year>-<document>` only when a council produced several separately cited documents, otherwise `council-of-<place>-<year>`.

```yaml
---
title: Annals
author: Tacitus                     # omit for anonymous works and objects
cite: "Tacitus, Annals"             # short form; the locator from `at` is appended: "Tacitus, Annals 15.44"
kind: history                       # scripture | history | chronicle | letter | treatise | council | creed | law | liturgy | inscription | manuscript | artifact
written:
  start: 115
  end: 120
  circa: true
  display: "c. AD 115–120"          # optional
language: Latin
url: https://…                      # the whole work online, or the holding institution's record of the object
links:                              # optional: translation, original text, images
  - label: Latin text (Perseus)
    url: https://…
edition: "Translation by A. J. Church and W. J. Brodribb (1876), public domain."
holding: British Museum, London (BM 21946)   # objects and manuscripts only
summary: One or two sentences, at most 280 characters: what it is and why it counts as evidence.
---

One or two paragraphs: who wrote it, when, how close to the events, and anything a reader needs in order to weigh it.
```

For a work with many books (Josephus, Eusebius), make one source file and give each citation its own `url` to the book or chapter.

## People

File: `src/content/people/<id>.md`. Short: the page mainly gathers the events a person appears in.

```yaml
---
name: Jehoiachin
altNames: [Jeconiah, Coniah]        # only names a reader might search for; none that belong to someone else
role: King of Judah, 597 BC         # a few words
born: { start: -615, circa: true, confidence: estimated }   # optional
died: { start: -562, confidence: firm }                     # optional
summary: At most 280 characters.
citations: {}                       # same form as in events, if the body cites non-biblical sources
---

One or two short paragraphs with citations.
```

Give `born` and `died` only when a source supports them.

## Places

File: `src/content/places/<id>.md`.

```yaml
---
name: Babylon
altNames: [Babel]
modern: Near Hillah, Iraq           # modern name and country; for Jerusalem just "Jerusalem"
lat: 32.542                         # decimal degrees, three decimals
lon: 44.421
kind: city                          # city | region | mountain | river | sea | island | site
region: mesopotamia-and-persia      # see below
location: known                     # known | approximate | traditional | disputed
summary: At most 280 characters.
---

One paragraph.
```

Regions: `levant` (the Levant and Arabia), `egypt`, `mesopotamia-and-persia`, `anatolia`, `greece-and-balkans`, `italy`, `north-africa`, `western-europe`, `central-and-northern-europe`, `eastern-europe-and-russia`, `sub-saharan-africa`, `south-and-east-asia`, `americas`, `oceania`.

Take coordinates of ancient places from Pleiades (`pleiades.stoa.org`) and of modern places from a standard gazetteer. Set `location` honestly: `traditional` for a site fixed by later tradition (Mount Sinai), `disputed` where scholars disagree, `approximate` for a region or an unlocated site placed in its general area.

## Checking your work

```bash
npm run validate -- --era <era-id>
```

reports problems in that era's events and in the people, places and sources they use. Fix every error. Fix every warning about your own files except `reviewed`.

Before you hand an entry on:

- [ ] Every factual sentence in the narrative has a citation, and you have read the cited passage.
- [ ] Every non-biblical citation has a link you opened, and the page contains the passage.
- [ ] The date has the right confidence level and, unless firm, a dating note that names its evidence.
- [ ] No tradition is favoured; contested points are attributed.
- [ ] Quotations are from public-domain translations and exact.
- [ ] People and places are linked on first mention; coordinates are checked.
- [ ] `draft: true` is removed and the validator reports no errors.

## Deep links for the shared sources

These records exist and are cited by many eras. Give every citation its own `url`, built from the pattern below. `<b>` is the book, `<c>` the chapter. Every example was opened when the table was made.

Know the hosts:

- **Lexundria and Perseus answer "200 OK" for a wrong reference.** Lexundria shows a page titled "Error", Perseus says it is "unable to find a document". Look at the page, not the status.
- Perseus fails with 503 now and then and works on a second try.
- LacusCurtius addresses contain a literal asterisk (`15B*.html`). Keep it.
- New Advent has chapter anchors (`#chapterN`) for 1 Clement, the Didache, Ignatius to the Romans and books 2 and 4 of Eusebius's Church History. Elsewhere the closest link is the page for the book. Use the anchor wherever there is one.
- CCEL numbers its chapter pages by position, so some books are off by one. Use only the offsets given here.

| Source id | Short form | Pattern and example |
|---|---|---|
| `josephus-antiquities` | Josephus, Antiquities | `https://lexundria.com/j_aj/<b>.<from>-<b>.<to>/wst` in Niese's section numbers, e.g. `https://lexundria.com/j_aj/18.63-18.64/wst` (= 18.3.3 in Whiston). In Whiston's numbering: `https://penelope.uchicago.edu/josephus/ant-18.html#S3.3` |
| `josephus-jewish-war` | Josephus, Jewish War | `https://lexundria.com/j_bj/6.249-6.253/wst`; Whiston: `https://penelope.uchicago.edu/josephus/war-6.html#S4.5` |
| `philo-embassy-to-gaius` | Philo, Embassy to Gaius | Wikisource, anchored by printed page of Yonge vol. 4: `https://en.wikisource.org/wiki/The_Works_of_Philo_Judaeus/Volume_4/On_the_Virtues_and_Office_of_Ambassadors#164` (sections 299–305) |
| `tacitus-annals` | Tacitus, Annals | `https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Tacitus/Annals/15B*.html#44`; the file letter (15A, 15B, 15C) must be read off the contents page. For quotations use Church and Brodribb: `https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.02.0078:book=15:chapter=44` |
| `tacitus-histories` | Tacitus, Histories | `https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Tacitus/Histories/5A*.html#9` |
| `suetonius-lives-of-the-caesars` | Suetonius, | Write `at` as "Claudius 25.4". `https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Suetonius/12Caesars/Claudius*.html#25` |
| `cassius-dio-roman-history` | Cassius Dio, Roman History | `https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Cassius_Dio/67*.html#14` |
| `pliny-letters` | Pliny, Letters | `https://www.attalus.org/pliny/ep10b.html#96` (book 10 is split: `ep10a` for letters 1–60, `ep10b` for 61–121) |
| `first-clement` | 1 Clement | `https://www.newadvent.org/fathers/1010.htm#chapter5` |
| `didache` | Didache | `https://www.newadvent.org/fathers/0714.htm#chapter7` |
| `ignatius-letters` | Ignatius, | Write `at` as "Romans 4". One page per letter: 0104 Ephesians, 0105 Magnesians, 0106 Trallians, 0107 Romans, 0108 Philadelphians, 0109 Smyrnaeans, 0110 Polycarp, e.g. `https://www.newadvent.org/fathers/0109.htm`. Do not use CCEL here: it prints the longer, interpolated version alongside. |
| `justin-first-apology` | Justin, First Apology | `https://ccel.org/ccel/schaff/anf01/anf01.viii.ii.lxvii.html` (chapter in Roman numerals) |
| `irenaeus-against-heresies` | Irenaeus, Against Heresies | `https://www.newadvent.org/fathers/0103<b><c, two digits>.htm`, e.g. `https://www.newadvent.org/fathers/0103303.htm` for 3.3 |
| `eusebius-church-history` | Eusebius, Church History | Book page: `https://www.newadvent.org/fathers/2501<b, two digits>.htm`. Chapter page: `https://ccel.org/ccel/schaff/npnf201/npnf201.iii.<B>.<C>.html`, where `<B>` is vi–xiii for books 1–8 and xv, xvi for books 9–10, and `<C>` is the chapter in books 1, 3, 4, 6, 9, 10 and the chapter plus one in books 2, 5, 7, 8. 3.39 is `…iii.viii.xxxix.html`; 2.23 is `…iii.vii.xxiv.html` |
| `eusebius-life-of-constantine` | Eusebius, Life of Constantine | `https://ccel.org/ccel/schaff/npnf201/npnf201.iv.vi.<b>.<c>.html`, e.g. `…iv.vi.i.xxviii.html` for 1.28 |
| `lactantius-deaths-of-the-persecutors` | Lactantius, Deaths of the Persecutors | `https://ccel.org/ccel/schaff/anf07/anf07.iii.v.xliv.html` (chapter 44) |
| `athanasius-life-of-antony` | Athanasius, Life of Antony | One page: `https://www.newadvent.org/fathers/2811.htm` |
| `socrates-church-history` | Socrates, Church History | `https://ccel.org/ccel/schaff/npnf202/npnf202.ii.<B>.<C>.html`, `<B>` iv–x for books 1–7, `<C>` the chapter in books 1–4 and 7 and the chapter plus one in books 5 and 6. 1.8 is `…ii.iv.viii.html` |
| `theodoret-church-history` | Theodoret, Church History | `https://ccel.org/ccel/schaff/npnf203/npnf203.iv.viii.<b>.<C>.html`, `<C>` the chapter plus one in book 1. 5.9 is `…iv.viii.v.ix.html`. Cite this translation's own chapter numbers. |
| `theodosian-code` | Theodosian Code | Latin, anchored by title: `https://droitromain.univ-grenoble-alpes.fr/Constitutiones/CTh16.html#1`. A few laws in English: `https://sourcebooks.fordham.edu/source/codex-theod1.asp` |
| `augustine-confessions` | Augustine, Confessions | `https://www.newadvent.org/fathers/1101<b, two digits>.htm`, e.g. `…110108.htm` |
| `augustine-city-of-god` | Augustine, City of God | `https://www.newadvent.org/fathers/1201<b, two digits>.htm`, e.g. `…120114.htm` |
| `nicene-creed-325` | Creed of Nicaea (325) | `https://ccel.org/ccel/schaff/npnf214/npnf214.vii.iii.html`. For the canons: `https://www.newadvent.org/fathers/3801.htm` |
| `niceno-constantinopolitan-creed` | Niceno-Constantinopolitan Creed | `https://ccel.org/ccel/schaff/npnf214/npnf214.ix.iii.html`; with the canons of 381: `https://www.newadvent.org/fathers/3808.htm` |
| `definition-of-chalcedon` | Definition of Chalcedon | `https://ccel.org/ccel/schaff/npnf214/npnf214.xi.xiii.html` |
| `rule-of-benedict` | Rule of Benedict | `https://ccel.org/ccel/benedict/rule/rule.<chapter + 2, Roman>.html`; chapter 48 is `rule.l.html`, the prologue `rule.ii.html` |
| `bede-ecclesiastical-history` | Bede, Ecclesiastical History | `https://www.gutenberg.org/cache/epub/38326/pg38326-images.html#toc<N>`, where N = 11 + 2c in book 1, 81 + 2c in book 2, 123 + 2c in book 3, 185 + 2c in book 4, 251 + 2c in book 5. 1.25 is `#toc61` |
| `liber-pontificalis` | Liber Pontificalis | By printed page, to AD 604 only: `https://archive.org/details/bookofpopesliber00loom/page/41/mode/2up` |
| `ninety-five-theses` | Luther, Ninety-Five Theses | `https://www.projectwittenberg.org/pub/resources/text/wittenberg/luther/web/ninetyfive.html#95-27` (thesis in two digits) |
| `augsburg-confession` | Augsburg Confession | `https://bookofconcord.org/augsburg-confession/article-iv/` (the site redirects some articles to a named address, `…/of-justification/`; cite the address the page ends at) |
| `council-of-trent` | Council of Trent | Write `at` as "Session 6, canon 9". `https://www.papalencyclicals.net/councils/trent/sixth-session.htm` (ordinal in words; the first is `firstsession.htm`) |
| `foxe-acts-and-monuments` | Foxe, Acts and Monuments | By volume and printed page of the Cattley edition: `https://archive.org/details/actsmonumentsofj07foxe/page/547/mode/2up` |

A source's short form may end in a comma, as with Suetonius and Ignatius, so that the locator reads naturally after it: "Suetonius, Claudius 25.4".
