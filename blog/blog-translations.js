// Blog article translations
// Same system as main site: data-translate attributes + nested translation objects

const blogTranslations = {
en: {
    nav: { back: "Regolith Mining", allPosts: "All Posts" },
    dispatch1: {
        date: "Lunar Dispatch #1 — November 15, 2025",
        title: "Interlune's Harvester, Helium-3, and the Business Case for Lunar Mining",
        subtitle: "The first real hardware for commercial lunar resource extraction is here. We look at who's building what — and why the economics are starting to make sense.",
        h1: "The Harvester Prototype",
        p1: "In the most tangible sign yet that lunar mining is transitioning from concept to engineering, Interlune publicly unveiled its full-scale Helium-3 harvester prototype earlier this year. The Seattle-based startup, founded by former Blue Origin executives, has designed a machine that excavates lunar regolith, heats the fine-grained soil to release trapped gases, and separates Helium-3 through a cryogenic process.",
        p2: "What makes this more than a press release: the system has already been tested at subscale and full-size on Earth, including in simulated lunar gravity during parabolic flights. Interlune's resource development mission, planned for 2027, will measure Helium-3 concentrations at a candidate harvesting site and test extraction on a small scale on the actual lunar surface.",
        h2: "Why Helium-3?",
        p3: "Helium-3 is vanishingly rare on Earth — measured in single-digit kilograms of annual production — but is thought to be abundant in lunar regolith, deposited over billions of years by solar wind. The isotope has near-term commercial value in quantum computing (as a cryogenic coolant and in neutron detectors), medical imaging (lung MRI contrast), and nuclear fusion research.",
        p4: "Current Earth-based prices exceed $2,000 per liter. At those economics, even modest extraction volumes could generate meaningful revenue — especially given that the quantum computing industry's demand for He-3 is growing faster than terrestrial supply.",
        h3: "The Lander Arms Race",
        p5: "Meanwhile, the infrastructure needed to deliver mining equipment to the Moon is maturing rapidly. In early November, both SpaceX and Blue Origin shared updated lunar landing profiles for their respective Artemis program landers.",
        p6: "SpaceX's Starship HLS stands over 50 meters tall and offers unmatched payload capacity — critical for delivering heavy mining equipment. Blue Origin's Blue Moon Mark 1, while smaller at ~15 meters, doesn't require orbital refueling and is already in production, with uncrewed test flights planned for 2026-2027.",
        p7: "NASA has also reopened competition for the Artemis III lander contract, signaling that the agency wants multiple viable paths to the lunar surface — a development that benefits any company planning surface operations.",
        h4: "South Korea's Lunar Testbed",
        p8: "In an unexpected development, South Korea is converting a former terrestrial mine in Taebaek into a testing ground for lunar exploration technologies. The abandoned mine's dark, cold, rugged environment provides a reasonable analog for conditions at the lunar south pole — at a fraction of the cost of testing in vacuum chambers or on actual missions.",
        h5: "The Bigger Picture",
        p9: "November 2025 marks a shift in tone across the industry. We're no longer debating whether lunar resource extraction will happen — the conversation has moved to timelines, supply chains, and market development. The companies building picks and shovels for the lunar gold rush are now testing real hardware, and the landers that will deliver it are in production.",
        p10: "The question is no longer if but who gets there first with a viable extraction system.",
        sources: "Sources",
        next: "Next: December 2025 →"
    },
    dispatch2: {
        date: "Lunar Dispatch #2 — December 12, 2025",
        title: "The Legal Frontier — Why Moon Mining Needs Rules Before It Needs Rockets",
        subtitle: "The 1967 Outer Space Treaty wasn't written for companies with excavators. As the space race accelerates, the legal framework remains stuck in the Cold War.",
        h1: "The Regulatory Vacuum",
        p1: "The race to mine the Moon intensified throughout 2025, but one critical piece remains conspicuously absent: clear international rules for lunar resource extraction. The 1967 Outer Space Treaty establishes that no nation can claim sovereignty over celestial bodies, but it says nothing about commercial mining rights — because nobody imagined we'd need to.",
        p2: "The United States' 2015 Commercial Space Launch Competitiveness Act and the Artemis Accords (now signed by 43 nations) provide a framework for resource utilization, but they remain controversial. China and Russia — both planning major lunar programs — have not signed the Accords, raising the prospect of competing legal regimes on the lunar surface.",
        h2: "Why It Matters Now",
        p3: "This isn't a theoretical concern anymore. Australia is sending a rover in 2026 to extract oxygen and collect soil samples. China's Chang'e 7 mission, targeting the lunar south pole in August 2026, will survey water ice deposits with a six-legged flying probe. Interlune plans a resource development mission in 2027. ISRO has identified MM-4 at Mons Mouton as its candidate mining site near the south pole.",
        p4: "Multiple nations and companies converging on the same resource-rich areas — particularly the permanently shadowed craters at the south pole — without agreed-upon rules is a recipe for conflict.",
        quote: "\"The race to mine the moon is on — and it urgently needs some clear international rules.\"",
        quoteAttr: "— The Conversation / Space.com, December 2025",
        h3: "SpaceX vs. Blue Origin: Lander Profiles",
        p5: "Both companies shared detailed landing profiles in November, revealing fundamentally different approaches to reaching the Moon. SpaceX's Starship HLS is a massive vehicle requiring orbital refueling — an orbital propellant transfer demonstration is now expected in 2026. Blue Origin's Blue Moon Mark 1 is smaller but self-contained, with launches planned for early 2026.",
        p6: "For the mining industry, these aren't just competing rockets — they represent different payload envelopes, landing site constraints, and operational timelines. Starship can deliver enormous equipment but adds refueling complexity. Blue Moon is more limited but potentially more predictable.",
        h4: "The CLPS Scoreboard",
        p7: "NASA's Commercial Lunar Payload Services (CLPS) program continued its mixed record in 2025:",
        li1: "Firefly's Blue Ghost Mission 1 — Successfully landed at Mare Crisium on March 2, becoming the first fully successful commercial soft-landing. Completed all 10 NASA payload objectives over 14 days of surface operations.",
        li2: "Intuitive Machines IM-2 — Touched down near the south pole on March 6, but the lander failed to achieve an upright position, limiting science operations. Still delivered some data to NASA.",
        li3: "ispace Hakuto-R Mission 2 — Launched in January, crashed on the Moon in June. The company's second failed landing attempt.",
        p8: "The scorecard tells a story: landing on the Moon is hard, but it's no longer impossible for private companies. The success rate will improve, and with each mission, the cost of lunar delivery drops.",
        h5: "Looking Ahead",
        p9: "As we close out 2025, the lunar mining industry sits at an inflection point. The technology is advancing faster than the governance. The smart money is watching not just who can land on the Moon, but who can establish clear, enforceable property rights for what they extract from it.",
        sources: "Sources",
        prev: "← November 2025",
        next: "January 2026 →"
    },
    dispatch3: {
        date: "Lunar Dispatch #3 — January 20, 2026",
        title: "2025 in Review — The Year Commercial Lunar Landings Became Real",
        subtitle: "Six landing attempts, two successes, one crash, and a fundamentally changed landscape for lunar resource extraction.",
        h1: "The 2025 Lunar Scoreboard",
        p1: "2025 was the most active year for lunar missions since the Apollo era. Multiple commercial landers reached the surface — some successfully, others less so — but the sheer volume of attempts signals that the infrastructure for a permanent lunar presence is being built in real time.",
        li1: "Firefly Blue Ghost M1 (Mar 2) — Full success. First commercial company to achieve a completely successful soft-landing. 14 days of surface ops, 100% payload objectives met at Mare Crisium.",
        li2: "Intuitive Machines IM-2 (Mar 6) — Partial success. Landed near the south pole carrying NASA's PRIME-1 drill experiment, but tipped on its side. Some data returned.",
        li3: "ispace Hakuto-R M2 (Jun 6) — Crash. Second failed landing for the Japanese company. Data recovery ongoing.",
        li4: "China Chang'e 6 — Successfully returned far-side lunar samples earlier in the year, a world first for the far side.",
        p2: "The pattern is clear: landing on the Moon is getting normalized, even if it remains difficult. Each attempt — success or failure — generates engineering data that makes the next one more likely to succeed.",
        h2: "Artemis II: The Countdown Begins",
        p3: "On January 16, NASA announced that the Artemis II rocket would roll out to Kennedy Space Center the following day. The mission — a 10-day crewed flight around the Moon without landing — will be the first time humans have traveled beyond low Earth orbit since Apollo 17 in 1972.",
        p4: "Launch is targeted for early March 2026. The crew of four will loop around the Moon, testing the Orion spacecraft's life support systems and navigation in deep space. While Artemis II won't land, it's the critical precursor to Artemis III — the mission that will return astronauts to the lunar surface.",
        h3: "Interlune's Quiet Momentum",
        p5: "While the landing missions grabbed headlines, Interlune continued building the most credible lunar mining operation. The company's Helium-3 harvester — tested in parabolic flight and on Earth — is being refined based on 2025 test data. Their multispectral camera, scheduled to launch to the lunar surface in July 2026, will characterize regolith composition at prospective mining sites.",
        p6: "Interlune also secured a new round of funding, bringing total investment to over $20 million. The company's resource development mission in 2027 remains on track — making it potentially the first dedicated lunar mining mission in history.",
        h4: "The Private Lander Pipeline for 2026",
        p7: "The next 12 months promise an even busier lunar calendar:",
        li5: "Blue Origin Blue Moon Mark 1 — Uncrewed cargo lander, first flight planned for 2026",
        li6: "Intuitive Machines IM-3 — Second half of 2026, carrying international payloads and a lunar data relay satellite",
        li7: "SpaceX Starship HLS — Orbital propellant transfer demo expected 2026, precursor to Artemis III lunar lander",
        li8: "China Chang'e 7 — August 2026, targeting the lunar south pole with an orbiter, lander, rover, and flying probe",
        li9: "Australia's lunar rover — 2026, designed to extract oxygen and collect soil",
        h5: "What It Means for Mining",
        p8: "Every successful landing reduces the cost per kilogram of delivering equipment to the lunar surface. Every new lander design creates options for where and how mining hardware can be deployed. The 2025 results — even the failures — accelerate the timeline for commercial resource extraction.",
        p9: "The bottleneck is no longer \"can we get there?\" It's shifting to \"can we operate continuously once we arrive?\" That's a fundamentally different engineering problem, and it's the one the mining industry needs to solve next.",
        sources: "Sources",
        prev: "← December 2025",
        next: "February 2026 →"
    },
    dispatch4: {
        date: "Lunar Dispatch #4 — February 24, 2026",
        title: "Artemis II Rolls to the Pad — Humanity Returns to Deep Space",
        subtitle: "The most significant human spaceflight mission in 54 years is weeks away. Meanwhile, the lunar mining supply chain is quietly taking shape on three continents.",
        h1: "Artemis II: March 6 Launch",
        p1: "After years of delays and budget battles, it's finally happening. On January 17, NASA's Space Launch System carrying the Orion capsule rolled out to Launch Complex 39B at Kennedy Space Center. The Artemis II mission is now targeting March 6, 2026 for launch.",
        p2: "Four astronauts — Reid Wiseman, Victor Glover, Christina Koch, and Jeremy Hansen — will spend 10 days on a trajectory around the Moon and back. They won't land, but they'll travel farther from Earth than any human since Gene Cernan left the lunar surface in December 1972.",
        p3: "For the mining industry, Artemis II matters because it validates the transportation system that will eventually deliver the Artemis III crew to the surface. Every milestone in the Artemis program de-risks the timeline for sustained human presence — and sustained human presence is what makes large-scale resource extraction viable.",
        h2: "Interlune Secures NASA Excavator Contract",
        p4: "In the most directly relevant development for lunar mining this month, Interlune announced a NASA contract to develop a lunar excavator optimized for the harsh lunar environment. The contract focuses on minimizing power consumption while maximizing regolith processing throughput — the two key engineering challenges for any lunar mining operation.",
        p5: "Work on the current phase is due to wrap up by mid-2026. If results are positive, Interlune could advance to building flight-ready hardware. Combined with their multispectral camera launching to the Moon in July 2026 and a full resource development mission in 2027, Interlune continues to have the most credible timeline of any lunar mining company.",
        h3: "China's Chang'e 7: The Competition Sharpens",
        p6: "China's Chang'e 7 mission, scheduled for August 2026, is shaping up to be the most ambitious robotic lunar mission ever attempted. The payload includes an orbiter, a lander, a rover, and — remarkably — a six-legged flying probe designed to hop into permanently shadowed craters to search for water ice.",
        p7: "The lander will target Shackleton Crater's illuminated rim — one of the most coveted real estate locations in the solar system. Shackleton's rim receives near-constant sunlight (for solar power) while its permanently shadowed interior likely contains significant water ice deposits.",
        p8: "China has not signed the Artemis Accords. Their separate International Lunar Research Station (ILRS) program, developed with Russia, represents a parallel governance framework. The implications for resource rights at contested sites like Shackleton remain unresolved.",
        h4: "India Picks Its Landing Site",
        p9: "Fresh off the success of Chandrayaan-3 (the first landing near the lunar south pole in 2023), ISRO has identified MM-4 at Mons Mouton as the target for its next lunar mission. The site was selected for its proximity to permanently shadowed regions and potential water ice access.",
        p10: "India's approach is methodical: use Chandrayaan-4 for sample return, then leverage the data for future resource utilization missions. ISRO joins NASA, ESA, China, and Japan in the growing list of agencies with active south pole ambitions.",
        h5: "The South Pole Convergence",
        p11: "Count the entities now targeting the lunar south pole region:",
        li1: "NASA / Artemis III — Crewed landing, mid-2027",
        li2: "China / Chang'e 7 — Robotic, August 2026",
        li3: "India / Chandrayaan-4 — Sample return, TBD",
        li4: "Interlune — Resource development mission, 2027",
        li5: "Intuitive Machines / IM-3 — Robotic lander, H2 2026",
        li6: "Blue Origin / Blue Moon — Cargo lander, 2026-2027",
        li7: "Australia — Mining rover, 2026",
        p12: "Seven programs, one destination. The south pole's water ice and near-constant solar illumination make it the logical first mining site — but the crowding raises questions about coordination, interference, and rights that the current legal framework isn't equipped to answer.",
        h6: "Our Take",
        p13: "February 2026 feels like a tipping point. The hardware is real, the missions are funded, and the political will exists across multiple nations. The lunar mining industry is transitioning from \"possible in theory\" to \"probable within the decade.\"",
        p14: "The companies and nations that invest now in extraction technology, regulatory frameworks, and delivery infrastructure will define the cis-lunar economy for the next century. The grey frontier is getting crowded — and that's exactly what progress looks like.",
        sources: "Sources",
        prev: "← January 2026"
    }
},
no: {
    nav: { back: "Regolith Mining", allPosts: "Alle innlegg" },
    dispatch1: {
        date: "Månebulletin #1 — 15. november 2025",
        title: "Interlunes høster, Helium-3 og forretningsgrunnlaget for gruvedrift på månen",
        subtitle: "Den første virkelige maskinvaren for kommersiell utvinning av måneressurser er her. Vi ser på hvem som bygger hva — og hvorfor økonomien begynner å gi mening.",
        h1: "Høster-prototypen",
        p1: "I det mest håndgripelige tegnet så langt på at gruvedrift på månen går fra konsept til ingeniørarbeid, avduket Interlune offentlig sin fullskala Helium-3-høster-prototype tidligere i år. Oppstarten fra Seattle, grunnlagt av tidligere Blue Origin-ledere, har designet en maskin som graver ut måneregolitt, varmer opp det finkornede jordsmonnet for å frigjøre innestengte gasser, og separerer Helium-3 gjennom en kryogen prosess.",
        p2: "Det som gjør dette til mer enn en pressemelding: systemet er allerede testet i mindre skala og fullskala på jorden, inkludert i simulert månegravitasjon under parabolske flyvninger. Interlunes ressursutviklingsoppdrag, planlagt til 2027, vil måle Helium-3-konsentrasjoner på et kandidatsted for høsting og teste utvinning i liten skala på den faktiske måneoverflaten.",
        h2: "Hvorfor Helium-3?",
        p3: "Helium-3 er ekstremt sjeldent på jorden — målt i ensifrede kilogram i årlig produksjon — men antas å finnes i rikelige mengder i måneregolitt, avsatt over milliarder av år av solvind. Isotopen har kommersiell verdi på kort sikt innen kvantedatabehandling (som kryogen kjølevæske og i nøytrondetektorer), medisinsk avbildning (lunge-MR-kontrast) og kjernefusjonsforskning.",
        p4: "Nåværende jordbaserte priser overstiger 2000 dollar per liter. Med den økonomien kan selv beskjedne utvinningsvolumer generere meningsfull inntekt — spesielt gitt at kvantedataindustriens etterspørsel etter He-3 vokser raskere enn jordisk tilbud.",
        h3: "Kappløpet om landingsfartøyer",
        p5: "I mellomtiden modnes infrastrukturen som trengs for å levere gruveutstyr til månen raskt. I begynnelsen av november delte både SpaceX og Blue Origin oppdaterte månelandingsprofiler for sine respektive Artemis-programlandere.",
        p6: "SpaceX sitt Starship HLS er over 50 meter høyt og tilbyr uovertruffen lastekapasitet — kritisk for levering av tungt gruveutstyr. Blue Origins Blue Moon Mark 1, selv om den er mindre med ~15 meter, krever ikke orbital drivstoffylling og er allerede i produksjon, med ubemannede testflyvninger planlagt for 2026-2027.",
        p7: "NASA har også gjenåpnet konkurransen om Artemis III-landerkontrakten, noe som signaliserer at byrået ønsker flere levedyktige veier til måneoverflaten — en utvikling som gagner ethvert selskap som planlegger overflateoperasjoner.",
        h4: "Sør-Koreas måne-testområde",
        p8: "I en uventet utvikling konverterer Sør-Korea en tidligere jordisk gruve i Taebaek til et testområde for måneutforskningsteknoligier. Den forlatte gruvens mørke, kalde, robuste miljø gir en rimelig analog for forholdene ved månens sørpol — til en brøkdel av kostnadene ved testing i vakuumkamre eller på faktiske oppdrag.",
        h5: "Det store bildet",
        p9: "November 2025 markerer et skifte i tonen på tvers av bransjen. Vi debatterer ikke lenger om utvinning av måneressurser vil skje — samtalen har flyttet seg til tidslinjer, forsyningskjeder og markedsutvikling. Selskapene som bygger hakker og spader for månens gullrush tester nå ekte maskinvare, og landerne som skal levere den er i produksjon.",
        p10: "Spørsmålet er ikke lenger om, men hvem som kommer først med et levedyktig utvinningssystem.",
        sources: "Kilder",
        next: "Neste: Desember 2025 →"
    },
    dispatch2: {
        date: "Månebulletin #2 — 12. desember 2025",
        title: "Den juridiske fronten — Hvorfor gruvedrift på månen trenger regler før raketter",
        subtitle: "Romtraktaten fra 1967 ble ikke skrevet for selskaper med gravemaskiner. Mens romkappløpet akselererer, står det juridiske rammeverket fast i den kalde krigen.",
        h1: "Det regulatoriske vakuumet",
        p1: "Kappløpet om å utvinne ressurser fra månen intensiverte gjennom 2025, men en kritisk brikke mangler påfallende: klare internasjonale regler for utvinning av måneressurser. Romtraktaten fra 1967 fastslår at ingen nasjon kan kreve suverenitet over himmellegemer, men den sier ingenting om kommersielle gruverettigheter — fordi ingen forestilte seg at vi ville trenge det.",
        p2: "USAs Commercial Space Launch Competitiveness Act fra 2015 og Artemis-avtalene (nå signert av 43 nasjoner) gir et rammeverk for ressursutnyttelse, men de forblir kontroversielle. Kina og Russland — som begge planlegger store måneprogrammer — har ikke signert avtalene, noe som reiser utsikten til konkurrerende juridiske regimer på måneoverflaten.",
        h2: "Hvorfor det betyr noe nå",
        p3: "Dette er ikke lenger en teoretisk bekymring. Australia sender en rover i 2026 for å utvinne oksygen og samle jordprøver. Kinas Chang'e 7-oppdrag, rettet mot månens sørpol i august 2026, vil kartlegge vannis-forekomster med en seksbeint flygende sonde. Interlune planlegger et ressursutviklingsoppdrag i 2027. ISRO har identifisert MM-4 ved Mons Mouton som sitt kandidat-gruvested nær sørpolen.",
        p4: "Flere nasjoner og selskaper som konvergerer mot de samme ressursrike områdene — spesielt de permanent skyggefulle kraterne ved sørpolen — uten omforente regler er en oppskrift på konflikt.",
        quote: "«Kappløpet om å utvinne ressurser fra månen er i gang — og det trenger desperat noen klare internasjonale regler.»",
        quoteAttr: "— The Conversation / Space.com, desember 2025",
        h3: "SpaceX mot Blue Origin: Landerprofiler",
        p5: "Begge selskapene delte detaljerte landingsprofiler i november, som avslørte fundamentalt forskjellige tilnærminger for å nå månen. SpaceX sitt Starship HLS er et massivt fartøy som krever orbital drivstoffylling — en demonstrasjon av orbital drivstoffoverføring forventes nå i 2026. Blue Origins Blue Moon Mark 1 er mindre men selvforsynt, med oppskytinger planlagt tidlig i 2026.",
        p6: "For gruveindustrien er dette ikke bare konkurrerende raketter — de representerer forskjellige lastekapasiteter, begrensninger for landingssteder og operasjonelle tidslinjer. Starship kan levere enormt utstyr, men legger til kompleksitet med drivstoffylling. Blue Moon er mer begrenset, men potensielt mer forutsigbar.",
        h4: "CLPS-resultattavlen",
        p7: "NASAs Commercial Lunar Payload Services (CLPS)-program fortsatte sin blandede historie i 2025:",
        li1: "Fireflys Blue Ghost Mission 1 — Vellykket landing ved Mare Crisium 2. mars, ble det første fullt vellykkede kommersielle myklandingen. Fullførte alle 10 NASA-nyttelastmål over 14 dager med overflateoperasjoner.",
        li2: "Intuitive Machines IM-2 — Landet nær sørpolen 6. mars, men landeren klarte ikke å oppnå oppreist posisjon, noe som begrenset vitenskapelige operasjoner. Leverte fortsatt noen data til NASA.",
        li3: "ispace Hakuto-R Mission 2 — Skutt opp i januar, krasjet på månen i juni. Selskapets andre mislykkede landingsforsøk.",
        p8: "Resultattavlen forteller en historie: å lande på månen er vanskelig, men det er ikke lenger umulig for private selskaper. Suksessraten vil forbedres, og med hvert oppdrag synker kostnaden for månelevering.",
        h5: "Veien videre",
        p9: "Når vi avslutter 2025, står gruveindustrien på månen ved et vendepunkt. Teknologien avanserer raskere enn styringen. De smarte pengene følger ikke bare med på hvem som kan lande på månen, men hvem som kan etablere klare, håndhevbare eiendomsrettigheter for det de utvinner fra den.",
        sources: "Kilder",
        prev: "← November 2025",
        next: "Januar 2026 →"
    },
    dispatch3: {
        date: "Månebulletin #3 — 20. januar 2026",
        title: "2025 i tilbakeblikk — Året kommersielle månelandinger ble virkelighet",
        subtitle: "Seks landingsforsøk, to suksesser, én krasj og et fundamentalt endret landskap for utvinning av måneressurser.",
        h1: "Måne-resultattavlen 2025",
        p1: "2025 var det mest aktive året for måneoppdrag siden Apollo-æraen. Flere kommersielle landere nådde overflaten — noen vellykket, andre mindre — men det store volumet av forsøk signaliserer at infrastrukturen for en permanent tilstedeværelse på månen bygges i sanntid.",
        li1: "Firefly Blue Ghost M1 (2. mars) — Full suksess. Første kommersielle selskap som oppnådde en helt vellykket myklanding. 14 dager med overflateoperasjoner, 100% nyttelastmål oppnådd ved Mare Crisium.",
        li2: "Intuitive Machines IM-2 (6. mars) — Delvis suksess. Landet nær sørpolen med NASAs PRIME-1-boreeksperiment, men veltet på siden. Noen data returnert.",
        li3: "ispace Hakuto-R M2 (6. juni) — Krasj. Andre mislykkede landing for det japanske selskapet. Datagjenoppretting pågår.",
        li4: "Kina Chang'e 6 — Returnerte vellykket prøver fra månens bakside tidligere på året, en verdenspremiere for baksiden.",
        p2: "Mønsteret er klart: å lande på månen blir normalisert, selv om det fortsatt er vanskelig. Hvert forsøk — suksess eller fiasko — genererer ingeniørdata som gjør det neste mer sannsynlig å lykkes.",
        h2: "Artemis II: Nedtellingen begynner",
        p3: "16. januar kunngjorde NASA at Artemis II-raketten ville rulle ut til Kennedy Space Center dagen etter. Oppdraget — en 10 dagers bemannet flytur rundt månen uten landing — blir første gang mennesker har reist utenfor lav jordbane siden Apollo 17 i 1972.",
        p4: "Oppskytning er planlagt til tidlig mars 2026. Mannskapet på fire vil fly rundt månen og teste Orion-romfartøyets livsoppholdssystemer og navigasjon i det dype rommet. Selv om Artemis II ikke lander, er det den kritiske forløperen til Artemis III — oppdraget som vil bringe astronauter tilbake til måneoverflaten.",
        h3: "Interlunes stille momentum",
        p5: "Mens landingsoppdragene stjal overskriftene, fortsatte Interlune å bygge den mest troverdige gruveoperasjonen på månen. Selskapets Helium-3-høster — testet i parabolsk flytur og på jorden — blir forbedret basert på 2025-testdata. Deres multispektrale kamera, planlagt for oppskyting til måneoverflaten i juli 2026, vil karakterisere regolittsammensetningen ved potensielle gruvesiter.",
        p6: "Interlune sikret også en ny finansieringsrunde, som brakte total investering til over 20 millioner dollar. Selskapets ressursutviklingsoppdrag i 2027 er fortsatt i rute — noe som gjør det potensielt til det første dedikerte gruveoppdraget på månen i historien.",
        h4: "Den private lander-pipelinen for 2026",
        p7: "De neste 12 månedene lover en enda travlere månekalender:",
        li5: "Blue Origin Blue Moon Mark 1 — Ubemannet fraktlander, første flytur planlagt for 2026",
        li6: "Intuitive Machines IM-3 — Andre halvdel av 2026, bærer internasjonale nyttelaster og en datarelésatellitt for månen",
        li7: "SpaceX Starship HLS — Demonstrasjon av orbital drivstoffoverføring forventet 2026, forløper til Artemis III månelander",
        li8: "Kina Chang'e 7 — August 2026, rettet mot månens sørpol med orbiter, lander, rover og flygende sonde",
        li9: "Australias månerover — 2026, designet for å utvinne oksygen og samle jord",
        h5: "Hva det betyr for gruvedrift",
        p8: "Hver vellykket landing reduserer kostnaden per kilogram for levering av utstyr til måneoverflaten. Hvert nytt lander-design skaper muligheter for hvor og hvordan gruveutstyr kan utplasseres. 2025-resultatene — selv fiaskoene — akselererer tidslinjen for kommersiell ressursutvinning.",
        p9: "Flaskehalsen er ikke lenger «kan vi komme dit?» Den skifter til «kan vi operere kontinuerlig når vi ankommer?» Det er et fundamentalt annerledes ingeniørproblem, og det er det gruveindustrien må løse neste.",
        sources: "Kilder",
        prev: "← Desember 2025",
        next: "Februar 2026 →"
    },
    dispatch4: {
        date: "Månebulletin #4 — 24. februar 2026",
        title: "Artemis II ruller til utskytningsrampen — Menneskeheten returnerer til det dype rom",
        subtitle: "Det mest betydningsfulle bemannede romoppdraget på 54 år er uker unna. I mellomtiden tar forsyningskjeden for gruvedrift på månen stille form på tre kontinenter.",
        h1: "Artemis II: Oppskytning 6. mars",
        p1: "Etter år med forsinkelser og budsjettkamper skjer det endelig. 17. januar rullet NASAs Space Launch System med Orion-kapselen ut til Launch Complex 39B ved Kennedy Space Center. Artemis II-oppdraget sikter nå mot 6. mars 2026 for oppskytning.",
        p2: "Fire astronauter — Reid Wiseman, Victor Glover, Christina Koch og Jeremy Hansen — vil tilbringe 10 dager på en bane rundt månen og tilbake. De vil ikke lande, men de vil reise lenger fra jorden enn noe menneske siden Gene Cernan forlot måneoverflaten i desember 1972.",
        p3: "For gruveindustrien betyr Artemis II noe fordi det validerer transportsystemet som til slutt vil levere Artemis III-mannskapet til overflaten. Hver milepæl i Artemis-programmet reduserer risikoen i tidslinjen for vedvarende menneskelig tilstedeværelse — og vedvarende menneskelig tilstedeværelse er det som gjør storskala ressursutvinning levedyktig.",
        h2: "Interlune sikrer NASA-kontrakt for gravemaskin",
        p4: "I den mest direkte relevante utviklingen for gruvedrift på månen denne måneden kunngjorde Interlune en NASA-kontrakt for å utvikle en månegravemaskin optimalisert for det barske månelandskapet. Kontrakten fokuserer på å minimere strømforbruk samtidig som gjennomstrømning av regolittbehandling maksimeres — de to viktigste ingeniørutfordringene for enhver gruveoperasjon på månen.",
        p5: "Arbeidet med den nåværende fasen skal avsluttes innen midten av 2026. Hvis resultatene er positive, kan Interlune gå videre til å bygge flytklar maskinvare. Kombinert med deres multispektrale kamera som skytes opp til månen i juli 2026 og et fullstendig ressursutviklingsoppdrag i 2027, fortsetter Interlune å ha den mest troverdige tidslinjen av noe gruveselskap på månen.",
        h3: "Kinas Chang'e 7: Konkurransen skjerpes",
        p6: "Kinas Chang'e 7-oppdrag, planlagt til august 2026, former seg til å bli det mest ambisiøse robotiske måneoppdaget noensinne. Nyttelasten inkluderer en orbiter, en lander, en rover og — bemerkelsesverdig — en seksbeint flygende sonde designet for å hoppe inn i permanent skyggefulle kratere for å lete etter vannis.",
        p7: "Landeren vil sikte mot Shackleton-kraterets belyste kant — en av de mest ettertraktede eiendomslokaliseringene i solsystemet. Shackletons kant mottar nesten konstant sollys (for solenergi) mens dets permanent skyggefulle indre sannsynligvis inneholder betydelige vannis-forekomster.",
        p8: "Kina har ikke signert Artemis-avtalene. Deres separate International Lunar Research Station (ILRS)-program, utviklet med Russland, representerer et parallelt styringsrammeverk. Implikasjonene for ressursrettigheter på omstridte steder som Shackleton forblir uløste.",
        h4: "India velger sitt landingssted",
        p9: "Etter suksessen med Chandrayaan-3 (den første landingen nær månens sørpol i 2023), har ISRO identifisert MM-4 ved Mons Mouton som målet for sitt neste måneoppdrag. Stedet ble valgt for sin nærhet til permanent skyggefulle regioner og potensiell tilgang til vannis.",
        p10: "Indias tilnærming er metodisk: bruk Chandrayaan-4 for prøveretur, deretter utnytt dataene for fremtidige ressursutnyttelsesoppdrag. ISRO slutter seg til NASA, ESA, Kina og Japan på den voksende listen over byråer med aktive sørpol-ambisjoner.",
        h5: "Sørpol-konvergensen",
        p11: "Tell enhetene som nå sikter mot månens sørpolregion:",
        li1: "NASA / Artemis III — Bemannet landing, midten av 2027",
        li2: "Kina / Chang'e 7 — Robotisk, august 2026",
        li3: "India / Chandrayaan-4 — Prøveretur, dato ikke bestemt",
        li4: "Interlune — Ressursutviklingsoppdrag, 2027",
        li5: "Intuitive Machines / IM-3 — Robotisk lander, H2 2026",
        li6: "Blue Origin / Blue Moon — Fraktlander, 2026-2027",
        li7: "Australia — Gruverover, 2026",
        p12: "Syv programmer, én destinasjon. Sørpolens vannis og nesten konstant solbelysning gjør den til det logiske første gruvestedet — men trengselen reiser spørsmål om koordinering, interferens og rettigheter som det nåværende juridiske rammeverket ikke er rustet til å besvare.",
        h6: "Vår vurdering",
        p13: "Februar 2026 føles som et vippepunkt. Maskinvaren er ekte, oppdragene er finansiert, og den politiske viljen finnes på tvers av flere nasjoner. Gruveindustrien på månen går fra «mulig i teorien» til «sannsynlig innen tiåret».",
        p14: "Selskapene og nasjonene som investerer nå i utvinningsteknologi, regulatoriske rammeverk og leveringsinfrastruktur vil definere den cis-lunære økonomien for det neste århundret. Den grå fronten blir folksom — og det er nettopp slik fremskritt ser ut.",
        sources: "Kilder",
        prev: "← Januar 2026"
    }
},
de: {
    nav: { back: "Regolith Mining", allPosts: "Alle Beiträge" },
    dispatch1: {
        date: "Mond-Depesche #1 — 15. November 2025",
        title: "Interlunes Harvester, Helium-3 und das Geschäftsmodell für Mondbergbau",
        subtitle: "Die erste echte Hardware für kommerzielle Mondressourcengewinnung ist da. Wir untersuchen, wer was baut — und warum die Wirtschaftlichkeit langsam Sinn ergibt.",
        h1: "Der Harvester-Prototyp",
        p1: "Im bisher deutlichsten Zeichen dafür, dass Mondbergbau vom Konzept zur Ingenieursarbeit übergeht, hat Interlune seinen Helium-3-Harvester-Prototypen in Originalgröße öffentlich vorgestellt. Das Startup aus Seattle, gegründet von ehemaligen Blue-Origin-Führungskräften, hat eine Maschine entwickelt, die Mondregolith ausgräbt, den feinkörnigen Boden erhitzt, um eingeschlossene Gase freizusetzen, und Helium-3 durch einen kryogenen Prozess abtrennt.",
        p2: "Was dies zu mehr als einer Pressemitteilung macht: Das System wurde bereits im verkleinerten und vollständigen Maßstab auf der Erde getestet, einschließlich in simulierter Mondgravitation während Parabelflügen. Interlunes Ressourcenentwicklungsmission, geplant für 2027, wird Helium-3-Konzentrationen an einem Kandidatenstandort messen und die Gewinnung im kleinen Maßstab auf der tatsächlichen Mondoberfläche testen.",
        h2: "Warum Helium-3?",
        p3: "Helium-3 ist auf der Erde extrem selten — gemessen in einstelligen Kilogramm jährlicher Produktion — kommt aber vermutlich reichlich im Mondregolith vor, abgelagert über Milliarden Jahre durch Sonnenwind. Das Isotop hat kurzfristigen kommerziellen Wert im Quantencomputing (als kryogenes Kühlmittel und in Neutronendetektoren), in der medizinischen Bildgebung (Lungen-MRT-Kontrast) und in der Kernfusionsforschung.",
        p4: "Aktuelle erdbasierte Preise übersteigen 2.000 Dollar pro Liter. Bei dieser Wirtschaftlichkeit können selbst bescheidene Gewinnungsmengen bedeutende Einnahmen generieren — besonders angesichts der Tatsache, dass die Nachfrage der Quantencomputer-Industrie nach He-3 schneller wächst als das irdische Angebot.",
        h3: "Das Wettrennen der Landefähren",
        p5: "Gleichzeitig reift die Infrastruktur zur Lieferung von Bergbauausrüstung zum Mond schnell heran. Anfang November teilten sowohl SpaceX als auch Blue Origin aktualisierte Mondlandungsprofile für ihre jeweiligen Artemis-Programm-Landefähren.",
        p6: "SpaceX' Starship HLS ist über 50 Meter hoch und bietet eine unerreichte Nutzlastkapazität — entscheidend für die Lieferung schwerer Bergbauausrüstung. Blue Origins Blue Moon Mark 1, obwohl kleiner mit ~15 Metern, benötigt keine orbitale Betankung und befindet sich bereits in der Produktion, mit unbemannten Testflügen geplant für 2026-2027.",
        p7: "Die NASA hat auch den Wettbewerb für den Artemis-III-Landefährenvertrag wiedereröffnet, was signalisiert, dass die Behörde mehrere tragfähige Wege zur Mondoberfläche wünscht — eine Entwicklung, die jedem Unternehmen zugutekommt, das Oberflächenoperationen plant.",
        h4: "Südkoreas Mond-Testgelände",
        p8: "In einer unerwarteten Entwicklung wandelt Südkorea eine ehemalige irdische Mine in Taebaek in ein Testgelände für Monderkundungstechnologien um. Die dunkle, kalte, raue Umgebung der verlassenen Mine bietet eine vernünftige Analogie zu den Bedingungen am Mond-Südpol — zu einem Bruchteil der Kosten für Tests in Vakuumkammern oder bei tatsächlichen Missionen.",
        h5: "Das große Ganze",
        p9: "November 2025 markiert einen Tonwechsel in der gesamten Branche. Wir debattieren nicht mehr darüber, ob Mondressourcengewinnung stattfinden wird — das Gespräch hat sich zu Zeitplänen, Lieferketten und Marktentwicklung verschoben. Die Unternehmen, die Spitzhacken und Schaufeln für den Mond-Goldrausch bauen, testen jetzt echte Hardware, und die Landefähren, die sie liefern werden, sind in Produktion.",
        p10: "Die Frage ist nicht mehr ob, sondern wer zuerst mit einem funktionsfähigen Gewinnungssystem dort ankommt.",
        sources: "Quellen",
        next: "Weiter: Dezember 2025 →"
    },
    dispatch2: { date: "Mond-Depesche #2 — 12. Dezember 2025", title: "Die juristische Grenze — Warum Mondbergbau Regeln braucht, bevor er Raketen braucht", subtitle: "Der Weltraumvertrag von 1967 wurde nicht für Unternehmen mit Baggern geschrieben.", h1: "Das regulatorische Vakuum", p1: "Das Rennen um den Abbau von Mondressourcen verschärfte sich 2025, aber ein kritisches Element fehlt auffällig: klare internationale Regeln für die Gewinnung von Mondressourcen.", p2: "Das US-amerikanische Commercial Space Launch Competitiveness Act von 2015 und die Artemis-Abkommen bieten einen Rahmen, bleiben aber umstritten. China und Russland haben die Abkommen nicht unterzeichnet.", h2: "Warum es jetzt wichtig ist", p3: "Dies ist keine theoretische Sorge mehr. Australien sendet 2026 einen Rover. Chinas Chang'e 7 erkundet den Südpol im August 2026. Interlune plant eine Ressourcenmission 2027.", p4: "Mehrere Nationen, die auf dieselben ressourcenreichen Gebiete konvergieren — ohne vereinbarte Regeln — sind ein Rezept für Konflikte.", quote: "\"Das Rennen um den Abbau auf dem Mond ist im Gange — und es braucht dringend klare internationale Regeln.\"", quoteAttr: "— The Conversation / Space.com, Dezember 2025", h3: "SpaceX gegen Blue Origin: Landeprofile", p5: "Beide Unternehmen teilten detaillierte Landungsprofile, die grundlegend unterschiedliche Ansätze zum Erreichen des Mondes offenbarten.", p6: "Für die Bergbauindustrie sind dies nicht nur konkurrierende Raketen — sie stehen für unterschiedliche Nutzlastkapazitäten und operationelle Zeitlinien.", h4: "Die CLPS-Ergebnistafel", p7: "NASAs CLPS-Programm setzte seine gemischte Bilanz 2025 fort:", li1: "Fireflys Blue Ghost Mission 1 — Erfolgreiche Landung bei Mare Crisium am 2. März, erste vollständig erfolgreiche kommerzielle Weichlandung.", li2: "Intuitive Machines IM-2 — Am 6. März nahe dem Südpol gelandet, aber in Schräglage. Einige Daten übertragen.", li3: "ispace Hakuto-R Mission 2 — Im Januar gestartet, im Juni abgestürzt. Zweiter fehlgeschlagener Landeversuch.", p8: "Die Ergebnistafel erzählt eine Geschichte: Auf dem Mond zu landen ist schwer, aber nicht mehr unmöglich für private Unternehmen.", h5: "Ausblick", p9: "Die Technologie entwickelt sich schneller als die Regulierung. Das kluge Geld beobachtet, wer durchsetzbare Eigentumsrechte an Mondressourcen etablieren kann.", sources: "Quellen", prev: "← November 2025", next: "Januar 2026 →" },
    dispatch3: { date: "Mond-Depesche #3 — 20. Januar 2026", title: "2025 im Rückblick — Das Jahr, in dem kommerzielle Mondlandungen Realität wurden", subtitle: "Sechs Landeversuche, zwei Erfolge, ein Absturz und eine grundlegend veränderte Landschaft.", h1: "Die Mond-Ergebnistafel 2025", p1: "2025 war das aktivste Jahr für Mondmissionen seit der Apollo-Ära.", li1: "Firefly Blue Ghost M1 (2. März) — Voller Erfolg. 14 Tage Oberflächenoperationen, 100% Nutzlastziele erreicht.", li2: "Intuitive Machines IM-2 (6. März) — Teilerfolg. Nahe dem Südpol gelandet, aber umgekippt.", li3: "ispace Hakuto-R M2 (6. Juni) — Absturz. Zweiter fehlgeschlagener Landeversuch.", li4: "China Chang'e 6 — Erfolgreich Proben von der Mondrückseite zurückgebracht.", p2: "Das Muster ist klar: Mondlandungen werden zur Normalität, auch wenn sie schwierig bleiben.", h2: "Artemis II: Der Countdown beginnt", p3: "Am 16. Januar kündigte die NASA an, dass die Artemis-II-Rakete am folgenden Tag zum Kennedy Space Center rollen würde.", p4: "Start ist für Anfang März 2026 geplant. Die vierköpfige Besatzung wird den Mond umrunden und die Lebenserhaltungssysteme des Orion testen.", h3: "Interlunes stille Dynamik", p5: "Interlune verfeinerte seinen Helium-3-Harvester basierend auf Testdaten von 2025. Die multispektrale Kamera soll im Juli 2026 zum Mond starten.", p6: "Interlune sicherte sich eine neue Finanzierungsrunde über 20 Millionen Dollar. Die Ressourcenmission 2027 bleibt im Zeitplan.", h4: "Die private Landefähren-Pipeline für 2026", p7: "Die nächsten 12 Monate versprechen einen noch volleren Mondkalender:", li5: "Blue Origin Blue Moon Mark 1 — Unbemannter Frachttransporter, erster Flug 2026", li6: "Intuitive Machines IM-3 — Zweite Jahreshälfte 2026", li7: "SpaceX Starship HLS — Orbitale Betankungsdemo erwartet 2026", li8: "China Chang'e 7 — August 2026, Südpol", li9: "Australiens Mondrover — 2026, Sauerstoffgewinnung", h5: "Bedeutung für den Bergbau", p8: "Jede erfolgreiche Landung senkt die Kosten pro Kilogramm Ausrüstungslieferung zur Mondoberfläche.", p9: "Der Engpass verschiebt sich von «Können wir hinkommen?» zu «Können wir kontinuierlich operieren?»", sources: "Quellen", prev: "← Dezember 2025", next: "Februar 2026 →" },
    dispatch4: { date: "Mond-Depesche #4 — 24. Februar 2026", title: "Artemis II rollt zur Startrampe — Die Menschheit kehrt ins tiefe All zurück", subtitle: "Die bedeutendste bemannte Raumfahrtmission seit 54 Jahren steht kurz bevor.", h1: "Artemis II: Start am 6. März", p1: "Am 17. Januar rollte NASAs Space Launch System mit der Orion-Kapsel zur Startrampe 39B am Kennedy Space Center. Artemis II zielt nun auf den 6. März 2026.", p2: "Vier Astronauten werden 10 Tage auf einer Bahn um den Mond und zurück verbringen — weiter als jeder Mensch seit Gene Cernan 1972.", p3: "Für die Bergbauindustrie validiert Artemis II das Transportsystem, das letztendlich Bergbauausrüstung zur Oberfläche liefern wird.", h2: "Interlune sichert NASA-Bagger-Vertrag", p4: "Interlune erhielt einen NASA-Vertrag zur Entwicklung eines Mondbaggers, optimiert für die raue Mondumgebung.", p5: "Die aktuelle Phase soll bis Mitte 2026 abgeschlossen sein. Interlune hat die glaubwürdigste Zeitlinie aller Mondbergbauunternehmen.", h3: "Chinas Chang'e 7: Der Wettbewerb verschärft sich", p6: "Chinas Chang'e 7, geplant für August 2026, wird die ambitionierteste robotische Mondmission aller Zeiten.", p7: "Die Landefähre zielt auf Shackleton-Kraters beleuchteten Rand — eine der begehrtesten Immobilien im Sonnensystem.", p8: "China hat die Artemis-Abkommen nicht unterzeichnet. Ihr ILRS-Programm mit Russland stellt ein paralleles Governance-Framework dar.", h4: "Indien wählt seinen Landeplatz", p9: "ISRO hat MM-4 bei Mons Mouton als Ziel für die nächste Mondmission identifiziert.", p10: "Indiens Ansatz ist methodisch: Chandrayaan-4 für Probenrückführung, dann Daten für Ressourcenmissionen nutzen.", h5: "Die Südpol-Konvergenz", p11: "Zählen Sie die Akteure, die jetzt auf die Südpolregion des Mondes zielen:", li1: "NASA / Artemis III — Bemannte Landung, Mitte 2027", li2: "China / Chang'e 7 — Robotisch, August 2026", li3: "Indien / Chandrayaan-4 — Probenrückführung, Datum offen", li4: "Interlune — Ressourcenmission, 2027", li5: "Intuitive Machines / IM-3 — Robotische Landefähre, H2 2026", li6: "Blue Origin / Blue Moon — Frachttransporter, 2026-2027", li7: "Australien — Bergbaurover, 2026", p12: "Sieben Programme, ein Ziel. Die Drängerei wirft Fragen auf, die der aktuelle Rechtsrahmen nicht beantworten kann.", h6: "Unsere Einschätzung", p13: "Februar 2026 fühlt sich wie ein Wendepunkt an. Die Hardware ist real, die Missionen finanziert, der politische Wille vorhanden.", p14: "Die Unternehmen und Nationen, die jetzt investieren, werden die cis-lunare Wirtschaft für das nächste Jahrhundert definieren.", sources: "Quellen", prev: "← Januar 2026" }
},
sv: {
    nav: { back: "Regolith Mining", allPosts: "Alla inlägg" },
    dispatch1: { date: "Månbulletin #1 — 15 november 2025", title: "Interlunes skördare, Helium-3 och affärsgrunden för gruvdrift på månen", subtitle: "Den första riktiga hårdvaran för kommersiell månresursutvinning finns här.", h1: "Skördare-prototypen", p1: "I det mest påtagliga tecknet hittills på att mångruvdrift övergår från koncept till ingenjörsarbete, avslöjade Interlune offentligt sin fullskaliga Helium-3-skördare-prototyp. Startupen från Seattle har designat en maskin som gräver ut månregolit, värmer den finkorniga jorden för att frigöra instängda gaser och separerar Helium-3 genom en kryogen process.", p2: "Systemet har redan testats i mindre och full skala på jorden, inklusive i simulerad mångravitation under parabolflygningar. Interlunes resursutvecklingsuppdrag, planerat till 2027, kommer att mäta Helium-3-koncentrationer och testa utvinning på månytan.", h2: "Varför Helium-3?", p3: "Helium-3 är extremt sällsynt på jorden men finns troligen i rikliga mängder i månregolit. Isotopen har kommersiellt värde inom kvantdatorer, medicinsk bildbehandling och kärnfusionsforskning.", p4: "Nuvarande jordbaserade priser överstiger 2 000 dollar per liter. Kvantdatorindustrins efterfrågan växer snabbare än det jordiska utbudet.", h3: "Kapplöpningen om landare", p5: "Både SpaceX och Blue Origin delade uppdaterade månlandningsprofiler för sina Artemis-programlandare i november.", p6: "SpaceX Starship HLS är över 50 meter högt med oöverträffad lastkapacitet. Blue Origins Blue Moon Mark 1 är mindre men kräver ingen orbital bränslepåfyllning.", p7: "NASA har också återöppnat tävlingen om Artemis III-landarekontraktet.", h4: "Sydkoreas måntestområde", p8: "Sydkorea omvandlar en övergiven gruva i Taebaek till ett testområde för månutforskningsteknologier.", h5: "Helhetsbilden", p9: "November 2025 markerar ett tonlägesskifte i branschen. Samtalet har flyttat till tidslinjer, leveranskedjor och marknadsutveckling.", p10: "Frågan är inte längre om, utan vem som kommer först med ett fungerande utvinningssystem.", sources: "Källor", next: "Nästa: December 2025 →" },
    dispatch2: { date: "Månbulletin #2 — 12 december 2025", title: "Den juridiska fronten — Varför mångruvdrift behöver regler före raketer", subtitle: "Rymdfördraget från 1967 skrevs inte för företag med grävmaskiner.", h1: "Det regulatoriska vakuumet", p1: "Kapplöpningen om att bryta resurser på månen intensifierades under 2025, men en kritisk del saknas: klara internationella regler.", p2: "USA:s lag och Artemis-avtalen ger ett ramverk, men Kina och Ryssland har inte undertecknat.", h2: "Varför det spelar roll nu", p3: "Australien skickar en rover 2026. Kinas Chang'e 7 utforskar sydpolen i augusti 2026. Interlune planerar ett uppdrag 2027.", p4: "Flera nationer som konvergerar mot samma resursrika områden utan överenskomna regler är ett recept för konflikt.", quote: "\"Kapplöpningen om att bryta månen pågår — och den behöver desperat tydliga internationella regler.\"", quoteAttr: "— The Conversation / Space.com, december 2025", h3: "SpaceX mot Blue Origin", p5: "Båda företagen avslöjade fundamentalt olika tillvägagångssätt för att nå månen.", p6: "För gruvindustrin representerar dessa olika lastkapaciteter och operationella tidslinjer.", h4: "CLPS-resultattavlan", p7: "NASAs CLPS-program fortsatte sin blandade historia 2025:", li1: "Fireflys Blue Ghost — Framgångsrik landing vid Mare Crisium den 2 mars.", li2: "Intuitive Machines IM-2 — Landade nära sydpolen men välte.", li3: "ispace Hakuto-R M2 — Kraschade i juni. Andra misslyckade landningen.", p8: "Att landa på månen är svårt, men inte längre omöjligt för privata företag.", h5: "Framåtblick", p9: "Teknologin avancerar snabbare än regelverket.", sources: "Källor", prev: "← November 2025", next: "Januari 2026 →" },
    dispatch3: { date: "Månbulletin #3 — 20 januari 2026", title: "2025 i backspegeln — Året kommersiella månlandningar blev verklighet", subtitle: "Sex landningsförsök, två framgångar, en krasch.", h1: "Månresultattavlan 2025", p1: "2025 var det mest aktiva året för månuppdrag sedan Apollo-eran.", li1: "Firefly Blue Ghost M1 — Full framgång. 14 dagar, 100% mål uppnådda.", li2: "Intuitive Machines IM-2 — Delvis framgång. Landade men välte.", li3: "ispace Hakuto-R M2 — Krasch.", li4: "Kina Chang'e 6 — Framgångsrik provhämtning från månens baksida.", p2: "Mönstret är tydligt: månlandningar normaliseras.", h2: "Artemis II: Nedräkningen börjar", p3: "Den 16 januari meddelade NASA att Artemis II-raketen skulle rulla ut till Kennedy Space Center.", p4: "Uppskjutning planerad till början av mars 2026.", h3: "Interlunes tysta momentum", p5: "Interlune fortsatte att förfina sin Helium-3-skördare. Deras multispektrala kamera skjuts upp till månen i juli 2026.", p6: "Interlune säkrade en ny finansieringsrunda på över 20 miljoner dollar.", h4: "Den privata landar-pipelinen 2026", p7: "De kommande 12 månaderna lovar en ännu fullare månkalender:", li5: "Blue Origin Blue Moon Mark 1 — Obemannad fraktlandare, 2026", li6: "Intuitive Machines IM-3 — Andra halvåret 2026", li7: "SpaceX Starship HLS — Orbital bränsletransferdemo 2026", li8: "Kina Chang'e 7 — Augusti 2026, sydpolen", li9: "Australiens månrover — 2026, syreextraktion", h5: "Vad det betyder för gruvdrift", p8: "Varje framgångsrik landing sänker leveranskostnaden till månytan.", p9: "Flaskhalsen skiftar från 'kan vi komma dit?' till 'kan vi operera kontinuerligt?'", sources: "Källor", prev: "← December 2025", next: "Februari 2026 →" },
    dispatch4: { date: "Månbulletin #4 — 24 februari 2026", title: "Artemis II rullar till rampen — Mänskligheten återvänder till djupa rymden", subtitle: "Det mest betydelsefulla bemannade rymduppdraget på 54 år.", h1: "Artemis II: Uppskjutning 6 mars", p1: "NASAs Space Launch System med Orion-kapseln rullade ut till Launch Complex 39B den 17 januari. Artemis II siktar på 6 mars 2026.", p2: "Fyra astronauter kommer att färdas runt månen — längre än någon människa sedan 1972.", p3: "Artemis II validerar transportsystemet som slutligen ska leverera utrustning till ytan.", h2: "Interlune säkrar NASA-grävmaskinskontrakt", p4: "Interlune erhöll ett NASA-kontrakt för att utveckla en mångrävmaskin.", p5: "Arbetet ska slutföras till mitten av 2026. Interlune har den mest trovärdiga tidslinjen.", h3: "Kinas Chang'e 7", p6: "Kinas Chang'e 7, planerat till augusti 2026, blir det mest ambitiösa robotiska månuppdraget.", p7: "Landaren siktar på Shackleton-kraterns belysta kant.", p8: "Kina har inte undertecknat Artemis-avtalen.", h4: "Indien väljer sin landningsplats", p9: "ISRO har identifierat MM-4 vid Mons Mouton som mål.", p10: "Indiens tillvägagångssätt är metodiskt.", h5: "Sydpolskonvergensen", p11: "Räkna aktörerna som nu siktar på månens sydpol:", li1: "NASA / Artemis III — 2027", li2: "Kina / Chang'e 7 — Augusti 2026", li3: "Indien / Chandrayaan-4 — Datum ej bestämt", li4: "Interlune — 2027", li5: "Intuitive Machines / IM-3 — H2 2026", li6: "Blue Origin / Blue Moon — 2026-2027", li7: "Australien — Gruvrover, 2026", p12: "Sju program, en destination. Trängseln väcker frågor som nuvarande regelverk inte kan besvara.", h6: "Vår bedömning", p13: "Februari 2026 känns som en vändpunkt. Hårdvaran är verklig, uppdragen finansierade.", p14: "De som investerar nu kommer att definiera den cis-lunära ekonomin.", sources: "Källor", prev: "← Januari 2026" }
},
nl: {
    nav: { back: "Regolith Mining", allPosts: "Alle berichten" },
    dispatch1: { date: "Maandepeche #1 — 15 november 2025", title: "Interlune's Harvester, Helium-3 en de business case voor maanmijnbouw", subtitle: "De eerste echte hardware voor commerciële maanwinning is er.", h1: "Het Harvester-prototype", p1: "Interlune onthulde publiekelijk zijn Helium-3-harvester op ware grootte. De startup uit Seattle heeft een machine ontworpen die maanregoliet uitgraaft, de fijnkorrelige grond verwarmt en Helium-3 afscheidt via een cryogeen proces.", p2: "Het systeem is getest op aarde en tijdens parabolische vluchten in gesimuleerde maanzwaartekracht. Interlune's missie in 2027 zal He-3-concentraties meten op de maanoppervlak.", h2: "Waarom Helium-3?", p3: "Helium-3 is uiterst zeldzaam op aarde maar komt waarschijnlijk overvloedig voor in maanregoliet. Het isotoop heeft commerciële waarde in kwantumcomputing, medische beeldvorming en kernfusieonderzoek.", p4: "Huidige prijzen op aarde overschrijden $2.000 per liter.", h3: "De race om landingsvaartuigen", p5: "SpaceX en Blue Origin deelden bijgewerkte maanlandingsprofielen voor hun Artemis-programma landers.", p6: "SpaceX's Starship HLS is meer dan 50 meter hoog. Blue Origin's Blue Moon Mark 1 vereist geen orbitale bijtanking.", p7: "NASA heeft de competitie voor het Artemis III-contract heropend.", h4: "Zuid-Korea's maantestterrein", p8: "Zuid-Korea bouwt een voormalige mijn in Taebaek om tot testterrein voor maanverkenning.", h5: "Het grotere plaatje", p9: "November 2025 markeert een verschuiving. Het gesprek gaat nu over tijdlijnen en leveringsketens.", p10: "De vraag is niet meer óf, maar wie er het eerst is met een werkend winningssysteem.", sources: "Bronnen", next: "Volgende: December 2025 →" },
    dispatch2: { date: "Maandepeche #2 — 12 december 2025", title: "De juridische grens — Waarom maanmijnbouw regels nodig heeft vóór raketten", subtitle: "Het Ruimteverdrag van 1967 is niet geschreven voor bedrijven met graafmachines.", h1: "Het regelgevingsvacuüm", p1: "De race om maanmijnbouw intensiveerde in 2025, maar er ontbreken duidelijke internationale regels.", p2: "De Artemis-akkoorden bieden een kader, maar China en Rusland hebben niet getekend.", h2: "Waarom het nu belangrijk is", p3: "Australië stuurt een rover in 2026. China's Chang'e 7 verkent de zuidpool in augustus 2026.", p4: "Meerdere naties die convergeren op dezelfde gebieden zonder afgesproken regels is een recept voor conflict.", quote: "\"De race om de maan te mijnen is begonnen — en er zijn dringend duidelijke internationale regels nodig.\"", quoteAttr: "— The Conversation / Space.com, december 2025", h3: "SpaceX vs. Blue Origin", p5: "Beide bedrijven onthulden fundamenteel verschillende benaderingen.", p6: "Voor de mijnbouwindustrie vertegenwoordigen deze verschillende laadcapaciteiten.", h4: "Het CLPS-scorebord", p7: "NASA's CLPS-programma zette zijn gemengde staat van dienst voort in 2025:", li1: "Firefly's Blue Ghost — Succesvolle landing op 2 maart.", li2: "Intuitive Machines IM-2 — Geland maar omgevallen.", li3: "ispace Hakuto-R M2 — Gecrasht in juni.", p8: "Landen op de maan is moeilijk, maar niet langer onmogelijk voor private bedrijven.", h5: "Vooruitblik", p9: "De technologie vordert sneller dan de regelgeving.", sources: "Bronnen", prev: "← November 2025", next: "Januari 2026 →" },
    dispatch3: { date: "Maandepeche #3 — 20 januari 2026", title: "2025 in overzicht — Het jaar dat commerciële maanlandingen werkelijkheid werden", subtitle: "Zes landingspogingen, twee successen, één crash.", h1: "Het maanscorebord 2025", p1: "2025 was het meest actieve jaar voor maanmissies sinds het Apollo-tijdperk.", li1: "Firefly Blue Ghost M1 — Volledig succes. 14 dagen operaties.", li2: "Intuitive Machines IM-2 — Gedeeltelijk succes.", li3: "ispace Hakuto-R M2 — Crash.", li4: "China Chang'e 6 — Succesvol monsters van de achterkant van de maan teruggebracht.", p2: "Het patroon is duidelijk: maanlandingen worden genormaliseerd.", h2: "Artemis II: Het aftellen begint", p3: "Op 16 januari kondigde NASA aan dat de Artemis II-raket naar Kennedy Space Center zou rollen.", p4: "Lancering gepland voor begin maart 2026.", h3: "Interlune's stille momentum", p5: "Interlune bleef zijn Helium-3-harvester verfijnen.", p6: "Interlune haalde meer dan $20 miljoen op.", h4: "De private lander-pipeline voor 2026", p7: "De komende 12 maanden beloven een nog vollere maankalender:", li5: "Blue Origin Blue Moon — 2026", li6: "Intuitive Machines IM-3 — H2 2026", li7: "SpaceX Starship HLS — Orbitale brandstoftransferdemo 2026", li8: "China Chang'e 7 — Augustus 2026", li9: "Australische maanrover — 2026", h5: "Wat het betekent voor mijnbouw", p8: "Elke succesvolle landing verlaagt de leveringskosten.", p9: "De bottleneck verschuift van 'kunnen we er komen?' naar 'kunnen we continu opereren?'", sources: "Bronnen", prev: "← December 2025", next: "Februari 2026 →" },
    dispatch4: { date: "Maandepeche #4 — 24 februari 2026", title: "Artemis II rolt naar het lanceerplatform — De mensheid keert terug naar de diepe ruimte", subtitle: "De belangrijkste bemande ruimtemissie in 54 jaar.", h1: "Artemis II: Lancering 6 maart", p1: "NASA's SLS met de Orion-capsule rolde uit naar Launch Complex 39B. Artemis II mikt op 6 maart 2026.", p2: "Vier astronauten zullen 10 dagen rond de maan reizen — verder dan enig mens sinds 1972.", p3: "Artemis II valideert het transportsysteem voor toekomstige leveringen aan het oppervlak.", h2: "Interlune wint NASA-graafmachinecontract", p4: "Interlune ontving een NASA-contract voor een maangraafmachine.", p5: "Het werk moet medio 2026 zijn afgerond.", h3: "China's Chang'e 7", p6: "China's Chang'e 7, gepland voor augustus 2026, wordt de meest ambitieuze robotische maanmissie ooit.", p7: "De lander mikt op de verlichte rand van de Shackleton-krater.", p8: "China heeft de Artemis-akkoorden niet ondertekend.", h4: "India kiest zijn landingsplaats", p9: "ISRO heeft MM-4 bij Mons Mouton geïdentificeerd.", p10: "India's benadering is methodisch.", h5: "De zuidpool-convergentie", p11: "Tel de entiteiten die nu op de zuidpool mikken:", li1: "NASA / Artemis III — 2027", li2: "China / Chang'e 7 — Augustus 2026", li3: "India / Chandrayaan-4 — Datum onbekend", li4: "Interlune — 2027", li5: "Intuitive Machines / IM-3 — H2 2026", li6: "Blue Origin / Blue Moon — 2026-2027", li7: "Australië — Mijnbouwrover, 2026", p12: "Zeven programma's, één bestemming.", h6: "Onze beoordeling", p13: "Februari 2026 voelt als een kantelpunt.", p14: "De bedrijven en naties die nu investeren zullen de cis-lunaire economie definiëren.", sources: "Bronnen", prev: "← Januari 2026" }
},
ja: {
    nav: { back: "Regolith Mining", allPosts: "全記事" },
    dispatch1: { date: "月面速報 #1 — 2025年11月15日", title: "Interlune の採掘機、ヘリウム3、そして月面採掘のビジネスケース", subtitle: "商業的月面資源採掘のための最初の実用的なハードウェアが登場。", h1: "採掘機プロトタイプ", p1: "Interlune が実物大のヘリウム3採掘機プロトタイプを公開しました。シアトルのスタートアップは、月面レゴリスを掘削し、微粒子の土壌を加熱してガスを放出し、極低温プロセスでヘリウム3を分離する機械を設計しました。", p2: "地上で縮小版とフルサイズのテスト、放物線飛行での月面重力シミュレーションテストが完了済み。2027年の資源開発ミッションでは月面での実地テストを予定。", h2: "なぜヘリウム3？", p3: "ヘリウム3は地球上では極めて希少ですが、月面レゴリスには太陽風により数十億年にわたって蓄積されています。量子コンピューティング、医療画像診断、核融合研究での商業的価値があります。", p4: "地球上の価格は1リットルあたり2,000ドルを超えています。", h3: "着陸機競争", p5: "SpaceXとBlue Originが両社のアルテミス計画着陸機の最新プロファイルを公開。", p6: "SpaceXのStarship HLSは高さ50m超、圧倒的な積載能力。Blue OriginのBlue Moon Mark 1は軌道上給油不要。", p7: "NASAはアルテミスIII着陸機契約の競争を再開。", h4: "韓国の月面テストサイト", p8: "韓国が太白の廃鉱を月面探査技術のテストサイトに転換中。", h5: "全体像", p9: "2025年11月は業界全体のトーンシフト。議論はタイムラインとサプライチェーンへ。", p10: "問題はもはや「できるか」ではなく「誰が最初に到達するか」。", sources: "出典", next: "次へ：2025年12月 →" },
    dispatch2: { date: "月面速報 #2 — 2025年12月12日", title: "法的フロンティア — 月面採掘にロケットよりルールが必要な理由", subtitle: "1967年の宇宙条約は掘削機を持つ企業を想定していませんでした。", h1: "規制の真空", p1: "月面採掘競争は2025年を通じて激化しましたが、明確な国際ルールが欠如しています。", p2: "アルテミス協定は枠組みを提供しますが、中国とロシアは署名していません。", h2: "なぜ今重要なのか", p3: "オーストラリアは2026年にローバーを送ります。中国の嫦娥7号は2026年8月に南極を探査。", p4: "合意されたルールなしに同じ資源豊富な地域に収束する複数の国家は紛争の要因。", quote: "「月面採掘競争が始まった — 明確な国際ルールが急務だ。」", quoteAttr: "— The Conversation / Space.com、2025年12月", h3: "SpaceX対Blue Origin", p5: "両社が根本的に異なるアプローチを明らかに。", p6: "採掘産業にとって、これらは異なる積載能力と運用タイムラインを表しています。", h4: "CLPSスコアボード", p7: "NASAのCLPSプログラムの2025年実績：", li1: "Firefly Blue Ghost — 3月2日にMare Crisiumに着陸成功。", li2: "Intuitive Machines IM-2 — 南極付近に着陸したが転倒。", li3: "ispace Hakuto-R M2 — 6月に墜落。", p8: "月面着陸は困難ですが、民間企業にとって不可能ではなくなりました。", h5: "展望", p9: "技術は規制よりも速く進歩しています。", sources: "出典", prev: "← 2025年11月", next: "2026年1月 →" },
    dispatch3: { date: "月面速報 #3 — 2026年1月20日", title: "2025年振り返り — 商業月面着陸が現実になった年", subtitle: "6回の着陸試行、2回の成功、1回の墜落。", h1: "2025年月面スコアボード", p1: "2025年はアポロ時代以来最も活発な月面ミッションの年。", li1: "Firefly Blue Ghost M1 — 完全成功。14日間の運用。", li2: "Intuitive Machines IM-2 — 部分的成功。", li3: "ispace Hakuto-R M2 — 墜落。", li4: "中国嫦娥6号 — 月の裏側からのサンプルリターン成功。", p2: "月面着陸は正常化されつつあります。", h2: "アルテミスII：カウントダウン開始", p3: "1月16日、NASAはアルテミスIIロケットのケネディ宇宙センターへの搬出を発表。", p4: "打ち上げは2026年3月初旬を予定。", h3: "Interluneの静かな勢い", p5: "Interluneはヘリウム3採掘機の改良を続けています。マルチスペクトルカメラは2026年7月に月面へ。", p6: "Interluneは2,000万ドル超の新規資金を獲得。", h4: "2026年の民間着陸機パイプライン", p7: "今後12ヶ月はさらに忙しい月面カレンダー：", li5: "Blue Origin Blue Moon — 2026年", li6: "Intuitive Machines IM-3 — 2026年下半期", li7: "SpaceX Starship HLS — 軌道上推進剤移送デモ2026年", li8: "中国嫦娥7号 — 2026年8月、南極", li9: "オーストラリア月面ローバー — 2026年", h5: "採掘への意味", p8: "成功する着陸ごとに月面への配送コストが下がります。", p9: "ボトルネックは「到達できるか」から「継続的に運用できるか」へ。", sources: "出典", prev: "← 2025年12月", next: "2026年2月 →" },
    dispatch4: { date: "月面速報 #4 — 2026年2月24日", title: "アルテミスIIが発射台へ — 人類が深宇宙に帰還", subtitle: "54年ぶりの最も重要な有人宇宙ミッション。", h1: "アルテミスII：3月6日打ち上げ", p1: "NASAのSLSとオリオンカプセルが1月17日にLaunch Complex 39Bへ搬出。アルテミスIIは2026年3月6日を目標。", p2: "4人の宇宙飛行士が月周回10日間の旅 — 1972年以来最も遠い人類の旅。", p3: "アルテミスIIは将来の月面配送を可能にする輸送システムを検証。", h2: "InterluneがNASA掘削機契約を獲得", p4: "Interluneが月面環境に最適化された掘削機のNASA契約を発表。", p5: "現在のフェーズは2026年半ばまでに完了予定。", h3: "中国の嫦娥7号", p6: "2026年8月予定の嫦娥7号は史上最も野心的なロボット月面ミッション。", p7: "着陸機はシャクルトンクレーターの照射縁を目標。", p8: "中国はアルテミス協定に署名していません。", h4: "インドが着陸地点を選定", p9: "ISROがMons MoutonのMM-4を次期ミッション目標に特定。", p10: "インドのアプローチは体系的。", h5: "南極収束", p11: "月の南極地域を目指す組織：", li1: "NASA/アルテミスIII — 2027年", li2: "中国/嫦娥7号 — 2026年8月", li3: "インド/チャンドラヤーン4 — 未定", li4: "Interlune — 2027年", li5: "Intuitive Machines/IM-3 — 2026年下半期", li6: "Blue Origin/Blue Moon — 2026-2027年", li7: "オーストラリア — 採掘ローバー、2026年", p12: "7つのプログラム、1つの目的地。", h6: "私たちの見解", p13: "2026年2月は転換点。ハードウェアは実在し、ミッションは資金を得ています。", p14: "今投資する企業と国家がシスルナ経済を定義するでしょう。", sources: "出典", prev: "← 2026年1月" }
}
};

// Language data
const blogLanguageData = {
    en: { flag: '🇬🇧', code: 'EN', name: 'English' },
    no: { flag: '🇳🇴', code: 'NO', name: 'Norsk' },
    de: { flag: '🇩🇪', code: 'DE', name: 'Deutsch' },
    sv: { flag: '🇸🇪', code: 'SV', name: 'Svenska' },
    nl: { flag: '🇳🇱', code: 'NL', name: 'Nederlands' },
    ja: { flag: '🇯🇵', code: 'JA', name: '日本語' }
};

// Initialize language system
function initBlogLanguage() {
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const dropdownBtn = document.getElementById('langDropdownBtn');
    const dropdownMenu = document.getElementById('langDropdownMenu');

    if (!dropdownBtn || !dropdownMenu) return;

    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownBtn.classList.toggle('active');
        dropdownMenu.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        dropdownBtn.classList.remove('active');
        dropdownMenu.classList.remove('active');
    });

    dropdownMenu.addEventListener('click', (e) => { e.stopPropagation(); });

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            updateBlogLanguage(lang);
            dropdownBtn.classList.remove('active');
            dropdownMenu.classList.remove('active');
        });
    });

    updateBlogLanguage(currentLang);
}

function updateBlogLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);

    // Determine which dispatch we're on from body data attribute
    const dispatchKey = document.body.getAttribute('data-dispatch');
    const t = blogTranslations[lang];
    if (!t || !dispatchKey) return;

    const dispatch = t[dispatchKey];
    const nav = t.nav;
    if (!dispatch) return;

    // Update all data-translate elements
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        // Check nav first, then dispatch
        const parts = key.split('.');
        let val;
        if (parts[0] === 'nav') {
            val = nav[parts[1]];
        } else {
            val = dispatch[parts[0]];
        }
        if (val) el.textContent = val;
    });

    // Update dropdown button
    const langInfo = blogLanguageData[lang];
    const dropdownBtn = document.getElementById('langDropdownBtn');
    if (dropdownBtn && langInfo) {
        dropdownBtn.querySelector('.flag').textContent = langInfo.flag;
        dropdownBtn.querySelector('.lang-code').textContent = langInfo.code;
    }

    // Highlight active option
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active-lang', opt.getAttribute('data-lang') === lang);
    });
}

document.addEventListener('DOMContentLoaded', initBlogLanguage);
