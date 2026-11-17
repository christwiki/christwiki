# Events: High and Late Middle Ages, 1075–1274

Reviewer batch E10. Severity: A = factual error, B = misleading, unsupported or inconsistent, C = minor imprecision or omission. See the [audit report](../README.md) for method and limits.

Batch: 19 event entries, high-and-late-middle-ages, 1075–1274. No A-level (plainly false) statement and no B-level defect was found: dates, canon numbers, quotations and the scholarship named in the dating notes checked out wherever I opened the source. What follows are C-level imprecisions and omissions.

## Findings

### C · historical · src/content/events/high-and-late-middle-ages/albigensian-crusade.md
- **Text:** "and on 22 July 1209 reached [[place:beziers]] [[cite:beziers]]"
- **Problem:** The cited chapter of Peter of les Vaux-de-Cernay dates the *capture* of the city to the feast of Mary Magdalene (22 July), not the army's arrival; it gives no day for the arrival. The army is normally said to have come up on 21 July and stormed the city the next day (the entry's own dating note also says the legates date "the fall" to 22 July).
- **Should be:** "The army turned on the lands of his nephew, the viscount of Béziers, and came before [[place:beziers]]; the city fell on 22 July 1209."
- **Evidence:** PL 213, col. 566 (archive.org djvu text of the cited volume): "Pervenientes igitur Biterrim nostri, transmiserunt in civitatem ... episcopum" (no date), then "Fuit autem capta civitas saepedicta in festo S. Mariae Magdalenae."
- **Confidence:** medium

### C · plausibility · src/content/events/high-and-late-middle-ages/first-crusade.md
- **Text:** "Albert of Aachen, writing some decades later" / dating note: "Albert of Aachen's work was written at some point between 1120 and the middle of the century"
- **Problem:** The date is Krey's of 1921 (correctly reported: Krey p. 12 says "somewhere between 1120 and the middle of the century"). The standard modern edition dates the first six books, which contain the Rhineland passage, to shortly after the crusade, so "some decades later" understates how early this witness is.
- **Should be:** Keep Krey but add: Susan B. Edgington (ed.), *Albert of Aachen: Historia Ierosolimitana* (Oxford Medieval Texts, 2007), argues that books 1–6 were written soon after 1102 and the later books in the 1120s; change the narrative to "Albert of Aachen, who did not go on the crusade and wrote from the reports of those who came back".
- **Evidence:** Krey's text opened (archive.org djvu, lines 777–818: dates for Albert, Robert "sometime before 1107", Baldric "after 1107", Guibert "between 1108 and 1112" all as the note reports). Edgington's dating from own knowledge; I did not open the 2007 introduction.
- **Confidence:** medium

### C · completeness · src/content/events/high-and-late-middle-ages/first-crusade.md
- **Text:** "Albert of Aachen ... reports attacks on the Jews of Cologne and [[place:mainz]] as the bands gathered. At Mainz the men of Count Emicho ... killed about seven hundred"
- **Problem:** The Rhineland massacres of May–June 1096 are told from one Christian writer only and for two towns. The Hebrew narratives written by the victims' communities (the Mainz Anonymous, the chronicle ascribed to Solomon bar Simson, Eliezer bar Nathan) are not used; Speyer (3 May) and Worms (18–25 May, about 800 dead) are not named; the Hebrew figure for Mainz (about 1,100) and the forced baptisms and self-killings they describe are absent. For Jerusalem likewise only Latin writers speak: the entry has no Muslim or Jewish witness (Ibn al-Qalanisi reports the Jews burned in their synagogue). Peter the Hermit and the popular crusade that preceded the princes are not mentioned ("Peter the Hermit" occurs only in a source page).
- **Should be:** One or two sentences citing a Hebrew chronicle (e.g. Solomon bar Simson in Eidelberg, *The Jews and the Crusaders*, or the extracts at sourcebooks.fordham.edu/source/1096jews-mainz.asp) for Speyer, Worms and Mainz, and one sentence from Ibn al-Qalanisi for the fall of Jerusalem.
- **Evidence:** Albert's text at the cited Fordham page read ("about seven hundred in number"; "greed of money"; "orders no one unwillingly, or under compulsion") — the entry reports it correctly. The rest from own knowledge; grep of `events/` for "Solomon bar", "Speyer"-type coverage found nothing.
- **Confidence:** high

### C · dating · src/content/events/high-and-late-middle-ages/rise-of-the-universities.md
- **Text:** "The privileges are dated: Frederick I's at Roncaglia in November 1158 [[cite:habita]]" / "Dana C. Munro ... says that it is generally taken to have been made for Bologna and may have been obtained by the Bolognese doctors, but was granted to scholars in general"
- **Problem:** The dating clause does read Roncaglia, November 1158, and Munro is reported accurately. But the only scholarship named is of 1895, and on this point it is superseded: Munro dismisses as "undoubtedly a forgery" the poem (Carmen de gestis Frederici) on which the Bologna connection rests; it is now accepted as genuine, and since W. Stelzer, "Zum Scholarenprivileg Friedrich Barbarossas (Authentica 'Habita')", *Deutsches Archiv* 34 (1978), the privilege is usually held to have been first granted to the Bologna scholars in May 1155 and inserted in the imperial legislation at Roncaglia in 1158.
- **Should be:** Add to the dating note that the text as transmitted is dated Roncaglia, November 1158, but that Stelzer (1978) argues it was first issued near Bologna in 1155; soften "it names no city" from an argument against Bologna into a plain statement.
- **Evidence:** Munro's note read in the archive.org text (lines 244–250: "generally said it was enacted for Bologna ... Bologna is not named. The historical poem ... is undoubtedly a forgery"; privilege "Given at Roncaglia, in the year of our Lord 1158, in the month of November"). Web search: summaries of Stelzer 1978 give May 1155 for the origin and 1158 for the promulgation; Britannica dates the Habita "c. 1155". Stelzer's article itself not opened.
- **Confidence:** medium

### C · completeness · src/content/events/high-and-late-middle-ages/rise-of-the-universities.md
- **Text:** summary: "The schools of twelfth-century Paris grow into a self-governing body of masters and students, and an emperor's law protects travelling scholars."
- **Problem:** The entry is in effect Paris only. Bologna appears only as the possible addressee of a law, with nothing on its student-run *universitates* (the other model of a university); Oxford is not mentioned at all (grep "Oxford" in this entry: none), nor the dispersal of 1209 and the legatine award of 1214; and the bull of 1231 is given without the riot and the two-year strike of 1229–1231 that produced it.
- **Should be:** A sentence each on Bologna's student guilds, on Oxford (masters attested from the later twelfth century; legate Nicholas of Tusculum's award of 1214), and on the 1229 dispersal as the occasion of *Parens scientiarum*.
- **Evidence:** own knowledge; entry text.
- **Confidence:** high

### C · completeness · src/content/events/high-and-late-middle-ages/murder-of-thomas-becket.md
- **Text:** summary: "He is venerated as a martyr, and the king does public penance at his tomb."
- **Problem:** The entry goes from the miracles to Avranches (1172) and the penance (1174) without the canonization: Alexander III declared Thomas a saint on 21 February 1173 (bull *Redolet Anglia*, 12 March 1173). That is the act that explains why the king came to the tomb as to a saint's shrine. The word "canoniz-" does not occur in the entry.
- **Should be:** Add: "On 21 February 1173 Alexander III canonized him", cited to the papal letter (Materials for the History of Thomas Becket, vol. 7, nos. 784–785) or to Hoveden under 1173.
- **Evidence:** own knowledge; grep of the entry.
- **Confidence:** high

### C · completeness · src/content/events/high-and-late-middle-ages/concordat-of-worms.md
- **Text:** "the pope was then kept under guard by the king's men [[cite:ekkehard-1111]]. A second privilege, of April, granted [[person:henry-v-emperor]] investiture with staff and ring [[cite:paschal-apr]]."
- **Problem:** The April 1111 privilege is told as if it were a second proposal. It was conceded after two months of captivity (agreement of Ponte Mammolo, 11 April), was followed by Henry's imperial coronation on 13 April, and was annulled as extorted by the Lateran synod of March 1112 (the "pravilegium"). Without this the reader cannot see why the question was still open in 1122.
- **Should be:** "After two months as the king's prisoner Paschal issued a second privilege, on 12 April, granting investiture with staff and ring, and crowned Henry emperor the next day; a Roman synod of 1112 declared the privilege void as extorted by force."
- **Evidence:** Avalon inv15 page opened (headings "Privilege of the first Convention, Feb. 12th, 1111" and "second Convention, April 12th, 1111" — the entry's dates are right); the captivity, coronation date and the 1112 synod from own knowledge.
- **Confidence:** high

### C · completeness · src/content/events/high-and-late-middle-ages/sack-of-constantinople.md
- **Text:** summary: "Pope Innocent III condemns the sack, but a Latin emperor is installed and the conquest stands."
- **Problem:** Innocent's reactions are compressed into one. He forbade attacks on Christians beforehand; on the first news of the conquest he welcomed it as God's work and took the new empire under papal protection (letters to Baldwin of 7 and 13 November 1204); only when he learned the details did he write the letter of July 1205 that the entry quotes. As it stands the entry leaves the impression that the pope simply condemned what had happened.
- **Should be:** Add a sentence: "On first hearing of the conquest Innocent wrote to the new emperor in November 1204 that God had transferred the empire of the Greeks to the Latins; the next year, informed of the sack, he wrote ..." and change the summary to "Innocent III, who first welcomes the conquest, condemns the sack when he learns of it".
- **Evidence:** own knowledge (Innocent III, Register 7.153–154; 8.126/127 for 12 July 1205). The entry's other figures (85,000 marks, 34,000 unpaid, 200,000 marks, Monday 12 April, Easter 25 April 1204) are right.
- **Confidence:** medium-high

### C · completeness · src/content/events/high-and-late-middle-ages/francis-of-assisi.md
- **Text:** "he had it written down in a few words, and the pope confirmed it [[cite:testament]] ... On 29 November 1223 [[person:honorius-iii]] confirmed the brothers' Rule [[cite:bull]]."
- **Problem:** Two things a careful reader needs are missing. (1) Innocent's approval was oral and no text of that first form of life survives; between it and 1223 stands the long Rule of 1221 (*Regula non bullata*), which never received a bull — the entry reads as though one Rule was approved twice. (2) Francis's journey to Egypt and his meeting with the sultan al-Kamil at Damietta in 1219 (Celano, First Life 57) is absent; grep for "sultan" in this entry finds nothing.
- **Should be:** "Innocent approved it by word of mouth; a longer Rule drawn up in 1221 was never confirmed by bull, and the shorter Rule that Honorius III confirmed on 29 November 1223 is the one the order keeps." Plus one sentence on Damietta from Celano 57.
- **Evidence:** Robinson, *Writings*, p. 25 opened in the archive.org text ("approved viva voce, April 23, 1209"; note that Sabatier "fixes this event in the summer of 1210") — the dating note reports Robinson correctly; Howell's chronology (p. xxiii) gives 1210 as stated. Rule of 1221 and Damietta from own knowledge.
- **Confidence:** high

### C · dating · src/content/events/high-and-late-middle-ages/francis-of-assisi.md
- **Text:** "The later dates are firm: ... Celano dates the death to Sunday 4 October 1226 [[cite:death]]"
- **Problem:** Celano does say "on Sunday the fourth day of October" (checked), but he reckons the day from sunset: Francis died after nightfall on Saturday 3 October 1226, which is the date modern reference works give, the feast being kept on the 4th. Stating 4 October as "firm" without the gloss sets the wiki against every modern chronology (Howell's own table, in the edition cited, has "1226, 3rd–4th October").
- **Should be:** "Celano dates the death to Sunday 4 October 1226, counting the day from the evening before; by modern reckoning Francis died on the evening of Saturday 3 October."
- **Evidence:** Howell's translation, archive.org text: "in the fourteenth Indiction, on Sunday the fourth day of October"; Howell's chronological table: "1226, 3rd–4th October. Death of S. Francis."
- **Confidence:** medium-high

### C · completeness · src/content/events/high-and-late-middle-ages/fourth-lateran-council.md
- **Text:** "The first of the seventy-one constitutions is a creed." (then constitutions 3, 21 and 68 only)
- **Problem:** The entry omits what Innocent called the council for. His summons named two aims, the recovery of the Holy Land and the reform of the church; the council's last decree, *Ad liberandam* (71), fixes a crusade for 1 June 1217 with a three-year clerical twentieth, and is not mentioned. Also absent though used elsewhere in the wiki: constitution 13 (no new orders — cited in the Dominicans entry), constitution 2 (Joachim of Fiore's criticism of Peter Lombard condemned), and constitutions 67 and 69 on the Jews (usury, public office), which with 68 form one block. The council's award of Toulouse to Simon de Montfort is told only in the Albigensian entry.
- **Should be:** One sentence on the council's two declared aims and *Ad liberandam*; one clause each for constitutions 2, 13 and 67/69.
- **Evidence:** Tanner's text at papalencyclicals.net (ecum12-2) known; own knowledge for *Vineam Domini* (1213).
- **Confidence:** high

### C · historical · src/content/events/high-and-late-middle-ages/papal-inquisition.md
- **Text:** "One of them went to the pope at [[place:rome]], and Gregory had the count restore them [[cite:expelled]]."
- **Problem:** Pelhisson does write "ivit frater Pontius de Sancto Aegidio Romam ... et narravit domino papae Gregorio" (checked), so the sentence follows its source; but "Romam" there means the papal court. Gregory IX had been driven out of Rome in 1234 and did not return until October 1237; in the winter of 1235–36 the curia was at Viterbo (earlier at Perugia). The wiki's own voice, with a place link, puts the pope in Rome. Also, two friars went (Pons of Saint-Gilles and Raymond of Foix).
- **Should be:** "The prior, Pons of Saint-Gilles, went with another friar to the pope ('to Rome', Pelhisson says) ..." and drop the place link, or say "to the papal court".
- **Evidence:** Pelhisson, ed. Molinier, pp. 40–41, archive.org text read. Gregory IX's absence from Rome 1234–1237 from own knowledge; the Wikipedia article I opened does not give his itinerary, so this needs a check against Potthast's Regesta for November 1235–1236.
- **Confidence:** low

### C · completeness · src/content/events/high-and-late-middle-ages/papal-inquisition.md
- **Text:** "Those the church condemns are to be left to the secular court for 'the punishment due'."
- **Problem:** The entry never says what that punishment was or where it came from. The stake entered the law through the secular side: Frederick II's constitution for Lombardy (1224), which Gregory IX had copied into his register in 1231, and the Roman senator Annibaldo's statute of the same year, published together with *Excommunicamus*. Without this the reader meets burnings at Toulouse (John Textor) with no account of their legal basis. The entry also gives no year for the commission of the Toulouse inquisitors (1233–34) and no day for *Ad extirpanda* (15 May 1252).
- **Should be:** A sentence: "The 'punishment due' was by then death by fire: Frederick II had decreed it for Lombardy in 1224, and Gregory had that law entered in his register in 1231" (MGH Const. 2, no. 100; Auvray, Registres de Grégoire IX, no. 535), and the dates above.
- **Evidence:** own knowledge; not opened.
- **Confidence:** medium

### C · completeness · src/content/events/high-and-late-middle-ages/thomas-aquinas.md
- **Text:** "Summoned to a council, Thomas fell ill on the road and died on 7 March 1274 ... In 1879 Pope Leo XIII called Thomas 'chief and master' ..."
- **Problem:** The reception jumps six centuries. Missing are (1) the Paris condemnation of 7 March 1277, in which Bishop Stephen Tempier censured 219 propositions, some of them touching Thomas's teaching, and its revocation "insofar as it touches Thomas" in 1325; (2) his canonization by John XXII on 18 July 1323 — the entry cites the canonization process of 1319 and Tocco's work for it but never says he was canonized; (3) Pius V naming him a doctor of the church in 1567. Neither "1277" nor "Tempier" occurs in any event entry. The Second Part, written in the second Paris regency (1268–1272), is also not placed.
- **Should be:** Two sentences before the Leo XIII paragraph, cited to the Chartularium Universitatis Parisiensis I, no. 473 (1277) and John XXII, *Redemptionem misit* (1323).
- **Evidence:** own knowledge; grep of `events/` for "1277" and "Tempier" (no hits in events). The entry's own dates (6 December 1273, 7 March 1274, Torrell's 1265–68 for the First Part) are right.
- **Confidence:** high

### C · completeness · src/content/events/high-and-late-middle-ages/waldensians.md
- **Text:** "The early accounts used here all come from critics of the movement." / "Each of these writers was a critic or a judge of the movement. The Waldensian Church of today tells its own beginnings differently."
- **Problem:** The entry sets twelfth-century critics against a twenty-first-century church web page and so suggests that nothing survives from Waldo's own side. One early document does: the profession of faith that Valdes made at Lyon about 1180 before the legate Henry of Marcy (edited by A. Dondaine, *Archivum Fratrum Praedicatorum* 16, 1946), in which he affirms the Catholic creed and sacraments and states his resolve to live poor. The expulsion from Lyon by Archbishop John (Bellesmains), the step between the pope's restriction and *Ad abolendam*, is also missing (Stephen of Bourbon tells it).
- **Should be:** Add the profession of faith as a first-hand source (it also fixes Valdes's orthodoxy on the points later disputed) and a sentence on the expulsion from Lyon.
- **Evidence:** own knowledge. The Laon Chronicle text (Fordham page) and its "written about 1218" label were opened and are reported correctly.
- **Confidence:** medium-high

## Completeness of this stretch

Grepped `src/content/events`, `people`, `places`, `sources` for each term named; "0" means no hit anywhere.

- **The later crusades and the loss of the Holy Land.** Nothing between 1099 and 1204 and nothing after: Second Crusade (0), Saladin / Hattin / the fall of Jerusalem in 1187 and the Third Crusade (0), Fifth Crusade (0), Louis IX's crusades (1 passing hit), fall of Acre 1291 (0). One entry, "The Later Crusades and the Loss of Jerusalem (1147–1291)", is the most obvious gap of the stretch.
- **The military orders.** Templars (only a passing mention in suppression-of-the-jesuits), Hospitallers (0), Teutonic Order (0). The Templars' founding and Bernard's *De laude novae militiae* (c. 1129) would fit here; their suppression (1307–1312) belongs to the next half.
- **Bernard beyond Clairvaux.** The Cistercian entry stops at 1115 plus one treatise. His preaching of the Second Crusade (1146), the papal schism of 1130, and the condemnation of Abelard at Sens (1141; "Council of Sens" 0, "Heloise" 0) are nowhere.
- **Papacy and empire between Worms and Lyon.** Frederick Barbarossa and Alexander III (the schism of 1159–1177 appears only through Lateran III canon 2), Frederick II and his deposition at the First Council of Lyon in 1245 ("First Council of Lyon" 0), the Second Lateran Council of 1139 (0). Innocent III has no entry of his own pontificate (he appears in five entries).
- **Jews in Latin Christendom.** Beyond the two sentences on 1096 and Lateran IV c. 68: the ritual-murder accusation (Norwich 1144; "blood libel" 0), the Paris trial and burning of the Talmud (1240–42), the expulsion from England (1290). Belongs as one entry c. 1144–1290.
- **Other new orders and religious women.** Carthusians (1084; only later mentions), Premonstratensians (0), Carmelites' and Augustinian hermits' origins, Hildegard of Bingen (0), the Beguines (0), Elizabeth of Hungary (0). Clare has only a sentence in the Francis entry.
- **Eucharistic doctrine and devotion.** Berengar of Tours and the oaths of 1059/1079 (only a passing hit in otto-the-great), the feast of Corpus Christi (Urban IV, *Transiturus*, 1264; "Urban IV" 0).
- **Theology besides Anselm and Thomas.** Bonaventure appears only as a preacher at Lyon; Hugh of St Victor (0), Joachim of Fiore (0), the reception of Aristotle and Averroes and the condemnation of 1277 (0), Albert the Great only as Thomas's teacher.
- **The Orthodox and Eastern churches in these two centuries.** Only 1204 and 1274 are covered. Missing: Sava and the autocephaly of the Serbian church (1219; "Sava" 0), the restored Bulgarian patriarchate (1235), the Mongol conquest of Rus' (1237–40) and the church under the Horde ("Nevsky" 0), the Byzantine recovery of Constantinople in 1261 (told nowhere, though Lyon II presupposes it), the Maronite union with Rome (1182; 1 passing hit), the Armenian kingdom of Cilicia.
- **Expansion in the north and in Spain.** The Baltic crusades and the conversion of Livonia and Prussia ("Livonia" 0, "Teutonic" 0), the Reconquista (Toledo 1085, Las Navas de Tolosa 1212; "Reconquista" 0, "Las Navas" 0), Santiago and pilgrimage (0).
- **Thinly covered inside existing entries** (see findings): the Hebrew and Muslim witnesses to 1096–1099; Oxford and Bologna; Becket's canonization; Francis in Egypt and the Rule of 1221; Lateran IV's crusade decree; the legal origin of the stake; Aquinas's condemnation and canonization. Lyon II might also name the Ilkhan's envoys and constitution 23 on the mendicant orders, and note that *Ubi periculum* was suspended in 1276 and restored in 1294.

## Files checked with nothing to report

investiture-controversy, anselm, cistercians, third-lateran-council, lalibela, dominicans, franciscans-in-asia, second-council-of-lyon

(In these I confirmed, among other things: Canossa letter and oath of 28 January 1077, the 1080 sentence and the 1078 decree against the Avalon texts; the Anglo-Saxon Chronicle for Anselm in 1093 and 1097; Lateran III canons 1–3, 11, 14, 18, 23, 25–27 and the arithmetic of the three session days in March 1179; the Synaxarium entry for Lalibela, Álvares ch. 53 with its ten names, "twenty-four years" and "Gibetas", Perruchon/Guidi's 8 March 1210 and the existence of Valieva's Manuscript of the Month 2016.07; Carpini's 22 July and 24 August and Rubruck's dates in Rockhill; Tanner's six sessions for Lyon II and the weekday of 7 May and 6 July 1274.)

## Method note

Bible citations in this batch are few (Ps 14:1, Matt 19:21, Matt 6:24, 2 Tim 2:19); all four fit the sentences they support and none is quoted verbatim, so nothing depended on WEB wording. About 30 web documents were opened or downloaded and searched: Avalon (inv02, inv08, inv12, inv15, inv16, Anglo-Saxon Chronicle), Fordham (five versions of Urban, 1096 Jews, crusaders' letters, Gesta, Fulcher, Raymond, Hoveden on Becket, Laon Chronicle), papalencyclicals (Lateran III, Lyon II), and archive.org full texts of Krey, Munro, Robinson, Howell/Celano, Pelhisson, PL 213 (Peter of les Vaux-de-Cernay), Álvares, Rockhill, Perruchon and Budge; two web searches (Valieva; the date of the Authentica Habita).
Not opened: the MGH (dmgh.de) page images for Caspar's register, Lampert, Bernold and Ekkehard (viewer is script-driven), the Vita prima in PL 185, Jordan of Saxony, the Bullarium for *Ad extirpanda*, Pachymeres, Mansi 24 and Tocco; those entries were checked against my own knowledge of the texts only. The points marked low or medium confidence (Edgington's dating of Albert, Stelzer on the Habita, Gregory IX's whereabouts in 1235–36, Innocent III's letters of November 1204) rest on memory and should be confirmed before editing.
