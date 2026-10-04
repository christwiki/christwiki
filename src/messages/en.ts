/**
 * Christwiki's own wording in English, laid over the theme's: what the wiki is
 * about, and the examples that explain its date labels. Everything else comes
 * from the theme.
 */
import type { MessageOverrides } from 'chronowiki/config';

export const en: MessageOverrides = {
  site: {
    tagline: 'The story of Christianity on one timeline, tied to its primary sources.',
    description: 'A timeline-first wiki of the core moments of Christianity, from Genesis to the present. Every entry shows when and where it happened, how it connects, and links to the primary sources.',
  },
  confidence: {
    firm: {
      example: 'The Council of Nicaea, AD 325. The posting of the Ninety-five Theses, 31 October 1517.',
    },
    estimated: {
      example: 'The fall of Jerusalem to Babylon, 587 or 586 BC. The crucifixion, AD 30 or 33.',
    },
    traditional: {
      description: 'From later tradition or from internal biblical chronology, with no outside anchor.',
      example: 'The call of Abraham, about 2091 BC by the Bible’s own figures. The martyrdom of Peter in Rome.',
    },
    undated: {
      example: 'The creation, the flood and the tower of Babel in Genesis 1–11.',
    },
  },
  home: {
    title: 'The story of Christianity on one timeline',
    lead: {
      one: '{count} moment from Genesis to today. It shows when and where it happened, how it connects to the rest, and the primary sources it rests on.',
      other: '{count} moments from Genesis to today. Each shows when and where it happened, how it connects to the rest, and the primary sources it rests on.',
    },
  },
  sourceGroup: {
    scripture: {
      note: 'Translations and editions of the Bible cited as documents in their own right.',
    },
    manuscript: {
      note: 'Surviving handwritten copies of biblical and other texts.',
    },
    treatise: {
      note: 'Theological, pastoral and polemical works.',
    },
  },
  people: {
    description: 'Everyone who appears in the timeline, from Abraham to the present.',
  },
  sources: {
    lead: {
      one: 'The {count} primary source cited in the timeline, besides the Bible itself. It links to the full text or to the institution that holds the object.',
      other: 'The {count} primary sources cited in the timeline, besides the Bible itself. Each links to the full text or to the institution that holds the object.',
    },
  },
  threads: {
    description: 'Storylines that run through the whole timeline: covenant, temple, canon, councils, mission and more.',
    lead: 'Storylines that run across the eras. Follow one from its beginning to the present to see how events centuries apart belong together.',
  },
  map: {
    description: 'Where the events of the timeline happened. Step through the eras and watch the story move from the Near East across the world.',
  },
};
