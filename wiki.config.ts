/**
 * Christwiki's settings: its name, its languages and its map regions. The
 * pages, the design and the tools come from the theme, chronowiki.
 */
import { defineWiki, english, german } from 'chronowiki/config';
import { de } from './src/messages/de';
import { en } from './src/messages/en';

export default defineWiki({
  name: 'Christwiki',
  repository: 'https://github.com/christwiki/christwiki',
  license: { name: 'CC BY-SA 4.0', url: 'https://creativecommons.org/licenses/by-sa/4.0/' },

  /**
   * English is the language the content is written in. German is a preview:
   * built while developing and when PREVIEW_LOCALES=true, left out of a release
   * until enough of the content is translated (docs/i18n.md).
   */
  locales: [english({ messages: en }), german({ status: 'preview', messages: de })],

  /** Map regions, in the order filters and the places index list them. */
  regions: [
    { id: 'levant', name: { en: 'Levant and Arabia', de: 'Levante und Arabien' } },
    { id: 'egypt', name: { en: 'Egypt', de: 'Ägypten' } },
    { id: 'mesopotamia-and-persia', name: { en: 'Mesopotamia and Persia', de: 'Mesopotamien und Persien' } },
    { id: 'anatolia', name: { en: 'Anatolia and the Caucasus', de: 'Anatolien und der Kaukasus' } },
    { id: 'greece-and-balkans', name: { en: 'Greece and the Balkans', de: 'Griechenland und der Balkan' } },
    { id: 'italy', name: { en: 'Italy', de: 'Italien' } },
    { id: 'north-africa', name: { en: 'North Africa', de: 'Nordafrika' } },
    { id: 'western-europe', name: { en: 'Western Europe', de: 'Westeuropa' } },
    { id: 'central-and-northern-europe', name: { en: 'Central and Northern Europe', de: 'Mittel- und Nordeuropa' } },
    { id: 'eastern-europe-and-russia', name: { en: 'Eastern Europe and Russia', de: 'Osteuropa und Russland' } },
    { id: 'sub-saharan-africa', name: { en: 'Sub-Saharan Africa', de: 'Afrika südlich der Sahara' } },
    { id: 'south-and-east-asia', name: { en: 'South and East Asia', de: 'Süd- und Ostasien' } },
    { id: 'americas', name: { en: 'The Americas', de: 'Amerika' } },
    { id: 'oceania', name: { en: 'Oceania', de: 'Ozeanien' } },
  ],
});
