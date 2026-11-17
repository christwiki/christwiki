# Events: Exile and Return, Second Temple

Reviewer batch E03. Severity: A = factual error, B = misleading, unsupported or inconsistent, C = minor imprecision or omission. See the [audit report](../README.md) for method and limits.

## Findings

### C · scriptural · src/content/events/exile-and-return/nehemiah-rebuilds-the-walls.md
- **Text:** "About 180 BC Ben Sira praised Nehemiah as the one "who raised up for us the walls that were fallen" [[bible:Sir 49:13]]"
- **Problem:** The quotation is not the World English Bible wording, which the authoring guide requires for Scripture quotations; it is the KJV/RV wording.
- **Should be:** WEB: "He raised up for us fallen walls" (Sir 49:13), or paraphrase.
- **Evidence:** bible.py Sir 49:13: "Also of Nehemiah the memory is great. He raised up for us fallen walls, set up the gates and bars, and rebuilt our houses."
- **Confidence:** high

### C · scriptural · src/content/events/second-temple/maccabean-revolt.md
- **Text:** "He cried out, "Whosoever is zealous for the law, and maintains the covenant, let him come forth after me"" and "its stones were stored "until there should come a prophet""
- **Problem:** Neither quotation matches the World English Bible; both are KJV/RV wording.
- **Should be:** WEB 1 Macc 2:27: "Whoever is zealous for the law and maintains the covenant, let him follow me!"; WEB 1 Macc 4:46: "until a prophet would come to give an answer concerning them".
- **Evidence:** bible.py 1 Macc 2:27 and 4:46 (texts as quoted above).
- **Confidence:** high

### C · scriptural · src/content/events/second-temple/hasmonean-independence.md
- **Text:** ""was the yoke of the heathen taken away from Israel"" (body) and "1 Maccabees says that "the yoke of the heathen" was taken from Israel" (dating note)
- **Problem:** Not the World English Bible wording (KJV/RV instead). The other two quotations in the entry (13:42; 14:41) do match the WEB.
- **Should be:** WEB 1 Macc 13:41: "the yoke of the Gentiles was taken away from Israel".
- **Evidence:** bible.py 1 Macc 13:41: "In the one hundred seventieth year, the yoke of the Gentiles was taken away from Israel."
- **Confidence:** high

### C · consistency · src/content/events/second-temple/herod-becomes-king.md
- **Text:** "The city fell after some five months, and the Roman soldiers killed without regard to age or sex. Antigonus surrendered to Sosius [[cite:siege]] [[cite:siege-war]]."
- **Problem:** "Five months" is the figure of the *Jewish War* only (1.351). The *Antiquities*, cited alongside it, gives a much shorter siege: the first wall taken in forty days, the second in fifteen (14.476), and the fall "on the third month, on the solemnity of the fast" (14.487). The entry silently picks one of two cited sources that disagree; the dating note discusses the "twenty-seven years to the day" but not this.
- **Should be:** "after a siege of five months according to the *War*; the *Antiquities* puts the fall in the third month, on the day of the fast" (the same phrase Josephus uses for Pompey's capture, which the Pompey entry's dating note already discusses).
- **Evidence:** lexundria.com/j_bj/1.343-1.357/wst §351 "they bore a siege of five months"; lexundria.com/j_aj/14.465-14.491/wst §487 "on the third month, on the solemnity of the fast".
- **Confidence:** high

### C · scriptural · src/content/events/exile-and-return/first-deportation-to-babylon.md
- **Text:** "His son [[person:jehoiachin]], eighteen years old, reigned for three months" … "He made Jehoiachin's uncle Mattaniah king"
- **Problem:** Both details are Kings' version. Chronicles, which the dating note itself cites at 2 Chr 36:10, makes Jehoiachin eight years old with a reign of three months and ten days (36:9) and calls Zedekiah his "brother" (36:10). The authoring guide asks that Kings/Chronicles differences be given, not silently resolved.
- **Should be:** Add a clause: "Chronicles gives his age as eight and the reign as three months and ten days, and calls Zedekiah his brother [[bible:2 Chr 36:9-10]]."
- **Evidence:** bible.py 2 Chr 36:9-10 ("Jehoiachin was eight years old … three months and ten days … made Zedekiah his brother king"); 2 Kings 24:8, 17.
- **Confidence:** medium (a completeness point, not an error)

### C · dating · src/content/events/second-temple/hasmonean-independence.md
- **Text:** "The era was counted from 312/311 BC, so the 170th year is 143/142 BC … Simon was killed in the eleventh month of year 177, about February of 134 BC"
- **Problem:** The two conversions rest on two different reckonings of the Seleucid era, and the note does not say so. Year 170 = 143/142 BC holds only if the year is counted from 312 BC (autumn 312, the royal Macedonian reckoning, or spring 312); on that count year 177 is 136/135 and its eleventh month, Shebat, is about February 135 BC. February 134 BC follows only on the count from spring 311 BC, on which year 170 is 142/141 BC. The figures are compatible only on the "two eras" theory (royal documents by the Macedonian year, Jewish events by the spring-311 year), which the sister entries on Antiochus IV and the revolt explain but this one does not; reference works accordingly give both 135 and 134 BC for Simon's death.
- **Should be:** Add a sentence such as: "The book appears to date royal documents from autumn 312 BC and Jewish events from spring 311 BC (see [[event:antiochus-desecrates-the-temple]]); on a single count from 312 BC Simon's death falls in February 135 BC." The headline year 142 BC is unaffected.
- **Evidence:** Arithmetic: era from autumn 312 → year N = autumn (313−N) to autumn (312−N); from spring 311 → year N = spring (312−N) to spring (311−N). Year numbers read in WEB 1 Macc 13:41; 13:51; 14:27; 16:14. Compare the dating notes of antiochus-desecrates-the-temple.md and maccabean-revolt.md.
- **Confidence:** medium

### C · scriptural · src/content/events/exile-and-return/second-temple-completed.md
- **Text:** "In the second year they laid the foundation of the temple. … nothing more was built until the second year of [[person:darius-i]] [[bible:Ezra 4:1-5, 24]]" and "Zerubbabel, who laid the foundation"
- **Problem:** The entry gives only Ezra 3's account (foundation laid by Zerubbabel and Jeshua in the second year after the return, under Cyrus). Two other texts it relies on differ: Ezra 5:16 has Sheshbazzar lay the foundations (noted in the edict-of-cyrus entry but not here), and Haggai dates the day "the foundation of Yahweh's temple was laid" to the twenty-fourth of the ninth month of Darius's second year (Hag 2:15, 18), speaking of the time "before a stone was laid on a stone". The differing accounts are silently harmonised.
- **Should be:** Add a sentence, e.g. "Ezra sets the foundation in the second year after the return [[bible:Ezra 3:8-10]], and elsewhere credits it to Sheshbazzar [[bible:Ezra 5:16]]; Haggai speaks of the foundation being laid on the twenty-fourth of the ninth month of Darius's second year [[bible:Hag 2:15-18]]."
- **Evidence:** bible.py Hag 2:15-18; Ezra 3:8-10; Ezra 5:16; Zech 4:9.
- **Confidence:** medium (completeness; how the three texts relate is debated)

### C · completeness · src/content/events/exile-and-return/daniel-in-babylon.md
- **Text:** "And Belshazzar, whom the book calls king, is a figure of history: an inscription of Nabonidus names him as that king's eldest son [[cite:ur-cylinder]]."
- **Problem:** The same inscription is also evidence on the other side, which the note does not say: Daniel 5 four times calls Nebuchadnezzar Belshazzar's father and Belshazzar his son (5:2, 11, 18, 22), whereas the cylinder makes him son of Nabonidus (the wiki's own fall-of-babylon entry and the `belshazzar` person entry call him "crown prince", not king). As written, the third "detail" reads as straightforward confirmation. Likewise the note does not mention that the book's opening date (a siege in Jehoiakim's third year, Dan 1:1) stands against Jeremiah's synchronism of Jehoiakim's fourth year with Nebuchadnezzar's first and with Carchemish (Jer 25:1; 46:2); it says only that the chronicle "does not mention Jerusalem".
- **Should be:** Add: "The book calls Nebuchadnezzar his father [[bible:Dan 5:2, 11, 18, 22]]; the inscription makes him the son of Nabonidus, and no Babylonian text gives him the title king. Defenders of the early date take 'father' as 'predecessor' and point to the offer of the 'third' place in the kingdom [[bible:Dan 5:7, 29]]." Optionally note Jer 25:1; 46:2 beside Dan 1:1.
- **Evidence:** bible.py Dan 5:2, 11, 18, 22, 7, 29; Jer 25:1; 46:2. Nabonidus cylinder from Ur (livius.org) as cited by the entry.
- **Confidence:** medium (omission, not an error)

### C · scriptural · src/content/events/exile-and-return/ezra-and-the-law.md
- **Text:** "The men named pledged to send their foreign wives away [[bible:Ezra 10:1-19, 44]]."
- **Problem:** The pledge ("They gave their hand that they would put away their wives") is said only of the four priests of Jeshua's house in 10:18-19; for the other hundred or so men the chapter gives a bare list, and its last verse (10:44) says in the Hebrew only that some of the wives had borne children. That the women and children were actually sent away is stated in the Greek 1 Esdras 9:36, not in Ezra. "The men named pledged" therefore says more than the cited verses.
- **Should be:** "The assembly agreed to separate from the foreign wives [[bible:Ezra 10:10-12]]; the priests named first pledged to send theirs away [[bible:Ezra 10:18-19]], and a list of the other men follows [[bible:Ezra 10:20-44]]."
- **Evidence:** bible.py Ezra 10:13-19, 44 (WEB): 10:19 follows directly on "of the sons of Jeshua … Maaseiah, Eliezer, Jarib, and Gedaliah"; 10:44 "All these had taken foreign wives. Some of them had wives by whom they had children."
- **Confidence:** low (a matter of how far 10:19 is taken to extend; most commentators assume all complied)

## Completeness of this stretch

- **Daniel 8–12 is not covered anywhere.** `daniel-in-babylon` stops at chapter 7. Grep for "Dan 9", "Dan 12", "seventy weeks" finds nothing in events or people; Dan 8 and 11 appear only as one-line cross-references in the Alexander and Antiochus entries. Missing are the "seventy weeks" of Dan 9:24-27 (central to Jewish and Christian chronological reading, and tied to Jeremiah's seventy years, which the edict-of-cyrus entry cites) and Dan 12:1-3, the clearest statement of resurrection in the Hebrew Bible (the wiki cites 2 Macc 7 for resurrection hope but not this). Belongs in the Daniel entry or a short entry of its own beside antiochus-desecrates-the-temple.
- **Judea under the Ptolemies and Seleucids, 323–175 BC.** One sentence in `alexander-conquers-the-east` covers 150 years. Grep "Antiochus III", "Panium", "Seleucus", "Heliodorus" finds no event. The Seleucid conquest of about 200 BC and Antiochus III's charter for Jerusalem (Josephus, *Ant.* 12.138–146), and the Oniad–Tobiad struggle that leads into 2 Macc 3–4, are the background the Antiochus IV entry presupposes.
- **Jewish writings of the period as events.** Ben Sira (c. 180 BC, with its datable prologue), Tobit, Judith, Wisdom of Solomon, 1 Enoch and Jubilees have no entry; grep "Enoch", "Jubilees" finds nothing, and Sirach/Tobit/Judith/Wisdom occur only in the canon-list entries and as proof-texts. Since the wiki repeatedly notes that Catholics and Orthodox count these books as Scripture, and Jude 14-15 quotes 1 Enoch, an entry on the deuterocanonical and apocalyptic literature (in the `scripture-and-canon` thread) seems warranted.
- **The later Hasmoneans and the parties.** Alexander Jannaeus and Salome Alexandra (103–67 BC) appear only in passing (grep "Jannaeus": two dating notes; "Alexandra": first line of the Pompey entry). The rise of Pharisees and Sadducees is one sentence in `hasmonean-independence`. Hillel and Shammai are absent (grep "Hillel": nothing). Given how much of the Gospels' setting depends on these parties, this is thin.
- **The Samaritans and the Gerizim temple.** Only a subordinate clause in `hasmonean-independence` (its destruction by Hyrcanus). Grep "Gerizim", "Samaritan" finds no entry on the origin of the Samaritan community or its temple (Josephus, *Ant.* 11.302–347; 2 Macc 6:2), which lies behind John 4 and Luke 10.
- **Rome and Judea between 63 and 40 BC.** Julius Caesar's settlement of 47 BC (Hyrcanus II as ethnarch, Antipater as procurator, the privileges of the Jews; *Ant.* 14.137–148, 190–216) is not mentioned (grep "Julius Caesar" finds only the Augustus entry). Minor, but it is the hinge between the Pompey and Herod entries.
- **The diaspora and the synagogue.** No entry treats the growth of the Jewish diaspora (Babylonia, Egypt, Asia Minor) or the synagogue as an institution, although Acts presupposes both (grep "diaspora": one modern entry; "synagogue": only NT-era entries and a closing clause in `ezra-and-the-law`). The Oniad temple at Leontopolis is likewise absent (grep "Leontopolis": nothing).
- **Inside entries (minor):** `esther-and-purim` could mention that the book makes Mordecai one of those deported with Jeconiah in 597 BC (Esth 2:5-6), a standard point in the historicity debate; `qumran-community` names Josephus and Pliny but not Philo's two accounts of the Essenes (*Every Good Man Is Free* 75–91; *Hypothetica*); `elephantine-temple` does not mention the other deities named in the Elephantine collection list (Anat-Bethel, Eshem-Bethel), which bears on the community's religion.

## Files checked with nothing to report

ezekiel-among-the-exiles, fall-of-jerusalem, prophecies-of-return, fall-of-babylon, edict-of-cyrus, esther-and-purim, malachi, elephantine-temple, alexander-conquers-the-east, septuagint, antiochus-desecrates-the-temple, qumran-community, pompey-takes-jerusalem, augustus-becomes-emperor, herod-rebuilds-the-temple

## Method note

All 23 files read in full. About 150 Bible references, many of them multi-verse ranges (including 1–2 Maccabees, Sirach, 1–2 Esdras) read against the WEB with the local tool, covering essentially every citation that carries a fact, number, date or quotation. About 25 web pages opened: Livius (ABC 5, Nabonidus Chronicle), Lexundria (Josephus *Ant.* 11.99–108, 11.159–183, 11.325–339, 12.11–118, 13.213–217, 13.288–301, 14.54–79, 14.465–491, 15.380–425, 20.215–222; *War* 1.343–357, 1.401), Wikisource (Arrian 2.11, 2.24, 2.25, 7.28; Psalms of Solomon 2, 8, 17), Brenton's Greek Esther, the Leon Levy library pages, and the archive.org text of Hilprecht's Murashû edition (canal Kabaru, no. 4:9 confirmed). All regnal-year and Seleucid-era conversions were recomputed; Roman dates (63, 40/37, 27 BC), the Babylonian chronicle dates and the Parker–Dubberstein conversions agree with the entries. The scholarship named in the dating notes (Thiele, Young, Collins, Baldwin, Miller, Motyer, Oswalt, Blenkinsopp, Williamson, van Hoonacker, Emerton, Bright, Fox, Berlin, Shea, Yamauchi, Verhoef, Hill, Bosworth, Cohen, Wright, Lee, Dines, Bickerman, Goldstein, Grabbe, de Vaux, Magness, VanderKam, Schiffman, Golb, Atkinson, Schürer–Vermes–Millar, Filmer, Steinmann) exists with the stated authors, titles and years and is cited for the right side, as far as I can tell from my own knowledge plus a search confirming Verhoef. Not verified against the text: which era-epoch Grabbe (JBL 1991) argues for (the entry says spring 312; the resulting 168–165 is right either way), Hill's "near 500 BC", and the line numbering (recto/verso) of the Elephantine papyri. The dating notes on the order of Ezra and Nehemiah, the date of Daniel, the authorship of Isaiah 40–55 and the historicity of Esther present both sides fairly; the only gaps are the ones listed above. No A or B findings: this batch is unusually clean.
