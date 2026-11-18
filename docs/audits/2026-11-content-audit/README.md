# Content audit, November 2026

An audit of every entry of the wiki for historical validity, scriptural validity, plausibility and completeness, carried out on 17 November 2026 against the content as of commit `4010096`.

## Result in brief

- **All 2,283 content entries were read in full**: 361 events, 631 people, 254 places and 1,037 source records.
- **435 findings in 396 entries.** 1,887 entries (83%) have nothing to report.
- **4 factual errors reported** (severity A), **43 misleading, unsupported or inconsistent statements** (B) and **388 minor imprecisions or omissions** (C). One of the four was withdrawn on 18 November 2026, when its source was opened: see the row on Ezana's inscription below.
- More than half of all findings (211) are omissions, not mistakes: an entry that stops before the outcome, or leaves out a party, a competing reading or a key piece of evidence.
- No map pin is on the wrong place. No Bible citation was found pointing at the wrong passage: the Scripture findings concern a detail credited to the wrong one of two parallel accounts, a range a verse or two short, or the wording of a quotation. Regnal dates, council dates and the arithmetic of the dating notes held up almost everywhere.
- The most common cause of a real error is **a source's own slip repeated in the wiki's voice**: the entry reports its cited source accurately, but the source (a chronicler, a nineteenth-century editor, a web profile) is wrong and the entry does not say so.
- **Coverage** has clear gaps. The largest are listed under [Completeness](#completeness) below; the most striking are that the wiki has nothing on the churches and the Holocaust, on the rise of Islam, on the Enlightenment and biblical criticism, or on Oceania.

The baseline `npm run validate` reported 0 errors and 0 warnings before the audit, so nothing below is something the validator catches.

## Method

The content was divided into 31 batches: 17 of events in chronological order, 5 of people, 2 of places and 7 of source records. Each batch was read in full by an independent AI reviewer working to one written brief, with a local copy of the World English Bible for checking Scripture citations and open web access for checking everything else. Reviewers were told to verify before reporting, to give the evidence for each finding, and to mark their confidence. Their findings are in [`findings/`](findings/), one file per batch, unedited apart from the heading.

The four A findings and the B findings that could be checked were then checked a second time for this report, against the cited source or against standard references. Separately, scripts compared the structured data across entries: lifespans against the events a person appears in, the order of `follows` links, era bounds, date labels, region assignments and the dates of source records.

Severity:

| | Meaning |
|---|---|
| **A** | A factual error: the entry says something false. |
| **B** | Misleading, not supported by the cited passage, internally inconsistent, or carrying a confidence label that overstates the date. |
| **C** | A minor imprecision, or an omission worth adding. |

### Limits

- **Not every citation was opened.** Reviewers verified essentially all Bible citations in the event entries and those carrying names, numbers and relationships elsewhere. For non-biblical citations they opened roughly 30 to 100 pages per batch, choosing precise figures, dates, quotations and anything that looked wrong. A citation not listed here has not thereby been confirmed.
- **Some hosts could not be reached** during the audit: Oracc (Assyrian royal inscriptions), Project Gutenberg, Founders Online and, part of the time, the Internet Archive's Wayback Machine. Citations resting on those were checked against other editions or not at all; each findings file says which in its method note.
- **Scholarship named in dating notes** was mostly checked from the reviewers' knowledge of the works, not by opening them.
- **The C findings were not checked a second time.** Each gives its evidence and a confidence; those marked low or medium should be confirmed before acting.
- The reviewers are AI models. Their findings are leads with evidence, to be weighed like any other report of a defect.

## Findings by batch

| Batch | Entries | A | B | C |
|---|---:|---:|---:|---:|
| [Events: Primeval History, Patriarchs, Exodus and Conquest](findings/events-01-primeval-patriarchs-exodus.md) | 19 | 0 | 0 | 14 |
| [Events: Judges and United Monarchy, Divided Kingdom](findings/events-02-judges-divided-kingdom.md) | 27 | 0 | 1 | 7 |
| [Events: Exile and Return, Second Temple](findings/events-03-exile-second-temple.md) | 23 | 0 | 0 | 9 |
| [Events: Life of Jesus](findings/events-04-life-of-jesus.md) | 22 | 0 | 1 | 9 |
| [Events: Apostolic Age](findings/events-05-apostolic-age.md) | 26 | 0 | 1 | 11 |
| [Events: Church under Rome](findings/events-06-church-under-rome.md) | 21 | 0 | 1 | 6 |
| [Events: Councils and Empire, 313–407](findings/events-07-councils-and-empire-313-407.md) | 20 | 0 | 0 | 9 |
| [Events: Councils and Empire, 410–604](findings/events-08-councils-and-empire-410-604.md) | 19 | 0 | 2 | 9 |
| [Events: Early Middle Ages](findings/events-09-early-middle-ages.md) | 25 | 0 | 1 | 7 |
| [Events: High and Late Middle Ages, 1075–1274](findings/events-10-high-middle-ages-1075-1274.md) | 19 | 0 | 0 | 15 |
| [Events: High and Late Middle Ages, 1287–1493](findings/events-11-late-middle-ages-1287-1493.md) | 18 | 0 | 2 | 12 |
| [Events: Reformation, 1516–1559](findings/events-12-reformation-1516-1559.md) | 22 | 1 | 2 | 11 |
| [Events: Reformation, 1560–1649](findings/events-13-reformation-1560-1649.md) | 20 | 0 | 2 | 16 |
| [Events: Awakenings and Missions, 1652–1801](findings/events-14-awakenings-1652-1801.md) | 19 | 0 | 0 | 12 |
| [Events: Awakenings and Missions, 1792–1891](findings/events-15-awakenings-1792-1891.md) | 20 | 0 | 1 | 7 |
| [Events: Modern and Global, 1906–1965](findings/events-16-modern-1906-1965.md) | 21 | 0 | 2 | 16 |
| [Events: Modern and Global, 1963–2025](findings/events-17-modern-1963-2025.md) | 20 | 0 | 4 | 11 |
| [People first appearing from Creation to the Gospels](findings/people-01-creation-to-gospels.md) | 132 | 0 | 2 | 16 |
| [People first appearing from the apostolic age to the sixth century](findings/people-02-apostolic-to-sixth-century.md) | 118 | 0 | 1 | 18 |
| [People first appearing from the sixth to the fourteenth century](findings/people-03-sixth-to-fourteenth-century.md) | 127 | 0 | 2 | 13 |
| [People first appearing c. 1380–1650](findings/people-04-1380-1650.md) | 126 | 0 | 1 | 19 |
| [People first appearing c. 1650–2025](findings/people-05-1650-2025.md) | 128 | 0 | 2 | 20 |
| [Places, first half (mostly biblical and ancient)](findings/places-01-biblical-and-ancient.md) | 128 | 0 | 1 | 17 |
| [Places, second half (mostly late antique to modern)](findings/places-02-medieval-to-modern.md) | 126 | 0 | 1 | 17 |
| [Sources first cited for events to c. AD 200](findings/sources-01-to-ad-200.md) | 128 | 1 | 2 | 13 |
| [Sources first cited for events c. 200–640](findings/sources-02-200-640.md) | 131 | 1 | 1 | 11 |
| [Sources first cited for events c. 640–1300](findings/sources-03-640-1300.md) | 154 | 0 | 2 | 11 |
| [Sources first cited for events c. 1300–1558](findings/sources-04-1300-1558.md) | 150 | 0 | 1 | 15 |
| [Sources first cited for events c. 1558–1782](findings/sources-05-1558-1782.md) | 138 | 0 | 4 | 14 |
| [Sources first cited for events c. 1782–1950](findings/sources-06-1782-1950.md) | 172 | 0 | 2 | 12 |
| [Sources first cited for events c. 1950–2025, and sources no event cites](findings/sources-07-1950-2025.md) | 164 | 1 | 1 | 11 |
| **Total** | **2,283** | **4** | **43** | **388** |

By category: omissions 211, historical 71, dating 57, Scripture 37, consistency 30, plausibility 29.

## The errors and the misleading statements

Each row is set out in full, with its evidence, in the findings file of its batch. "Corrected" means that the commit accompanying this report changes the entry; see [What was corrected](#what-was-corrected) for the rule that was followed. "Open" means that a proper correction needs a source to be found, read and cited, which this audit did not do.

### Severity A

| Entry | Problem | Status |
|---|---|---|
| `events/reformation/marian-persecutions`, `people/reginald-pole` | Cardinal Pole is said to have died "within days of" Mary I. He died on the same day, 17 November 1558, about twelve hours after her. The entries follow Machyn's diary, which enters his death under the 19th. | Corrected on 18 November 2026 from the letter of Alvise Priuli, who was with him (Calendar of State Papers, Venice, vol. 6, no. 1286). |
| `sources/orosius-history-against-the-pagans` | Says Orosius closes his history in "the 1,168th year of Rome". That figure opens the last chapter (7.43.1, events of AD 414–415); the close (7.43.19) counts 5,618 years from the Creation. Confirmed against the cited translation. | Corrected. |
| `sources/antioch-holy-synod-statement-6-june-2016` | "It ends with three unanimous decisions." The statement has five numbered decisions. Confirmed against the published text. The record's own `url` returned "Page not found". | Count corrected. Link replaced on 18 November 2026 with the Arabic text on the patriarchate's present site, which is the binding one. |
| `sources/ezana-inscription-rie-271` | Reported as an error: "found at Aksum about 1959", where reference works say the inscription was discovered in 1969. | **Withdrawn.** The first publication (Anfray, Caquot and Nautin, *Journal des Savants* 1970, pp. 261–262) says that a townsman found the stelae by chance some ten years before and kept them secret, and that they were shown to archaeologists on 29 May 1969. "About 1959" for the find is right; 1969 is when scholars learned of it. The record now tells both. |

### Severity B: events

| Entry | Problem | Status |
|---|---|---|
| `divided-kingdom/mesha-stele` | The summary stated Kings' timing of Moab's revolt ("after Ahab's death") as fact. The stele's own lines 7–8 put the turn half-way through the reign of Omri's son, with a "forty years" that Kings' figures do not allow. The body never mentions the conflict. | Summary now attributes the date to Kings. Open: add the stele's reckoning to the body. |
| `life-of-jesus/crucifixion` (also `baptism-of-jesus`, `galilean-ministry-begins`, `feeding-of-the-five-thousand`) | The dating note gives the "usual count" of Tiberius's fifteenth year as AD 28/29 and counts three Passovers after the baptism. On those two premises the earliest crucifixion Passover is AD 31, not AD 30, the year the timeline shows. AD 30 needs the earlier reckoning of Tiberius's year or a shorter ministry; the note says so only for AD 33. | Open. |
| `apostolic-age/first-clement` | "Matters the Corinthians had raised" follows the 1867 translation ("consulted us"). The Greek is usually rendered "the matters in dispute among you", on which the letter does not say that Corinth asked Rome anything. That is the point the entry's closing paragraph reports as disputed between Rome and the Orthodox. | Open. |
| `church-under-rome/pliny-and-trajan` | The entry never says that Pliny had Christians executed and calls execution Tertullian's inference. Pliny threatens *supplicium*, and *duci iussi* is the ordinary expression for leading the condemned to execution. | Open. |
| `councils-and-empire/columba-on-iona` | Said in the wiki's voice, on Bede, that Columba had founded Durrow before Iona. Adomnán 1.3, the entry's other source, puts the founding in a later stay in Ireland. | Now attributed to Bede. Open: add Adomnán's account. |
| `councils-and-empire/pelagian-controversy` | Tells Pope Zosimus's part in Augustine's softened version. Zosimus approved the professions of Caelestius and Pelagius and rebuked the African bishops before reversing himself. The order of Honorius's rescript (30 April 418) and the council (1 May) is also inverted. | Open. |
| `early-middle-ages/third-council-of-constantinople` | "The legates reached the capital in November 680" repeats the Liber Pontificalis. Duchesne's note on the cited page shows that they had arrived by 10 September; the council opened on 7 November. | Now attributed to the Liber Pontificalis. Open: give the opening date. |
| `high-and-late-middle-ages/western-schism`, `people/clement-vii-of-avignon` | The only account of the second election is Knighton's, that the cardinals went to Avignon and elected Clement there. The election was at Fondi on 20 September 1378; Clement reached Avignon in 1379. Fondi appears nowhere in the wiki. Found independently by two reviewers. | Open. |
| `high-and-late-middle-ages/hesychast-controversy` | Jumps from 1341 to 1351. Omits Palamas's condemnation under Patriarch John Kalekas (1344) and the council of 1347 that deposed Kalekas, though the cited tome of 1351 relates them. | Open. |
| `reformation/luther-bible` | The "epistle of straw" passage did not stand "only in the edition of 1522". It remained in editions of the New Testament until 1537. Medium confidence. | Open. |
| `reformation/francis-xavier-in-asia` | "He spoke Castilian" repeats a slip of Coleridge's translation. The Spanish text the entry itself cites says his own language was Basque. | Open. |
| `reformation/thirty-years-war`, `sources/zelo-domus-dei` | "A month later" Innocent X voided the treaties. The brief *Zelo domus Dei* is dated 26 November 1648 but was published on 20 August 1650 and backdated. Found independently by two reviewers. | Sentence now says "in a brief dated a month later". Open: add the publication date with a source. |
| `reformation/japan-martyrs`, `sources/ieyasu-edict-1614` | The "rules issued with" the edict of 1614, making Buddhist priests vouch for their parishioners, are stated as fact from Satow (1878). They are now regarded as an eighteenth-century forgery. Satow's 27 January 1614 is also not the date in the Japanese record (1 February). | Open. |
| `awakenings-and-missions/uganda-martyrs` | The entry ends in 1886 and its dating note says no cited document records a death in 1887. The last of the canonised martyrs, Jean-Marie Muzeyi, was killed on 27 January 1887. | Open. |
| `modern-and-global/simon-kimbangu` | The dates credited to the Kimbanguist account look transposed, and the date on which Kimbangu is everywhere else said to have died, 12 October 1951, is never given. | Open. |
| `modern-and-global/three-self-movement` | The 1954 conference is dated 12 July – 6 August from a Party web page; the usual date is 22 July – 6 August. Medium confidence. | Open. |
| `modern-and-global/john-paul-ii-in-poland`, `people/stefan-wyszynski` | Wyszyński's arrest (24 September 1953) and release (28 October 1956) follow the Dicastery's profile. The Polish record gives the night of 25 September and 26 October, with his return to Warsaw on the 28th. Found independently by two reviewers. | Open. |
| `modern-and-global/humanae-vitae` | The only thing said of the papal commission is Paul VI's phrase that it was "not in complete agreement". Its report of June 1966, adopted by a large majority, recommended a change in the teaching. | Open. |
| `modern-and-global/medellin-and-liberation-theology` | Gutiérrez is presented as taking "liberation" from the Medellín documents. His Chimbote lecture of July 1968 preceded the conference, and he helped to draft its texts. | Open. |
| `modern-and-global/martyrs-of-libya` | 15 February 2015 is labelled `firm` as the day of death. It is the day the video was published and the day the churches keep; the day of the killing is not documented. | Open. |

### Severity B: people, places and sources

| Entry | Problem | Status |
|---|---|---|
| `people/matthew` | "Levi, son of Alphaeus" was credited to Mark and Luke. Only Mark 2:14 names the father. | Corrected. |
| `people/paul` | Death shown as c. AD 64–67, against 64–68 in the event the entry cites and in `people/peter`. | Corrected to 64–68. |
| `people/theodosius-i` | Accession on 16 January 379 in the wiki's voice, on Socrates alone. The consular annals and modern references give the 19th. | Now attributed to Socrates. Open: add the 19th with a source. |
| `people/boniface-viii`, `events/…/unam-sanctam` | Death on 12 October 1303, labelled `firm` to the day, from Villani. The standard date is 11 October. | Day now attributed to Villani and removed from the front matter. Open: add the 11th with a source. |
| `people/yi-byeok` | Death in 1786 labelled `firm`, on Dallet alone. Korean sources and current references give 1785. Repeated in `first-korean-baptism`. | Open. |
| `places/hamburg`, `events/…/ansgar` | The summaries state as fact that Louis the Pious founded an archbishopric at Hamburg for Ansgar. It rests on Rimbert, and the foundation documents are widely held to be forged or interpolated. | Hamburg summary now attributed to Rimbert. Open: the Ansgar summary and dating note. |
| `places/esztergom` | Hartvic rewrote the older Life "about a century later". The wiki's own source records put the two a generation apart; the century is counted from Stephen's coronation. | Corrected. |
| `sources/damascus-document` | Summary put the Teacher of Righteousness 390 years after Nebuchadnezzar. The text says 390 years and then twenty more, as the wiki's own `qumran-community` has it. | Corrected. |
| `sources/justin-dialogue-with-trypho` | "The only source" for Justin's conversion, against the wiki's own record of the Second Apology (ch. 12). | Corrected. |
| `sources/julian-letters`, `events/…/julian-the-apostate` | The letter to Arsacius is vouched for as Julian's own and quoted without caveat. It survives only in Sozomen, and its authenticity is disputed. | Open. |
| `sources/henry-iv-letters`, `events/…/investiture-controversy` | The "false monk … Descend, descend" text is the longer manifesto for circulation in Germany, not the letter sent to Rome with the bishops' letter. The event builds its sequence on it. | Open. |
| `sources/albert-of-aachen-history`, `events/…/first-crusade` | Dated 1120–1150 after Krey (1921). The modern edition (Edgington, 2007) puts books 1–6, which contain the massacres of 1096, soon after 1102. | Open. |
| `sources/hutterite-chronicle` | `written.start: 1542` is where Braitmichel's narrative ends, not when it was written. The surviving codex is dated 1581. | Open. |
| `sources/constantinople-synodal-charter-1590`, `events/…/moscow-patriarchate` | The charter is said to have been delivered in Moscow in June 1590. It is dated May 1590 at Constantinople and was delivered in 1591; the record repeats a slip in Muravyov. | Open. |
| `sources/bradford-of-plymouth-plantation` | Composition dated c. 1646. Bradford himself says that he began "aboute ye year 1630". | Open. |
| `sources/tikhon-messages` | "15 February 1922" read as a New Style date. It is 15 (28) February, as the event and person entries have it. | Corrected. |
| `sources/lepsius-deutschland-und-armenien` | The printed texts are presented as the diplomats' papers. Comparison with the Foreign Office originals (Gust, 2000 and 2005) found many documents abridged or altered. | Open. |
| `sources/du-plessis-the-spirit-bade-me-go` | "First published 1963" is the date of the scanned printing; catalogues list 1960 and 1961. Medium confidence. | Open. |

## Follow-up of 18 November 2026: the severity-B findings

Each severity-B finding was taken up again, this time by opening the primary source or the cited edition before anything was changed. The tables above show the state on 17 November; this section records what followed. The numbers are the tickets in the repository.

**Corrected** (23): the Mesha stele (#8), the crucifixion dating note (#9), 1 Clement (#10), Pliny and Trajan (#11), Columba (#12), the Third Council of Constantinople (#14), the Western Schism and Clement VII (#15), the Luther Bible (#17), Francis Xavier (#18), *Zelo domus Dei* (#19), the Uganda martyrs (#21), Wyszyński (#24), Medellín (#26), the martyrs of Libya (#27), Theodosius I (#28), Boniface VIII (#29), Ansgar and Hamburg (#31), Julian's letter to Arsacius (#32), the Hutterite Chronicle (#35), Bradford (#37), Lepsius (#38), du Plessis (#39) and Yi Byeok (#30).

**Corrected in part** (9), with what is still open:

- **Pelagian controversy (#13).** Zosimus's two letters of 417 now carry the account. His circular is undated in every source opened, so its place after the council of 1 May 418 is given as Augustine's report.
- **Hesychast controversy (#16).** The synod against Akindynos, the deposition of Patriarch John and the tome of February 1347 are added. The condemnation and imprisonment of Palamas in 1344 are not in the tome of 1351, and no source for them was opened.
- **Japan's ban of 1614 (#20).** The fifteen "rules" are no longer told as fact. The drafting by Sūden is named. The day is given as Satow's; the scholarship that could be confirmed converts the Japanese date to 31 January, not 1 February.
- **Simon Kimbangu (#22).** The entry had reported the Kimbanguist article correctly: the exchange of the two days is in the article itself. 12 October 1951 is added from another report.
- **Three-Self Movement (#23).** Both dates for the conference of 1954 are given. The passages in the collection of 1963 were read through a text search of a lending-only scan; the pages need checking by hand.
- **Humanae vitae (#25).** The commission's report and its publication in 1967 are added, without numbers of votes.
- **Henry IV's letters (#33).** Two undated letters survive, and the one translated is the longer. That it was a manifesto for circulation in Germany could not be confirmed and is not said.
- **Albert of Aachen (#34).** Krey's dating is given as Krey's, with Edgington's earlier dating and a later one argued in 2025. "Soon after 1102" could not be confirmed in those words.
- **Moscow patriarchate (#36).** The charter was brought to Moscow in June 1591. The council of 1593 is named only in the dating note, because its act could not be opened.

Two things the second look showed about the findings themselves. In three cases the source did not say what the finding expected (the tome of 1351 on Palamas, the Japanese date, the Kimbanguist article), and the entry was changed only as far as the source went. And several corrections turned on a document the first pass had not opened: Wyszyński's own notes, Zosimus's letters, the first Life of Clement VII, the Weimar edition of Luther's Bible.

## Recurring patterns

These account for most of the 388 minor findings. Each pattern is worth a pass of its own over the whole wiki, because the reviewers will not have caught every instance.

1. **A source's slip repeated in the wiki's voice.** The entry is faithful to its citation and the citation is wrong: Machyn on Pole and on the end of the 1559 Parliament, Knighton on Avignon, Villani on Boniface VIII and on Clement V, Hermann of Reichenau on Leo IX (16 for 19 April 1054), Foxe on Wycliffe's exhumation (1425 for 1428), Theophanes on Germanus (7 for 17 January 730), Geddes on Diamper (133 for 153 priests), Edwards on Northampton, the Dicastery's profiles on Wyszyński and Romero. Where one source is the only authority for a day or a number, the entry should say whose figure it is, and the dating note should give the accepted figure where it differs.
2. **Nineteenth- and early twentieth-century editors taken as current.** Krey (1921) for the dates of the crusade chroniclers, Satow (1878) for the Japanese edict, Dallet (1874) for Korea, Munro (1895), Scudder (1905) on Catherine of Siena, Anderson on the Concordat, the 1911 Denzinger's "1664" for a bull of February 1665. Public-domain editions are what the wiki can link, but their dates and attributions have often been superseded.
3. **An old translation's wording where the original says something else.** "Consulted us" in 1 Clement, "to prison" in Pliny, the "golden" ladder of Perpetua (the critical text has bronze), "Castilian" in Xavier's letter, "the younger brother Dalmatius" in Socrates.
4. **Summaries more absolute than the body.** The body attributes carefully and the summary asserts: "the earliest known mention of Israel", "preserves Perpetua's own prison diary", "writes down the law", "who deny the title". Summaries are what the timeline shows, so they are worth a separate check against the attribution rule.
5. **Parallel accounts flattened.** "The Gospels" or "all four Gospels" where one differs; a phrase credited to two Gospels that stands in one; Kings reported without Chronicles (Jehoiachin's age, Zedekiah's relation); a Septuagint reading that changes a place or a figure left unmentioned (440 years at 1 Kings 6:1, Shiloh at Joshua 24:1, four cubits for Goliath in 4QSam-a).
6. **The quoted translation against the linked one.** Five quotations from Sirach, 1 Maccabees and Isaiah were in King James or Revised Version wording, not the World English Bible. Several quotations are right in the World English Bible but differ in substance from the NRSVUE that the link opens ("new covenant" at Matthew 26:28, "my beloved Son" at Luke 9:35). Unflagged textual variants: Luke 22:19b–20, Luke 24:12, John 7:53–8:11, the shorter ending of Mark.
7. **Entries that stop before the outcome.** The Peasants' War without Frankenhausen, Vatican I without its suspension, Wesley stopping at 1744, the Russian church stopping before Tikhon's arrest, the Japanese ban stopping at 1614, Bulgaria without the decision of 870, Trent without the sacraments its summary promises.
8. **Day-level precision labelled `firm`.** The year is secure and the day is one source's: Nicaea's opening in May, the deaths of Boniface VIII and Herman of Alaska, the martyrs of Libya, Yi Byeok. The label applies to the whole date, so either the day should go or the note should say what it rests on.
9. **People without dates.** Only 114 of 631 person entries carry `born` and 219 carry `died`. For about 140 of the rest the dates are not in doubt (Ambrose, Cyril of Alexandria, Leo I, Calvin, Newman, Bonhoeffer), and some entries state a year in the `role` that nothing in the body supports. The lists are at the end of the people findings for batches 3 and 5.
10. **Place entries that tell one episode.** Constantinople stops at 381 though 27 events are set there; Jerusalem has one Bible citation for 50 events; Worms omits Luther, Basel its council, Beijing Khanbaliq, Paris and London most of what the wiki itself places in them.

## Completeness

Choosing what counts as "core" is a judgement, as the method page says. Measured against that page's own stated aim, these are the gaps a reader is most likely to notice. Each was checked by searching the content; "absent" means that the subject is not treated anywhere, not merely that it has no entry of its own. The fuller lists, with what was searched for, are in the "Completeness of this stretch" section of each findings file.

### Absent altogether, and of the first rank

- **The churches and the Holocaust.** The words Holocaust and Shoah do not occur in the wiki. Nothing on the churches and the persecution of the Jews in 1933–45, on Pius XII's wartime conduct, or on the Stuttgart Declaration. *Nostra aetate* appears only inside the Vatican II entry.
- **The rise of Islam.** The timeline passes from Gregory the Great (d. 604) to Jerusalem's surrender to Umar (638) with nothing on Muhammad, the Persian capture of Jerusalem in 614 or Heraclius. Christians under the caliphate (Timothy I and al-Mahdi, John of Damascus's setting, the Copts and Syrians under Muslim rule) are likewise absent, as is the destruction of the Church of the East in Asia under Timur.
- **The Enlightenment, biblical criticism and science.** No Reimarus, Strauss or Wellhausen, no Darwin, no Kierkegaard; nothing on Westcott and Hort or the Revised Version. The Fundamentals entry presupposes a controversy the wiki has not told.
- **Oceania.** The region is defined in `wiki.config.ts` and has no place and no event. Nothing on the Pacific missions, Australia or New Zealand.
- **Latin America between 1537 and 1968.** Four places in all. Nothing on the evangelisation of Mexico and Peru beyond Guadalupe and *Sublimis Deus*, on Brazil, on the Jesuit reductions, or on Pentecostal growth. **The Philippines** are absent.
- **The Arian controversy between Nicaea and Rimini (325–359):** the council of Tyre, the exiles of Athanasius, the council of Serdica.
- **Gnosticism as a second-century movement, Mani, the Easter controversy under Victor, the persecution of Valerian, Paul of Samosata.**
- **Judaism after AD 70 and the parting of church and synagogue.**
- **The later crusades:** 1187 and Saladin, the Third Crusade, the fall of Acre, the military orders and the suppression of the Templars.
- **The radical and the political Reformation:** Münster 1534–35 and Menno Simons, the dissolution of the English monasteries, the Schmalkaldic War and the Interim, the Dutch Revolt, the English Civil War.
- **Witch trials**, medieval and early modern.
- **Slavery and the American churches**, including the denominational splits of the 1840s.
- **The Russian church between 1922 and 1988** and the other persecutions of the twentieth century (Mexico, Spain, the Cultural Revolution).
- **The disputes over sexuality and the Anglican realignment since 2003; the pontificates of John Paul II after 1979, Benedict XVI and Francis as such; the shift of Christianity to the global South** as a development in its own right.

### Scripture

- **Old Testament:** the conquest after Jericho; Solomon's reign apart from the temple; the Psalms and the wisdom books; Omri, Manasseh and Micah; the fall of Nineveh; Daniel 8–12; the question of how the Pentateuch came to be.
- **Gospels:** the parables (the word does not occur in the Life of Jesus era); healings, exorcisms and the Sabbath controversies; Cana, Nicodemus and the Samaritan woman; the journey to Jerusalem; the discourse on the end (Mark 13).
- **The rest of the New Testament:** Acts 3–5; Acts, Hebrews, James, 1–2 Peter, 1–3 John and Jude as writings; John at Ephesus.

### Thinner gaps

Dionysius Exiguus and the AD era (of interest to a timeline); the second council of Orange (529); the Quinisext council (692); second iconoclasm; the conversion of Scandinavia and Bohemia; Lithuania (1387); the Serbian and Bulgarian churches; Abelard, Hildegard, Peter Lombard, Duns Scotus and Ockham; the late-medieval mystics; Savonarola; the council of Basel; the Roman Inquisition and the Index; the Gregorian calendar (1582); Catholic reform outside Trent; Bunyan, Bach and hymnody; the Methodist Episcopal Church (1784); Protestant missions beyond Carey, Taylor and Crowther; new movements of the nineteenth century (Jehovah's Witnesses, Christian Science, dispensationalism); Barth as a theologian; African-initiated churches beyond Kimbangu; women's ordination after 1978.

### People, places and sources

First-rank people without an entry include Muhammad, Heraclius, Omri, Manasseh, Philo, Eusebius of Nicomedia, Ephrem, Martin of Tours, Theodore of Mopsuestia, Isidore of Seville, Columbanus, Hildegard, Peter Damian, Savonarola, Menno Simons and several popes of the sixteenth century. Each people, places and sources findings file ends with its own list.

## Structural observations

From the scripted checks:

- **Sources without a date.** 21 source records have no `written` value, and 7 more are dated only as web pages "read in 2026". Most are modern church or institutional pages. Several are reference works in substance (`episcopal-dictionary-of-the-church`, `wcc-history`, `lwf-history-of-the-lwf`, `mar-thoma-church-history`, `turkish-foreign-ministry-events-of-1915`), which sits uneasily with the rule that encyclopedias and summaries are not sources. Where such a page is cited for what a church says of itself, the record should say so; where it is cited for a fact, a document should replace it.
- **An era bound.** `daniel-in-babylon` starts in 605 BC and is filed under `exile-and-return`, which starts in 597 BC.
- **Two date ranges that disagree across entries:** the Didache is c. AD 50–120 in its event and c. 50–150 in its source record.
- **Regions.** Places by region: Levant 49, Western Europe 43, Central and Northern Europe 39, Americas 21, South and East Asia 20, Italy 15, Anatolia 15, Egypt 12, Sub-Saharan Africa 11, Greece and the Balkans 11, Mesopotamia and Persia 9, Eastern Europe and Russia 6, North Africa 3, Oceania 0.
- No event follows a later event, and every place lies inside its region. The four events that list a person outside his or her lifetime (Olga of Kyiv, Jan Hus, Cornelius Jansen, Innocent of Alaska) do so deliberately, as forerunner or successor.

## What was corrected

The commit that accompanies this report changes 42 entries. One rule was followed: **a correction was made only where it needs no new source.** That covers a quotation brought into line with the World English Bible, a detail moved to the Gospel that has it, a statement in the wiki's voice turned into an attributed one using the citation already there, a summary brought into line with its own body, and two entries of the wiki brought into line with each other. Anything that needs a document to be found, read and cited is left open above, because the standard requires the person who adds a citation to have read the passage.

- **Scripture quotations and attributions (14 entries):** `nehemiah-rebuilds-the-walls` (Sir 49:13), `maccabean-revolt` (1 Macc 2:27; 4:46), `hasmonean-independence` (1 Macc 13:41, twice), `crucifixion` (Isa 53:12), `covenant-at-sinai` (the cup saying now cited from Luke 22:20 and 1 Cor 11:25, where both translations read "new covenant"), `feeding-of-the-five-thousand` (summary), `transfiguration` (summary), `ministry-of-john-the-baptist`, `death-of-john-the-baptist`, `elijah-on-carmel`, and the people entries `matthew`, `elijah`, `abraham`, `herod-the-great`.
- **Attribution in place of the wiki's voice (10):** `columba-on-iona`, `third-council-of-constantinople`, `unam-sanctam`, `thirty-years-war`, `marian-persecutions`, and `people/boniface-viii`, `people/theodosius-i`, `people/reginald-pole`, `places/hamburg`, `events/…/mesha-stele` (summary).
- **Summaries and absolutes (7):** `merneptah-stele` and `people/merneptah` ("earliest undisputed mention"), `the-exodus` ("most of those who hold"), `death-of-moses`, `perpetua-and-felicity`, `act-of-supremacy`, `sources/justin-dialogue-with-trypho`.
- **Consistency between entries and with the cited text (11):** `people/paul`, `sources/damascus-document`, `sources/orosius-history-against-the-pagans`, `sources/antioch-holy-synod-statement-6-june-2016`, `sources/tikhon-messages`, `places/esztergom`, `places/halle`, `places/damascus`, `places/gaza`, `events/…/destruction-of-the-second-temple` (Josephus's "wall on the west side" is the city wall), and `people/herman-of-alaska` (an alternative name that belongs to another saint removed).

`npm run validate` reports 0 errors and 0 warnings after the changes. No German overlay exists for any changed entry. The `reviewed` dates were left as they are.

## The example wiki in chronowiki

The theme's example (`chronowiki/example/src/content/`) is a subset of these entries, some of them adapted. The findings for the entries it shares apply to it as well; the corrections here were not carried over.
