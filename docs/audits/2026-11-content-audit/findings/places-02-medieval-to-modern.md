# Places, second half (mostly late antique to modern)

Reviewer batch L02. Severity: A = factual error, B = misleading, unsupported or inconsistent, C = minor imprecision or omission. See the [audit report](../README.md) for method and limits.

## Findings

### B · consistency · src/content/places/esztergom.md
- **Text:** "Hartvic, rewriting that Life about a century later, has Stephen's envoy ask the pope to confirm Esztergom as the metropolis"
- **Problem:** "That Life" is the older (Greater) Legend, which the wiki's own source record dates c. 1083–1100; Hartvic's reworking is dated c. 1100–1116 in its source record ("after 1095" in the event's dating note). Hartvic therefore wrote a generation at most after the Life he rewrote, not a century. The event entry has the phrase right: "about a century after the event" (the coronation of c. 1000).
- **Should be:** "Hartvic, rewriting that Life a generation later, about a century after Stephen's coronation, has …"
- **Evidence:** `src/content/sources/greater-legend-of-saint-stephen.md` (written 1083–1100, "late eleventh century"); `src/content/sources/hartvic-life-of-king-stephen.md` (written c. 1100–1116); `src/content/events/*/stephen-of-hungary.md` line 83 ("about a century after the event") and dating note ("reworking that Life after 1095").
- **Confidence:** high

### C · historical · src/content/places/northampton-massachusetts.md
- **Text:** "an inland town, far from the sea-ports and in a corner of the country, whose first minister was ordained in 1669"
- **Problem:** The sentence faithfully relays Edwards ("The Rev. Mr. Eleazer Mather, who was the first, was ordained in July, 1669"), but Edwards's date is a known slip: Eleazar Mather was ordained when the Northampton church was gathered in June 1661 and died in July 1669 (Stoddard "came first to the town the November after his death", i.e. November 1669, as Edwards himself goes on to say). The place entry therefore passes on a wrong founding-era date as if it were information about the town.
- **Should be:** Either drop the clause, or write "whose first minister, he says, was ordained in 1669 (the year in fact of that minister's death; the church was gathered and Eleazar Mather ordained in 1661)" — or simply "whose church dated from the 1660s".
- **Evidence:** CCEL text of the Faithful Narrative (https://ccel.org/ccel/edwards/works1/works1.viii.ii.html) read: "was ordained in July, 1669 … Mr. Stoddard who succeeded him, came first to the town the November after his death; but was not ordained till September 11, 1672". Mather's ordination on 18 June 1661 and death on 24 July 1669: own knowledge (standard in Trumbull's *History of Northampton* and Sibley's *Harvard Graduates*); I could not open a reference page to confirm the exact days.
- **Confidence:** medium

### C · historical · src/content/places/amsterdam.md
- **Text:** summary: "here the congregation of John Smyth and Thomas Helwys adopted believers' baptism and printed its confession of 1611"
- **Problem:** By 1611 there was no longer one "congregation of John Smyth and Thomas Helwys": Smyth and the majority had applied to join the Waterlander Mennonites in 1610 and Helwys's small party had broken with him over it. The confession of 1611 is the declaration of Helwys's separated group only (the body of the entry says so correctly: "issued by Thomas Helwys and his party"). The summary merges the two groups.
- **Should be:** "here John Smyth's congregation adopted believers' baptism in 1609, and the party of Thomas Helwys that broke with him issued its confession in 1611."
- **Evidence:** The entry's own body and `src/content/events/*/first-baptists.md` (summary: "Thomas Helwys leads part of the group back to London"); own knowledge for the 1610 split.
- **Confidence:** medium

### C · historical · src/content/places/halle.md
- **Text:** summary: "the missionaries sent to Tranquebar in 1706 studied at its university"
- **Problem:** Ziegenbalg and Plütschau were sent out in 1705 (ordained at Copenhagen and embarked in November 1705) and landed at Tranquebar on 9 July 1706; 1706 is the year of arrival, not of sending. The event entry dates the king's care for the mission from 1705 and the landing to July 1706.
- **Should be:** "the missionaries who landed at Tranquebar in 1706 had studied at its university"
- **Evidence:** `src/content/events/*/tranquebar-mission.md` (dating note and first paragraph: 1705; "On 9 July 1706 their ship reached Tranquebar"); own knowledge for the departure from Copenhagen on 29 November 1705.
- **Confidence:** medium

### C · completeness · src/content/places/worms.md
- **Text:** summary: "A cathedral city on the left bank of the upper Rhine. The concordat of 1122 between pope and emperor was concluded here." (the body treats only 1122)
- **Problem:** The entry says nothing of the two other events the wiki itself places at Worms: Luther's appearance before Charles V at the diet of April 1521 and the Edict of Worms (`diet-of-worms`, which lists `worms` as a place), and the printing of Tyndale's English New Testament there in 1526 (`tyndale-new-testament`). A reader who reaches the place page from the Luther entry finds only the twelfth century.
- **Should be:** Add a sentence each, cited from the sources those events already use, on the diet of 1521 and on Tyndale's New Testament of 1526; mention them in the summary.
- **Evidence:** `places:` lists of `diet-of-worms`, `tyndale-new-testament`, `concordat-of-worms` (all contain `worms`).
- **Confidence:** high

### C · completeness · src/content/places/beijing.md
- **Text:** summary: "Capital of China and seat of the Ming court when Matteo Ricci arrived in 1601 …"; altNames: [Peking, Pekin, Paquin]
- **Problem:** The entry begins with Ricci. The wiki uses the same place id for the Mongol capital Khanbaliq (Cambaluc, Dadu) in `franciscans-in-asia` (John of Montecorvino's church, by 1305) and `rabban-sauma` (the monk "from Beijing"), and for the baptism of Yi Seung-hun in 1784 (`first-korean-baptism`), the rites controversy and the Three-Self movement. Neither the name Khanbaliq nor any of this appears in the entry or its altNames, so the pin for the thirteenth- and fourteenth-century events leads to a page that does not explain that Khanbaliq is Beijing.
- **Should be:** Add "Khanbaliq, Cambaluc, Dadu" to altNames and a sentence that the Mongol khans' capital Khanbaliq, where John of Montecorvino built his church, stood on the site; mention the baptism of 1784.
- **Evidence:** `places:` lists of `franciscans-in-asia`, `rabban-sauma`, `first-korean-baptism`, `chinese-rites-controversy`, `three-self-movement`; `grep -ril "khanbaliq\|cambaluc" src/content/places/` returns nothing.
- **Confidence:** high

### C · completeness · src/content/places/avignon.md
- **Text:** summary: "City on the Rhône where the papal court resided for most of the fourteenth century, from the time of Clement V until Gregory XI returned to Rome in 1377."
- **Problem:** The summary ends Avignon's papal history in 1377. From 1379 the city was again the seat of a papal court, that of Clement VII and Benedict XIII, the "Avignon line" of the Great Western Schism (to 1403), which the wiki treats in `western-schism` with `avignon` as a place and which the Pisa entry calls the line "of Avignon". The entry does not mention it.
- **Should be:** Add: "From 1379 it was the seat of Clement VII and then Benedict XIII, the Avignon line of the Great Schism."
- **Evidence:** `src/content/events/*/western-schism.md` lists `avignon`; `src/content/places/pisa.md` ("a third line beside those of Rome and Avignon"); own knowledge for 1379 and 1403.
- **Confidence:** high

### C · completeness · src/content/places/basel.md
- **Text:** summary: "City on the Rhine where Johann Froben printed Erasmus's Greek and Latin New Testament in 1516. The university library there keeps a copy."
- **Problem:** The entry omits the general council that sat at Basel from 1431 to 1449, whose legates conceded the lay chalice to the Hussites in the Compacts (the wiki's `hussite-movement` lists `basel` and speaks of "legates of the Council of Basel"), and the first printing of Calvin's *Institutes* at Basel in 1536 (`calvin-in-geneva`). For a church-history gazetteer the council is the city's chief claim.
- **Should be:** Add a sentence on the Council of Basel (1431–1449) and the Compacts, and one on the *Institutes* of 1536.
- **Evidence:** `places:` lists of `hussite-movement` and `calvin-in-geneva`; their summaries ("legates of the Council of Basel concede the chalice at Jihlava"; "publishes the Institutes … at Basel in 1536").
- **Confidence:** high

### C · completeness · src/content/places/paris.md
- **Text:** summary: "City of the French kings on the Seine. Its schools drew masters and students in the twelfth century, and by 1215 the masters and scholars together formed a university with statutes of its own."
- **Problem:** The entry stops in 1231. The wiki places seven more events at Paris, among them the St Bartholomew's Day massacre of 1572, the years in which Ignatius gathered his first companions at the university, Thomas Aquinas's teaching, Rabban Sauma's visit, and the Revolution's measures against the church; none is mentioned. The massacre in particular is an event of the city itself.
- **Should be:** Add two or three cited sentences (Ignatius and his companions in the 1530s, 24 August 1572, the 1790s) or at least "See" links.
- **Evidence:** `places:` lists of `st-bartholomews-day-massacre`, `society-of-jesus`, `thomas-aquinas`, `rabban-sauma`, `french-revolution-and-the-church`, `jansenism`.
- **Confidence:** high

### C · completeness · src/content/places/london.md
- **Text:** summary: "The capital of England. Parliament at Westminster passed the Acts that separated the English church from Rome, and John Fisher and Thomas More were beheaded on Tower Hill in 1535."
- **Problem:** The entry covers 1534–1552 only. Thirteen further events of the wiki list London, including the condemnation of Wycliffe's teaching at the house of the Friars Preachers in 1382, the Smithfield burnings, the Westminster Assembly (1643), the King James Bible, Wesley's Aldersgate experience (1738) and the Lambeth Conferences. None is mentioned, and the entry gives no hint that Westminster and Lambeth belong to it.
- **Should be:** Add Westminster, Lambeth and Smithfield to altNames or the body, with a sentence each on 1382, 1643 and 1738.
- **Evidence:** `places:` lists of `wycliffe-bible`, `marian-persecutions`, `westminster-assembly`, `king-james-bible`, `wesley-and-methodism`, `lambeth-quadrilateral`, `toleration-act`, `bible-society`, `salvation-army`, `abolition-of-the-slave-trade`, `elizabethan-settlement`, `regnans-in-excelsis`, `first-baptists`.
- **Confidence:** high

### C · completeness · src/content/places/prague.md
- **Text:** summary: "Capital of the kingdom of Bohemia and seat of its university, where Jan Hus taught and preached before he left for the Council of Constance in 1414."
- **Problem:** Nothing is said of what happened in Prague after Hus: the rising of 1419, the crusade that failed before the city in 1420 and the Four Articles of Prague (`hussite-movement`), or the defenestration of 1618 that opened the Thirty Years' War (`thirty-years-war`). Both events list `prague`. The Bethlehem Chapel, where Hus preached, is not named either.
- **Should be:** Add a sentence on 1419–1420 and the Four Articles and one on 1618.
- **Evidence:** `places:` lists and summaries of `hussite-movement` and `thirty-years-war`.
- **Confidence:** high

### C · completeness · src/content/places/oxford.md
- **Text:** summary: "University town on the Thames. John Wycliffe taught Scripture here, and in 1377 the pope rebuked the university for letting his teaching spread."
- **Problem:** The entry omits the burning of Latimer and Ridley (1555) and Cranmer (1556) at Oxford, which the wiki tells in `marian-persecutions`, and the Oxford Movement that takes its name from the university (`oxford-movement`, from Keble's sermon of 1833). Both events list `oxford`.
- **Should be:** Add a sentence on 1555–1556 and one on 1833.
- **Evidence:** `places:` lists of `marian-persecutions` and `oxford-movement`.
- **Confidence:** high

### C · completeness · src/content/places/moscow.md
- **Text:** summary: "Capital of the Russian tsars and seat of the metropolitans of Russia. In 1589 its metropolitan became a patriarch …"
- **Problem:** The entry ends in 1590. It does not say that the patriarchate it describes was left vacant after 1700 and that the Synod took the patriarch's place in 1721 (`holy-synod-of-russia`), nor that it was restored at the Moscow council of 1917–1918 (`russian-revolution-and-the-church`), nor mention Nikon's reforms and the council of 1666–1667 (`nikon-and-the-old-believers`). A reader is left to assume an unbroken patriarchate.
- **Should be:** Add: "The patriarchate was left vacant from 1700, replaced by the Synod in 1721 and restored by the council that met in Moscow in 1917."
- **Evidence:** `places:` lists of `nikon-and-the-old-believers` and `russian-revolution-and-the-church`; `src/content/places/saint-petersburg.md`.
- **Confidence:** high

### C · completeness · src/content/places/amsterdam.md
- **Text:** summary: "Trading city in Holland. English Separatists took refuge here in the early seventeenth century …"
- **Problem:** The entry omits the founding assembly of the World Council of Churches, held at Amsterdam from 22 August to 4 September 1948, which the wiki's `world-council-of-churches` places here.
- **Should be:** Add a sentence on the first assembly of the World Council of Churches in 1948.
- **Evidence:** `places:` list of `world-council-of-churches`.
- **Confidence:** high

### C · completeness · src/content/places/nagasaki.md
- **Text:** summary: "Port in western Japan through which Portuguese and Spanish ships traded. Twenty-six Christians were crucified on a hill outside the town on 5 February 1597."
- **Problem:** The entry stops at 1597. The wiki's `hidden-christians-of-japan` (1865) is set at Nagasaki, where villagers of Urakami made themselves known to Fr Petitjean in the new church at Ōura, and Nagasaki was also the main scene of the persecution after 1614. None of this appears.
- **Should be:** Add a sentence on 17 March 1865 at the Ōura church and the Urakami Christians.
- **Evidence:** `places:` list of `hidden-christians-of-japan`.
- **Confidence:** high

### C · completeness · src/content/places/edinburgh.md
- **Text:** summary: "Capital of Scotland. The Parliament that met here in 1560 ratified the Scots Confession …"
- **Problem:** The entry omits the World Missionary Conference of 14–23 June 1910, which the wiki treats in its own event `edinburgh-1910` with `edinburgh` as its place.
- **Should be:** Add a sentence on the conference of 1910 in the Assembly Hall on the Mound.
- **Evidence:** `src/content/events/*/edinburgh-1910.md`; event index line "14–23 June 1910 edinburgh-1910".
- **Confidence:** high

### C · completeness · src/content/places/kyiv.md
- **Text:** summary: "City of the Rus' on the Dnieper, Vladimir's seat. The Primary Chronicle, compiled there, tells how Vladimir destroyed its idols …"
- **Problem:** The entry treats only 988–996. It does not say that Kyiv was the seat of the metropolitans "of Kiev and all Rus'" (the title the Union of Brest and the Moscow entries turn on) or mention the enthronement of the primate of the Orthodox Church of Ukraine there in 2019 (`autocephaly-of-ukraine` lists `kyiv`).
- **Should be:** Add a sentence on the metropolitan see and one on 2018–2019.
- **Evidence:** `places:` list of `autocephaly-of-ukraine`; `src/content/places/brest.md` ("metropolitanate of Kiev").
- **Confidence:** medium

### C · completeness · src/content/places/munster.md
- **Text:** summary: "City in Westphalia, in north-western Germany. It was one of the two seats of the peace congress appointed to open in July 1643. …"
- **Problem:** The entry (and the wiki as a whole) is silent on the episode for which Münster is best known in Reformation history: the Anabaptist rule of the city in 1534–1535 under Jan Matthys and Jan van Leiden, its siege and fall to the bishop in June 1535, and the cages hung on the tower of St Lambert's. That episode shaped how every later government treated Anabaptists and is the background of Menno Simons's peaceful regrouping; the `anabaptists` event stops at Schleitheim (1527) and never mentions it.
- **Should be:** Add a short paragraph on 1534–1535 (primary sources: Hermann von Kerssenbrock's narrative, Heinrich Gresbeck's eyewitness account, Rothmann's *Restitution*), and a sentence or follow-on in `anabaptists`.
- **Evidence:** `grep -rl "Anabaptist kingdom\|Jan of Leiden\|John of Leiden\|Bockelson" src/content` returns nothing; own knowledge for the events.
- **Confidence:** high

## Completeness of this stretch

Checked with `ls src/content/places/` (254 entries), a count of `region:` values over all places, the event index, and `grep -rl` over `src/content/events`, `places` and `people` for each name below.

- **Oceania has no place and no event at all** (`region: oceania` = 0; grep for Tahiti, Polynesia, Pacific Island, Māori, New Zealand, Australia finds only passing mentions in `clergy-abuse-crisis` and `florence-li-tim-oi`). The Pacific is the one region that became majority-Christian largely through islander evangelists; the LMS landing at Tahiti (1797), Marsden's first service in the Bay of Islands (1814) and the Tongan and Samoan teachers who carried the faith on to Fiji and Melanesia would belong in the awakenings-and-missions era, with places such as Matavai Bay (Tahiti) and the Bay of Islands.
- **Latin America is thin: four places** (La Isabela, Tepeyac, Medellín, San Salvador) and nothing between 1537 and 1968. Missing entirely (grep for Brazil, reductions/Guaraní, Lima as a see, Mexico City as a see, Quebec, Baltimore as a see): Mexico City (the twelve Franciscans of 1524, the first diocese and councils), Lima (the Third Council of 1582–83 and its catechism in Quechua and Aymara), the Jesuit reductions of Paraguay (not mentioned even in `suppression-of-the-jesuits`), Santo Domingo as the place of Montesinos's sermon of 1511 (mentioned only inside `sublimis-deus`), and Brazil, the country with the most Catholics and one of the largest Pentecostal populations, which the wiki never names.
- **Sub-Saharan Africa: eleven places**, reasonable for the events covered, but nothing on twentieth-century African-initiated Christianity beyond Kimbangu (no Aladura churches, no William Wadé Harris, no East African Revival; grep finds none) and no Freetown, though Sierra Leone is where `samuel-ajayi-crowther` begins.
- **The Philippines** (grep: only a mention in `japan-martyrs`): Asia's largest Christian population has neither event nor place (Cebu 1521/1565, Manila as an archdiocese from 1595).
- **Münster 1534–1535, the Anabaptist kingdom**: absent from the wiki (see the finding on `munster.md`); it belongs in `anabaptists` or in an event of its own.
- **The Leipzig Disputation of 1519** (Luther and Eck; grep for "Leipzig Disputation" and "Eck" finds nothing relevant): the point at which Luther denied the infallibility of councils and the dispute moved from indulgences to authority. `leipzig.md` treats only 1989; the disputation would fit between `ninety-five-theses` and `diet-of-worms`.
- **Savonarola and Florence 1494–1498** (grep: no hit): not covered; `florence.md` treats only the council of 1439.
- **Santiago de Compostela and medieval pilgrimage** (grep "Compostela": no hit), and Cologne, Chartres and Trier as places: no entries. Pilgrimage, relics and the cult of saints have no event of their own in the medieval era (no file in `events/high-and-late-middle-ages` contains the word "pilgrimage"), which makes the Reformation's attack on them hard to follow.
- **Fátima (1917) and Taizé (1940/1949)** (grep: no hit): the largest Marian pilgrimage of the twentieth century and the ecumenical community are both absent; Lourdes is covered.
- **Novgorod, Ohrid, Tarnovo/Peć** as places: the Slavic Orthodox world between Kyiv (988) and Moscow (1589) is represented by Sergiyev Posad alone; eastern-europe-and-russia has six places in all.
- **Place entries that tell one episode only.** Besides the cases reported as findings (Worms, Paris, London, Basel, Beijing, Prague, Oxford, Moscow, Avignon, Amsterdam, Nagasaki, Edinburgh, Kyiv, Münster), smaller instances of the same pattern: `venice.md` (the *Philokalia* was printed there in 1782; `philokalia` lists the place), `boston.md` (`clergy-abuse-crisis`), `chicago.md` (`the-fundamentals`), `los-angeles.md` (`billy-graham`, the 1949 tent campaign), `macau.md` (`florence-li-tim-oi`: her wartime congregation), `bologna.md` (the council of Trent moved there in 1547, as `trent.md` says), `florence.md` (Black Death; Galileo), `toulouse.md` (`albigensian-crusade`).

## Files checked with nothing to report

chersonesus, thingvellir, canossa, bec, clermont, citeaux, clairvaux, bologna, lalibela, venice, assisi, beziers, toulouse, karakorum, naples, sergiyev-posad, florence, strasbourg, pisa, lutterworth, deventer, zwolle, constance, tabor, rouen, ferrara, granada, seville, mbanza-kongo, la-isabela, wittenberg, wartburg, zurich, frankenhausen, memmingen, marburg, antwerp, vilvoorde, speyer, tepeyac, geneva, valladolid, goa, kagoshima, trent, avila, heidelberg, dresden, brest, nantes, kochi, udayamperur, macau, shanghai, osnabruck, dordrecht, leiden, plymouth-massachusetts, gorgora, bristol, swarthmoor-hall, port-royal, fontainebleau, tranquebar, saint-petersburg, herrnhut, boston, seoul, philadelphia, richmond-virginia, kettering, serampore, kodiak, berlin, cane-ridge, fayette-new-york, salt-lake-city, battle-creek, low-hampton, saint-catherines-monastery, nanjing, lourdes, abeokuta, brighton, hangzhou, namugongo, chicago, los-angeles, pyongyang, dayton-tennessee, deir-ez-zor, nkamba, wuppertal, zhaoqing, flossenburg, nag-hammadi, chennai, pittsburgh, van-nuys, birmingham-alabama, medellin, lausanne, warsaw, san-salvador, cape-town, johannesburg, leipzig, sirte, lund

## Method note

All 126 files read in full. Coordinates: all 126 pins checked against my own knowledge, and 52 of the less obvious ones against Wikipedia's coordinates through its API (all within 0.1°; the Thingvellir pin sits on the Law Rock; same-named places — Halle (Saale), Münster in Westphalia, Tábor in Bohemia, Brest in Belarus, Richmond VA, Northampton MA, Birmingham AL, Clermont-Ferrand, Valladolid in Spain — are all on the right one). The batch contains a single Bible citation (Rev 3:7 in `philadelphia.md`), verified with the local tool. About 33 web pages or full texts opened to test source claims (vatican.va for the Brest letter; CCEL for Edwards; the Stasi Mediathek; the EKD Barmen page; Project Gutenberg mirror texts of Villani, Bradford, Murray's Joan of Arc, Knox, Saint-Simon, Hudson Taylor, Chanca, Peter Martyr; archive.org full texts of Rockhill's Rubruck, Rui de Pina, Xavier's letters, the China Inland Mission history, Álvares, Tellez, Thomas à Kempis's chronicle and Lives, Stock, Krey's Fulcher, Villehardouin, Doukas, Bernáldez, Wriothesley, Foxe): some sixty specific claims (dates, figures, quotations, distances) were checked and every one matched its source, including several I had doubted (Doukas's "overland" from Venice, Rockhill's "left bank of the Orkhon", Pina's 6 May–1 June church, Foxe's eighteen miles).
Not checked against the source: citations to works without an open full text or in Greek, Russian, Korean-mission French or Latin editions I did not open (Leo the Deacon, Primary Chronicle, Lampert, Ekkehard, Jordan of Saxony, Pelhisson, Tocco, Dallet, Sebastiani, the Valaam history, Li Tim-Oi's memoir, Petrarch's *Sine nomine* 5, which has no link); these were judged against own knowledge only and nothing looked wrong. Eleazar Mather's ordination year (1661) is from memory; Wikipedia's API was rate-limiting when I tried to confirm it.
