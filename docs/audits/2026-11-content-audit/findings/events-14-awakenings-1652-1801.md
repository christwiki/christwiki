# Events: Awakenings and Missions, 1652–1801

Reviewer batch E14. Severity: A = factual error, B = misleading, unsupported or inconsistent, C = minor imprecision or omission. See the [audit report](../README.md) for method and limits.

## Findings

### C · dating · src/content/events/awakenings-and-missions/jansenism.md
- **Text:** "the edition cited dates the constitution that prescribed the formula 15 February 1664"
- **Problem:** The constitution *Regiminis apostolici* was issued on 15 February 1665 in modern reckoning. The 1911 Denzinger prints "1664" because the bull is dated by the year of the Incarnation (which began on 25 March). The note reports the edition correctly but leaves the reader with a year that is one too early; the same "1664" stands unqualified in `sources/alexander-vii-ad-sanctam-beati-petri-sedem.md`.
- **Should be:** "…15 February 1664 in the style of the bull, that is 15 February 1665 by modern reckoning (so Denzinger–Hünermann no. 2020)".
- **Evidence:** en.wikipedia.org/wiki/Regiminis_Apostolici (raw text opened): "signature date = 15 February 1665", citing Denzinger–Hünermann 43rd ed. n. 2020; categories "1665 works".
- **Confidence:** high

### C · dating · src/content/events/awakenings-and-missions/french-revolution-and-the-church.md
- **Text:** "two other dates, 10 September 1801 and 8 April 1802, which his note explains as those of its signature by the envoys and of its promulgation in France"
- **Problem:** Anderson's note does say this (opened: "The two dates ascribed to it represent those of its signature by the French and papal envoys and of its promulgation in France"), but it is wrong and contradicts the document's own close, which the entry cites one sentence earlier: the envoys signed on 26 Messidor IX = 15 July 1801. 10 September 1801 (23 Fructidor IX) is the day the ratifications were exchanged at Paris (Pius VII had ratified on 15 August). The note passes on the editor's slip without flagging it, so the entry gives two different dates for "signature".
- **Should be:** "…10 September 1801, the day the ratifications were exchanged at Paris (Anderson's note calls it the date of signature by the envoys, which the text's own closing line shows was 15 July), and 8 April 1802, its promulgation in France."
- **Evidence:** Anderson vol. (archive.org constitutionsoth02ande djvu text, no. 64 note and heading "September 10, 1801–April 8, 1802 (23 Fructidor, Year IX — 18 Germinal, Year X)"); own knowledge for the exchange of ratifications on 10 Sept 1801.
- **Confidence:** medium (the facts are certain; whether the maintainers want a gloss on an attributed editor's note is a judgment)

### C · completeness · src/content/events/awakenings-and-missions/wesley-and-methodism.md
- **Text:** the whole entry ends in 1744 ("An anonymous pamphlet of 1744 charged that the Methodists neither heeded the laws…")
- **Problem:** The entry stops forty-seven years before Wesley's death and never tells the outcome that made Methodism a church: Wesley's ordinations of September 1784 (Whatcoat and Vasey as elders, Thomas Coke set apart as superintendent for America), the Christmas Conference at Baltimore (December 1784) that formed the Methodist Episcopal Church under Coke and Asbury, and the separation from the Church of England. Nothing else in the wiki covers it (grep for "Coke", "Christmas Conference", "Methodist Episcopal", "1784" in events/people finds only the AME entry, which mentions "Bishop Asbury" and "the Methodist elder" with nothing to explain where American Methodist bishops came from).
- **Should be:** Add a closing paragraph from Wesley's own letter "To Dr. Coke, Mr. Asbury, and our Brethren in North America" (10 September 1784) and the Minutes of the 1784 conference; or a separate event at 1784.
- **Evidence:** own knowledge; grep of src/content/events and src/content/people.
- **Confidence:** high

### C · completeness · src/content/events/awakenings-and-missions/revocation-of-the-edict-of-nantes.md
- **Text:** "Now, with the kingdom at peace, 'the better and the greater part' of the Reformed had embraced the Catholic faith" / "everyone else is forbidden to leave"
- **Problem:** The entry reports the crown's claim of mass conversion without the context that explains it (the billeting of dragoons on Protestant households, 1681–1685, and the earlier restrictive decrees), and it gives no outcome: neither the scale of the flight that followed despite article 10 (commonly estimated at about 150,000–200,000 people, to the Dutch Republic, England, Brandenburg, Switzerland and beyond) nor the end of the regime (Edict of Versailles, 1787). The wiki has no mention of the dragonnades anywhere (grep "dragonnade", "dragoon": no hits). A reader is left with only the edict's self-description and one Protestant ruler's reply.
- **Should be:** One or two attributed sentences on the dragonnades (e.g. from a contemporary account such as Jean Claude's *Les plaintes des protestants*, 1686, or the Potsdam preamble read more fully) and on the exodus; a clause on 1787.
- **Evidence:** own knowledge; grep of the repository.
- **Confidence:** medium (facts certain; the refugee figure is an estimate and scholars' ranges vary)

### C · completeness · src/content/events/awakenings-and-missions/suppression-of-the-jesuits.md
- **Text:** "Former Jesuits living as secular priests in the Russian Empire asked to remain united in one body"
- **Problem:** Told only from the two papal documents, the entry leaves out why there were Jesuits in Russia to restore: Catherine II (and for a time Frederick II of Prussia) refused to let *Dominus ac Redemptor* be promulgated, so the Society continued without interruption in White Russia, with a novitiate from 1780 and its own vicars general. Pius VII's phrase ("secular priests … who had been members") is the bull's diplomatic description, not what happened; reported without that context it misleads. The entry also gives no dates for the royal expulsions (Portugal 1759, France 1764, Spain and Naples 1767) and does not mention that the brief took effect only where it was published, or the imprisonment of the general Lorenzo Ricci (died in Castel Sant'Angelo, 1775). Grep for "Catherine II", "White Russia" finds nothing in the wiki.
- **Should be:** Add an attributed sentence that the brief was never published in the Russian Empire and the Society survived there (a primary witness: Pius VI's oral approval is disputed, but Catherine's ukase and the 1782 Polotsk congregation acts are documentary), and the years of the expulsions.
- **Evidence:** own knowledge; grep of the repository.
- **Confidence:** high

### C · completeness · src/content/events/awakenings-and-missions/nikon-and-the-old-believers.md
- **Text:** "He was banished to Pustozersk [[cite:exile]]." / dating note: "Nikon's deposition by the council on 12 December 1666"
- **Problem:** Two outcomes a reader needs are missing from the body. (1) Avvakum was burned at Pustozersk (14 April 1682; the chronological table the entry already cites, p. 32, has "1681, April. Avvakum and his friends executed"), which is why the entry carries the persecution-relevant story at all; the body ends with his banishment. (2) That the same council which upheld the reforms deposed Nikon himself (he had left the patriarchal throne in 1658) appears only in the dating note, so the body reads as if Nikon's side simply won.
- **Should be:** Add "Avvakum was burned at Pustozersk in April 1682 (the table printed with the translation says April 1681)" with the table citation, and move the deposition of Nikon into the narrative.
- **Evidence:** Harrison–Mirrlees chronological table (archive.org bwb_C0-ARS-081 djvu text, pp. 31–32, opened): "1658, July 10. Nikon removed from exercise of Patriarchal functions … 1666, December 12. Patriarch Nikon deposed by the Synod … 1681, April. Avvakum and his friends executed."; own knowledge for 1682.
- **Confidence:** high

### C · plausibility · src/content/events/awakenings-and-missions/george-fox-and-the-quakers.md
- **Text:** "the judge allowed a meeting to be kept in his house, and Fox says that it met there until 1690"
- **Problem:** The sentence in the printed Journal ("which continued near forty years, until the year 1690, when a new meeting-house was erected near it") can hardly be Fox's narrative of 1652: he dictated the Journal in the mid-1670s and it was edited for the press by Thomas Ellwood after his death (January 1691; first printed 1694). The clause is almost certainly Ellwood's editorial addition, so "Fox says" credits an editor's words to the author (a fault the authoring guide names). The entry elsewhere is careful to say "the printed Journal".
- **Should be:** "…and the printed Journal adds that it met there for near forty years, until 1690."
- **Evidence:** CCEL text of ch. 6 opened (wording as quoted); own knowledge of the Journal's composition (dictated 1675–76, Ellwood edition 1694). I did not open the Cambridge (Spence MS) Journal to confirm that the clause is absent there — that is the check to make.
- **Confidence:** low

### C · completeness · src/content/events/awakenings-and-missions/chinese-rites-controversy.md
- **Text:** "The Roman decrees cited here speak only of 'some missionaries' on either side and do not say to which orders those who put the questions belonged."
- **Problem:** The entry never tells the reader who the parties were, though this is not in doubt: the 1645 questions were brought by the Dominican Juan Bautista Morales, the 1656 answer was obtained by the Jesuit Martino Martini, and the 1704 decision answered the 1693 mandate of Charles Maigrot (Paris Foreign Missions, vicar apostolic of Fujian), which *Ex quo singulari* itself recounts. Also missing between 1704 and 1721: Tournon's audience with Kangxi (1705–06), the emperor's order that missionaries take a certificate (*piao*) promising to follow "the rules of Matteo Ricci" (1706), and Tournon's confinement at Macao, where he died in 1710; and after it, the Yongzheng proscription of 1724. As it stands Kangxi goes from approval (1700) to prohibition (1721) with nothing in between.
- **Should be:** Name Maigrot's mandate from Benedict XIV's own narrative (§§ 4–6 of *Ex quo singulari*), and add a sentence on Tournon's legation and the *piao*.
- **Evidence:** own knowledge; entry text.
- **Confidence:** medium

### C · completeness · src/content/events/awakenings-and-missions/great-awakening.md
- **Text:** title "The Great Awakening"; places `[northampton-massachusetts, boston]`
- **Problem:** The entry is confined to New England (Edwards, Whitefield's 1740 tour, Chauncy). It omits the Middle Colonies revival (the Tennents and the "Log College"; Gilbert Tennent's sermon *The Danger of an Unconverted Ministry*, 1740; the Presbyterian Old Side/New Side split of 1741), Whitefield's work from Georgia to Philadelphia, and the excesses of James Davenport that Chauncy was largely answering; Edwards's own considered defence (*Some Thoughts*, 1742; *Religious Affections*, 1746) is also absent, so the supporters' case rests on a 1736 narrative and one sermon. Grep "Tennent", "Davenport": no hits in the wiki.
- **Should be:** A sentence each on Tennent/the 1741 schism and on Edwards's reply to the critics.
- **Evidence:** own knowledge; grep.
- **Confidence:** medium

### C · plausibility · src/content/events/awakenings-and-missions/first-korean-baptism.md
- **Text:** "tells how in 1777 a group of scholars, Yi Byeok among them, withdrew to a mountain temple" / "Yi Byeok died in 1786"
- **Problem:** Both years are Dallet's and both are contested by Korean sources, which the entry and its dating note do not say. The study meeting (at Jueosa/Cheonjinam) is dated to the winter of 1779 by Jeong Yak-yong's epitaph for Kwon Cheol-sin, and most modern accounts follow that; Yi Byeok's death is given as 1785 (14th day of the 6th lunar month) in the family record and in most modern reference works (so 1754–1785), against Dallet's "spring 1786". The person entry `people/yi-byeok.md` goes further and labels the death year 1786 `confidence: firm`.
- **Should be:** In the dating note: "Dallet's 1777 for the study meeting and 1786 for Yi Byeok's death are both disputed; Korean sources give 1779 (Jeong Yak-yong) and 1785." Downgrade the person entry's death date to `estimated` with both years.
- **Evidence:** en.wikipedia.org/wiki/Yi_Pyŏk (raw text opened): "(1754–1785)"; "In 1777 (according to Dallet) or 1779 (according to Chŏng Yagyong)"; Dallet's 1786 annotated "There are no reliable documents supporting this claim"; alternative date 14 June 1785. Not checked against a Korean primary edition.
- **Confidence:** medium

### C · plausibility · src/content/events/awakenings-and-missions/richard-allen-and-the-ame.md
- **Text:** "Gary B. Nash, *Forging Freedom* … (1988), and Richard S. Newman, *Freedom's Prophet* … (2008), date the walk-out to 1792; Nash argues from the building records of St George's that the gallery in which the incident took place was finished only in that year."
- **Problem:** Both books exist with those titles and years and both reject 1787, but (a) Newman's range, as cited by others, is 1792–93 (pp. 63–68), not flatly 1792; (b) the argument from the gallery accounts was first made by Milton C. Sernett, *Black Religion and American Evangelicalism* (1975), whom Nash follows; (c) the note does not mention the strongest evidence, which is in Allen's own text and could be cited as primary: immediately after the walk-out he writes that "we had subscribed largely towards finishing St. George's Church, in building the gallery and laying new floors, and just as the house was made comfortable, we were turned out". With that sentence the 1792–93 date rests on Allen himself plus the church accounts, and `start: 1787` for the walk-out looks weaker than the note suggests (1787 is the date of the Free African Society and of the Discipline's "resolved to act", not necessarily of the incident).
- **Should be:** "…date the walk-out to 1792 or early 1793 (Newman, pp. 63–68), following Milton Sernett (1975): Allen himself says the Black members had just helped pay for 'building the gallery' [[cite:walkout/store-room]], and St George's accounts date that work to 1792."
- **Evidence:** Excerpt of Allen's *Life* pp. 13–18 (sites.miamioh.edu/empire/…/1786-Allen-Life-Experience-and-Gospel-Labors.pdf, opened) with the quoted sentence and an editor's note: "a more recent argument has been made for 1792-93 … Newman, Freedom's Prophet …, 63-68." Sernett attribution from own knowledge; docsouth.unc.edu and web.archive.org could not be reached from this environment, and I did not open Nash or Newman.
- **Confidence:** low (for a/b), high (for c, the sentence in Allen)

### C · completeness · src/content/events/awakenings-and-missions/french-revolution-and-the-church.md
- **Text:** "From September 1794 the Republic paid no clergy, and a decree of February 1795 allowed worship…"
- **Problem:** The entry passes from the deportation laws of 1793 to 1794–95 without the dechristianisation of Year II: the Republican calendar (October 1793), the closing of churches and the abdication of Bishop Gobel, the Festival of Reason in Notre-Dame (10 November 1793), Robespierre's decree on the Supreme Being (18 Floréal II / 7 May 1794); nor the Vendée rising, nor that Pius VI was carried off by French troops in 1798 and died a prisoner at Valence on 29 August 1799 (the wiki's `people/pius-vi.md` mentions his death). These are the events for which the period is chiefly remembered and they explain why a concordat was needed.
- **Should be:** Two sentences citing the decrees (Anderson prints the decree of 18 Floréal on the Supreme Being; the calendar decree) and Pius VI's death.
- **Evidence:** own knowledge; grep ("Cult of Reason", "dechristian", "Vendée") finds no event text.
- **Confidence:** high

## Completeness of this stretch

Checked against `event-index.txt` (era awakenings-and-missions, 1652–1801) and by grep in `src/content` for the names in parentheses. Not covered at all, or only in passing:

- **English Restoration settlement, 1660–1662** — Act of Uniformity 1662, the 1662 Prayer Book, the ejection of some 2,000 ministers ("Great Ejection"), the Clarendon Code and Test Acts; also John Bunyan and *The Pilgrim's Progress* (1678). This is the origin of English Nonconformity and the thing the Toleration Act relieves; the wiki jumps from the Westminster Assembly (1643) to 1689. (grep: "Bunyan", "Pilgrim's Progress", "Great Ejection", "Test Act", "Glorious Revolution": none.)
- **Enlightenment and the beginnings of biblical criticism** — Spinoza's *Tractatus* (1670), Richard Simon (1678), English deism, Voltaire, Reimarus/Lessing fragments (1774–78), Kant's *Religion* (1793). The intellectual challenge of the age is absent between Galileo (1633) and Schleiermacher (1799). (grep: "Spinoza", "Richard Simon", "Reimarus", "deis", "Enlightenment" in events: none.)
- **Gallicanism, Quietism and Catholic reform under the absolute states** — the Four Gallican Articles (1682), the condemnation of Molinos (1687) and of Fénelon (1699), Febronius (1763), Joseph II's Patent of Toleration (1781) and church reforms, the Synod of Pistoia (1786) and *Auctorem fidei* (1794). (grep: "Gallican" once in an unrelated entry; "Quietis", "Joseph II", "Febroni", "Pistoia": none.)
- **Wesley's 1784 ordinations and the Methodist Episcopal Church; the Protestant Episcopal Church (Seabury consecrated 1784, constitution 1789); John Carroll, first Catholic bishop in the United States (1789–90).** The reorganisation of the American churches after independence is told only for Virginia's law and for the AME. (grep: "Coke", "Seabury", "John Carroll": none.)
- **Catholic devotion and new congregations** — the Sacred Heart (Margaret Mary Alacoque, 1673–75), Alphonsus Liguori and the Redemptorists (1732), Passionists. (grep: "Alacoque", "Liguori": none.)
- **Missions outside the entries** — the Paris Foreign Missions Society and the vicars apostolic (1658–63), Alexandre de Rhodes and Vietnam; the Jesuit reductions of Paraguay (1609–1767) and the Treaty of Madrid war; Junípero Serra and the California missions (1769); Hans Egede in Greenland (1721); Kimpa Vita and the Antonian movement in Kongo (1704–06). (grep: "Paraguay", "reductions", "Egede": none; "Serra", "Kimpa Vita", "Foreign Missions" only in passing.)
- **Russian and Greek Orthodoxy in the eighteenth century** — Catherine II's secularisation of monastic lands (1764), Tikhon of Zadonsk, Seraphim of Sarov and the startsy who received the *Dobrotolubiye*; Kosmas the Aetolian; the Melkite split of 1724; Peter Mogila's Confession (1640/43), which the Synod of Jerusalem endorsed. (grep: "Seraphim of Sarov", "Tikhon of Zadonsk", "Melkite", "Mogila": none.)
- **Sacred music and hymnody** — Paul Gerhardt, Bach's Passions (1724–29), Watts (1707), Handel's *Messiah* (1742), Charles Wesley's hymns. Charles Wesley is a listed person but his hymns are not treated; "Watts" appears only as a preface-writer. Would belong to the temple-and-worship thread.
- **Other movements** — William Penn and Pennsylvania (1682) and Quaker anti-slavery (Germantown protest 1688, Woolman); the Amish division (1693); Salem witch trials (1692); the Scottish Covenanters and the 1690 Presbyterian settlement; Welsh and Scottish revivals (Howell Harris, Cambuslang 1742); Unitarianism (Essex Street chapel 1774), Shakers, Swedenborg; Robert Raikes and Sunday schools (1780; mentioned only in passing in later entries). (grep for each: none or passing.)
- **Thin spots inside existing entries** (see findings): the dragonnades and the Huguenot diaspora; the survival of the Jesuits in Russia; dechristianisation in France; the Middle Colonies in the Great Awakening.

## Files checked with nothing to report

synod-of-jerusalem, pietism, toleration-act, tranquebar-mission, holy-synod-of-russia, moravian-renewal, philokalia, religious-freedom-in-america

## Method note

All 19 files read in full (front matter, dating notes, body). The batch has no `[[bible:…]]` citations, so no Bible passages were verified (the allusions in Fox and Fell are quoted from their own texts). About 20 web pages/full texts were opened and searched: Fox's Journal chs. 1, 4, 6 (CCEL); the Harrison–Mirrlees *Avvakum* (table and hearing); Statutes of the Realm text of the Toleration Act (section numbers I–X confirmed); the Synod of Jerusalem acts (pp. 6–7, 106–108, subscription); Ziegenbalg's letters (arrival, church, letter of 7 Oct 1707); Francke's *Footsteps*; Whitefield's seventh journal (20 Sept, 12 and 17–19 Oct 1740); *Charitas* §§ 9, 11, 20–22; Anderson's note and text of the Concordat; CBCK history page; Wikipedia for Regiminis Apostolici and Yi Byeok; an excerpt of Allen's *Life*. All Old Style/New Style conversions and every weekday stated in the dating notes (24 May 1689, 24 May 1738, 2 April 1739, 20 Sept and 12 Oct 1740, 10 Aug 1727, 14 Dec 1732, 14 Aug 1707, 2 Sept 1792) were recomputed and are correct. Could not reach docsouth.unc.edu, web.archive.org or gutenberg.org (Allen's full text, the AME Discipline, Saint-Simon), and did not open the Latin scans of *Ex quo singulari*, the 1667 Moscow decree, Dallet, Consett's *Spiritual Regulation*, the Philokalia preface or Nash/Newman; claims resting on those were judged from own knowledge and looked sound.
