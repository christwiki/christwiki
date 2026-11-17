# Events: High and Late Middle Ages, 1287–1493

Reviewer batch E11. Severity: A = factual error, B = misleading, unsupported or inconsistent, C = minor imprecision or omission. See the [audit report](../README.md) for method and limits.

## Findings

### B · historical · src/content/events/high-and-late-middle-ages/western-schism.md
- **Text:** "The English chronicler Knighton records that the cardinals who left Urban went to [[place:avignon]] and set up Robert of Geneva as Pope Clement"
- **Problem:** Knighton does say this (vol. 2, p. 129: "abierunt Avinoniam, ibique erexerunt Robertum ... in summum pontificem"), but it is wrong, and it is the entry's only statement of where and how the second election happened. The cardinals withdrew to Anagni and then to Fondi in the kingdom of Naples, where Robert of Geneva was elected on 20 September 1378; he reached Avignon only in June 1379. The entry never corrects the chronicler, so a reader takes a false place and sequence as fact.
- **Should be:** Keep Knighton's report as his, and add that the election was held at Fondi on 20 September 1378 and that Clement VII settled at Avignon in 1379 (the wiki has no mention of Fondi anywhere; grep "Fondi" returns nothing).
- **Evidence:** Knighton read in the archive.org full text of chroniconhenrici02knig, p. 129. Fondi / 20 September 1378: own knowledge (standard in every account, e.g. Catholic Encyclopedia "Western Schism"; the wiki's own avignon-papacy entry says only "by September of that year the cardinals had ... chosen another pope").
- **Confidence:** high

### B · completeness · src/content/events/high-and-late-middle-ages/hesychast-controversy.md
- **Text:** "Patriarch John signed the tome that August and forbade further argument ... The argument went on. The tome of 1351 relates that Akindynos took up Barlaam's charges and that some bishops still opposed Palamas. In that year the emperor John Kantakouzenos presided over a council"
- **Problem:** The entry jumps from 1341 to 1351 and leaves out the decade that decided the matter. The same Patriarch John (Kalekas) who signed the 1341 tome turned against Palamas during the civil war of 1341–47, had him imprisoned and excommunicated by a synod (1344/45), and was himself deposed by the council of February 1347, which vindicated Palamas; Palamas was then made metropolitan of Thessalonica. The tome of 1351 that the entry cites tells part of this itself (§3: a "second synod" under Kantakouzenos condemning Akindynos; §4: the deposition and excommunication of "John, who was then counted among the patriarchs"). As written, the reader sees an unbroken conciliar endorsement, and "Councils ... in 1341 and 1351" in the summary silently drops the council of 1347 (and the 1368 council that canonised Palamas is mentioned only as a number in the Crete list). Barlaam's later career (he left for the West and became a Latin bishop) is also absent.
- **Should be:** Add two or three sentences: the August 1341 synod against Akindynos; Palamas's condemnation and imprisonment under Patriarch John Kalekas (1344); the council of February 1347 deposing Kalekas; then 1351. The 1351 tome §§3–4 can carry most of it.
- **Evidence:** English translation of the 1351 tome at the entry's own cited URL (ubipetrusibiecclesia.com), §§2–5, opened and read; Fortescue's article cited by the entry (newadvent.org/cathen/07301a.htm) lists synods of 1341, 1345 (Palamas excommunicated), February 1347 (John XIV deposed), 1351, 1368.
- **Confidence:** high (facts); medium (that it rises to B rather than C)

### C · historical · src/content/events/high-and-late-middle-ages/wycliffe-bible.md
- **Text:** "Foxe reports that this was done forty-one years after his burial and that the bones were burned and the ashes thrown into a river"
- **Problem:** Foxe does say "forty-one years" (and heads the decree "A.D. 1425"), but that is wrong and it is the only indication of date the entry gives. The exhumation was carried out in 1428, some forty-three years after Wycliffe's death (31 December 1384), by the bishop of Lincoln (Richard Fleming) after Martin V had pressed for the execution of the council's decree; the river was the Swift. The entry also makes it sound as if the council's order of 1415 was simply carried out, without the thirteen-year gap.
- **Should be:** "The order was carried out only in 1428, under Martin V, by the bishop of Lincoln; Foxe, who says 'forty-one years' after the burial, tells that the bones were burned and the ashes thrown into the river" — or keep Foxe and add the true date in the dating note. Same correction applies to `places/lutterworth.md` if it repeats Foxe.
- **Evidence:** Foxe vol. 3, pp. 94–96 read in archive.org full text (actsmonumentsofj03foxe): "forty-one years after he was buried ... A.D. 1425". Wikipedia "John Wycliffe" (opened): order "eventually carried out in 1428", ashes "drowned in the River Swift"; own knowledge for Fleming and Martin V's mandate of December 1427.
- **Confidence:** high

### C · completeness · src/content/events/high-and-late-middle-ages/wycliffe-bible.md
- **Text:** "Scholars distinguish an earlier and a later version of the Wycliffite Bible and regard the work as that of several hands over some years" (dating note); body: "Its writer does not give his name."
- **Problem:** The entry never names the two men to whom the work is traditionally and in part documentarily assigned: Nicholas Hereford (a manuscript of the Early Version, Bodleian MS Douce 369, breaks off at Baruch 3:20 with a note ascribing the translation to him) and John Purvey (long credited with the Later Version and the General Prologue; the source entry notes the "Purvey's Prologue" heading but the event does not). Nor does it say that the Early Version is usually put before 1384 and the Later Version / Prologue about 1388–1397. A reader asking "who translated, and when" gets no answer beyond "several hands". The followers ("Lollards") and the statute De heretico comburendo (1401) are also unmentioned in any event entry, though the wiki has a source file for the statute.
- **Should be:** One sentence naming Hereford (with the manuscript note as primary evidence) and Purvey (as a later attribution, doubted by Dove and Hudson), with the approximate dates of the two versions.
- **Evidence:** Own knowledge; Wikipedia "John Wycliffe" (opened) gives Hereford for the Old Testament, Purvey's revision 1388, and multiple translators. Mary Dove's book (cited in the dating note; exists, Cambridge 2007) discusses exactly these attributions. Grep for "Hereford", "Purvey", "Lollard" in events/ returned nothing for this entry.
- **Confidence:** medium

### C · historical · src/content/events/high-and-late-middle-ages/unam-sanctam.md
- **Text:** "he died in Rome on 12 October [[cite:anagni]]"
- **Problem:** 12 October is Villani's date (8.63: "on the 12th day of October in the year of Christ 1303"), given here in the wiki's own voice (the "reports that" governs the seizure at Anagni, and a full stop intervenes). The accepted date of Boniface VIII's death is 11 October 1303.
- **Should be:** "he died in Rome in October 1303 (on the 12th, Villani says; the date usually given is the 11th)".
- **Evidence:** Villani 8.63 read in the Selfe/Wicksteed translation (archive.org villanischronicl00villuoft). 11 October: own knowledge (Catholic Encyclopedia "Boniface VIII"; Wikipedia).
- **Confidence:** medium

### C · completeness · src/content/events/high-and-late-middle-ages/avignon-papacy.md
- **Text:** "the papal court settles at Avignon on the Rhône and stays for some seventy years" (summary); body names only Clement V, John XXII and Gregory XI
- **Problem:** Four of the seven Avignon popes (Benedict XII, Clement VI, Innocent VI, Urban V) are never named in the event that is the wiki's account of the period. Two facts a careful reader expects are missing: Urban V actually took the court back to Rome in 1367 and returned to Avignon in 1370, so the stay was not unbroken; and Avignon was not French territory but a city of the counts of Provence (Angevin kings of Naples), bought by Clement VI from Joanna of Naples in 1348. Bridget of Sweden, the other great voice calling the popes home, is absent from the whole wiki.
- **Should be:** One sentence listing the seven popes; one on Urban V's return of 1367–70; a clause on the purchase of 1348.
- **Evidence:** Own knowledge; grep for "Urban V\b", "Benedict XII" (only in the hesychast entry), "Bridget|Birgitta" in src/content returned nothing relevant.
- **Confidence:** high

### C · completeness · src/content/events/high-and-late-middle-ages/western-schism.md
- **Text:** "The modern editor of the decrees of Constance says that Pisa elected Alexander V as a third pope"
- **Problem:** The entry says Pisa "cited both claimants to hear its judgment" but never says what the judgment was: on 5 June 1409 the council declared both Gregory XII and Benedict XIII deposed as schismatics and heretics, and only then (26 June) elected Alexander V. Without the deposition the election of a "third pope" is unexplained. The entry also ends the schism in 1417 without noting that Benedict XIII never submitted and kept a line going at Peñíscola until 1429.
- **Should be:** Add "which declared both deposed on 5 June 1409" (the source note admits the source book lacks the sentence; Mansi 26 or the Tanner introduction can carry it), and a clause on Benedict XIII's refusal.
- **Evidence:** Own knowledge (standard); the wiki's own source entry council-of-pisa-1409 says "The source book does not print the sentence of deposition".
- **Confidence:** high

### C · plausibility · src/content/events/high-and-late-middle-ages/black-death.md
- **Text:** "At [[place:strasbourg]], says the city's chronicler Jacob of Königshofen, the Jews were burned ... on 14 February 1349, about two thousand of them."
- **Problem:** Königshofen was born about 1346 and wrote between about 1380 and 1420, taking the passage from the older Closener; the wiki's own source entry says so. The event presents him simply as "the city's chronicler", next to genuinely contemporary witnesses, and the dating note uses him to fix the day. This is the "late source presented as contemporary" defect the authoring guide names (rule 4). (Knighton, by contrast, is correctly flagged "a generation later".)
- **Should be:** "says the Strasbourg chronicler Jacob of Königshofen, writing a generation later from the older chronicle of Closener, ..."
- **Evidence:** src/content/sources/konigshofen-chronicle.md (read); own knowledge of Twinger von Königshofen's dates (1346–1420).
- **Confidence:** high

### C · completeness · src/content/events/high-and-late-middle-ages/black-death.md
- **Text:** summary "Plague spreads through Europe, reaching Florence, Avignon and Paris in 1348"; `date.start: 1347`
- **Problem:** The entry gives local figures (Florence, Avignon, Strasbourg) but nothing on the scale of the whole: no statement that modern estimates put the dead at roughly a third to a half of Europe's population, and nothing on the arrival of the plague in 1347 (Messina, October 1347, from the Black Sea), although the entry is dated from 1347. The effect on the church that later entries presuppose (loss of clergy, chantries, the mood behind the flagellants) is therefore left without a measure. The dating note is candid that 1347 and 1351 are untraced; a primary witness for 1347 exists (Michael of Piazza on Messina; Gabriele de' Mussi on Caffa).
- **Should be:** A sentence in the dating note naming a modern estimate with its author (e.g. Ole Benedictow, *The Black Death 1346–1353*, 2004; or the range in Rosemary Horrox, *The Black Death*, 1994), and a clause on the arrival in Sicily in 1347.
- **Evidence:** Own knowledge; entry read in full.
- **Confidence:** medium

### C · completeness · src/content/events/high-and-late-middle-ages/council-of-constance.md
- **Text:** "On 6 July the council condemned thirty articles from his writings, declared him a heretic ..." (whole entry)
- **Problem:** Jerome of Prague, Hus's companion, tried by the same council, who recanted, withdrew his recantation and was burned at Constance on 30 May 1416 (session 21), is not mentioned here or anywhere in the wiki. The council burned two men, not one; Poggio Bracciolini's eyewitness letter on Jerome's death is a well-known primary source.
- **Should be:** One sentence after the burning of Hus: "Jerome of Prague, who had come to support him, was condemned and burned on the same spot on 30 May 1416 (session 21)."
- **Evidence:** grep -r "Jerome of Prague" src/content returns nothing; date from own knowledge (Tanner, Decrees, session 21).
- **Confidence:** high

### C · completeness · src/content/events/high-and-late-middle-ages/devotio-moderna.md
- **Text:** "his followers form houses that live in common by copying books" / "the first of the congregations of clerks"
- **Problem:** The name by which these houses are universally known, the Brethren (and Sisters) of the Common Life, does not occur in the entry or anywhere in the wiki (grep "Common Life" returns nothing). A reader coming from Erasmus, Luther's schooling at Magdeburg, or any handbook will not find them. The entry also does not say that the Windesheim congregation grew into a chapter of dozens of houses, which is why the movement mattered beyond Deventer.
- **Should be:** Add the name once ("known as the Brothers and Sisters of the Common Life"), attributed if need be to a document that uses it (e.g. the Constance-era defence by Gerard Zerbolt, or the papal approbations).
- **Evidence:** grep; own knowledge.
- **Confidence:** high

### C · completeness · src/content/events/high-and-late-middle-ages/council-of-florence.md
- **Text:** "The emperor ... sailed from Constantinople to Italy with the patriarch Joseph ... The Orthodox Church did not receive the union"
- **Problem:** Three things a careful reader would miss. (1) The council at Ferrara–Florence was Eugene IV's transfer of the Council of Basel, which stayed in session against him, declared him deposed in June 1439 and elected Felix V that November; the Greeks had to choose between two Latin assemblies. The papal-primacy definition of Laetentur caeli was aimed at Basel as much as at the Greeks. Basel appears in the wiki only for the Hussite Compacts. (2) Patriarch Joseph II died at Florence on 10 June 1439, before the decree, so the Greek church signed without a patriarch. (3) The reception in Rus: Isidore proclaimed the union in Moscow in 1441, was arrested by Grand Prince Vasily II, and in 1448 the Russian bishops elected a metropolitan without Constantinople — the root of Moscow's independence (grep "1448" in events/ returns nothing; moscow-patriarchate does not mention Isidore).
- **Should be:** A clause on Basel in the first paragraph; a clause on Joseph's death; a sentence on Moscow in the last paragraph.
- **Evidence:** Own knowledge; greps described; entry read in full.
- **Confidence:** high (facts), medium (how much belongs in this entry)

### C · historical · src/content/events/high-and-late-middle-ages/baptism-of-the-king-of-kongo.md
- **Text:** "According to Pina, Portuguese ships under Diogo Cão reached the kingdom of Kongo in 1485."
- **Problem:** Pina's chapter 57 does date the voyage it describes to 1485, but in the same sentence he says Cão "had already been there once before as his discoverer" ("que outra vez ja la fora também por seu descobridor"). The first arrival at the mouth of the Congo, where Cão set up the padrão of São Jorge, is dated 1482–83, and the hostages were taken on that first voyage and returned on the second. The entry turns Pina's telescoped account into a first contact in 1485, and the dating note does not flag it.
- **Should be:** "According to Pina, a fleet under Diogo Cão, who had been on that coast before, reached Kongo in 1485" plus a line in the dating note that the first contact is usually put in 1482/83 on the evidence of the padrão.
- **Evidence:** Pina ch. 57 read in the archive.org full text of collecadeliv02corruoft (p. 145). 1482/83: own knowledge (inscription of the São Jorge padrão; Barros, Década I.3.3).
- **Confidence:** medium

### C · completeness · src/content/events/high-and-late-middle-ages/christianity-reaches-the-americas.md
- **Text:** title "Christianity Crosses the Atlantic"; "A second fleet of seventeen ships left Cadiz that September ... Pané, a friar of the order of St Jerome, stayed when other friars went home."
- **Problem:** (1) The leader of the clergy on the second voyage, the Minim (former Benedictine) Bernardo Buil/Boyl, whom Alexander VI made his vicar for the new lands by the bull *Piis fidelium* of 25 June 1493 and who is the celebrant tradition assigns to the mass of 6 January 1494, is not named; "other friars went home" hides the collapse of the first mission when he returned to Spain in 1494. (2) The title and the event id ("christianity-reaches-the-americas") imply a first arrival. The Norse settlements in Greenland had a bishopric (Garðar, from the 1120s) and churches until the fifteenth century; the wiki mentions Greenland only for the Moravians. A clause would prevent the implied "first".
- **Should be:** Name Buil and the bull of 25 June 1493; add a clause acknowledging the earlier Norse church in Greenland.
- **Evidence:** Own knowledge; grep "Buil|Boyl" (no relevant hit) and "Greenland" (only sources/moravian-memorial-days.md).
- **Confidence:** medium

## Completeness of this stretch

Greps were run over `src/content/events` (and people/places/sources where noted) for each term in quotation marks.

- **Suppression of the Templars and the Council of Vienne (1307–1312).** An ecumenical council and the most notorious use of the inquisition by a king; "Templar" occurs only in the Jesuit-suppression entry, "Vienne" only as the Gaulish town. Belongs between unam-sanctam and avignon-papacy.
- **The Council of Basel (1431–1449) and the end of conciliarism.** Mentioned only for the Hussite Compacts and in two person pages; no account of its conflict with Eugene IV, the antipope Felix V, the Pragmatic Sanction of Bourges (1438) or *Execrabilis* in context. The Constance entry's "remain contested" paragraph has nowhere to point.
- **The poverty controversy, John XXII, William of Ockham and Marsilius of Padua (1320s).** "Ockham", "Fraticelli", "Spiritual Franciscans" return nothing; Marsilius appears only as a name in Gregory XI's bull. First-rank for late-medieval ideas of church and state and for the background to Wycliffe and Hus.
- **Late-medieval mysticism.** "Eckhart" (condemned 1329), "Tauler", "Julian of Norwich", "Bridget/Birgitta", "Marguerite Porete", "Beguine" all return nothing; Ruysbroeck is a clause in devotio-moderna. Catherine of Siena has a person page but no event.
- **The collapse of Christianity in Asia.** The conversion of the Ilkhans to Islam ("Ghazan", 1295), the end of the Latin and Church-of-the-East presence in China with the Yuan (1368) and Timur's devastation ("Timur|Tamerlane") are absent; the rabban-sauma and franciscans-in-asia entries end on a high point and nothing tells the reader the churches they describe disappeared.
- **Lithuania's baptism and the union with Poland (1386–87)** — the last pagan state in Europe; "Lithuania|Jogaila" returns nothing. Belongs under mission-and-expansion.
- **Russia after Florence:** the rejection of Isidore (1441) and the independent election of Metropolitan Jonah (1448); "1448" returns nothing in events. Needed to connect council-of-florence with moscow-patriarchate. Also absent: "Kulikovo", "Rublev", "Stephen of Perm", "Nil Sorsky|Joseph of Volokolamsk".
- **Balkan Orthodoxy under the Ottomans before 1453:** Serbian patriarchate (1346), "Kosovo" (1389) — nothing.
- **Ethiopia in the fifteenth century:** "Zara Yaqob" returns nothing; the Ethiopian delegation at Florence (1441) is not mentioned in the Florence entry, which lists only Armenians and Copts.
- **The Portuguese padroado bulls** *Dum diversas* (1452) and *Romanus pontifex* (1455), which the Holy See's 2023 statement (cited in christianity-reaches-the-americas) names alongside *Inter caetera*; "Romanus Pontifex|Dum diversas" returns nothing. They also bear on the Kongo entry and the Atlantic slave trade. Likewise "Tordesillas" (1494) is absent.
- **The end of Muslim Granada (1492) and the forced conversions of 1499–1502;** "Moriscos", "conquest of Granada", "Cisneros" return nothing. The spanish-inquisition entry mentions Granada only as the place of the edict and the destination of fines.
- **Witchcraft:** *Summis desiderantes* (1484) and the *Malleus maleficarum* (1486); "Malleus|witch" returns nothing in events.
- **Lollardy after Wycliffe:** *De heretico comburendo* (1401), Oldcastle; a source file for the statute exists but no event uses "Lollard".
- **Between 1493 and 1516** the timeline is empty: Savonarola (burned 1498), the Fifth Lateran Council (1512–17; cited only as a source in unam-sanctam), the Complutensian Polyglot. "Savonarola" returns nothing.
- Thinly covered inside existing entries (see findings): the 1347 Palamite council; the Avignon popes between John XXII and Gregory XI; Jerome of Prague; the Brethren of the Common Life by name; Hereford and Purvey; Pisa's sentence of deposition.

## Files checked with nothing to report

rabban-sauma, sergius-of-radonezh, hussite-movement, joan-of-arc, fall-of-constantinople, gutenberg-bible, spanish-inquisition

(For these the dates, figures and quotations I could test all held: Budge's pagination, the "[read 1600] = 1288" correction, the twelve cardinals, the Palm Sunday communion and Chabot's 24 June 1287 note and the "iiij nonas aprilis" dating clause for rabban-sauma; Simeon's reign, the Akhmyl synchronism and the 23/78 arithmetic for sergius; 30 July and 16 August 1419, 1 March 1420 in Martin V's third year, the Sunday after Corpus Christi 1434 = 30 May, 5 July 1436 for the Hussites; the weekday Wednesday 30 May 1431, 11 June 1455 and 7 July 1456 for Joan; Tuesday 29 May 1453 and the defenders' and captives' figures for Constantinople; Piccolomini's 158/180 copies and the Helmasperger date for Gutenberg; Lea vol. 1 and vol. 4 for every number in the Spanish Inquisition dating note, and "eight" Dominicans in the brief of 11 February 1482, which Lea gives as "seven" but J. M. Cruselles, *Medievalismo* 30 (2020), who read the bull, gives as eight. Minor remarks not raised as findings: the hussite entry stops at 1436 without saying that Rome never ratified the Compacts and Pius II annulled them in 1462; the spanish-inquisition dating note declines to give any estimate later than Lea, so the now-usual lower figures for the exiles are absent; the gutenberg entry reports without comment the Library of Congress's "one of three perfect vellum copies" beside Göttingen's own complete vellum copy, which makes four.)

## Method note

Bible citations verified: 2 (the only two in the batch: Matt 17:1-2, John 8:12), both sound. Opened and searched the full texts of nine cited works on archive.org (Budge, Chabot, Villani, Knighton vol. 2, Foxe vol. 3, Lea vols. 1 and 4, Rui de Pina, the Venette continuation) and four web pages (Wikipedia "John Wycliffe", New Advent "Hesychasm", the cited translation of the Palamite tomes twice), plus one web search; scholarship named in dating notes (Dove 2007, Lea 1906–07, Ruelens/Malou, Chabot 1895) exists and says what is claimed where I could read it.
Could not open: gutenberg.org was down for maintenance throughout (so Catherine's letters, Murray's Joan of Arc, Thatcher–McNeal, the Decameron, the Imitation, Peter Martyr, Columbus and Chanca were checked against memory only), and cervantesvirtual.com returned 403 (Fita's Latin texts of Sixtus IV's bulls; checked through Lea instead). The azbyka.ru Life of Sergius, Doukas/Sphrantzes/Kritoboulos locators and the Höfler page references were not opened.
