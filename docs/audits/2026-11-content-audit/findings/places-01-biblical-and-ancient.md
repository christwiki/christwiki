# Places, first half (mostly biblical and ancient)

Reviewer batch L01. Severity: A = factual error, B = misleading, unsupported or inconsistent, C = minor imprecision or omission. See the [audit report](../README.md) for method and limits.

## Findings

### B · plausibility · src/content/places/hamburg.md
- **Text:** summary: "Frankish stronghold beyond the Elbe where Louis the Pious founded an archbishopric for the mission to the north, with Ansgar as its first archbishop."
- **Problem:** The body attributes this correctly to Rimbert ("Rimbert says that Louis the Pious set up an archbishop's see at Hamburg"), but the summary states it in the wiki's own voice. Whether Louis founded an archbishopric at Hamburg in 831/834 is disputed: a line of scholarship (R. Drögereit, G. Theuerkauf, and most fully Eric Knibbs) holds that the foundation documents are forged or interpolated and that Rimbert's Life constructs the see's early history; others defend the traditional account. A contested point is presented as settled, against the wiki's own rule that attribution applies to the summary too.
- **Should be:** "Frankish stronghold beyond the Elbe where, according to Rimbert, Louis the Pious founded an archbishopric for the mission to the north with Ansgar as its first archbishop. …" A sentence naming the dispute belongs in the dating note of `event:ansgar` (which at present follows C. H. Robinson's chronology and does not mention it).
- **Evidence:** Eric Knibbs, *Ansgar, Rimbert and the Forged Foundations of Hamburg-Bremen* (Ashgate, 2011) — publisher's page https://www.routledge.com/Ansgar-Rimbert-and-the-Forged-Foundations-of-Hamburg-Bremen/Knibbs/p/book/9781409428824 ; discussion of the controversy in Klammt & Weiss, "Der alte Streit um Ansgars Bistum – neu entfacht" (2014), https://archiv.ub.uni-heidelberg.de/propylaeumdok/4958/ (search result summaries read; the works themselves not read in full).
- **Confidence:** medium

### C · historical · src/content/places/caesarea-maritima.md
- **Text:** "The work took twelve years [[cite:built]]."
- **Problem:** Josephus gives two figures. *Antiquities* 15.341 (the passage cited) says twelve years; *Antiquities* 16.136, where he reports the completion and dedication, says the building was finished "in the tenth year". One figure is given as fact without the attribution "Josephus says" and without the other.
- **Should be:** "Josephus says in one place that the work took twelve years and in another that it was finished in the tenth year [[cite:built]] [Ant. 16.136]."
- **Evidence:** https://lexundria.com/j_aj/15.331-15.341/wst ("this city was thus finished in twelve years"); https://lexundria.com/j_aj/16.136-16.141/wst ("The entire building being accomplished: in the tenth year, the solemnity of it fell into the twenty-eighth year of Herod's reign").
- **Confidence:** high

### C · completeness · src/content/places/caesarea-maritima.md
- **Text:** whole entry (ends with Paul's imprisonment)
- **Problem:** Nothing after Acts. The wiki's own `event:origen` is set here (Origen's school and library), `people/pontius-pilate` and `sources/pilate-stone` rest on the inscription found here, and `places/caesarea-in-cappadocia` refers to it as "the see of Eusebius" — none of which the entry mentions.
- **Should be:** Add a short paragraph: the Pilate inscription found in the theatre (1961), Origen's move to Caesarea and his school, and Eusebius as its bishop (cite Eusebius, HE 6.26–27, 6.30 or as in `event:origen`).
- **Evidence:** grep of `events/church-under-rome/origen.md`, `people/pontius-pilate.md`, `places/caesarea-in-cappadocia.md`.
- **Confidence:** high

### C · historical · src/content/places/jericho.md
- **Text:** "The ancient town is the mound of Tell es-Sultan, beside the spring of Ain es-Sultan … Jesus meets the blind beggar Bartimaeus on leaving the city [[bible:Mark 10:46]] and stays there with the tax collector Zacchaeus"
- **Problem:** Two things. (1) The entry identifies "the ancient town" with Tell es-Sultan and then goes straight on to the Gospels. The Jericho of the Hasmonean, Herodian and New Testament period was not on the tell but at Tulul Abu el-Alayiq, where the Wadi Qelt enters the plain, about two kilometres to the south-west; the wiki's own `event:death-of-herod` is set at that Jericho. As written the reader takes the pin to be the city of Zacchaeus. (2) The healing is told from Mark alone in the wiki's voice. Luke puts it as Jesus "came near Jericho" and Matthew has two blind men as they "went out from Jericho"; the guide asks that differing parallels be given, not one chosen silently.
- **Should be:** "The town of the Old Testament is the mound of Tell es-Sultan …; the Jericho of Herod's time and of the Gospels lay about two kilometres to the south-west, at Tulul Abu el-Alayiq." and "Mark says that Jesus healed the blind beggar Bartimaeus as he left the city; Luke sets the healing on the way in, and Matthew speaks of two blind men [[bible:Mark 10:46]] [[bible:Luke 18:35]] [[bible:Matt 20:29-30]]."
- **Evidence:** WEB Mark 10:46, Luke 18:35, Matt 20:29 read with the local tool. For the two sites: own knowledge (E. Netzer's excavations of the Hasmonean and Herodian palaces at Tulul Abu el-Alayiq), confirmed by web search results (e.g. https://www.biblegateway.com/resources/encyclopedia-of-the-bible/JERICHO : "NT or Herodian Jericho is located … in the ruins on both banks of the Wadi Qelt").
- **Confidence:** high

### C · scriptural · src/content/places/samaria.md
- **Text:** "In the New Testament the name is used for the region between Judaea and Galilee, through which Jesus travelled [[bible:John 4:3-9]] and where Philip preached [[bible:Acts 8:5]]."
- **Problem:** Acts 8:5 in the WEB (and NRSVUE) says that Philip "went down to the city of Samaria", so the verse is cited for the regional sense while its wording is about a city (manuscripts vary between "the city" and "a city"). The entry also never explains its own alternative name "Sebaste" or its `modern: Sebastia`: Herod the Great rebuilt the city and renamed it Sebaste in honour of Augustus (Josephus, Ant. 15.292–298), which is why the Old Testament city and the New Testament region bear the same name.
- **Should be:** "…and Acts says that Philip preached in 'the city of Samaria' [[bible:Acts 8:5]]. Herod the Great had rebuilt the city and renamed it Sebaste (Josephus, Antiquities 15.292–298); the name survives in the village of Sebastia."
- **Evidence:** WEB Acts 8:5 ("Philip went down to the city of Samaria"), John 4:4-5. Josephus: https://lexundria.com/j_aj/15.292-15.298/wst ("He also changed its name, and called it Sebaste").
- **Confidence:** medium

### C · scriptural · src/content/places/peniel.md
- **Text:** "Later books spell it Penuel."
- **Problem:** The spelling Penuel is not only in later books: the very next verse of Genesis (32:31) has it in the Hebrew text and in the NRSVUE, which the wiki's Scripture links open ("as he passed Penuel"). The WEB normalises both verses to "Peniel", which is probably why this was missed.
- **Should be:** "The next verse, and the later books, spell it Penuel [[bible:Gen 32:31]]."
- **Evidence:** WEB Gen 32:30-31 (both "Peniel"); NRSVUE/MT Gen 32:31 (Heb. 32:32) "Penuel" — own knowledge.
- **Confidence:** high

### C · scriptural · src/content/places/damascus.md
- **Text:** summary: "…and escaped from it over the wall in a basket."
- **Problem:** Both texts say "through", not "over": Paul was "let down in a basket through a window by the wall" (2 Cor 11:33) and Acts has him let down "through the wall" (Acts 9:25). The body also gives only Paul's version of who was watching (the governor of King Aretas); Acts says it was a plot of "the Jews" who watched the gates (Acts 9:23-25). `event:conversion-of-paul` reports both, so the place entry is the less careful of the two.
- **Should be:** "…and was let down in a basket through an opening in its wall." In the body add "Acts tells the escape as from a plot of the Jews of the city [[bible:Acts 9:23-25]]."
- **Evidence:** WEB 2 Cor 11:32-33; Acts 9:25.
- **Confidence:** high

### C · scriptural · src/content/places/gaza.md
- **Text:** "…a desert road, where he meets the Ethiopian official [[bible:Acts 8:26]]."
- **Problem:** The citation is short: verse 26 has only the angel's instruction and the road. The meeting is in verses 27-28, and the baptism that the summary mentions is in verses 36-38.
- **Should be:** `[[bible:Acts 8:26-28]]` (or 8:26-38 to cover the summary).
- **Evidence:** WEB Acts 8:26.
- **Confidence:** high

### C · completeness · src/content/places/megiddo.md
- **Text:** whole entry (last biblical reference is Zech 12:11)
- **Problem:** The entry lists every Old Testament mention but omits the one New Testament echo for which the name is best known: the "Harmagedon" of Revelation 16:16, usually explained as "mount of Megiddo". The only places in the wiki where Armageddon appears are the title of an article in the dating note of `event:death-of-josiah` and a source description.
- **Should be:** Add: "Revelation names the place of the last gathering of the kings 'Harmagedon' [[bible:Rev 16:16]], a name usually explained as 'mount of Megiddo'."
- **Evidence:** WEB Rev 16:16; `grep -rl Armageddon src/content` returns only `death-of-josiah.md` and `megiddo-shoshenq-fragment.md`.
- **Confidence:** high

### C · completeness · src/content/places/thessalonica.md
- **Text:** whole entry (New Testament only)
- **Problem:** Four later events of the wiki list this city among their places and the entry mentions none: the edict *Cunctos populos* issued there on 27 February 380 (`event:edict-of-thessalonica`), the massacre of 390 for which Ambrose required Theodosius to do penance (`event:ambrose-and-theodosius`), the birthplace of Constantine-Cyril and Methodius (`event:cyril-and-methodius`), and Gregory Palamas's see (`event:hesychast-controversy`). The first two are of first-rank importance for the city's place in church history.
- **Should be:** Add a short second paragraph with those four, each with its source as cited in the event entries.
- **Evidence:** front matter `places:` of the four event files.
- **Confidence:** high

### C · completeness · src/content/places/constantinople.md
- **Text:** "Councils met there in 381 and later, and the first of them gave its bishop a rank of honour second only to that of Rome [[cite:canon3]]. It is the modern Istanbul."
- **Problem:** The body stops at 381. Twenty-seven events of the wiki are set here; the entry says nothing of Hagia Sophia, of the councils of 553 and 680–681 beyond "and later", of the sack of 1204, or of the fall of the city to the Ottomans in 1453 — the fact that explains why it "is the modern Istanbul". The summary's "capital of the eastern Roman empire" has no end.
- **Should be:** Add two or three sentences: Justinian's Hagia Sophia (537), the sack by the Fourth Crusade (1204), the fall to Mehmed II (29 May 1453), with cross-references to the existing events.
- **Evidence:** `events/*/` front matter (justinian-and-hagia-sophia, sack-of-constantinople, fall-of-constantinople all list `constantinople`).
- **Confidence:** high

### C · consistency · src/content/places/alexandria.md
- **Text:** summary: "…and became a leading centre of Christian teaching."
- **Problem:** The summary makes a claim that the body does not support at all: the body ends with Apollos (Acts 18:24) and contains nothing Christian after the New Testament — no Clement or Origen and the catechetical school, no Arius, Athanasius or Cyril, although seven events of the wiki (origen, decian-persecution, ezana-of-aksum, athanasius-festal-letter, henotikon …) are set in the city. By the wiki's own rule a summary statement must be borne out by a cited sentence.
- **Should be:** Add a closing sentence or two, e.g. Eusebius on the school under Pantaenus, Clement and Origen (HE 5.10; 6.3, 6.6) and the bishops Athanasius and Cyril, with links to the events.
- **Evidence:** the entry itself; event front matter.
- **Confidence:** high

### C · completeness · src/content/places/rome.md
- **Text:** summary: "Its bishops became the popes, and it is the centre of the Roman Catholic Church."; body ends with 1 Pet 5:13.
- **Problem:** The body says nothing of what makes Rome matter for the wiki after Acts: the tradition that Peter and Paul died there (`event:martyrdom-of-peter-and-paul`), the Neronian persecution (Tacitus, Annals 15.44), or its bishops. The summary's last sentence has no support in the body. Sixty-two events are set here.
- **Should be:** Add two or three cited sentences (1 Clement 5; Tacitus, Annals 15.44; Irenaeus, Against Heresies 3.3.2–3 on the succession), linking the events.
- **Evidence:** the entry itself.
- **Confidence:** high

### C · completeness · src/content/places/jerusalem.md
- **Text:** whole body (three sentences, one citation)
- **Problem:** For the place where fifty events of the wiki are set, the body has one Bible citation (2 Sam 5:6-10) and nothing on the New Testament, although the summary speaks of the crucifixion, the resurrection and the first church, and nothing on Aelia Capitolina, which is given as an alternative name but never explained, or on 637/638 and 1099. "It was destroyed by Babylon in 587/586 BC and by Rome in AD 70" is uncited.
- **Should be:** Expand to the standard of the neighbouring entries (e.g. Bethany, Golgotha): cite 2 Kgs 25:8-10, Josephus, War 6–7, the Gospel and Acts passages, Hadrian's refoundation as Aelia Capitolina (Cassius Dio 69.12; Eusebius, HE 4.6).
- **Evidence:** the entry itself.
- **Confidence:** high

### C · completeness · src/content/places/ephesus.md
- **Text:** "In 431 the third general council met in the city"
- **Problem:** Two omissions. The council of 449 (`event:second-council-of-ephesus`) also met here and is not mentioned. And the entry is silent on the second-century tradition that links John with Ephesus (Irenaeus, Against Heresies 3.1.1 and 3.3.4; Eusebius, HE 3.23), although `event:revelation-to-john` and `event:writing-of-the-gospels` list Ephesus among their places for that reason.
- **Should be:** Add "Irenaeus, about AD 180, says that John lived at Ephesus until the time of Trajan" (with citation) and "A second council met there in 449; see [[event:second-council-of-ephesus]]."
- **Evidence:** event front matter; Irenaeus, Against Heresies 3.1.1 and 3.3.4, https://www.newadvent.org/fathers/0103303.htm ("the Church in Ephesus, founded by Paul, and having John remaining among them permanently until the times of Trajan").
- **Confidence:** high

### C · completeness · src/content/places/serdica.md
- **Text:** whole entry (Galerius in 311, Constantine in 317)
- **Problem:** The event for which Serdica is best known in church history is missing: the council of 343, called by Constans and Constantius II, at which the eastern bishops withdrew, the western bishops cleared Athanasius, and canons (3–5) were passed allowing a deposed bishop to appeal to the bishop of Rome. The alternative name "Sardica" in the front matter is the name of that council. It is not covered anywhere else in the wiki either.
- **Should be:** Add a sentence on the council with a citation (Athanasius, Apology against the Arians 36–50; Socrates 2.20; the canons in NPNF 2.14), and consider an event entry.
- **Evidence:** `grep -rlE "Serdica|Sardica" src/content` returns only `places/serdica.md` and `events/church-under-rome/edict-of-galerius.md`. Facts about the council from own knowledge.
- **Confidence:** high

### C · completeness · src/content/places/frankfurt.md
- **Text:** summary: "A city on the river Main in Germany. Philipp Jakob Spener was senior of its Lutheran clergy when he wrote Pia Desideria there in 1675."
- **Problem:** The entry knows the city only for 1675. The council that Charlemagne held at Frankfurt in 794, which condemned Spanish adoptionism and rejected (as the Franks understood it) the decree of Nicaea II on images, is used by the wiki itself (`sources/council-of-frankfurt-794.md`, cited in `event:second-council-of-nicaea` and `people/alcuin.md`) but the place entry does not mention it; `event:gutenberg-bible` also lists Frankfurt as a place without the entry saying why.
- **Should be:** Add: "In 794 Charlemagne held here a council of Frankish, Italian and Aquitanian bishops that condemned adoptionism and rejected the decree of the council of 787 on images (capitulary of Frankfurt, cc. 1–2)."
- **Evidence:** `grep -rl council-of-frankfurt-794 src/content` (source entry, one event, one person; not `places/frankfurt.md`); capitulary reference from own knowledge.
- **Confidence:** high

### C · completeness · src/content/places/bethlehem.md
- **Text:** "Eusebius, who lived at the time, reports that [[person:helena]] … dedicated a church at the cave shown there as the place of the birth"
- **Problem:** The entry gives the impression that the cave is first heard of under Constantine. Justin Martyr (Dialogue 78, about 155) and Origen (Against Celsus 1.51, about 248) already speak of the cave at Bethlehem, Origen saying that it was shown there. The entry also omits Jerome, who settled at Bethlehem in 386 and made most of the Vulgate there; `event:jerome-and-the-vulgate` lists Bethlehem as its place.
- **Should be:** Add: "Justin Martyr in the second century and Origen in the third already speak of a cave at Bethlehem as the birthplace" and "Jerome lived there from 386; see [[event:jerome-and-the-vulgate]]."
- **Evidence:** Origen, Against Celsus 1.51, https://www.newadvent.org/fathers/04161.htm ("there is shown at Bethlehem the cave where He was born"); Justin, Dialogue 78, https://www.newadvent.org/fathers/01286.htm (Joseph "took up his quarters in a certain cave near the village" — from memory of the chapter; page opened); event front matter for Jerome.
- **Confidence:** high

## Completeness of this stretch

Checked with `ls src/content/places/` and `grep -rlE` over events, people, sources and places.

Places with no entry that a reader of this stretch would look for:
- **Tarsus** — Paul's home city (Acts 9:11, 21:39, 22:3); named in six entries, no place page.
- **Galilee** (region) — named in 44 files; the Sea of Galilee has a page, the region where most of the ministry is set has none. Likewise **Tiberias**, **Cana** (John 2; 4:46) and **Mount Gerizim** (John 4:20; the Samaritan sanctuary) have none.
- **The other five churches of Revelation 2–3** — only Ephesus and Smyrna have pages; Pergamum, Thyatira, Sardis, Philadelphia (the existing `philadelphia.md` is the city in Pennsylvania) and Laodicea do not. Also absent from the Pauline map: Troas, Iconium, Derbe, Beroea, Colossae (0 hits), Galatia as a region.
- **Old Testament sites**: Sidon (8 files mention it), Hazor, Gibeon, Mizpah, Ramah, the Philistine cities other than Gaza (Gath, Ashdod, Ashkelon, Ekron), Moab and Edom as regions, the Red Sea / Sea of Reeds crossing (location `disputed`), Memphis or Tanis. None is indispensable singly, but Hazor and Sidon stand out.
- **Dura-Europos** — the house church of about 240, the earliest securely dated Christian building; 0 hits anywhere in the wiki. It would belong beside `event:christianity-in-edessa`.
- **Nisibis** (Ephrem; the school that moved from Edessa) — 2 passing mentions, no page.
- **Scetis / Nitria / Kellia** — the centres of Egyptian monasticism beside Antony's and Pachomius's sites; 2 passing mentions.
- **Tours** — Martin, Gregory of Tours and the battle of 732; 14 files mention it, "Martin of Tours" occurs once, and there is no page. **Lindisfarne** (4 mentions; Aidan's see, named in the Iona entry) and **Trier** / **Sirmium** (imperial residences of the fourth-century controversies; Sirmium named in 6 files) also lack pages.
- **Pella** (the tradition of the flight of the Jerusalem church, Eusebius HE 3.5.3) and **Jamnia/Yavneh** (0 hits).

Developments of this stretch not covered at all, noticed while checking the places:
- **The Council of Serdica (343)** — see the finding on `serdica.md`.
- **Columbanus and the Irish foundations on the continent** (Luxeuil, Bobbio; 0 hits for "Columbanus", "Bobbio", "Luxeuil").
- **Syrian and Palestinian monasticism** (Simeon Stylites, Sabas / Mar Saba, Shenoute: 0 hits each).
- **The rise of Islam** is present only through `event:arab-conquest-of-jerusalem` ("Mecca" 0 hits, "Yarmuk" 0 hits); the loss of Egypt, Syria and North Africa to the caliphate, which reshaped the map of every patriarchate in this batch, has no entry and no place.

Entries that are sound but stop early, where later events of the wiki are set at the same place and the entry does not say so (not written up as separate findings): `lyon.md` (councils of 1245 and 1274, Waldensians), `canterbury.md` (Anselm, Becket), `mainz.md` (Gutenberg), `antioch.md` (John Chrysostom; Julian), `carthage.md` (Pelagian controversy), `milan.md` (the penance of Theodosius, 390), `babylon.md` and `bethel.md` (several Old Testament events).

## Files checked with nothing to report
mountains-of-ararat, babylon, bethel, haran, shechem, ur, dan, qumran, hebron, beersheba, goshen, mount-sinai, pi-ramesses, kadesh-barnea, mount-nebo, gilgal, jordan-river, thebes, mount-tabor, shiloh, valley-of-elah, mount-carmel, qarqar, jezreel, kalhu, dibon, joppa, nineveh, lachish, anathoth, carchemish, nippur, susa, elephantine, tyre, antioch, modein, nazareth, sea-of-galilee, judean-wilderness, capernaum, corinth, augsburg, schleitheim, machaerus, bethsaida, caesarea-philippi, bethany, mount-of-olives, gethsemane, golgotha, emmaus, lystra, paphos, pisidian-antioch, athens, philippi, edessa, kodungallur, mylapore, miletus, crete, malta, masada, patmos, smyrna, bithynia-and-pontus, betar, lyon, pepuza, milan, carthage, caesarea-in-cappadocia, mount-colzim, pispir, vagharshapat, nicomedia, arles, tabennisi, nicaea, mtskheta, aksum, nicopolis-ad-istrum, rimini, seleucia-in-isauria, hippo-regius, chalcedon, seleucia-ctesiphon, armagh, ravenna, reims, najran, monte-cassino, faras, old-dongola, iona, toledo, canterbury, changan, whitby, fulda, geismar, mainz, jarrow, aachen, birka, great-moravia, pliska, cluny, mount-athos, gniezno

Small points on these, below the threshold of a finding: `paphos` (Cyprus) is filed under region `levant`, and `vagharshapat`, `mtskheta` and `mountains-of-ararat` (Armenia, Georgia, the Armenian highland) under `anatolia`; the region list has no better home for them, but the choice should be deliberate. `iona.md` gives "about 563" from the Annals of Ulster while also citing Bede, who says 565; the event entry explains the difference and the place entry does not.

## Method note
Overall: this batch is in good shape. All 128 pins were compared with my own knowledge and, where in doubt, with Pleiades (Lystra, Pepouza, Tabennisis, Modiin, Bethar, Bethsaida/el-Araj, Dongola) and Wikipedia (Tell Qarqur, Tell el-Qudeirat, Tulul adh-Dhahab, Faras, Monastery of St Antony): none is off by more than about 0.03 degree, none is on the wrong same-named place, and none of the sites the task names (Sinai, Golgotha, Emmaus, Ur, Kadesh-barnea, Ararat, Peniel, Gilgal) is labelled `known`. Links to the same-named places elsewhere in the wiki (the two Antiochs, the Caesareas, the Seleucias, Thebes, Tabor, Philadelphia) point at the right entries. No A-level error was found. What follows is one B and a number of C items.

All 128 files read in full. About 150 Bible citations were read against the local WEB text (every citation carrying a quotation, a number, a name or a sequence, and all those I was unsure of); the remainder were checked from memory of the passage. About 80 web pages or documents were opened to check non-biblical citations: Josephus on lexundria (23 passages), Eusebius (Church History, Life of Constantine, Onomasticon), Cyril of Jerusalem, Lactantius, the Origo Constantini and Anonymus Valesianus, Athanasius De synodis, Socrates, Sulpicius Severus, Possidius, Evagrius, Palladius, the Life of Antony, Agathangelos, Gregory of Nazianzus, Basil, the acts of Chalcedon, the Chronicle of Edessa, the Annals of Ulster, Muirchú, Bede (books 1, 3, 4, 5), Rimbert, Einhard, Pliny (Perseus), Tacitus, Herodotus, Arrian, Aristeas, Petrie's *Six Temples* (full text), Hoffmeier's JETS article (PDF read: the "unequivocal" quotation, the abandonment and the "twelve miles" to Tanis are on p. 233 as cited), the AJA review by Faust (exists, AJA 113.2), and 12 Pleiades records. Every one of these supported the entry that cites it, with the single exception noted under Caesarea.
Not checked: the archive.org page links to Egeria, the Synodicon orientale, Wardrop's Georgian texts and the Murashu volume; Gregory's Dialogues, Willibald, Thietmar, Gallus Anonymus, the Athonite typika, the Xi'an stele and the other sources cited without a URL (judged from memory of the texts; nothing looked wrong); Wood's JETS 48 page reference; the coordinates of Deir el-Maimun (Pispir), which I could not find in a gazetteer.
