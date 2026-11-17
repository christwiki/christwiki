# People first appearing from Creation to the Gospels

Reviewer batch P01. Severity: A = factual error, B = misleading, unsupported or inconsistent, C = minor imprecision or omission. See the [audit report](../README.md) for method and limits.

## Findings

### B · scriptural · src/content/people/matthew.md
- **Text:** "Mark and Luke tell the same story of a tax collector named Levi, son of Alphaeus, who then gives a feast … [[bible:Mark 2:13-17]] [[bible:Luke 5:27-32]]"
- **Problem:** Only Mark calls the man "Levi the son of Alphaeus" (Mark 2:14). Luke says simply "a tax collector named Levi" (Luke 5:27) and never gives a father. Conversely, only Luke says outright that Levi gave the feast "in his house" (Luke 5:29); Mark's "his house" is ambiguous. A detail of one Gospel is credited to both.
- **Should be:** "Mark and Luke tell the same story of a tax collector named Levi (Mark adds 'son of Alphaeus') …". The altName "Levi son of Alphaeus" is then Mark's wording only.
- **Evidence:** Bible tool: Mark 2:14 "he saw Levi the son of Alphaeus sitting at the tax office"; Luke 5:27 "saw a tax collector named Levi sitting at the tax office"; Luke 5:29 "Levi made a great feast for him in his house".
- **Confidence:** high

### B · consistency · src/content/people/paul.md
- **Text:** front matter `died: start 64, end 67, display "c. AD 64–67"`; body: "The dates of his death given here are the traditional range; see [[event:martyrdom-of-peter-and-paul]]."
- **Problem:** The event the entry points to gives the traditional range as AD 64–68 (fire of Rome to Nero's death) and says Jerome's "fourteenth year of Nero" is AD 67–68; `people/peter.md` has 64–68. Paul's entry alone stops at 67, so it contradicts the event it cites as its authority and excludes part of Jerome's year, the one ancient date given for Paul's death.
- **Should be:** `died: { start: 64, end: 68, circa: true, display: "c. AD 64–68", confidence: traditional }`, matching the event and Peter.
- **Evidence:** `src/content/events/apostolic-age/martyrdom-of-peter-and-paul.md` front matter (`start: 64, end: 68, display: c. AD 64–68`) and dating note ("the fourteenth year of Nero [[cite:jerome]], which is AD 67–68 … The range shown runs from the fire of Rome in 64 … to Nero's death in 68"); `src/content/people/peter.md` (`start: 64, end: 68`).
- **Confidence:** high

### C · historical · src/content/people/hazael.md
- **Text:** "The Assyrian annals still name Hadad-ezer as king of Damascus in 848 BC [[cite:year11]] and name Hazael in 841 BC"
- **Problem:** True of the Black Obelisk, which names Hadad-ezer last under year 11 (848), but the sentence is offered as the bracket for Hazael's seizure of the throne, and other annals of Shalmaneser III still name Hadad-ezer (Adad-idri) of Damascus with Irhuleni of Hamath in the campaign of year 14 (845 BC). The window for the change of ruler is therefore 845–841, not 848–841, which is also what makes the role "from c. 842 BC" reasonable.
- **Should be:** "The Assyrian annals still name Hadad-ezer as king of Damascus in Shalmaneser's fourteenth year, 845 BC (Bull inscriptions from Kalhu), and name Hazael in 841 BC" — cite the annals edition for year 14 (RIMA 3 A.0.102.8, lines 44′–47′; A.0.102.10 iii 14–25) rather than the Black Obelisk, whose year-14 entry (lines 91–92) speaks only of "twelve kings".
- **Evidence:** own knowledge of Grayson, RIMA 3 (A.0.102.8 and .10, year 14: "At that time Hadad-ezer, the Damascene, (and) Irhulenu, the Hamatite, together with twelve kings…"). I could not open the Oracc RIAo pages (server returned 503 / TLS failure) to quote the lines; a maintainer should confirm at oracc.museum.upenn.edu/riao/Q004613.
- **Confidence:** medium

### C · completeness · src/content/people/hoshea-of-israel.md
- **Text:** "Hoshea son of Elah conspired against Pekah, killed him and reigned nine years … He paid tribute to [[person:shalmaneser-v]]" (whole entry cites Kings only)
- **Problem:** The entry (and the wiki as a whole — grep for "Tiglath-pileser" finds only `fall-of-samaria`, `call-of-isaiah`, `ahaz`, `shalmaneser-v`, none of which says it) omits the one contemporary non-biblical witness to Hoshea: Tiglath-pileser III's summary inscriptions state that the people of Bit-Humria overthrew Pekah and that he installed Hoshea as king over them and received his tribute. That is essential to how Hoshea came to the throne (as an Assyrian client, before Shalmaneser V), and other kings in this batch (Ahab, Jehu, Ahaz, Hezekiah, Jehoiachin) are given their inscriptions.
- **Should be:** add a sentence such as "An inscription of Tiglath-pileser III says that the Israelites overthrew Pekah and that he set Hoshea over them as king and took tribute from him (RINAP 1, Tiglath-pileser III no. 42, lines 17′–19′; also nos. 44 and 49)", so that Hoshea is a vassal of Assyria from his accession, not first under Shalmaneser.
- **Evidence:** own knowledge (Tadmor, Summary Inscription 4 = RINAP 1 no. 42); compare 2 Kgs 15:29-30 read with the Bible tool.
- **Confidence:** high (that the inscription says this); the exact line numbers should be checked on Oracc RINAP, which I could not reach.

### C · scriptural · src/content/people/jehoiachin.md
- **Text:** "Jehoiachin came to the throne at eighteen … and gave himself up after a reign of three months [[bible:2 Kings 24:8-12]]"; `born: { start: -615, circa: true, confidence: estimated }`
- **Problem:** The parallel in Chronicles gives a different age and length of reign, and the entry (the authoring guide's model person entry) reports only Kings. The birth year is computed from the Kings figure without saying so.
- **Should be:** add "Chronicles, in the Hebrew text followed by the World English Bible, makes him eight years old and gives him three months and ten days [[bible:2 Chr 36:9]]"; and say that the birth year is reckoned from the age in Kings.
- **Evidence:** Bible tool: 2 Kgs 24:8 "eighteen years old … three months"; 2 Chr 36:9 "Jehoiachin was eight years old when he began to reign, and he reigned three months and ten days".
- **Confidence:** high

### C · scriptural · src/content/people/zerubbabel.md
- **Text:** "Grandson of King Jehoiachin" (summary); "As a descendant of David through [[person:jehoiachin]] [[bible:1 Chr 3:17-19]]"
- **Problem:** The one passage cited makes Zerubbabel the son of Pedaiah, whereas every other text that names his father — including the ones the wiki cites elsewhere for him (Hag 1:1; Ezra 3:2; Matt 1:12; Luke 3:27) — calls him son of Shealtiel. The entry is silent on the discrepancy, and never names his father at all. (`people/jehoiachin.md` has the same sentence with the same single citation.)
- **Should be:** "Haggai, Ezra and both Gospel genealogies call him son of Shealtiel; Chronicles lists him as a son of Shealtiel's brother Pedaiah [[bible:1 Chr 3:17-19]]. Either way he is a grandson of Jehoiachin." Luke, moreover, traces Shealtiel to Neri, not to Jeconiah (Luke 3:27), so "both Gospel genealogies include him" is true but they do not agree on his ancestry.
- **Evidence:** Bible tool: 1 Chr 3:19 "The sons of Pedaiah: Zerubbabel and Shimei"; Hag 1:1 "Zerubbabel the son of Shealtiel"; Matt 1:12; Luke 3:27 "Zerubbabel, the son of Shealtiel, the son of Neri".
- **Confidence:** high

### C · scriptural · src/content/people/aaron.md
- **Text:** "He died on Mount Hor in the fortieth year after the exodus, aged 123, and his son Eleazar succeeded him [[bible:Num 20:22-29]] [[bible:Num 33:38-39]]"
- **Problem:** Deuteronomy places Aaron's death and burial elsewhere: "the children of Israel traveled from Beeroth Bene Jaakan to Moserah. There Aaron died, and there he was buried; and Eleazar his son ministered in the priest's office in his place" (Deut 10:6). The wiki's rule is to give both where parallel accounts differ; grep finds no mention of Moserah anywhere in the wiki.
- **Should be:** add "Deuteronomy places his death and burial at Moserah [[bible:Deut 10:6]]."
- **Evidence:** Bible (Deut 10:6; Num 33:30-39 puts Moseroth seven stations before Mount Hor).
- **Confidence:** high

### C · scriptural · src/content/people/peter.md
- **Text:** "In Acts he … preaches at Pentecost, and baptises the Gentile household of [[person:cornelius]] [[bible:Acts 2:14]] [[bible:Acts 10:44-48]]"
- **Problem:** Acts does not say that Peter baptised them; it says "He commanded them to be baptized in the name of Jesus Christ" (Acts 10:48). A distinct act is flattened into one verb.
- **Should be:** "…and has the Gentile household of Cornelius baptised".
- **Evidence:** Bible tool, Acts 10:48.
- **Confidence:** high

### C · scriptural · src/content/people/john-the-baptist.md
- **Text:** "He appeared in the [[place:judean-wilderness|wilderness of Judea]] in the fifteenth year of [[person:tiberius]] … [[bible:Luke 3:1-3]] [[bible:Mark 1:4-6]]"
- **Problem:** Neither cited passage says "of Judea": Luke has "in the wilderness … all the region around the Jordan", Mark "in the wilderness". "The wilderness of Judea" is Matthew's phrase (Matt 3:1), which is not cited.
- **Should be:** add [[bible:Matt 3:1]] for the place, or write "in the wilderness by the Jordan".
- **Evidence:** Bible (Luke 3:2-3; Mark 1:4; Matt 3:1 "preaching in the wilderness of Judea").
- **Confidence:** high

### C · scriptural · src/content/people/abraham.md
- **Text:** "He dies at 175 and is buried by his two sons in the cave of Machpelah at [[place:hebron]] [[bible:Gen 25:7-10]]"
- **Problem:** "His two sons" is the entry's gloss. Genesis says "Isaac and Ishmael, his sons, buried him", in a chapter that has just listed six more sons born to him by Keturah (Gen 25:1-6). (The same phrase in `isaac.md` is correct: Isaac has only two.)
- **Should be:** "is buried by his sons Isaac and Ishmael".
- **Evidence:** Bible tool, Gen 25:9; Gen 25:1-6.
- **Confidence:** high

### C · scriptural · src/content/people/herod-the-great.md
- **Text:** "had the boys of Bethlehem under two years old killed [[bible:Matt 2:1-16]]"
- **Problem:** Matthew's range is "from two years old and under", and the place is "Bethlehem and … all the surrounding countryside" (Matt 2:16). "Under two" excludes the two-year-olds and "of Bethlehem" narrows the area. (`events/life-of-jesus/birth-of-jesus.md` words it correctly: "boys up to two years old".)
- **Should be:** "had the boys of Bethlehem and its district, two years old and under, killed".
- **Evidence:** Bible, Matt 2:16 (WEB: "killed all the male children who were in Bethlehem and in all the surrounding countryside, from two years old and under").
- **Confidence:** high

### C · consistency · src/content/people/herod-the-great.md
- **Text:** `altNames: [Herod I, King Herod]`
- **Problem:** The guide asks for no altName "that belongs to someone else". In the New Testament "King Herod" is also Herod Antipas (Mark 6:14 "King Herod heard this") and Herod Agrippa I (Acts 12:1 "King Herod stretched out his hands"); the wiki itself quotes the phrase for Agrippa in `people/james-son-of-zebedee.md` ("Acts reports that 'King Herod', that is [[person:herod-agrippa-i]]"). A search for "King Herod" will land on the wrong man for two of the three passages.
- **Should be:** drop "King Herod" or disambiguate in the three Herod entries.
- **Evidence:** Bible tool, Acts 12:1; Mark 6:14; `src/content/people/james-son-of-zebedee.md`.
- **Confidence:** medium (a judgment about the altNames rule, not a factual error)

### C · consistency · src/content/people/pompey.md
- **Text:** "Josephus says that he entered the sanctuary, left its treasures untouched … Cicero, at Rome four years later, also says that he took nothing from the temple [[cite:cicero]]."
- **Problem:** The entry cites Cassius Dio twice (37.14–15; 42.3–5) but passes over what Dio says of this very point two chapters on: when the temple was taken "all the wealth was plundered" (37.16.4). The wiki's own event entry gives all three reports. As it stands the person entry presents the ancient sources as unanimous.
- **Should be:** add "Cassius Dio, more than 250 years later, says that the wealth was plundered (37.16.4)", as `events/second-temple/pompey-takes-jerusalem.md` does.
- **Evidence:** penelope.uchicago.edu Thayer, Cassius Dio 37.16.4, opened: "Thus the defenders were captured on the day of Saturn, without making any defence, and all the wealth was plundered. The kingdom was given to Hyrcanus, and Aristobulus was carried away." Event entry line: "Cassius Dio, more than 250 years afterwards, says that the wealth was plundered".
- **Confidence:** high

### C · plausibility · src/content/people/jeshua-the-high-priest.md
- **Text:** summary: "Zechariah's visions centre on him."
- **Problem:** Overstated. Of the eight night visions in Zech 1–6 only one concerns Joshua (ch. 3), with the crowning oracle of 6:9-13 appended; the others concern the horsemen, the horns, Jerusalem's measuring, the lampstand and Zerubbabel, the scroll, the ephah and the chariots. The body ("he is cleansed and reclothed in a vision and then crowned") and `people/zechariah.md` say less than the summary.
- **Should be:** "One of Zechariah's visions shows him cleansed and reclothed, and an oracle has him crowned."
- **Evidence:** Bible, Zech 1:7–6:15 (structure); Zech 3:1-10; 6:9-13.
- **Confidence:** high

### C · completeness · src/content/people/john-calvin.md
- **Text:** front matter has no `born` / `died`; the body gives neither.
- **Problem:** Calvin's dates are as securely attested as those of any figure in the wiki (born at Noyon 10 July 1509; died at Geneva 27 May 1564; both in Beza's Life of Calvin, and the death in the Geneva registers). Comparable entries (`martin-luther`, `huldrych-zwingli`, `pius-ix`) carry them. The entry also stops at 1553 and never says he died at Geneva.
- **Should be:** `born: { start: 1509, confidence: firm }`, `died: { start: 1564, confidence: firm }`, with a sentence and citation (Beza, Life of Calvin) in the body.
- **Evidence:** own knowledge (Beza, *Vita Calvini*; standard reference works).
- **Confidence:** high

### C · completeness · src/content/people/sargon-ii.md
- **Text:** `role: King of Assyria, 722–705 BC`; no `died`; body ends with Isa 20:1.
- **Problem:** The end of the reign is asserted in the role but nothing in the body supports it (the guide lists "reign and death dates in a person's front matter with nothing in the body to support them" as a recurring fault), and the death — Sargon fell in battle in 705 BC, the event that set off the revolts of Hezekiah's time under [[person:sennacherib]] — is well attested (Assyrian Eponym Chronicle for 705: "the king was killed"; ABC 1 ii 6′ is broken here). His predecessor and successor both carry `died`.
- **Should be:** `died: { start: -705, confidence: firm }` and a sentence: "He was killed on campaign in 705 BC, and his son Sennacherib succeeded him" with the eponym chronicle cited.
- **Evidence:** own knowledge (Millard, *The Eponyms of the Assyrian Empire*, entry for 705; Sennacherib's own accession in 705 in `people/sennacherib.md`).
- **Confidence:** high

### C · completeness · src/content/people/xerxes-i.md
- **Text:** `role: King of Persia, reigned 486–465 BC`; no `died`; body says nothing of the end of the reign.
- **Problem:** As with Sargon, the terminal year in the role has no support in the body, though Xerxes' murder in August 465 BC is firmly dated (Babylonian astronomical/eclipse text BM 32234; Diodorus 11.69; Ctesias). Darius I and Cyrus in the same batch carry `died … firm`.
- **Should be:** `died: { start: -465, confidence: firm }` and a sentence that he was assassinated at court in 465 BC and succeeded by his son Artaxerxes, with Diodorus 11.69 cited.
- **Evidence:** own knowledge (Diodorus Siculus 11.69.1–6; BM 32234).
- **Confidence:** high

### C · completeness · src/content/people/artaxerxes-i.md
- **Text:** `role: King of Persia, reigned 465–424 BC`; summary "king of Persia for some forty years"; no `died`.
- **Problem:** Neither the forty years nor either terminal date is supported by anything in the body or its citations (the Murashu tablet cited shows only that documents are dated by his years). His death in the winter of 425/424 BC is attested by Thucydides 4.50 and the last Babylonian tablets of his forty-first year.
- **Should be:** add `died: { start: -424, confidence: firm }` and a sentence with a source for the length of reign (Thucydides 4.50; Diodorus 12.64 gives forty years; Babylonian tablets run into year 41).
- **Evidence:** own knowledge (Thucydides 4.50.3; Parker & Dubberstein, *Babylonian Chronology*).
- **Confidence:** high

## Completeness of this stretch

People of first-rank importance for Creation → early apostolic age who have **no person entry** (checked with `ls src/content/people/` and grep of `events/`, `people/`, `places/` for each name; counts are files mentioning the name):

- **Tiglath-pileser III** — the Assyrian king who annexed Galilee and Gilead, made Ahaz and Hoshea vassals, and is named in Kings (2 Kgs 15:29; 16:7-10). Mentioned in 2 events and 2 people entries but has no entry, although Shalmaneser III, Shalmaneser V, Sargon II and Sennacherib do. The gap is the more visible because `ahaz.md` cites his tablet.
- **Omri** — founder of Samaria and of the dynasty by which Assyria named Israel ("house of Omri"); named on the Mesha Stele. Mentioned in 4 events / 5 people-place files (ahab, jehu, mesha), no entry.
- **Manasseh of Judah** — the longest-reigning king of Judah, to whom Kings attributes the exile (2 Kgs 21; 23:26; 24:3), named in Esarhaddon's and Ashurbanipal's lists. 2 events mention him; no entry. Likewise **Esarhaddon** (0 events) and **Nabopolassar** (2 events).
- **Philo of Alexandria** — cited as a source in 9 events and 10 people/place files (pontius-pilate, ptolemy-ii …) but has no person entry; Josephus has one.
- **Ramesses II** — named in 9 events (exodus dating) and in `merneptah.md`; no entry.
- **Julius Caesar** and **Mark Antony** — both decisive for Hyrcanus II, Herod and Augustus (Antony appears in 6 events and 6 people files); no entries. **Gaius (Caligula)** — deposed Antipas, raised Agrippa I, ordered his statue set up in the temple (Philo, *Embassy*; Josephus, Ant. 18.261-309); mentioned in 5 people/place files, no entry, and the statue crisis appears in no event (grep "Caligula|Gaius").
- **The later Hasmoneans**: **Jonathan Apphus** (high priest 152–143 BC, successor of Judas — mentioned only in passing), **Alexander Jannaeus** and **Salome Alexandra** (parents of Hyrcanus II and Aristobulus II), **Antigonus** (the last Hasmonean king) and **Antipater** (Herod's father). All are named in several entries of this batch; none has an entry, so the line from Simon to Herod has gaps at 152–143 and 104–67 BC.
- **Annas** — high priest AD 6–15 and father-in-law of Caiaphas; John has Jesus taken to him first (John 18:13), and Josephus names him (Ananus son of Seth, cited in `quirinius.md`). Mentioned in 2 events; no entry.
- **Gamaliel** — Paul's teacher and the council member of Acts 5:34-39; mentioned in `paul.md` and `judas-the-galilean.md`; no entry. **Nicodemus** likewise (mentioned in `joseph-of-arimathea.md`).
- **The rest of the Twelve**: Peter, Andrew, James, John, Matthew, Thomas and Judas have entries; **Philip the apostle** (John 1:43-48; 6:5-7; 12:21-22; 14:8-9 — and regularly confused with Philip the evangelist, whose entry has to explain him away), **Bartholomew/Nathanael**, **James son of Alphaeus**, **Thaddaeus/Judas son of James**, **Simon the Zealot** and **Matthias** do not.
- **Elizabeth and Zechariah**, parents of John the Baptist (Luke 1), named in 4–5 files; **Philip the tetrarch** (Luke 3:1; founder of Caesarea Philippi and the "Philip" problem in `herodias.md`); **Salome** daughter of Herodias. No entries.
- **Old Testament figures** with stories or books of their own but no entry: **Cain and Abel**, **Hagar and Ishmael**, **Lot**, **Rebekah**, **Rachel and Leah**, **Judah** son of Jacob (the tribe and the Messianic line, Gen 49:8-10), **Job**, **Jonathan** son of Saul, **Joab**, **Absalom**, **Micah** (0 events — the prophet of Mic 5:2, quoted in Matt 2:6, is absent from the wiki's narrative altogether), **Baruch** (Jeremiah's scribe, 3 events) and **Gedaliah** (1 event).

Within existing entries (thin coverage rather than error):
- `hezekiah.md`, `ahaz.md`, `jeroboam-ii.md`, `hoshea-of-israel.md`, `herod-antipas.md`, `necho-ii.md`, `ptolemy-ii.md` give reign dates only in `role` or not at all and have no `born`/`died`; for Necho II (d. 595 BC) and Ptolemy II (d. 246 BC) the death year is as well attested as for the rulers who carry one.
- `john-the-apostle.md` and `thomas.md` report late traditions on where they worked but, unlike `peter.md` and `paul.md`, give no traditional death notice (Irenaeus's "until the times of Trajan" is in the body of `john-the-apostle.md` but no `died` is derived from it); this is defensible under the "only when a source supports them" rule and is noted, not reported.

## Files checked with nothing to report
adam, augustine, basil-of-caesarea, eve, jesus, irenaeus, isaiah, josephus, noah, joshua, sarah, stephen, melchizedek, isaac, solomon, esau, hosea, jacob, joseph, moses, miriam, caleb, rahab, merneptah, deborah, gideon, samson, boaz, david, naomi, ruth, eli, samuel, saul, goliath, hiram-of-tyre, nathan, bathsheba, uriah-the-hittite, jeroboam-i, rehoboam, shoshenq-i, ahab, elijah, elisha, jehu, jezebel, shalmaneser-iii, mesha, jeroboam-ii, jonah, amos, ahaz, uzziah, shalmaneser-v, hezekiah, sennacherib, jeremiah, josiah, hilkiah, huldah, jehoiakim, necho-ii, nebuchadnezzar-ii, belshazzar, daniel, ezekiel, zedekiah, cyrus-ii, nabonidus, sheshbazzar, darius-i, haggai, zechariah, esther, mordecai, ezra, nehemiah, sanballat, malachi, jedaniah, alexander-the-great, antiochus-iv, ptolemy-ii, judas-maccabeus, mattathias, simon-thassi, john-hyrcanus, aristobulus-ii, hyrcanus-ii, augustus, pontius-pilate, tiberius, joseph-of-nazareth, mary, archelaus, herod-antipas, judas-the-galilean, quirinius, caiaphas, andrew, james-son-of-zebedee, john-the-apostle, judas-iscariot, thomas, herodias, pius-ix, lazarus, martha, mary-of-bethany, mary-magdalene, joseph-of-arimathea, philip-the-evangelist, claudius, justin-martyr

## Method note
All 132 files read in full (front matter and body). About 135 Bible references read with the local WEB tool in four batches — every direct quotation, and the citations carrying ages, regnal years, genealogies, names and counts (patriarchal ages, the kings' accession ages and reign lengths, Haggai/Zechariah/Ezekiel dates, 1 Maccabees Seleucid years, the Gospel lists and burial/tomb notices); all `born`/`died` arithmetic was recomputed against those figures and against the dating notes of 19 related events. Eleven web pages opened and read (livius.org ABC 1 col. iii; lexundria Josephus Ant. 13.213–230, 14.4–18, 15.173–182, 17.339–344, 20.241–251; Thayer's Cassius Dio 37 and 42; Wikipedia for Sennacherib, Hadadezer, Shalmaneser III); the remaining classical, patristic and cuneiform citations were checked against my own knowledge of the texts and found consistent.
Not checked: Oracc (RIAo/RINAP) was unreachable (HTTP 503 / TLS error), so the Shalmaneser III year-14 passage behind the Hazael finding and the Tiglath-pileser III line numbers behind the Hoshea finding rest on memory of the editions; the Global Egyptian Museum record cited for Merneptah as "thirteenth son", the archive.org page locators (Breasted, Fisher, Kidd, Hilprecht) and the Hoffmeier JETS 50 page reference were not opened.
