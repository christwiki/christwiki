/**
 * Christwiki's own wording in German, laid over the theme's: what the wiki is
 * about, and the examples that explain its date labels. Everything else comes
 * from the theme.
 */
import type { MessageOverrides } from 'chronowiki/config';

export const de: MessageOverrides = {
  site: {
    tagline: 'Die Geschichte des Christentums auf einem Zeitstrahl, belegt mit ihren Primärquellen.',
    description: 'Ein Wiki in Form eines Zeitstrahls zu den zentralen Momenten des Christentums, von der Genesis bis heute. Jeder Eintrag zeigt, wann und wo etwas geschah und wie es zusammenhängt, und verweist auf die Primärquellen.',
  },
  confidence: {
    firm: {
      example: 'Das Konzil von Nizäa, 325 n. Chr. Der Anschlag der 95 Thesen, 31. Oktober 1517.',
    },
    estimated: {
      example: 'Der Fall Jerusalems an Babylon, 587 oder 586 v. Chr. Die Kreuzigung, 30 oder 33 n. Chr.',
    },
    traditional: {
      description: 'Aus späterer Überlieferung oder aus der innerbiblischen Chronologie, ohne äußeren Anhaltspunkt.',
      example: 'Die Berufung Abrahams, nach den Zahlen der Bibel selbst um 2091 v. Chr. Das Martyrium des Petrus in Rom.',
    },
    undated: {
      example: 'Die Schöpfung, die Sintflut und der Turmbau zu Babel in Genesis 1–11.',
    },
  },
  home: {
    title: 'Die Geschichte des Christentums auf einem Zeitstrahl',
    lead: {
      one: '{count} Moment von der Genesis bis heute. Er zeigt, wann und wo etwas geschah, wie es mit dem Übrigen zusammenhängt und auf welchen Primärquellen es beruht.',
      other: '{count} Momente von der Genesis bis heute. Jeder zeigt, wann und wo etwas geschah, wie es mit dem Übrigen zusammenhängt und auf welchen Primärquellen es beruht.',
    },
  },
  sourceGroup: {
    scripture: {
      note: 'Übersetzungen und Ausgaben der Bibel, die als eigenständige Dokumente zitiert werden.',
    },
    manuscript: {
      note: 'Erhaltene handschriftliche Exemplare biblischer und anderer Texte.',
    },
    treatise: {
      note: 'Theologische, seelsorgliche und polemische Werke.',
    },
  },
  people: {
    description: 'Alle, die im Zeitstrahl vorkommen, von Abraham bis in die Gegenwart.',
  },
  sources: {
    lead: {
      one: 'Die {count} Primärquelle, die der Zeitstrahl neben der Bibel selbst zitiert. Sie verweist auf den vollständigen Text oder auf die Einrichtung, die das Objekt verwahrt.',
      other: 'Die {count} Primärquellen, die der Zeitstrahl neben der Bibel selbst zitiert. Jede verweist auf den vollständigen Text oder auf die Einrichtung, die das Objekt verwahrt.',
    },
  },
  threads: {
    description: 'Erzählstränge, die sich durch den ganzen Zeitstrahl ziehen: Bund, Tempel, Kanon, Konzilien, Mission und mehr.',
    lead: 'Erzählstränge, die die Epochen durchziehen. Wer einem von seinem Anfang bis in die Gegenwart folgt, sieht, wie Ereignisse zusammengehören, die Jahrhunderte auseinanderliegen.',
  },
  map: {
    description: 'Wo sich die Ereignisse des Zeitstrahls zutrugen. Schritt für Schritt durch die Epochen wandert die Geschichte vom Nahen Osten in alle Welt.',
  },
};
