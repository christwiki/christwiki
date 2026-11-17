# People first appearing from the apostolic age to the sixth century

Reviewer batch P02. Severity: A = factual error, B = misleading, unsupported or inconsistent, C = minor imprecision or omission. See the [audit report](../README.md) for method and limits.

Batch P02: 118 people entries (conversion of Paul to the early sixth century). All 118 files were read in full.
Overall the batch is in good shape: no outright fabrications, wrong reign dates or merged persons were found; the
findings are one wrong day stated in the wiki's own voice, a handful of small inconsistencies and loose citations,
and a group of well-attested death dates that are simply absent.

## Findings

### B · historical · src/content/people/theodosius-i.md
- **Text:** "[[person:gratian]] proclaimed him emperor at Sirmium on 16 January 379 … [[cite:accession]]"
- **Problem:** The day is given in the wiki's own voice on the sole authority of Socrates 5.2 (who does say "the 16th of January"). The accepted date of the proclamation is 19 January 379, from the consular annals (Consularia Constantinopolitana s.a. 379: "XIIII kal. Feb."), confirmed by the dates on which Theodosius kept his quinquennalia and decennalia (19 January 383 and 388). One late source has been silently preferred to the contemporary record. (gratian.md says only "in January 379" and is fine.)
- **Should be:** "…proclaimed him emperor at Sirmium in January 379 (Socrates gives the 16th; the consular annals give the 19th, the date generally accepted)" — or simply "on 19 January 379" with the Consularia cited.
- **Evidence:** Socrates 5.2 at https://ccel.org/ccel/schaff/npnf202/npnf202.ii.viii.iii.html reads "in the consulate of Ausonius and Olybrius, on the 16th of January". en.wikipedia.org/wiki/Theodosius_I (infobox and text, citing McLynn 2005, Hebblewhite, Kienast): "invested with the purple … at Sirmium on 19 January 379"; quinquennalia 19 Jan 383, decennalia 19 Jan 388.
- **Confidence:** high

### C · completeness · src/content/people/ambrose.md
- **Text:** front matter has no `born` / `died`; body ends with Jerome in 392–393 noting that he "was still alive"
- **Problem:** Ambrose's death on 4 April 397 (the eve of Easter) is securely attested by his secretary Paulinus (*Vita Ambrosii* 48) and is one of the anchor dates of the period; neither it nor the year of his election (374) appears anywhere on the page, so the entry carries no chronology at all.
- **Should be:** `died: { start: 397, month: 4, day: 4, confidence: firm }` with a sentence citing Paulinus, *Life of Ambrose* 48; role "Bishop of Milan, 374–397".
- **Evidence:** own knowledge (Paulinus, Vita Ambrosii 48); 4 April 397 was a Saturday and Easter fell on 5 April (computed).
- **Confidence:** high

### C · completeness · src/content/people/cyril-of-alexandria.md
- **Text:** `role: Bishop of Alexandria from 412` (no `died`)
- **Problem:** Cyril's death in 444 (27 June) is well attested and is given neither in the front matter nor in the body; the episcopate is left open-ended. The body also passes over the Twelve Anathemas (third letter to Nestorius, 430), which were the real matter in dispute with the Antiochenes between 431 and the reunion of 433 that the entry does describe.
- **Should be:** `role: Bishop of Alexandria, 412–444`; `died: { start: 444, confidence: firm }` with a source (e.g. the succession of Dioscorus in 444; Zachariah 2.4, already used in the wiki, gives Dioscorus's years after Cyril); one sentence on the anathemas.
- **Evidence:** own knowledge (standard date 27 June 444).
- **Confidence:** high

### C · completeness · src/content/people/theodosius-ii.md
- **Text:** `role: Roman emperor in the East from 408` (no `died`)
- **Problem:** No death date (28 July 450) and no end of reign are given, and the entry mentions Ephesus 431 but not that the same emperor summoned and upheld the second council of Ephesus in 449 — the reason Chalcedon could meet only after his death. The wiki's own flavian-of-constantinople.md cites "the emperor's edict" of 449 without the reader being able to learn from this page that it is his.
- **Should be:** `role: Roman emperor in the East, 408–450`; `died: { start: 450, confidence: firm }`; a sentence on Ephesus 449 with a link to [[event:second-council-of-ephesus]].
- **Evidence:** own knowledge; Evagrius 2.1 (cited in marcian.md) presupposes his death before Marcian's accession in 450.
- **Confidence:** high

### C · completeness · src/content/people/leo-i.md
- **Text:** `role: Bishop of Rome, 440–461` with no `died`; body gives only "held the see for twenty-one years"
- **Problem:** The death year stands in the role but not in a `died` field or in the body, so nothing on the page supports "461" (the guide's own rule cuts both ways: dates in the role need support in the body). Leo died on 10 November 461.
- **Should be:** `died: { start: 461, confidence: firm }` and a clause dating the pontificate (ordained 29 September 440; died 10 November 461), citing the *Liber Pontificalis* / Prosper's chronicle.
- **Evidence:** own knowledge (standard dates).
- **Confidence:** high

### C · completeness · src/content/people/eusebius-of-caesarea.md
- **Text:** no `born`/`died`; "He died a few years after Constantine" [[cite:death]]
- **Problem:** The entry for the wiki's most-cited historian carries no date at all. His death is fixed within narrow limits (before the council of Antioch of 341, where Acacius sat as bishop of Caesarea; usually put on 30 May 339), which is as well attested as several `estimated` dates given elsewhere in the batch.
- **Should be:** `died: { start: 339, circa: true, confidence: estimated }` and, in the body, "about 339"; optionally born c. 260–265 (estimated).
- **Evidence:** own knowledge; Socrates 2.4 (cited) places the death between Constantine's death and the events of 340–341.
- **Confidence:** medium

### C · plausibility · src/content/people/monica.md
- **Text:** "known only from his Confessions" (summary); "Everything known of Monica comes from the *Confessions*"
- **Problem:** A sweeping "only / everything" that is not true: Monica is a speaking participant in Augustine's Cassiciacum dialogues of 386–387 (*De beata vita* 1.6, 2.8–11, 3.19–21, 4.27, 4.35; *De ordine* 1.11.31–33, 2.1.1), written a decade before the Confessions.
- **Should be:** "known chiefly from his Confessions"; "Almost everything known of Monica comes from…".
- **Evidence:** own knowledge (De beata vita; De ordine).
- **Confidence:** high

### C · consistency · src/content/people/julian.md
- **Text:** "Socrates says that he was eight when Constantine died" against `born: { start: 332, circa: true }` and "died … in the thirty-first year of his age by Socrates's reckoning"
- **Problem:** The entry repeats Socrates's "eight years old" in 337 without noticing that it contradicts both the front-matter birth year (c. 332, which makes him five or six in 337) and Socrates's own figure for his age at death quoted two sentences later. The reader is given two incompatible ages from the same author with no comment.
- **Should be:** Either drop the age or flag it: "Socrates says he was eight when his relatives were killed after Constantine's death in 337, which does not agree with the age he and Ammianus give for his death (born 331 or 332)".
- **Evidence:** Socrates 3.1 at https://ccel.org/ccel/schaff/npnf202/npnf202.ii.vi.i.html: "he was only eight years old at the time"; Socrates 3.21 "thirty-first of his age"; Ammianus 25.3.23 "thirty-second".
- **Confidence:** high

### C · dating · src/content/people/origen.md
- **Text:** `born: 185 circa`, `died: 254 circa`; body: "Eusebius says that he died in the reign of Gallus, aged sixty-nine"
- **Problem:** The body does not say how either year is reached, and the two data it does give do not yield 254: Gallus was killed in summer 253, so a death "in the reign of Gallus" cannot fall in 254. The birth year depends on Eusebius 6.2.2 (the tenth year of Severus, AD 202, when Origen was "not quite seventeen"), which the body does not mention; 185 + 69 then gives 254/255, after Gallus. This is a known tension in Eusebius and should be stated, not left for the reader to trip over.
- **Should be:** Add: "Eusebius dates the persecution to the tenth year of Severus (202), which puts his birth about 185; sixty-nine years from then reach 254 or 255, after the death of Gallus in 253, so the year of his death is put at 253–255." Display "c. 253/254" or keep 254 with that note.
- **Evidence:** Eusebius 7.1 at https://ccel.org/ccel/schaff/npnf201/npnf201.iii.xii.ii.html ("Gallus succeeded him. At this time Origen died, being sixty-nine years of age"); own knowledge for Gallus's death (August 253) and HE 6.2.2.
- **Confidence:** medium

### C · historical · src/content/people/flavian-of-constantinople.md
- **Text:** "A Syriac chronicle gives him six years as bishop [[cite:years]]."
- **Problem:** The source does say this, but the figure is wrong and it is the only chronological datum the entry gives for his tenure. Flavian succeeded Proclus in 446 and was deposed in August 449 — about three years. The same list in Zachariah 2.4 gives Proclus "two years and two months" (he sat twelve years, 434–446), so the list is demonstrably unreliable at this point. Reported without comment, it misleads.
- **Should be:** Either drop the sentence or write: "He became bishop after Proclus in 446 and was deposed in August 449; the Syriac chronicle's 'six years' does not fit these dates."
- **Evidence:** https://www.tertullian.org/fathers/zachariah02.htm (ch. 4: "Maximus for two years and two months; and after him, Proclus for two years and two months; and after him, Flavian for six years; and after him, Anatolius for eight years"); en.wikipedia.org/wiki/Flavian_of_Constantinople ("archbishop of Constantinople from 446 to 449").
- **Confidence:** high

### C · consistency · src/content/people/polycarp.md
- **Text:** "was burned at Smyrna in old age" (summary)
- **Problem:** The only account of his death, which the wiki's own event entry follows, says that the fire did not consume him and that an executioner stabbed him; the body was burned afterwards (*Martyrdom of Polycarp* 15–18). "Was burned" as the manner of death is not what the source says. (The summary of events/church-under-rome/martyrdom-of-polycarp.md has the same looseness: "is burned in the stadium".)
- **Should be:** "was put to death in the stadium at Smyrna in old age" or "was condemned to the fire and killed at Smyrna".
- **Evidence:** src/content/events/church-under-rome/martyrdom-of-polycarp.md, narrative: "the flames arched around him without consuming him, … an executioner then stabbed him"; Mart. Pol. 15–16.
- **Confidence:** high

### C · scriptural · src/content/people/nero.md
- **Text:** "Claudius adopted him [[cite:birth]]" (`birth` = Suetonius, Nero 6)
- **Problem:** Suetonius tells the adoption in Nero 7 ("In the eleventh year of his age he was adopted by Claudius"), not in Nero 6, which covers the birth and infancy. The citation is one chapter short.
- **Should be:** cite Suetonius, Nero 7 (…/Nero*.html#7).
- **Evidence:** https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Suetonius/12Caesars/Nero*.html — ch. 6 begins "Nero was born at Antium nine months after the death of Tiberius"; ch. 7: "In the eleventh year of his age he was adopted by Claudius".
- **Confidence:** high

### C · consistency · src/content/people/maxentius.md
- **Text:** "He died on 28 October 312 … [[cite:death]] [[cite:calendar]]"
- **Problem:** `death` is Lactantius 44, who dates the battle to the anniversary of Maxentius's accession, "the sixth of the kalends of November" — 27 October. Only the calendar gives 28 October. Lactantius is therefore cited for a day he does not give; the wiki's own event entry (battle-of-the-milvian-bridge, dating note) spells out the one-day difference.
- **Should be:** "He died on 28 October 312 by the Roman calendar [[cite:calendar]] (Lactantius's date for the anniversary works out to the 27th), driven into the Tiber… [[cite:death]]".
- **Evidence:** https://ccel.org/ccel/schaff/anf07/anf07.iii.v.xliv.html: "The anniversary of the reign of Maxentius approached, that is, the sixth of the kalends of November" (translator's note: 27th of October); events/church-under-rome/battle-of-the-milvian-bridge.md lines 58–60.
- **Confidence:** high

### C · completeness · src/content/people/donatus-magnus.md
- **Text:** "Optatus names Donatus as the leader of the accusers at the hearing in Rome in 313, where the bishops condemned him…"
- **Problem:** The entry attaches the Roman condemnation of 313 to Donatus of Carthage without saying that this identification was contested in antiquity and is still discussed. At the Conference of Carthage in 411 the Donatists insisted that the Donatus condemned under Miltiades was another man, Donatus of Casae Nigrae, and the Catholics conceded it; Augustine corrected himself accordingly (*Retractationes* 1.21; *Breviculus collationis* 3.20). The translator's note on the very passage cited discusses the problem at length. This is exactly the same-name hazard, and the reader should be told. The entry also gives no chronology (exile after the mission of Paul and Macarius in 347; death in exile c. 355, Jerome, *Chronicle*).
- **Should be:** Add: "Whether this Donatus is the later bishop of Carthage or a namesake, Donatus of Casae Nigrae, was disputed at the conference of 411, where Augustine's side accepted that they were two men; Optatus treats them as one." Add the exile of 347 and death c. 355.
- **Evidence:** https://www.tertullian.org/fathers/optatus_01_book1.htm, note 192 on 1.24 ("Was this Donatus the Great, or another Donatus, Bishop of Black Huts (de Casis Nigris) in Numidia? … the Catholics at once admitted that Donatus of Casa was clearly designated in the Acts of Miltiades … Augustine … Retract. xxi").
- **Confidence:** high (that the question exists); medium (how much the entry must say)

### C · consistency · src/content/people/john-chrysostom.md
- **Text:** `altNames: [Chrysostom, John of Constantinople]`
- **Problem:** "John of Constantinople" is not a usual name for Chrysostom and, inside this wiki, belongs to someone else: hormisdas.md speaks of "the copy signed by John of Constantinople on 28 March 519" (patriarch John II). The authoring guide asks for no altName "that belongs to someone else"; a search for the phrase would land on the wrong John.
- **Should be:** drop "John of Constantinople" ("John of Antioch" would be ambiguous too, with the John of Antioch of 431–433 named in cyril-of-alexandria.md); "Chrysostom" alone, or "John Chrysostomos", is enough.
- **Evidence:** src/content/people/hormisdas.md (last paragraph).
- **Confidence:** medium

### C · completeness · src/content/people/titus.md
- **Text:** `name: Titus` — "Roman emperor, AD 79–81; commander at the siege of Jerusalem"
- **Problem:** The bare id/name "Titus" is the emperor, and the entry carries no disambiguation from the Titus of the New Testament (Gal 2:1–3; 2 Cor 2:13, 7:6–15, 8:6–23; Titus 1:4), although sibling entries add such notes (ananias-of-damascus, james-the-just). Paul's companion Titus — the uncircumcised Greek taken to Jerusalem, Paul's envoy to Corinth, addressee of a canonical letter — has no people entry at all, while Timothy, Silas, Apollos, Lydia, Aquila and Priscilla do.
- **Should be:** Add a closing line "He is not the Titus who accompanied Paul [[bible:Gal 2:1-3]]", and create an entry for that Titus.
- **Evidence:** `ls src/content/people` (no titus-companion entry); grep of `[[person:titus]]` shows all seven links mean the emperor.
- **Confidence:** high

### C · plausibility · src/content/people/damasus-i.md
- **Text:** `role: Bishop of Rome, died 384`; summary "Bishop of Rome in the 370s and early 380s"
- **Problem:** Damasus was bishop from October 366; the entry's first cited source (Jerome's Chronicle on Damasus and Ursinus) is itself an entry for 366. "In the 370s and early 380s" understates the pontificate by several years and the role gives no beginning.
- **Should be:** `role: Bishop of Rome, 366–384`; summary "Bishop of Rome from 366 to 384."
- **Evidence:** own knowledge (Jerome, Chronicle, a. 366; Liberian Catalogue ends with Liberius, d. 366).
- **Confidence:** high

### C · dating · src/content/people/perpetua.md
- **Text:** `died: { start: 203, circa: true, confidence: estimated }`; `role: Martyr in Roman Africa, c. AD 203`
- **Problem:** Nothing in the body supports or even mentions the year, the place (Carthage) or the occasion (the games for the birthday of the Caesar Geta, *Passio* 7.9), and the body has no pointer to the event entry where the date is argued ("Reign and death dates in a person's front matter with nothing in the body to support them" — authoring guide). The same is true of felicity.md.
- **Should be:** Add a sentence: "The *Passion* sets the games on the birthday of the Caesar Geta; for the year, about 203, see [[event:perpetua-and-felicity]]."
- **Evidence:** the file itself; authoring guide, "What the first verified batches got wrong".
- **Confidence:** high

### C · dating · src/content/people/felicity.md
- **Text:** `died: { start: 203, circa: true, confidence: estimated }`
- **Problem:** As for perpetua.md: the body gives no basis for the year and no reference to the event entry's dating note.
- **Should be:** as for perpetua.md.
- **Evidence:** the file itself.
- **Confidence:** high

## Completeness of this stretch

Checked with `ls src/content/people` (631 entries) and `grep -rlE` over `src/content` for each name; the event list for
`apostolic-age`, `church-under-rome` and `councils-and-empire` was read in `event-index.txt`.

**Well-attested dates missing from entries in this batch** (no error in the text, but the page gives the reader no year;
all are as secure as dates the batch does give): licinius (executed 325), arius (d. 336), diocletian (abdicated 305;
d. 311/312), stephen-i (d. 2 Aug 257), hosius-of-cordoba (d. c. 357/358), hilary-of-poitiers (d. 367/368),
gregory-of-nyssa (d. c. 395), macrina (d. 379), ulfilas (d. 383), dioscorus-of-alexandria (d. 454 at Gangra),
marcian (d. Jan 457; in role only), pulcheria (d. 453), nestorius (d. c. 451), acacius-of-constantinople (bishop 472–489),
gelasius-i (d. 21 Nov 496; in role only), odoacer (killed March 493), alaric (d. 410/411), clovis (d. 511; in role only),
severus-of-antioch (d. 538), trajan (b. 53), titus (b. 39), constantius-ii (b. 317), theodosius-i (b. 347), john-chrysostom
(b. c. 347–349), athanasius (b. c. 296–298), jerome (b. c. 347), leo-xiii (b. 2 March 1810, d. 20 July 1903 — the body
gives the latter only as the end of the pontificate).

**People of first-rank importance for this stretch with no entry at all:**
- **Titus, companion of Paul** — see finding on titus.md. Also Phoebe, Onesimus/Philemon, Epaphroditus (0–1 mentions).
- **Marcus Aurelius** (r. 161–180) — named in 9 files (martyrs of Lyon, Justin, Melito, Antoninus) but no entry, although Trajan, Hadrian, Antoninus Pius and Decius have one.
- **Valerian** (r. 253–260) and his persecution of 257–260 — the deaths of Cyprian and Sixtus II and Gallienus's restitution of 260 have neither an event nor a person; Cyprian's entry names him unlinked. Also **Septimius Severus** (Perpetua, Leonides).
- **Cornelius of Rome** (the id `cornelius` is the centurion), **Dionysius of Alexandria**, **Hippolytus** (0 mentions), **Paul of Samosata** (0), **Sixtus II / Lawrence** — the third-century Roman and Alexandrian church is represented only by Fabian, Novatian and Stephen.
- **Mani and Manichaeism** — mentioned in passing in 6 files (Gratian's law, Gelasius, Augustine), no entry or event, though it is the background of Augustine's first nine years as an adult.
- **Eusebius of Nicomedia** — leader of the party that supported Arius, the bishop who baptised Constantine and consecrated Ulfilas; 2 mentions, no entry. Easily confused with Eusebius of Caesarea, which is a further reason to have one.
- **Valens** (r. 364–378; Adrianople; exiles of the Nicene bishops), **Constans**, **Arcadius**, **Honorius**, **Jovian** — emperors named in the batch without entries; **Liberius** and **Sylvester I / Miltiades** of Rome (Liberius: 0 mentions).
- **Ephrem the Syrian** (3 mentions), **Aphrahat** (0) and **Shapur II** with the forty-year persecution of the Persian church (0 mentions) — the synod of 410 and yazdegerd-i.md speak of "the persecution under earlier kings" with nothing behind it.
- **Mesrop Mashtots and Sahak** (0 mentions) — the Armenian alphabet and Bible, c. 405; the Armenian story stops with Gregory and Tiridates.
- **Martin of Tours** (1 mention), **John Cassian** (2), **Evagrius Ponticus** (0), **Simeon Stylites** (0) — monasticism between Pachomius and Benedict.
- **Theodore of Mopsuestia** (1), **Diodore of Tarsus**, **Apollinaris of Laodicea** (1), **Theodoret of Cyrrhus** (author of a source, 9 mentions, no entry), **Ibas of Edessa** (2) — needed to understand Ephesus, Chalcedon and the Three Chapters (the wiki has an event for Constantinople II).
- **Celestine I**, **Innocent I**, **Zosimus**, **Caelestius**, **Julian of Eclanum** — the Roman side of the Pelagian and Nestorian controversies; **Theophilus of Alexandria** (3 mentions; the Synod of the Oak), **Epiphanius of Salamis**, **Rufinus** (14 mentions as a source), **Cyril of Jerusalem** (5).
- **Anatolius, Juvenal of Jerusalem, Proterius, Timothy Aelurus, Peter Mongus, Basiliscus, Anastasius I, Justin I** — all actors in the entries on Chalcedon and the Henotikon, none with an entry; **Theoderic the Ostrogoth** (7 mentions).
- **Attila** and **Gaiseric** / the Vandal persecution in Africa (Victor of Vita, Huneric: 0 mentions) — Leo's entry mentions Attila only through the *Liber Pontificalis*.
- **Priscilla (Prisca) the Montanist prophetess** — Maximilla has an entry, her colleague has none, and the only `priscilla` is Paul's fellow worker.
- **Boethius, Cassiodorus, Dionysius Exiguus** (0 mentions each) — the last matters to a timeline wiki in particular, as the author of the AD reckoning (525).
- Writers who appear only as quoted witnesses and might deserve entries: **Papias** (7 mentions), **Hegesippus**, **Melito of Sardis**, **Pantaenus**, **Lactantius** (14 mentions), **Valentinus** (8).

## Files checked with nothing to report

ananias-of-damascus, barnabas, james-the-just, cornelius, herod-agrippa-ii, herod-agrippa-i, john-mark, silas, aquila,
priscilla, clement-of-alexandria, cyprian, jerome, gallio, lydia, timothy, apollos, felix, festus, luke,
ananus-ben-ananus, tertullian, ignatius-of-antioch, vespasian, eleazar-ben-yair, flavius-silva, domitian, john-of-patmos,
benedict-xvi, clement-of-rome, trajan, pliny-the-younger, hadrian, simon-bar-kokhba, marcion, antoninus-pius, maximilla,
montanus, blandina, pothinus, abgar-viii, bardaisan, decius, fabian, leo-xiii, novatian, stephen-i, antony-the-great,
athanasius, diocletian, gregory-the-illuminator, tiridates-iii, galerius, constantine, licinius, caecilian, pachomius,
alexander-of-alexandria, arius, hosius-of-cordoba, mirian-iii, nino, ezana, frumentius, helena, macarius-of-jerusalem,
ulfilas, constantius-ii, hilary-of-poitiers, gregory-of-nazianzus, gregory-of-nyssa, macrina, gratian, paula,
aurelius-of-carthage, eudoxia, isaac-of-seleucia, marutha-of-maypherkat, yazdegerd-i, alaric, pelagius, nestorius,
patrick, dioscorus-of-alexandria, eutyches, marcian, pulcheria, gelasius-i, odoacer, romulus-augustulus,
acacius-of-constantinople, hormisdas, severus-of-antioch, zeno, clotilde, clovis, remigius, arethas-of-najran, dhu-nuwas

(Several of these appear in the missing-dates bullet above; nothing in their text was found to be wrong.)

## Method note

About 95 Bible citations were read in the WEB with the local tool (all those in the New Testament entries: Ananias,
Barnabas, James, Cornelius, the Agrippas, John Mark, Silas, Aquila, Priscilla, Gallio, Lydia, Timothy, Apollos, Felix,
Festus, Luke, John of Patmos, Clement, Ignatius); all supported their sentences, including the "four of six" count in
priscilla.md and the "six letters" count in timothy.md. Twenty-one web pages were opened (Suetonius *Nero*; Socrates 2.41,
3.1, 5.2, 5.11, 6.19, 7.29; Eusebius HE 4.13 note and 7.1; the Festal Index; Lactantius 44; Zachariah book 2; Evagrius
book 2; Optatus book 1; Orosius 7; Sulpicius Severus 2; Jerome *De viris illustribus*; the Chronicle of Edessa; Gregory of
Tours; Wikipedia for three cross-checks) and weekday arithmetic was run for a dozen dated days; every precise figure
checked matched its source except those reported. Not checked against the texts: the *Synodicon Orientale* pages (Isaac,
Marutha, Yazdegerd), the Georgian texts (Nino, Mirian), Agathangelos (Gregory, Tiridates), the south-Arabian
inscriptions (Dhu Nuwas, Ezana), the *Liber Pontificalis* page references and the modern Vatican documents (Benedict XVI,
Leo XIII); these entries were judged from general knowledge only and read as plausible.
