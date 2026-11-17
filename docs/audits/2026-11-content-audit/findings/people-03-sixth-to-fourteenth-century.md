# People first appearing from the sixth to the fourteenth century

Reviewer batch P03. Severity: A = factual error, B = misleading, unsupported or inconsistent, C = minor imprecision or omission. See the [audit report](../README.md) for method and limits.

## Findings

### B · dating · src/content/people/boniface-viii.md
- **Text:** front matter `died: start: 1303, month: 10, day: 12, confidence: firm`; body "returned to Rome and died there on 12 October 1303 [[cite:anagni]]"
- **Problem:** The day is Villani's (8.63: "on the 12th day of October in the year of Christ 1303"). The date given by the standard reference works is 11 October 1303. The entry states Villani's day in the wiki's own voice and labels it `firm` to the day, without saying that it differs from the accepted date.
- **Should be:** `day: 11` (or drop the day), and in the body: "Villani dates his death to 12 October 1303; the date usually given is 11 October."
- **Evidence:** Villani 8.63 read in the Gutenberg text (mirror gutenberg.pglaf.org/3/3/0/2/33022) — "12th day of October"; en.wikipedia "Pope Boniface VIII": term end and death 11 October 1303 (three places in the article); same in the Catholic Encyclopedia and Oxford Dictionary of Popes (own knowledge).
- **Confidence:** high (that 11 October is the standard date); medium on how the maintainers will want to word it

### B · historical · src/content/people/clement-vii-of-avignon.md
- **Text:** "The English chronicler Knighton records under 1378 that some of the cardinals left Urban VI, went to Avignon and raised Robert of Geneva to the papacy under the name Clement"; summary "set up as pope in 1378 by the cardinals who had abandoned Urban VI. His line sat at Avignon"
- **Problem:** Knighton does say this ("abierunt Avinoniam, ibique erexerunt Robertum …"), but it is wrong, and the entry passes it on without correction as its only statement of where the election took place. Robert of Geneva was elected at Fondi, in the kingdom of Naples, on 20 September 1378; he reached Avignon only in June 1379. "Fondi" occurs nowhere in the wiki (grep), and the event `western-schism` repeats the same Knighton sentence, so a reader is left believing the rival election was held at Avignon.
- **Should be:** Add, from a source that has it (e.g. the cardinals' own acts, or the chronology in the dating note): "Knighton, writing in England, puts the election at Avignon; it was held at Fondi on 20 September 1378, and Clement moved to Avignon in 1379." Also worth adding his death, 16 September 1394.
- **Evidence:** Knighton, vol. 2, p. 129, read in the archive.org OCR (chroniconhenrici02knig): "abierunt Avinoniam, ibique erexerunt Robertum episcopum Cibbonensem in summum pontificem"; en.wikipedia "Antipope Clement VII": "elected pope at Fondi on 20 September 1378", died 16 September 1394; Scudder's own table in the cited edition of Catherine's letters gives 20 September 1378 for the cardinals' act.
- **Confidence:** high

### C · dating · src/content/people/germanus-i.md
- **Text:** "Theophanes says that Germanus had been patriarch for fourteen years and five months when, on 7 January 730, the emperor Leo III called him before a council of state"
- **Problem:** The printed text of Theophanes does read "the 7th of January" (τῇ δὲ ζ΄ τοῦ Ἰαννουαρίου), but the same sentence calls it "the third day of the week" (Tuesday). 7 January 730 was a Saturday; 17 January was a Tuesday. Theophanes' own tenure figure (14 years 5 months 7 days from 11 August 715) also ends on 17/18 January, and Anastasius is ordained on the 22nd. The date is therefore normally corrected to 17 January 730 (so the standard patriarchal lists). The entry, and the event `iconoclasm-begins` with its dating note, give 7 January without comment.
- **Should be:** "on 7 January 730 as the text stands (the weekday Theophanes gives, a Tuesday, and his figure for Germanus' tenure point to 17 January, the date usually adopted)". Same correction in `events/early-middle-ages/iconoclasm-begins.md`.
- **Evidence:** OCR of the cited scan (archive.org bub_gb_QlPPAAAAMAAJ, AM 6221): "τῇ δὲ ζ΄ τοῦ Ἰαννουαρίου μηνὸς τῆς ιγ΄ ἰνδικτιῶνος, ἡμέρᾳ γ΄ τῆς ἑβδομάδος … ἀρχιερατεύσας ἔτη ιδ΄ μῆνας ε΄ καὶ ἡμέρας ζ΄. τῇ δὲ κβ΄ τοῦ αὐτοῦ Ἰαννουαρίου"; weekday computed (Julian calendar): 7 Jan 730 = Saturday, 17 Jan = Tuesday, 22 Jan = Sunday; en.wikipedia "Germanus I of Constantinople": term end 17 January 730.
- **Confidence:** high on the facts; medium that the maintainers will count it a defect, since the entry reports the text accurately

### C · historical · src/content/people/catherine-of-siena.md
- **Text:** "the youngest child of the dyer Jacopo Benincasa … died in April 1380, on the 30th by Scudder's table"
- **Problem:** Both details are Scudder's (1905) and both are out of date. Catherine died on 29 April 1380 (30 April was the old feast day, which is where Scudder's date comes from). She was the twenty-third or twenty-fourth of twenty-five children, born with a twin; a younger sister (Giovanna, "Nanna") was born about two years later, so she was not the youngest. The entry gives no other date, so the reader is left with the wrong day. The only source for the whole biography is an editor's chronological table, which is secondary by the wiki's own standard.
- **Should be:** "born 25 March 1347, one of the last of the twenty-five children of the dyer Jacopo Benincasa … died at Rome on 29 April 1380 (Scudder's table has the 30th)"; front matter may then carry `day: 29`. Ideally cite Raymond of Capua's *Legenda maior* for the life.
- **Evidence:** Scudder's table read in the Gutenberg text (lines "1347 … is the youngest of the twenty-five children", "1380 … on April 30th she dies"); en.wikipedia "Catherine of Siena": "25 March 1347 – 29 April 1380", "23rd and 24th children, twin daughters … She was two years old when Lapa had her 25th child".
- **Confidence:** high

### C · plausibility · src/content/people/ignatius-of-constantinople.md
- **Text:** summary "Rome upheld him throughout"
- **Problem:** An absolute that is not true of his second patriarchate. Rome upheld Ignatius against Photius, but Pope John VIII then quarrelled with him over Bulgaria and in April 878 sent him a third warning threatening excommunication and deposition unless he withdrew his clergy from Bulgaria within thirty days (the letter reached Constantinople after his death). The wiki's own `john-viii` entry cites the companion letters of April 878 ordering the Greek clergy out of Bulgaria.
- **Should be:** "Rome upheld him against Photius; in his last years Pope John VIII threatened him with excommunication over the church of Bulgaria." The entry should also give his dates: patriarch 847–858 and 867–877, died 23 October 877.
- **Evidence:** own knowledge of John VIII, Register ep. 68 (MGH Epp. 7, pp. 62–63, April 878, to Ignatius; in the same block as epp. 66 and 71 cited in `john-viii.md`) and Dvornik, *The Photian Schism* (1948), ch. 5; dates from en.wikipedia "Ignatios of Constantinople". I did not open ep. 68 itself.
- **Confidence:** medium

### C · dating · src/content/people/bede.md
- **Text:** front matter `died: start: 735, month: 5, day: 25`; body "he died on the eve of the Ascension, a Wednesday … Ascension Day fell on 26 May"
- **Problem:** The date given in reference works is 26 May 735: Cuthbert's letter has him die after the first vespers of the Ascension on Wednesday evening, which by the reckoning of the time already belonged to the feast, 26 May. The front matter's 25 May is the civil date of that Wednesday and can be defended, but the entry does not explain why its date is a day earlier than the one a reader will find everywhere else.
- **Should be:** Either `day: 26` with the note "after vespers on Wednesday 25 May, counted as the feast of the Ascension, 26 May", or keep 25 and add that sentence.
- **Evidence:** weekday computed: 25 May 735 = Wednesday, 26 May = Thursday; en.wikipedia "Bede" (citing ODNB): "died … on the Feast of the Ascension, Thursday, 26 May 735".
- **Confidence:** medium

### C · dating · src/content/people/clement-v.md
- **Text:** "Villani places his court at Avignon by 1308 and again in 1310"
- **Problem:** Villani's "1308" (8.102) is attached to Henry of Luxemburg's embassy for confirmation "in the month of April, 1308", which is impossible: Henry was elected king on 27 November 1308 and confirmed by Clement at Avignon in July 1309. Clement first came to Avignon in March 1309. The entry leaves "by 1308" as the only indication of when the court settled there; the event `avignon-papacy` at least adds that 1309 is the usual year, the person entry does not.
- **Should be:** "Villani has his court at Avignon when Henry of Luxemburg sought confirmation, which he misdates to April 1308 (Henry was elected in November 1308); Clement arrived at Avignon in March 1309."
- **Evidence:** Villani 8.102 read in the Gutenberg text ("he sent for his confirmation to Avignon to the court of Pope Clement … in the month of April, 1308, the said Henry was confirmed"); en.wikipedia "Henry VII, Holy Roman Emperor": elected 27 November 1308, crowned 6 January 1309; March 1309 for Clement's arrival is own knowledge.
- **Confidence:** medium

### C · completeness · src/content/people/irene-of-athens.md
- **Text:** role "co-ruler from 780, sole ruler from 797"; body ends "she reigned alone … proposed a marriage between them that would unite East and West"
- **Problem:** The entry stops with Irene on the throne. It omits that she was deposed by her finance minister Nikephoros on 31 October 802 and died in exile on Lesbos on 9 August 803 — which is how the marriage proposal the entry mentions ended. Theophanes tells both under AM 6295 on the page after the one cited. No `born`/`died` in front matter.
- **Should be:** Add one sentence from Theophanes AM 6295 on the deposition and exile, and `died: 803` (firm); role "sole ruler 797–802".
- **Evidence:** en.wikipedia "Irene of Athens": reign 19 August 797 – 31 October 802; died 9 August 803, Lesbos; Theophanes AM 6295 (own knowledge).
- **Confidence:** high

### C · completeness · src/content/people/peter-abelard.md
- **Text:** "A council at Soissons condemned his tract on the Trinity and made him burn it."
- **Problem:** The entry ends where the *Historia calamitatum* ends (c. 1132). It omits the event for which Abelard matters most in church history: his second condemnation at the council of Sens (1140 or 1141) at the instance of Bernard of Clairvaux, confirmed by Innocent II, and his death under the protection of Peter the Venerable of Cluny on 21 April 1142. No dates in front matter (born 1079, from his own statements; died 1142). "Sens" does not occur anywhere in the wiki (grep).
- **Should be:** Add the condemnation at Sens with a primary citation (Bernard, Letters 189–190; Innocent II's rescript of 16 July 1141; Peter the Venerable, Letter 115 to Heloise for the death), and `born: 1079`, `died: 1142`.
- **Evidence:** own knowledge; grep of `src/content` for "Sens\b" returns nothing.
- **Confidence:** high

### C · completeness · src/content/people/bernard-of-clairvaux.md
- **Text:** whole entry (entry to Cîteaux, Clairvaux, *On Loving God*, death)
- **Problem:** The entry gives the monastic founder only. It omits the acts for which Bernard was the leading churchman of his generation: his part in ending the papal schism of 1130 in favour of Innocent II, his prosecution of Abelard at Sens, his preaching of the Second Crusade at Vézelay in 1146 at the commission of his former monk Pope Eugenius III, and his canonization in 1174. Neither "Second Crusade", "Vézelay" nor "Sens" occurs anywhere in the wiki.
- **Should be:** One paragraph with primary citations (Odo of Deuil or Bernard's Letter 363 for the crusade preaching; *De consideratione* addressed to Eugenius III; Letters 189–190 on Abelard).
- **Evidence:** own knowledge; grep of `src/content` for "Second Crusade|Vézelay|Sens\b" returns nothing.
- **Confidence:** high

### C · completeness · src/content/people/bonaventure.md
- **Text:** role "Friar and cardinal bishop of Albano"; summary "Friar and cardinal bishop of Albano who preached at the Second Council of Lyon"
- **Problem:** The entry is built only on the council's *Brevis nota* and so omits what Bonaventure chiefly was: master of theology at Paris, minister general of the Friars Minor from 1257 until 1274, and author of the *Itinerarium mentis in Deum* and of the official Life of Francis (*Legenda maior*, 1263). A reader could not tell from the entry that he was a Franciscan theologian of the first rank, the counterpart of Thomas Aquinas. "minister general" occurs nowhere in the wiki. Front matter has `died: 1274` without the day the body gives (15 July) and no `born` (c. 1217/1221).
- **Should be:** role "Franciscan theologian, minister general of the Friars Minor 1257–1274, cardinal bishop of Albano"; a sentence citing the prologue of the *Legenda maior* or the *Itinerarium*; `died: {start: 1274, month: 7, day: 15}`.
- **Evidence:** en.wikipedia "Bonaventure": "seventh Minister General of the Order of Friars Minor", died 15 July 1274; grep of `src/content` for "minister general".
- **Confidence:** high

### C · completeness · src/content/people/innocent-iv.md
- **Text:** role "Pope in the middle of the thirteenth century"
- **Problem:** Role gives no dates (pope 25 June 1243 – 7 December 1254) though they are firm, and the entry omits the principal act of the pontificate: the First Council of Lyon (1245), which he held in the very months of the Mongol letters the entry describes and at which he declared the emperor Frederick II deposed. The First Council of Lyon is not mentioned anywhere in the wiki (grep), although Lyon II is an event. *Ad extirpanda* is given no date (15 May 1252).
- **Should be:** role "Pope, 1243–1254"; `died: 1254`; a sentence on Lyon I and the deposition of Frederick II (bull *Ad apostolicae dignitatis apicem*, 17 July 1245); date *Ad extirpanda*.
- **Evidence:** own knowledge; grep of `src/content` for "First Council of Lyon|deposed Frederick" returns nothing.
- **Confidence:** high

### C · completeness · src/content/people/innocent-iii.md
- **Text:** "Innocent appears in several of the turning points of the early thirteenth century."
- **Problem:** The list that follows (Fourth Crusade, Francis, Dominic, Lateran IV) leaves out the Albigensian Crusade, which Innocent himself proclaimed in March 1208 — the wiki's own event `albigensian-crusade` and the `raymond-vi-of-toulouse` entry rest on his letter — and his conflict with King John (interdict on England 1208–1214, John's surrender of the kingdom as a papal fief in 1213), which the cited Roger of Wendover narrates at length.
- **Should be:** Add "he called for the crusade against the count of Toulouse and the heretics of his lands in 1208 ([[event:albigensian-crusade]])", and a sentence on the English interdict from Wendover.
- **Evidence:** `src/content/events/high-and-late-middle-ages/albigensian-crusade.md` (summary and `people:` list name Innocent III); own knowledge for the interdict.
- **Confidence:** high

### C · completeness · src/content/people/francis-of-assisi.md
- **Text:** "he went to Syria while Christians and Saracens were at war and presented himself to the sultan"
- **Problem:** Faithful to Celano's wording ("the regions of Syria"), but as it stands it misplaces the episode: the meeting with the sultan al-Kamil took place in Egypt, outside Damietta, during the Fifth Crusade in 1219 (the cited translation's own footnote gives the year; its index has "at siege of Damietta"; Jacques de Vitry, an eyewitness, places it there). Neither Egypt, Damietta nor the year appears in the entry or in the event `francis-of-assisi`. The entry also has no `born` (1181 or 1182) and gives the death only to the month although the body has the day.
- **Should be:** "Thomas of Celano reports that … he went to 'the regions of Syria' …; the meeting took place in 1219 in the crusaders' camp before Damietta in Egypt (Jacques de Vitry, Letter 6)."
- **Evidence:** Celano §57 read in the archive.org OCR of the cited translation (livesofsfranciso00thom): "went to the regions of Syria … the Soldan of the Saracens", footnote "A.D. 1219", index "at siege of Damietta, 173"; own knowledge for Jacques de Vitry.
- **Confidence:** high

### C · completeness · src/content/people/ (front-matter dates missing where they are well attested)
- **Text:** no `born`/`died` (or no day/year that the body itself gives) in the front matter of the files listed below
- **Problem:** The brief asks for entries that lack well-attested dates. In each case the year is secure and in several the entry's own body or role states it. None of these is an error; each is a gap on the timeline.
- **Should be:** add as follows (all `firm` unless marked):
  - `gregory-x.md` — body gives death 10 January 1276 and role "1271–1276", front matter has no `died`.
  - `theodora.md` — died 28 June 548 (Procopius' "twenty-one years and three months", which the body cites, counts from 1 April 527).
  - `vigilius.md` — died 7 June 555. `augustine-of-canterbury.md` — died 26 May, 604 or 605 (estimated). `sophronius.md` — died 638 (estimated). `taizong.md` — 598–649; role should say "reigned 626–649". `colman-of-lindisfarne.md` — died 675 (Annals of Ulster; estimated).
  - `maximus-the-confessor.md` — c. 580 – 13 August 662. `germanus-i.md` — died c. 733/740 (estimated). `john-of-damascus.md` — c. 675 – c. 749 (estimated). `irene-of-athens.md` — died 9 August 803. `tarasius.md` — died 25 February 806; role "784–806". `alcuin.md` — c. 735 – 19 May 804.
  - `methodios-i.md` — patriarch 843–847, died 14 June 847. `hadrian-ii.md` — died December 872. `nicholas-i.md` — died 13 November 867. `ignatius-of-constantinople.md` — died 23 October 877. `photius.md` — c. 810 – c. 893 (estimated); patriarch 858–867 and 877–886. `john-viii.md` — died 16 December 882. `basil-i.md` — reigned 867–886, died 29 August 886. `boris-i.md` — ruled 852–889, died 2 May 907.
  - `william-i-of-aquitaine.md` — died 6 July 918. `berno-of-cluny.md` — died 13 January 927. `john-xii.md` — died 14 May 964. `otto-i.md` — 23 November 912 – 7 May 973 (king from 936). `nikephoros-ii-phokas.md` — killed 11 December 969. `basil-ii.md` — 958–1025, reigned 976–1025 (role gives no dates at all). `sylvester-ii.md` — died 12 May 1003.
  - `humbert-of-silva-candida.md` — died 5 May 1061. `leo-ix.md` — role should read "Pope, 1049–1054". `michael-cerularius.md` — patriarch 1043–1058, died 1059. `matilda-of-tuscany.md` — c. 1046 – 24 July 1115. `henry-iv-emperor.md` — born 11 November 1050. `alexios-i-komnenos.md` — reigned 1081–1118, died 15 August 1118. `godfrey-of-bouillon.md` — died 18 July 1100. `robert-of-molesme.md` — died 1111. `stephen-harding.md` — died 28 March 1134. `callixtus-ii.md` — pope 1119–1124, died 13 December 1124. `henry-v-emperor.md` — died 23 May 1125.
  - `peter-abelard.md` — 1079–1142. `peter-lombard.md` — bishop of Paris 1159, died 1160 (the entry does not mention that he became bishop). `alexander-iii.md` — pope 1159–1181, died 30 August 1181. `henry-ii-of-england.md` — 1133–1189, reigned 1154–1189. `gregory-ix.md` — died 22 August 1241. `raymond-vi-of-toulouse.md` — died August 1222. `arnaud-amalric.md` — died 1225. `innocent-iv.md` — died 7 December 1254. `dominic.md` — front matter has the year only; 6 August 1221. `simon-de-montfort.md` — year only; body gives the day (25 June 1218).
  - `albert-the-great.md` — died 15 November 1280. `michael-viii-palaiologos.md` — reigned 1259–1282, died 11 December 1282 (the body's "twenty-four years less twenty days" yields it). `nicholas-iv.md` — died 4 April 1292. `john-of-montecorvino.md` — 1247 – c. 1328 (estimated). `john-of-plano-carpini.md` — died 1 August 1252.
  - `gregory-xi.md` — role should give "1370–1378"; died 27 March 1378. `gregory-palamas.md` — c. 1296 – 14 November 1359 (1357 in some reckonings; estimated), canonized 1368. `barlaam-of-calabria.md` — died 1348. `clement-vi.md` — pope 1342–1352, died 6 December 1352. `clement-vii-of-avignon.md` — died 16 September 1394. `urban-vi.md` — died 15 October 1389. `martin-v.md` — died 20 February 1431.
  - Births that are well attested and absent: `justinian-i.md` (c. 482), `gregory-i.md` (c. 540), `charlemagne.md` (742, 747 or 748 — the body's "seventy-second year" from Einhard gives 742), `anselm-of-canterbury.md` (1033/34), `clare-of-assisi.md` (1193/94), `benedict-of-nursia.md` (traditional c. 480 – c. 547; the body rightly says Gregory gives no dates).
- **Evidence:** own knowledge, spot-checked on en.wikipedia for Ignatius, Irene, Bonaventure, Clement VII, Germanus.
- **Confidence:** high for the years; day-dates should be confirmed when entered

## Completeness of this stretch

What I grepped: `ls src/content/people` (631 files) for each name, then `grep -rli` over the whole of `src/content` for each topic; the event list for 500–1420 from the event index.

**People of first rank with no entry and little or no mention anywhere**
- **Muhammad and the first caliphs / Heraclius** — "Muhammad" occurs in 4 files, "Heraclius" in 2; there is no entry for either, and no event on the rise of Islam other than `arab-conquest-of-jerusalem`. Heraclius is also the emperor of the Persian war, the return of the Cross (630) and the monothelete *Ekthesis* (the word "Monothel…" occurs nowhere), which the entries on Sophronius and Maximus presuppose. Pope Martin I and the Lateran synod of 649 have no entry either.
- **Isidore of Seville** (3 mentions, no entry); **Boethius** (0), **Cassiodorus** (3 mentions), **Dionysius Exiguus** (1 mention — the inventor of the AD era the wiki itself uses), **Pseudo-Dionysius** (0): the transmitters of learning between antiquity and the schools.
- **Columbanus** (0), **Aidan** (mentioned, no entry), **Cuthbert**, **Theodore of Tarsus** (0; he organized the English church after Whitby, synod of Hertford 672/3), **Willibrord**.
- **Charles Martel** (1 mention), **Constantine V** (the emperor of Hieria 754 — mentioned in 5 files, no entry), **Theodore the Studite** (0; second iconoclasm and Studite monasticism), **Louis the Pious** and **Benedict of Aniane** (0; the Aachen monastic legislation of 816–817 that made Benedict's Rule the norm, which `benedict-of-nursia` asserts without it).
- Ninth-century Latin theology: **Paschasius Radbertus / Ratramnus** (eucharist), **Gottschalk and Hincmar** (predestination), **John Scotus Eriugena** (0), the **Pseudo-Isidorian decretals** (1 mention).
- Conversion of the north and centre: **Wenceslaus of Bohemia**, **Adalbert of Prague** (0 — although `stephen-i-of-hungary` says "Bishop Adalbert baptized him"), **Olaf Haraldsson** (0), **Harald Bluetooth**/Jelling (0), **Cnut**, **Alfred the Great** (1 mention), **Sava of Serbia** (mentioned, no entry), **Clement of Ohrid**.
- Eleventh-century reform: **Peter Damian** (0), **Nicholas II** and the papal election decree of 1059 (0), **Odo** and **Hugh of Cluny** (0), **Paschal II** (mentioned in 5 files, no entry), **Lanfranc** and **Berengar of Tours** (the eucharistic controversy that produced "transubstantiation").
- Byzantium: **Symeon the New Theologian** (0); the Bogomils and Paulicians (0).
- Twelfth century: **Hildegard of Bingen** (0), **Hugh of St Victor** (0), **Peter the Venerable** (0), **Joachim of Fiore** (0), **Eugenius III**, **Frederick Barbarossa** (named in 13 files, no entry), **Hadrian IV**.
- Crusades after the first: **Second and Third Crusades**, **Saladin**, the loss of Jerusalem in 1187 (all 0); **Louis IX** (1 mention); the military orders and the suppression of the **Templars** at the Council of Vienne 1311–12 (1 mention, no event — and Philip IV and Clement V, who have entries, are its protagonists); the Reconquista (0); the Baltic crusades and the Teutonic Order (0).
- Thirteenth–fourteenth-century thought: **Duns Scotus** (2 mentions), **William of Ockham** (0), **Meister Eckhart** and the Rhineland mystics (0), **Roger Bacon/Grosseteste**, **Averroes, Avicenna, Maimonides** (0 — the background of `thomas-aquinas`), **Dante** (0), **Marsilius of Padua** (2 mentions), **Frederick II** (6 mentions).
- Fourteenth century: **John XXII** (named in 16 files — poverty controversy, Ockham, Eckhart — no entry), **Celestine V** (1 mention), **Bridget of Sweden** (0), **Julian of Norwich** (0), the Beguines (0).
- Asia and Africa: **Timothy I**, catholicos of the Church of the East (1 mention), **Kublai Khan** (5 mentions, no entry, though Rabban Sauma, Yahballaha and Montecorvino all act under him and his successors), **Marco Polo**, **Arghun**; for Ethiopia **Tekle Haymanot** and the Solomonic restoration of 1270 (0).

**Events of this stretch not covered at all** (checked against the event index): the rise of Islam; the monothelete controversy before 680 (Ekthesis, Typos, Lateran synod of 649); Tours/Poitiers and the Carolingian rise; second iconoclasm (815–843) before the "Triumph"; conversion of Bohemia and of Denmark/Norway; the papal election decree of 1059; the eucharistic controversy and Lateran IV's "transubstantiation" (the word occurs, the controversy does not); the Second and Third Crusades and 1187; the First Council of Lyon (1245) and the deposition of Frederick II; the fall of Acre (1291); the Council of Vienne and the Templars; the condemnations of 1277; the Franciscan poverty dispute under John XXII; the jubilee of 1300.

**Thin entries inside the batch** (beyond the findings above): `otto-i` omits the Lechfeld (955) and the founding of the archbishopric of Magdeburg (968), the frame for the Polish and Rus' missions the entry does mention; `leo-iii-the-isaurian` omits the defence of Constantinople in 717–718; `justinian-i` does not mention the codification of Roman law (Codex, Digest, Institutes) or the closing of the Academy; `charlemagne` does not mention the forced baptism of the Saxons or the council of Frankfurt (794) and the *Libri Carolini* against Nicaea II; `nicholas-iv` does not say he was the first Franciscan pope; `urban-vi` gives only the title "Bartholomew of Bari" and not his name, Bartolomeo Prignano.

## Files checked with nothing to report
kaleb-of-aksum, scholastica, jacob-baradaeus, julian-the-missionary, longinus-of-nubia, columba, leander-of-seville, reccared-i, aethelberht-of-kent, alopen, umar, hilda-of-whitby, oswiu, wilfrid, agatho, constantine-iv, boniface, gregory-ii, leo-iii-the-isaurian, pepin-the-short, stephen-ii, hadrian-i, leo-iii, ansgar, theodora-the-empress, cyril, methodius, rastislav, athanasius-the-athonite, dobrawa, mieszko-i, olga-of-kyiv, vladimir-the-great, olaf-tryggvason, thorgeir-thorkelsson, stephen-i-of-hungary, gregory-vii, urban-ii, gratian-the-canonist, thomas-becket, peter-waldo, gebre-meskel-lalibela, bartholomew-i, enrico-dandolo, john-paul-ii, honorius-iii, william-of-rubruck, thomas-aquinas, rabban-sauma, yahballaha-iii, philip-iv-of-france, sergius-of-radonezh

(The remaining files appear in the findings above — fourteen in findings of their own, the rest only in the consolidated list of missing front-matter dates; for those the text of the entry itself checked out.)

## Method note
All 127 files read in full. Bible citations: only three in the batch (Bar 5:5, 2 Sam 1:26, Matt 7:12), all verified against the WEB. About 30 web pages or scanned texts opened: Villani (Gutenberg mirror), Scudder's Catherine of Siena, Knighton (archive.org OCR), Theophanes (Greek OCR of the cited scan), Bernold of Constance (MGH SS 5 page image, p. 467), Roger of Wendover, Villehardouin, Celano, Evagrius 4, John of Ephesus 4, Gregory the Great's letters 1.25, 1.43, 2.51, 8.30 (New Advent), the acts of Constance, and en.wikipedia for cross-checking dates; weekdays of twenty dates were computed. In every spot-check the entry reported its cited source accurately — the defects found are places where the source itself is wrong or dated and the entry does not say so, plus omissions.
Not checked against the text: citations to DMGH page images other than Bernold p. 467 (Thietmar, Annals of St Bertin, John VIII's register, Nicholas I, Ekkehard), the Slavonic Lives, Pachymeres, Theophanes Continuatus, the Tang Huiyao and the Xi'an Stele, Rimbert, and the Liber Pontificalis in Duchesne; these were judged from knowledge of the texts only. John VIII ep. 68 (finding on Ignatius) was not opened.
