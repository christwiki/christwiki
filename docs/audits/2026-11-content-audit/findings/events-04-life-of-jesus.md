# Events: Life of Jesus

Reviewer batch E04. Severity: A = factual error, B = misleading, unsupported or inconsistent, C = minor imprecision or omission. See the [audit report](../README.md) for method and limits.

Batch: the 22 event entries of era `life-of-jesus`. All files read in full; audit complete.
Overall the batch is in good shape: no outright factual error (severity A) was found. Josephus, Tacitus, Dio, Suetonius, the Fathers and the confessions are reported accurately wherever checked, the Synoptic/John differences are generally stated rather than harmonised, and the scholarship named in dating notes exists and argues what is claimed.

## Findings

### B · consistency · src/content/events/life-of-jesus/crucifixion.md
- **Text:** "Luke dates the preaching of John the Baptist to the fifteenth year of Tiberius [...], AD 28/29 by the usual count or a year or so earlier by others [...] John's Gospel then names three Passovers, the last being that of his death" / "AD 30 gives a ministry of about two years beginning in AD 28 [...] The evidence does not decide between them."
- **Problem:** The synchronism the note builds does not work for AD 30 on the count the wiki itself calls "the usual" one. If the fifteenth year runs August AD 28 – August AD 29 (so ministry-of-john-the-baptist.md) and the baptism is followed by three Passovers (John 2:13; 6:4; 11:55), the earliest possible crucifixion Passover is AD 31. AD 30 is reachable only if the fifteenth year is reckoned earlier (AD 27/28, or calendar year AD 28 with John's preaching and the baptism squeezed in before Passover AD 28), or if John's three Passovers are not all counted. The note states this kind of dependence only for AD 33 ("counting the fifteenth year of Tiberius as AD 29") and is silent about it for AD 30, the year the timeline uses. The same tension runs through the neighbouring entries: feeding-of-the-five-thousand.md fixes John 6:4 at spring AD 29, which puts John 2:13 at Passover AD 28, i.e. before the August AD 28 start of the "usual" fifteenth year, while galilean-ministry-begins.md says Luke's date "gives a beginning in about AD 28 or 29". Related display inconsistency: baptism-of-jesus.md is shown as "c. AD 26–29" although John's preaching, which it follows, is shown as "c. AD 28–29".
- **Should be:** Say in the crucifixion note (and briefly in the feeding and galilean-ministry notes) that AD 30 presupposes the earlier reckoning of Tiberius's fifteenth year (so Meier, who has the baptism by early AD 28) or a ministry shorter than John's three Passovers, just as AD 33 presupposes the later reckoning; and make the displayed ranges of John's preaching and of the baptism compatible (e.g. both "c. AD 27–29").
- **Evidence:** Arithmetic from the wiki's own notes; Luke 3:1-2, 21-23 and John 2:13, 6:4, 11:55 read in the WEB. Meier, *A Marginal Jew* 1, ch. 11, and Hoehner, *Chronological Aspects*, both make the dependence explicit (own knowledge of the two works; not re-opened).
- **Confidence:** medium

### C · scriptural · src/content/events/life-of-jesus/transfiguration.md
- **Text:** summary: "Mark, Matthew and Luke tell how three disciples [...] hear a voice from a cloud call him \"my beloved Son\"."
- **Problem:** True of Mark 9:7 and Matt 17:5, and of Luke 9:35 in the WEB (Majority Text). In the oldest witnesses of Luke and in the NRSVUE, which the wiki's links open, the voice says "my Son, my Chosen". The summary credits the wording to all three; a reader who follows the Luke link finds different words. (The authoring guide lists "the quoted translation against the linked one" as a defect.)
- **Should be:** Restrict the quoted words to Mark and Matthew, or add in the body that in Luke the oldest manuscripts read "my Chosen".
- **Evidence:** WEB Luke 9:35 "This is my beloved Son. Listen to him!"; NRSVUE Luke 9:35 (biblegateway.com) "This is my Son, my Chosen; listen to him!", note "Other ancient authorities read my Beloved".
- **Confidence:** high

### C · scriptural · src/content/events/life-of-jesus/death-of-john-the-baptist.md
- **Text:** "When Antipas later heard of the works of Jesus, the Gospels report, he said that John, whom he had beheaded, had been raised from the dead [[bible:Mark 6:14-16]]."
- **Problem:** "The Gospels report" holds for Mark 6:16 and Matt 14:2 only. Luke tells it differently: others say that John has risen, Herod is perplexed and says "I beheaded John, but who is this?" (Luke 9:7-9). Only Mark is cited.
- **Should be:** "Mark and Matthew report that he said … [Mark 6:14-16; Matt 14:1-2]; in Luke he is perplexed by that rumour and asks who this is [Luke 9:7-9]."
- **Evidence:** WEB Mark 6:14-16; Matt 14:1-2; Luke 9:7-9 read.
- **Confidence:** high

### C · scriptural · src/content/events/life-of-jesus/ministry-of-john-the-baptist.md
- **Text:** "Mark and Matthew tell that John preached in the wilderness of Judea and along the Jordan, proclaiming \"the baptism of repentance for forgiveness of sins\". [...] [[bible:Mark 1:4-5]] [[bible:Matt 3:1-6]]"
- **Problem:** The quoted phrase is Mark's (Mark 1:4; Luke 3:3 has "for remission of sins"). Matthew does not have it: his John proclaims "Repent, for the Kingdom of Heaven is at hand" (Matt 3:2), and Matthew's absence of "forgiveness of sins" here is a noted difference. Conversely "wilderness of Judea" is Matthew's phrase only. The sentence credits both details to both Gospels.
- **Should be:** "Mark says that John proclaimed 'the baptism of repentance for forgiveness of sins' [Mark 1:4]; in Matthew, who places him in 'the wilderness of Judea', his message is 'Repent, for the Kingdom of Heaven is at hand' [Matt 3:1-2]."
- **Evidence:** WEB Mark 1:4-5; Matt 3:1-6; Luke 3:3 read.
- **Confidence:** high

### C · consistency · src/content/events/life-of-jesus/feeding-of-the-five-thousand.md
- **Text:** summary: "In a lonely place by the Sea of Galilee, all four Gospels relate, Jesus feeds a crowd…" vs. dating note: "The first three Gospels speak of a deserted place"
- **Problem:** The summary attributes the "lonely place" to all four; the entry's own dating note (correctly) limits it to the Synoptics. John sets the scene on "the mountain" across the lake, with "much grass" (John 6:3, 10), and never calls the place deserted.
- **Should be:** "By the Sea of Galilee, all four Gospels relate, Jesus feeds…" (drop "in a lonely place" or attribute it to the first three).
- **Evidence:** WEB John 6:1-15; Mark 6:31-35; Matt 14:13-15; Luke 9:10-12 read.
- **Confidence:** high (minor)

### C · completeness · src/content/events/life-of-jesus/last-supper.md
- **Text:** "Luke adds the command \"Do this in memory of me\" and words the saying over the cup as \"This cup is the new covenant in my blood\" [[bible:Luke 22:19-20]]."
- **Problem:** Exactly these words (Luke 22:19b-20) are the best-known textual problem of the supper narratives: Codex Bezae and Old Latin witnesses lack them, and the NRSVUE, which the link opens, notes it. The entry flags the smaller variant ("new") in Mark and Matthew, and the batch flags Luke 22:43-44 and 23:34, but is silent here. It also does not say that Luke has a cup before the bread (22:17-18), so that his order differs from Mark's.
- **Should be:** Add "in words that some ancient witnesses lack" (as is done for Luke 22:43-44), and a clause on Luke's first cup.
- **Evidence:** WEB Luke 22:17-20 read; NRSVUE note at Luke 22:20 (biblegateway.com): "Other ancient authorities lack, in whole or in part, 22.19b–20 (which is given . . . in my blood)".
- **Confidence:** high (an omission, not an error)

### C · completeness · src/content/events/life-of-jesus/crucifixion.md
- **Text:** "From the sixth hour, Mark says, there was darkness over the whole land. At the ninth hour Jesus cried out…"; dating note, paragraph "The day"
- **Problem:** The entry sets out the Synoptic/Johannine difference on the day, but not the parallel difference on the hour: Mark has Jesus crucified at the third hour (Mark 15:25), while in John he is still before Pilate "at about the sixth hour" (John 19:14). The entry cites John 19:14 and Mark 15:33 but never mentions Mark 15:25.
- **Should be:** One sentence, e.g. "Mark puts the crucifixion at the third hour [Mark 15:25]; in John, Pilate passes sentence at about the sixth hour [John 19:14]."
- **Evidence:** WEB Mark 15:25, 33; John 19:14 read.
- **Confidence:** high

### C · consistency · src/content/events/life-of-jesus/crucifixion.md
- **Text:** "Within Pilate's term a Friday coincided with the 14th of Nisan, or fell within a day of it, in AD 30 (7 April) and AD 33 (3 April). The other years either have no such Friday or, like AD 27 and AD 34, are hard to fit to the rest of the evidence."
- **Problem:** The note presents AD 30 and AD 33 as the only proposals. The wiki's own death-of-john-the-baptist.md cites a third, minority proposal, AD 36 (Kokkinos, "Crucifixion in A.D. 36"), which rests on Josephus's placing of John's death near the war with Aretas. In AD 36 the calculated 14 Nisan is a Saturday (31 March), so the Friday falls "within a day of it"; the sentence as worded therefore does not actually exclude that year. The crucifixion note never mentions the proposal.
- **Should be:** Add AD 36 to the years named as "hard to fit" with a cross-reference to the dating note of death-of-john-the-baptist, or tighten the wording to "a Friday that was the 14th or the 15th of Nisan".
- **Evidence:** death-of-john-the-baptist.md dating note; Humphreys and Waddington's table of 14 Nisan dates (*Nature* 306, 1983) as I recall it (AD 36: Saturday 31 March) — not re-opened, hence medium.
- **Confidence:** medium

### C · scriptural · src/content/events/life-of-jesus/crucifixion.md
- **Text:** "Isaiah's servant who \"bore the sin of many\" [[bible:Isa 53:12; Luke 22:37]]"
- **Problem:** The quotation is the NRSV wording, not the World English Bible, which reads "bore the sins of many". (Luke 22:37 quotes a different clause of the verse, "counted with transgressors".)
- **Should be:** "bore the sins of many", or paraphrase.
- **Evidence:** WEB Isa 53:12 "yet he bore the sins of many and made intercession for the transgressors"; NRSVUE "yet he bore the sin of many".
- **Confidence:** high (minor)

### C · completeness · src/content/events/life-of-jesus/resurrection.md
- **Text:** "In Luke two men in dazzling clothes speak to the women, the apostles think their report nonsense, and Peter runs to the tomb and sees the linen cloths lying by themselves [[bible:Luke 24:1-12]]."
- **Problem:** Peter's run to the tomb is Luke 24:12, a verse absent from Codex Bezae and the Old Latin; the NRSVUE notes "Other ancient authorities lack 24.12". The batch flags comparable variants elsewhere (Luke 22:43-44; 23:34; 24:51; Mark 16:9-20) but not this one, although the verse matters for the comparison with John 20:3-10 that the paragraph is making.
- **Should be:** Add "in a verse that some ancient manuscripts lack".
- **Evidence:** WEB Luke 24:12 read; NRSVUE note at Luke 24:12 (biblegateway.com).
- **Confidence:** high (an omission, not an error)

## Completeness of this stretch
Grepped `src/content/{events,people,places,sources,threads}` for: parable, Nicodemus, Samaritan woman / Jacob's well, Cana, Mark 13 / Olivet / Matt 24, anointing at Bethany, Judas's death (Matt 27:3 / Acts 1:18), Luke 2:41 (boy Jesus in the temple), John 7:53 / 8:1-11, Sejanus, exorcism, Prodigal / Good Samaritan, kingdom of God, Yehohanan / Giv'at ha-Mivtar; and read the event index for the era and its neighbours.

- **The teaching in parables.** No event, and the word "parable" does not occur in any life-of-jesus event or in people/jesus.md (the only grep hit in the era is "comparable"). The parables of the kingdom (Mark 4; Matt 13; Luke 10; 15) are the form of teaching most characteristic of Jesus in the Synoptics; the era has the Sermon on the Mount but nothing on this. Belongs between sermon-on-the-mount and feeding-of-the-five-thousand.
- **Healings and exorcisms.** Apart from the one "day at Capernaum" paragraph, the feeding and Lazarus, the miracle tradition (healings, exorcisms, Sabbath-healing controversies with Pharisees and scribes, Mark 2:1–3:6) is not covered, although the conflicts explain why the story ends in Jerusalem as it does.
- **The Fourth Gospel's distinctive early material**: Cana, Nicodemus, the Samaritan woman, the "I am" discourses. Only the bread-of-life discourse (in the feeding entry) and Lazarus are told. Nicodemus appears only at the burial; the Samaritan woman only on the Shechem place page.
- **The discourse on the destruction of the temple and the end (Mark 13 par.)** is mentioned only in passing under destruction-of-the-second-temple; nothing in the passion-week sequence between the temple incident and the supper (also missing there: the controversies in the temple, the anointing at Bethany, which is found only on people/place pages).
- **The journey to Jerusalem** (Luke 9:51–19:27; Mark 10), including the passion predictions after the first, has no entry; the timeline jumps from the transfiguration to Lazarus.
- **Judas's end.** Matt 27:3-10 and Acts 1:18-19 differ; treated only on people/judas-iscariot.md, not in any event of the passion sequence.
- **Textual notes not yet anywhere in the wiki:** John 7:53–8:11 (the woman taken in adultery) is nowhere mentioned; the shorter ending of Mark is not mentioned in appearances-and-great-commission.md, which discusses only 16:9-20.
- **Minor:** Luke's story of the twelve-year-old Jesus in the temple (Luke 2:41-52), the only canonical episode between infancy and baptism, is absent from birth-of-jesus.md and from the wiki. The one archaeological witness to crucifixion in first-century Judea (the heel bone of Yehohanan from Giv'at ha-Mivtar) is not used.

## Files checked with nothing to report
birth-of-jesus, death-of-herod, judea-becomes-a-roman-province, baptism-of-jesus (only the display-range remark inside the B finding), galilean-ministry-begins (only as referenced in the B finding), calling-of-the-twelve, sermon-on-the-mount, peters-confession, raising-of-lazarus, triumphal-entry, cleansing-of-the-temple, arrest-in-gethsemane, trial-of-jesus, appearances-and-great-commission (only the shorter-ending remark above), ascension

## Method note
Read all 22 entries in full. The batch has 390 `[[bible:…]]` tokens; I read the WEB text behind roughly 300 of them (every quotation, every claim about which Gospel says what, all passion and resurrection narratives in full) and checked the remainder (Old Testament allusions, simple pointers) from memory; seven NRSVUE readings and footnotes were checked on biblegateway.com (Mark 3:14; 6:22; 14:24; Matt 26:28; Luke 9:35; 22:20; 22:44; 23:34; 24:12; 24:51; Isa 53:12). Quotations follow the older bible-api.com WEB text, which differs from the current WEB in word order and punctuation in a few places (e.g. John 11:16; Mark 14:22); not reported.
Opened about 40 web pages: 20 Josephus passages on lexundria (Ant. 14.389, 14.487-488, 15.380, 17.146-148, 17.167, 17.187-191, 17.342-344, 17.354-355, 18.1-4, 18.26, 18.28, 18.33-35, 18.63-64, 18.85-95, 18.106, 18.109-119, 18.136-137; War 1.665, 2.111, 2.117-118), Cassius Dio 51.1 and 55.25-27, Tacitus Hist. 2.78 and Ann. 6.50, Suetonius Aug. 100, Cyril Cat. 12.16, Augustine Harmony 2.5 and 2.67 and Sermon on the Mount 1.1, Tertullian Adv. Marc. 2.15, Irenaeus 3.1.1 and 3.10.5, Eusebius VC 3.41-43, Chronograph of 354 part 12, Egeria (CCEL text), the 1848 patriarchal encyclical § 11, Heidelberg Catechism 78-79, the Treatise on the Power and Primacy 25. All agreed with the entries.
Not opened (relied on own knowledge): the modern scholarship named in dating notes (authors, titles, years, journal volumes and pages all match what I know; I did not re-open Meier, Hoehner, Finegan, Brown, Schürer pp. 399-427, Barnes, Filmer, Steinmann, Kokkinos, Humphreys-Waddington); the EDH and IIP inscription records; Philo, Embassy 299-305; Trent, Dositheus, Augsburg, Article 28, CCC 552/597/881-882, Nostra aetate 4; the archive.org page links for Egeria; the astronomical dates (13 March 4 BC, 10 January 1 BC, 7 April 30, 3 April 33), which match standard tables as I know them.
