const trips = [
  {
    id: "biofarma-priroda",
    name: "Biofarma Priroda Stupava",
    category: "Zvierata",
    travel: "5-10 min",
    total: "2-3.5 h",
    difficulty: "easy",
    weather: "jar az jesen",
    score: 7,
    description: "Zvierata, vonkajsi priestor a jedlo v jednom. Jednoduche riesenie bez velkej logistiky.",
    note: "Cez vikend moze byt plno a na cely den to nestaci.",
    more: "https://www.google.com/search?q=Biofarma+Pr%C3%ADroda+Stupava",
    map: "https://www.google.com/maps/search/?api=1&query=Biofarma%20Pr%C3%ADroda%20Stupava"
  },
  {
    id: "draci-hradok",
    name: "Draci hradok",
    category: "Turistika",
    travel: "10-20 min",
    total: "3.5-5 h",
    difficulty: "medium",
    weather: "sucho, jar alebo jesen",
    score: 7,
    description: "Lesny ciel s dobrodruznym nazvom. Menej ludi ako na Pajstune.",
    note: "Samotny hradok nie je velky, preto dobre naplanuj celu trasu.",
    more: "https://bratislavskykraj.sk/tip-na-vylet-romanticky-kastiel-a-tajomny-draci-hradok/",
    map: "https://www.google.com/maps/search/?api=1&query=Dra%C4%8D%C3%AD%20hr%C3%A1dok"
  },
  {
    id: "pajstun-draci-okruh",
    name: "Okruh Pajstun + Draci hradok",
    category: "Turistika",
    travel: "0-15 min",
    total: "5.5-7 h",
    difficulty: "harder",
    weather: "jar a jesen, nie horucava",
    score: 8,
    description: "Dva ciele v jednom vylete. Dobra volba, ak mate chut na ozajstnu turistiku.",
    note: "Pre slabsí den prilis dlhe. Vezmi dost vody a jedla.",
    more: "https://regionzahorie.sk/tip-na-jesenny-vylet-hrad-pajstun-draci-hradok-stupava/",
    map: "https://www.google.com/maps/search/?api=1&query=Paj%C5%A1t%C3%BAn%20Dra%C4%8D%C3%AD%20hr%C3%A1dok"
  },
  {
    id: "marianka",
    name: "Marianka",
    category: "Blizko",
    travel: "10-15 min",
    total: "2-3.5 h",
    difficulty: "easy",
    weather: "celorocne",
    score: 6,
    description: "Pokojne putne miesto a kratka prechadzka. Dobre na nenarocny den.",
    note: "Pre dieta to moze byt tiche, spoj to so zmrzlinou alebo druhou zastavkou.",
    more: "https://www.google.com/search?q=Marianka+p%C3%BAtne+miesto",
    map: "https://www.google.com/maps/search/?api=1&query=Marianka%20p%C3%BAtne%20miesto"
  },
  {
    id: "lozorno-nadrz",
    name: "Vodna nadrz Lozorno",
    category: "Voda",
    travel: "15-20 min",
    total: "2-4 h",
    difficulty: "easy",
    weather: "teple dni, podvecer",
    score: 6,
    description: "Voda, kratka prechadzka a oddych. Dobra nizkonamahova moznost.",
    note: "Nie je to aquapark. Over rezim kupania a zober repelent.",
    more: "https://www.google.com/search?q=Vodn%C3%A1+n%C3%A1dr%C5%BE+Lozorno",
    map: "https://www.google.com/maps/search/?api=1&query=Vodn%C3%A1%20n%C3%A1dr%C5%BE%20Lozorno"
  },
  {
    id: "abeland-lozorno",
    name: "Abeland Lozorno",
    category: "Zazitok",
    travel: "15-20 min",
    total: "3-5 h",
    difficulty: "easy",
    weather: "jar az jesen, pocas programu",
    score: 7,
    description: "Remeselny a prirodny areal, ktory dava zmysel hlavne pri akciach.",
    note: "Bez overeneho programu tam nechod naslepo.",
    more: "https://www.google.com/search?q=Abeland+Lozorno",
    map: "https://www.google.com/maps/search/?api=1&query=Abeland%20Lozorno"
  },
  {
    id: "plavecky-hrad",
    name: "Plavecky hrad",
    category: "Hrady",
    travel: "35-45 min",
    total: "4-6 h",
    difficulty: "medium",
    weather: "suchy den, jar alebo jesen",
    score: 8,
    description: "Menej komercna zrucanina s peknou turistikou. Dobry vylet mimo najvacsich davov.",
    note: "Na hrade nie su sluzby, vezmi vodu a pevne topanky.",
    more: "https://www.google.com/search?q=Plaveck%C3%BD+hrad+v%C3%BDlet",
    map: "https://www.google.com/maps/search/?api=1&query=Plaveck%C3%BD%20hrad"
  },
  {
    id: "malacky-kastiel",
    name: "Malacky kastiel a park",
    category: "Blizko",
    travel: "25-30 min",
    total: "3-4 h",
    difficulty: "easy",
    weather: "jar az jesen",
    score: 6,
    description: "Lahky mestsky vylet s parkom, dobry ked nechcete velku turistiku.",
    note: "Samotne to nie je top zazitok. Over, ci je dostupny aj interier.",
    more: "https://www.google.com/search?q=Malacky+ka%C5%A1tie%C4%BE+park",
    map: "https://www.google.com/maps/search/?api=1&query=Ka%C5%A1tie%C4%BE%20Malacky"
  },
  {
    id: "devinska-kobyla",
    name: "Devinska Kobyla - rozhladna",
    category: "Vyhlad",
    travel: "25-35 min",
    total: "3-5 h",
    difficulty: "medium",
    weather: "jasny den",
    score: 8,
    description: "Rozhladna je jasny ciel a vyhlady su silna odmena.",
    note: "V hmle nema zmysel. Na vrchu vie fukat.",
    more: "https://www.google.com/search?q=Dev%C3%ADnska+Kobyla+rozh%C4%BEad%C5%88a",
    map: "https://www.google.com/maps/search/?api=1&query=Rozh%C4%BEad%C5%88a%20Dev%C3%ADnska%20Kobyla"
  },
  {
    id: "sandberg",
    name: "Sandberg",
    category: "Priroda",
    travel: "25-30 min",
    total: "2-4 h",
    difficulty: "easy",
    weather: "jar alebo jesen",
    score: 8,
    description: "Pieskove svahy, fosilie a ina krajina ako klasicky les.",
    note: "V lete malo tiena. Je to chranene uzemie, nic neodlamovat.",
    more: "https://www.google.com/search?q=Sandberg+Dev%C3%ADnska+Nov%C3%A1+Ves",
    map: "https://www.google.com/maps/search/?api=1&query=Sandberg%20Dev%C3%ADnska%20Nov%C3%A1%20Ves"
  },
  {
    id: "sokoliarna-devin",
    name: "Sokoliarna a minizoo Devin",
    category: "Zvierata",
    travel: "25-35 min",
    total: "2-3 h",
    difficulty: "easy",
    weather: "jar az jesen",
    score: 7,
    description: "Dravce a zvierata su dobry doplnok k hradu Devin.",
    note: "Over sezonu a casy ukazok. Samostatne je to kratke.",
    more: "https://www.google.com/search?q=Sokoliare%C5%88+minizoo+Dev%C3%ADn",
    map: "https://www.google.com/maps/search/?api=1&query=Sokoliare%C5%88%20Dev%C3%ADn"
  },
  {
    id: "zoo-bratislava",
    name: "ZOO Bratislava",
    category: "Zvierata",
    travel: "25-35 min",
    total: "4-6 h",
    difficulty: "easy",
    weather: "jar az jesen",
    score: 8,
    description: "Overena rodinna volba so zvieratami a DinoParkom.",
    note: "Nie originalne, ale funguje. V horucave chod skor rano.",
    more: "https://www.zoobratislava.sk/",
    map: "https://www.google.com/maps/search/?api=1&query=ZOO%20Bratislava"
  },
  {
    id: "kamzik-lanoland",
    name: "Kamzik + bobova draha + Lanoland",
    category: "Akcia",
    travel: "25-35 min",
    total: "4-6 h",
    difficulty: "medium",
    weather: "suchy den",
    score: 9,
    description: "Les, bobova draha a lanovy park v jednom programe. Dobre pre dieta, ktore chce pohyb a akciu.",
    note: "Over prevadzku bobovej drahy, Lanolandu, vekove/vyskove limity a pocasie. Cez vikend chodte skoro.",
    more: "https://www.google.com/search?q=Kamz%C3%ADk+bobov%C3%A1+dr%C3%A1ha+Lanoland+Koliba",
    map: "https://www.google.com/maps/search/?api=1&query=Lanoland%20Koliba"
  },
  {
    id: "zelezna-studienka",
    name: "Zelezna studienka / Partizanska luka",
    category: "Blizko",
    travel: "20-30 min",
    total: "3-6 h",
    difficulty: "easy",
    weather: "celorocne",
    score: 8,
    description: "Vela priestoru, voda, ihriska a les. Da sa urobit kratky aj dlhsi program.",
    note: "Najvacsi problem je parkovanie cez vikend.",
    more: "https://www.google.com/search?q=%C5%BDelezn%C3%A1+studienka+Partiz%C3%A1nska+l%C3%BAka",
    map: "https://www.google.com/maps/search/?api=1&query=%C5%BDelezn%C3%A1%20studienka%20Bratislava"
  },
  {
    id: "kacin",
    name: "Kacin",
    category: "Priroda",
    travel: "20-30 min",
    total: "3-5 h",
    difficulty: "easy",
    weather: "jar az jesen",
    score: 7,
    description: "Lesny piknikovy den bez velkeho presunu. Dobry na pomalsi program.",
    note: "Bez pikniku alebo hry moze byt pre dieta malo vyrazny.",
    more: "https://www.google.com/search?q=Ka%C4%8D%C3%ADn+Bratislava",
    map: "https://www.google.com/maps/search/?api=1&query=Ka%C4%8D%C3%ADn%20Bratislava"
  },
  {
    id: "botanicka-zahrada",
    name: "Botanicka zahrada UK",
    category: "Mesto",
    travel: "25-35 min",
    total: "2.5-4 h",
    difficulty: "easy",
    weather: "jar a zaciatok leta",
    score: 7,
    description: "Skleniky, exoticke rastliny a prijemny areal. Pokojnejsi mestsky vylet.",
    note: "Pre akcne dieta moze byt prilis tiche. Over sezonu a otvorenie.",
    more: "https://uniba.sk/botanicka-zahrada/",
    map: "https://www.google.com/maps/search/?api=1&query=Botanick%C3%A1%20z%C3%A1hrada%20UK%20Bratislava"
  },
  {
    id: "muzeum-dopravy",
    name: "Muzeum dopravy Bratislava",
    category: "Dazd",
    travel: "25-35 min",
    total: "2.5-4 h",
    difficulty: "easy",
    weather: "dazd, zima",
    score: 7,
    description: "Auta, vlaky a technika. Prakticky interierovy program.",
    note: "Nie je to na cely den. Parkovanie v centre ries dopredu.",
    more: "https://stm-ke.sk/sk/pobocky/muzeum-dopravy-v-bratislave/",
    map: "https://www.google.com/maps/search/?api=1&query=M%C3%BAzeum%20dopravy%20Bratislava"
  },
  {
    id: "bibiana",
    name: "BIBIANA",
    category: "Dazd",
    travel: "30-40 min",
    total: "2-3.5 h",
    difficulty: "easy",
    weather: "dazd, zima, horucava",
    score: 7,
    description: "Detske umenie a vystavy. Dobre, ked je aktualna vystava vhodna pre starsie deti.",
    note: "Trafena vystava je super, slaba vystava je rychlo vybavena.",
    more: "https://www.bibiana.sk/",
    map: "https://www.google.com/maps/search/?api=1&query=BIBIANA%20Bratislava"
  },
  {
    id: "stara-radnica",
    name: "Stara radnica a veza",
    category: "Mesto",
    travel: "30-40 min",
    total: "2-3.5 h",
    difficulty: "easy",
    weather: "jasno alebo mesto v dazdi",
    score: 7,
    description: "Vystup na vezu dava jasny ciel a Stare mesto zhora posobi inak.",
    note: "Dobre ako cast mestskeho pol dna, nie samostatny velky vylet.",
    more: "https://www.muzeum.bratislava.sk/stara-radnica",
    map: "https://www.google.com/maps/search/?api=1&query=Star%C3%A1%20radnica%20Bratislava"
  },
  {
    id: "aurelium",
    name: "Aurelium",
    category: "Dazd",
    travel: "30-40 min",
    total: "2.5-4 h",
    difficulty: "easy",
    weather: "dazd, zima, horucava",
    score: 8,
    description: "Interaktivne science centrum, kde si dieta veci skusa, nie len pozera.",
    note: "Pred odchodom over aktualnu prevadzku a otvaracie hodiny.",
    more: "https://aurelium.sk/",
    map: "https://www.google.com/maps/search/?api=1&query=Aurelium%20Bratislava"
  },
  {
    id: "danubiana",
    name: "Danubiana",
    category: "Mesto",
    travel: "40-50 min",
    total: "3.5-5.5 h",
    difficulty: "easy",
    weather: "jar az jesen, aj dazd",
    score: 8,
    description: "Moderna galeria pri vode. Sochy vonku robia galeriu znesitelnejsou pre dieta.",
    note: "Neprehanaj dlzku navstevy. Spoj s Cunovom.",
    more: "https://danubiana.sk/",
    map: "https://www.google.com/maps/search/?api=1&query=Danubiana"
  },
  {
    id: "divoka-voda",
    name: "Divoka voda Cunovo",
    category: "Voda",
    travel: "45-55 min",
    total: "3.5-5.5 h",
    difficulty: "easy-medium",
    weather: "teple dni",
    score: 7,
    description: "Sportovy areal pri vode. Zaujimave hlavne ked sa tam nieco deje.",
    note: "Aktivity rezervuj a over vekove limity. Na pozeranie staci kratsia navsteva.",
    more: "https://www.divokavoda.sk/",
    map: "https://www.google.com/maps/search/?api=1&query=Divok%C3%A1%20voda%20%C4%8Cunovo"
  },
  {
    id: "cerveny-kamen",
    name: "Hrad Cerveny Kamen",
    category: "Hrady",
    travel: "45-60 min",
    total: "4.5-6.5 h",
    difficulty: "easy",
    weather: "jar az jesen, aj horsie pocasie",
    score: 9,
    description: "Velky hrad s atmosferou, nadvorim a prehliadkami. Silny ciel na pol dna az den.",
    note: "Over casy prehliadok. Cez akcie byva vela ludi.",
    more: "https://www.hradcervenykamen.sk/",
    map: "https://www.google.com/maps/search/?api=1&query=Hrad%20%C4%8Cerven%C3%BD%20Kame%C5%88"
  },
  {
    id: "velka-homola",
    name: "Velka Homola",
    category: "Vyhlad",
    travel: "55-70 min",
    total: "5-7 h",
    difficulty: "medium",
    weather: "jasna jar alebo jesen",
    score: 8,
    description: "Turistika s rozhladnou ako jasnou odmenou.",
    note: "V zlom vyhlade to straca polovicu hodnoty.",
    more: "https://www.google.com/search?q=Ve%C4%BEk%C3%A1+Homola+rozh%C4%BEad%C5%88a",
    map: "https://www.google.com/maps/search/?api=1&query=Ve%C4%BEk%C3%A1%20Homola%20rozh%C4%BEad%C5%88a"
  },
  {
    id: "medvedia-skala",
    name: "Medvedia skala",
    category: "Turistika",
    travel: "45-60 min",
    total: "4.5-6.5 h",
    difficulty: "medium",
    weather: "jar a jesen",
    score: 7,
    description: "Lesna turistika s konkretnym bodom na trase.",
    note: "Menej vyrazne ako hrad alebo rozhladna, ale dobre na pokojny den.",
    more: "https://www.google.com/search?q=Medvedia+skala+Mal%C3%A9+Karpaty",
    map: "https://www.google.com/maps/search/?api=1&query=Medvedia%20skala%20Mal%C3%A9%20Karpaty"
  },
  {
    id: "schaubmarov-mlyn",
    name: "Schaubmarov mlyn Pezinok",
    category: "Mesto",
    travel: "45-55 min",
    total: "3-5 h",
    difficulty: "easy",
    weather: "celorocne",
    score: 7,
    description: "Kulturne miesto v inom prostredi ako klasicke muzeum. Dobre spojit s Pezinkom.",
    note: "Samostatne skor kratsie. Over vystavy a otvorenie.",
    more: "https://www.sng.sk/sk/navstivte/schaubmarov-mlyn",
    map: "https://www.google.com/maps/search/?api=1&query=Schaubmarov%20mlyn%20Pezinok"
  },
  {
    id: "smolenicky-zamok",
    name: "Smolenicky zamok",
    category: "Hrady",
    travel: "70-85 min",
    total: "5-7 h",
    difficulty: "easy-medium",
    weather: "jar az jesen",
    score: 7,
    description: "Rozpravkovo posobiaci zamok a prijemne okolie.",
    note: "Interier nemusi byt vzdy dostupny. Pred cestou over prehliadky.",
    more: "https://www.google.com/search?q=Smolenick%C3%BD+z%C3%A1mok+prehliadky",
    map: "https://www.google.com/maps/search/?api=1&query=Smolenick%C3%BD%20z%C3%A1mok"
  },
  {
    id: "jaskyna-driny",
    name: "Jaskyna Driny",
    category: "Priroda",
    travel: "75-90 min",
    total: "5-7 h",
    difficulty: "medium",
    weather: "leto alebo mierny dazd",
    score: 8,
    description: "Jaskyna je iny zazitok ako les alebo hrad. V lete prijemne ochladenie.",
    note: "Over vstupy a casy prehliadok. Vezmi mikinu.",
    more: "https://www.ssj.sk/sk/jaskyna/7-jaskyna-driny",
    map: "https://www.google.com/maps/search/?api=1&query=Jasky%C5%88a%20Driny"
  },
  {
    id: "malkia-park",
    name: "Malkia Park",
    category: "Zvierata",
    travel: "55-70 min",
    total: "5-7 h",
    difficulty: "easy",
    weather: "jar alebo jesen",
    score: 8,
    description: "Velke selmy a exoticke zvierata. Silnejsi zvieraci vylet ako minizoo.",
    note: "Nie je lacny. V horucave mozu byt zvierata menej aktivne.",
    more: "https://malkiapark.sk/",
    map: "https://www.google.com/maps/search/?api=1&query=Malkia%20Park"
  },
  {
    id: "slovak-karting",
    name: "Slovak Karting Center",
    category: "Akcia",
    travel: "45-60 min",
    total: "2.5-4 h",
    difficulty: "medium",
    weather: "celorocne",
    score: 7,
    description: "Rychlost, sutazenie a jasny zazitok. Dobre ako specialna odmena.",
    note: "Over vekove a vyskove limity. Rataj s vyssou cenou.",
    more: "https://slovakiaring.sk/slovak-karting-center/",
    map: "https://www.google.com/maps/search/?api=1&query=Slovak%20Karting%20Center"
  },
  {
    id: "kajaky-morava",
    name: "Kajaky na Morave",
    category: "Voda",
    travel: "25-45 min podla nastupneho miesta",
    total: "4-7 h",
    difficulty: "medium",
    weather: "teply den bez silneho vetra",
    score: 8,
    description: "Splav alebo kratky usek na Morave je aktivny vodny vylet blizko Zahoria. Pre 11-rocne dieta je to dobrodruzstvo, nie len sedenie pri vode.",
    note: "Nutna rezervacia pozicovne alebo organizatora, plavacie vesty a kontrola hladiny/vetra. Nevhodne pri burkach.",
    more: "https://www.google.com/search?q=kajaky+Morava+Z%C3%A1horsk%C3%A1+Ves+Vysok%C3%A1+pri+Morave",
    map: "https://www.google.com/maps/search/?api=1&query=Vysok%C3%A1%20pri%20Morave%20kajaky"
  },
  {
    id: "splav-maly-dunaj",
    name: "Splav Maleho Dunaja",
    category: "Voda",
    travel: "45-70 min",
    total: "6-9 h",
    difficulty: "medium",
    weather: "teply stabilny den",
    score: 8,
    description: "Kanoe alebo kajak na kludnejsej vode, casto s mlynmi alebo bufetovou zastavkou podla trasy.",
    note: "Vyber kratky rodinny usek, nie celodennu vodacku expediciu. Rezervuj lod, vesty a dopravu spat.",
    more: "https://www.google.com/search?q=splav+Mal%C3%BD+Dunaj+deti+kanoe",
    map: "https://www.google.com/maps/search/?api=1&query=Mal%C3%BD%20Dunaj%20splav"
  },
  {
    id: "kajak-karloveske-rameno",
    name: "Kajak alebo paddleboard v Karloveskom ramene",
    category: "Voda",
    travel: "25-35 min",
    total: "3-5 h",
    difficulty: "easy-medium",
    weather: "teply den bez vetra",
    score: 7,
    description: "Kratka vodna aktivita v Bratislave bez dlheho presunu. Dobre, ked chcete vyskusat vodu, ale nie robit velky splav.",
    note: "Over pozicovnu, podmienky, vesty a aktualny stav vody. Pri vetre alebo burkach zrusit.",
    more: "https://www.google.com/search?q=kajak+paddleboard+Karlovesk%C3%A9+rameno",
    map: "https://www.google.com/maps/search/?api=1&query=Karlovesk%C3%A9%20rameno%20Bratislava"
  },
  {
    id: "lezecka-stena-k2",
    name: "Lezecka stena K2 Bratislava",
    category: "Dazd",
    travel: "25-35 min",
    total: "2.5-4 h",
    difficulty: "medium",
    weather: "dazd, zima, horucava",
    score: 8,
    description: "Aktivny indoor program, kde sa da vybit energia aj v zlom pocasi. Dobre pre dieta, ktore sa neboji vysky.",
    note: "Over vstup pre deti, instruktora alebo istenie. Prvykrat nechod bez vysvetlenia zakladov.",
    more: "https://www.google.com/search?q=K2+lezeck%C3%A1+stena+Bratislava",
    map: "https://www.google.com/maps/search/?api=1&query=K2%20lezeck%C3%A1%20stena%20Bratislava"
  },
  {
    id: "jump-arena-bratislava",
    name: "Jump Arena Bratislava",
    category: "Dazd",
    travel: "30-40 min",
    total: "2.5-4 h",
    difficulty: "easy-medium",
    weather: "dazd, zima, horucava",
    score: 7,
    description: "Trampoliny a pohybovy indoor program. Dobry kratky vylet, ked treba rychlo minut energiu.",
    note: "Over rezervaciu, ponozky, pravidla a vytazenost. Nie je to celodenny vylet.",
    more: "https://www.google.com/search?q=Jump+Arena+Bratislava",
    map: "https://www.google.com/maps/search/?api=1&query=Jump%20Arena%20Bratislava"
  },
  {
    id: "schloss-hof",
    name: "Schloss Hof",
    category: "Rakúsko",
    travel: "35-45 min",
    total: "5-7 h",
    difficulty: "easy",
    weather: "jar az jesen",
    score: 9,
    description: "Zamek, zahrady, zvierata a velky areal. Najpraktickejsi zahranicny vylet blizko Stupavy.",
    note: "Vezmite doklady. Nie najlacnejsie, ale program je silny.",
    more: "https://www.schlosshof.at/sk/",
    map: "https://www.google.com/maps/search/?api=1&query=Schloss%20Hof"
  },
  {
    id: "marchegg",
    name: "Marchegg",
    category: "Rakúsko",
    travel: "35-45 min",
    total: "3.5-5.5 h",
    difficulty: "easy",
    weather: "jar a zaciatok leta",
    score: 7,
    description: "Priroda a bociany. Pokojny vylet bez atrakcii na kazdom kroku.",
    note: "Vezmite doklady a dalekohlad, ak mate. Najlepsie pocas sezony bocianov.",
    more: "https://www.google.com/search?q=Marchegg+bociany+z%C3%A1mok",
    map: "https://www.google.com/maps/search/?api=1&query=Marchegg%20Austria"
  },
  {
    id: "carnuntum",
    name: "Carnuntum",
    category: "Rakúsko",
    travel: "45-60 min",
    total: "4.5-6.5 h",
    difficulty: "easy",
    weather: "jar, jesen, mierne leto",
    score: 8,
    description: "Rimske mesto so zrekonstruovanymi domami. Historia, ktora nie je len tabula.",
    note: "Vezmite doklady. V lete voda a capica.",
    more: "https://www.carnuntum.at/en",
    map: "https://www.google.com/maps/search/?api=1&query=Carnuntum"
  },
  {
    id: "familypark",
    name: "Familypark",
    category: "Rakúsko",
    travel: "75-90 min",
    total: "8-10 h",
    difficulty: "easy, ale unavne",
    weather: "teply suchy den",
    score: 9,
    description: "Velky zabavny park s celodennym programom. Silny zazitok pre dieta.",
    note: "Drahe a cez prazdniny preplnene. Chodte skoro rano a kupte listky vopred.",
    more: "https://www.familypark.at/en/",
    map: "https://www.google.com/maps/search/?api=1&query=Familypark%20Austria"
  },
  {
    id: "lednice",
    name: "Lednice",
    category: "Česko",
    travel: "75-90 min",
    total: "7-9 h",
    difficulty: "easy-medium",
    weather: "jar, leto, jesen",
    score: 8,
    description: "Zamok, obrovsky park, minaret a moznost lodky. Pekny celodenny vylet.",
    note: "Cez vikendy vela ludi. Bez planu sa zmeni na dlhe chodenie.",
    more: "https://www.zamek-lednice.com/",
    map: "https://www.google.com/maps/search/?api=1&query=Lednice%20z%C3%A1mok"
  },
  {
    id: "mikulov",
    name: "Mikulov",
    category: "Česko",
    travel: "70-85 min",
    total: "6-8 h",
    difficulty: "medium",
    weather: "jar a jesen",
    score: 8,
    description: "Pekne mesto, zamok, Svaty kopecek a zmrzlina v centre.",
    note: "Viac mestsky vylet. V lete byva horuco a plno.",
    more: "https://www.mikulov.cz/",
    map: "https://www.google.com/maps/search/?api=1&query=Mikulov"
  },
  {
    id: "aqualand-moravia",
    name: "Aqualand Moravia",
    category: "Česko",
    travel: "80-100 min",
    total: "7-10 h",
    difficulty: "easy, ale unavne",
    weather: "dazd, zima, horuce leto",
    score: 8,
    description: "Tobogany, bazeny a dlhy vodny program. Funguje skoro za kazdeho pocasia.",
    note: "Drahsie a cez vikend plne. Vezmite doklady.",
    more: "https://www.aqualand-moravia.cz/",
    map: "https://www.google.com/maps/search/?api=1&query=Aqualand%20Moravia"
  },
  {
    id: "haus-des-meeres",
    name: "Haus des Meeres Wien",
    category: "Rakúsko",
    travel: "65-85 min",
    total: "6-8 h",
    difficulty: "easy",
    weather: "dazd, zima, horucava",
    score: 9,
    description: "Akvarium, plazy, zraloky a vyhlad z budovy. Jeden z najlepsich dazdovych vyletov.",
    note: "Drahsie a vo Viedni ries parkovanie alebo P+R. Vezmite doklady.",
    more: "https://www.haus-des-meeres.at/",
    map: "https://www.google.com/maps/search/?api=1&query=Haus%20des%20Meeres%20Wien"
  },
  {
    id: "technisches-museum",
    name: "Technisches Museum Wien",
    category: "Rakúsko",
    travel: "65-85 min",
    total: "6-8 h",
    difficulty: "easy",
    weather: "dazd, zima, horucava",
    score: 8,
    description: "Velke technicke muzeum so strojmi a pokusmi. Dobre pre dieta, ktore bavi technika.",
    note: "Ak techniku nema rada, zvol radsej Haus des Meeres.",
    more: "https://www.technischesmuseum.at/",
    map: "https://www.google.com/maps/search/?api=1&query=Technisches%20Museum%20Wien"
  },
  {
    id: "donau-auen",
    name: "Nationalpark Donau-Auen / Schloss Orth",
    category: "Rakúsko",
    travel: "50-65 min",
    total: "4.5-6.5 h",
    difficulty: "easy",
    weather: "jar a jesen",
    score: 7,
    description: "Luzna priroda, voda a pokojne trasy. Dobry prirodny zahranicny vylet.",
    note: "V lete pozor na komare. Vezmite doklady a repelent.",
    more: "https://www.donauauen.at/en/",
    map: "https://www.google.com/maps/search/?api=1&query=Schloss%20Orth%20Donau-Auen"
  }
];

const state = {
  ratings: {},
  category: "Vsetko",
  query: "",
  unratedOnly: false
};

const storageKey = "stupavaTripRatings.v1";
const tripList = document.querySelector("#tripList");
const template = document.querySelector("#tripTemplate");
const categoryFilters = document.querySelector("#categoryFilters");
const searchInput = document.querySelector("#searchInput");
const showUnrated = document.querySelector("#showUnrated");
const clearFilters = document.querySelector("#clearFilters");
const ratedCount = document.querySelector("#ratedCount");
const bestPick = document.querySelector("#bestPick");
const averageGrade = document.querySelector("#averageGrade");
const rankingList = document.querySelector("#rankingList");
const visibleCount = document.querySelector("#visibleCount");
const resultBox = document.querySelector("#resultBox");

function loadRatings() {
  const fromUrl = new URLSearchParams(window.location.search).get("r");
  if (fromUrl) {
    try {
      const parsed = JSON.parse(decodeURIComponent(atob(fromUrl)));
      if (parsed && typeof parsed === "object") {
        state.ratings = parsed;
        localStorage.setItem(storageKey, JSON.stringify(state.ratings));
        return;
      }
    } catch {
      // Ignore malformed shared links and fall back to local storage.
    }
  }

  try {
    state.ratings = JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch {
    state.ratings = {};
  }
}

function saveRatings() {
  localStorage.setItem(storageKey, JSON.stringify(state.ratings));
}

function categories() {
  return ["Vsetko", ...Array.from(new Set(trips.map((trip) => trip.category))).sort((a, b) => a.localeCompare(b, "sk"))];
}

function renderFilters() {
  categoryFilters.innerHTML = "";
  categories().forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.className = category === state.category ? "active" : "";
    button.addEventListener("click", () => {
      state.category = category;
      render();
    });
    categoryFilters.append(button);
  });
}

function visibleTrips() {
  const query = state.query.trim().toLowerCase();
  return trips.filter((trip) => {
    const categoryMatch = state.category === "Vsetko" || trip.category === state.category;
    const queryMatch = !query || `${trip.name} ${trip.category} ${trip.description} ${trip.note}`.toLowerCase().includes(query);
    const unratedMatch = !state.unratedOnly || !state.ratings[trip.id];
    return categoryMatch && queryMatch && unratedMatch;
  });
}

function renderTrips() {
  tripList.innerHTML = "";
  const list = visibleTrips();
  visibleCount.textContent = `${list.length} z ${trips.length}`;

  list.forEach((trip) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector(".category").textContent = trip.category;
    node.querySelector("h3").textContent = trip.name;
    node.querySelector(".score-pill").textContent = `${trip.score}/10`;
    node.querySelector(".description").textContent = trip.description;
    node.querySelector(".travel").textContent = trip.travel;
    node.querySelector(".total").textContent = trip.total;
    node.querySelector(".difficulty").textContent = trip.difficulty;
    node.querySelector(".weather").textContent = trip.weather;
    node.querySelector(".note").textContent = trip.note;
    node.querySelector(".more-link").href = trip.more;
    node.querySelector(".map-link").href = trip.map;

    const gradeButtons = node.querySelector(".grade-buttons");
    [1, 2, 3, 4, 5].forEach((grade) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "grade-button";
      button.textContent = String(grade);
      button.setAttribute("aria-label", `${trip.name}: známka ${grade}`);
      if (state.ratings[trip.id] === grade) button.classList.add("selected");
      button.addEventListener("click", () => {
        if (state.ratings[trip.id] === grade) {
          delete state.ratings[trip.id];
        } else {
          state.ratings[trip.id] = grade;
        }
        saveRatings();
        render();
      });
      gradeButtons.append(button);
    });

    tripList.append(node);
  });
}

function ratedTrips() {
  return trips
    .filter((trip) => state.ratings[trip.id])
    .map((trip) => ({ ...trip, grade: state.ratings[trip.id] }))
    .sort((a, b) => a.grade - b.grade || b.score - a.score || a.name.localeCompare(b.name, "sk"));
}

function renderSummary() {
  const rated = ratedTrips();
  ratedCount.textContent = `${rated.length} / ${trips.length}`;
  bestPick.textContent = rated.length ? `${rated[0].name} (${rated[0].grade})` : "-";
  averageGrade.textContent = rated.length
    ? (rated.reduce((sum, trip) => sum + trip.grade, 0) / rated.length).toFixed(2)
    : "-";

  rankingList.innerHTML = "";
  rated.slice(0, 12).forEach((trip) => {
    const item = document.createElement("li");
    item.textContent = `${trip.name} - známka ${trip.grade}, výlet ${trip.total}`;
    rankingList.append(item);
  });
  if (!rated.length) {
    const item = document.createElement("li");
    item.textContent = "Zatiaľ nie je nič oznámkované.";
    rankingList.append(item);
  }
}

function encodedRatings() {
  return btoa(encodeURIComponent(JSON.stringify(state.ratings)));
}

function shareUrl() {
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("r", encodedRatings());
  return url.toString();
}

function summaryText() {
  const rated = ratedTrips();
  if (!rated.length) return "Zatial nie su vyplnene ziadne znamky.";
  return rated
    .map((trip, index) => `${index + 1}. ${trip.name} - znamka ${trip.grade} - ${trip.total}`)
    .join("\n");
}

function csvText() {
  const rows = [["poradie", "nazov", "znamka", "kategoria", "cely_vylet", "cesta", "narocnost", "link"]];
  ratedTrips().forEach((trip, index) => {
    rows.push([index + 1, trip.name, trip.grade, trip.category, trip.total, trip.travel, trip.difficulty, trip.more]);
  });
  return rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
}

async function copyToClipboard(text) {
  resultBox.value = text;
  resultBox.select();
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    document.execCommand("copy");
  }
}

function render() {
  renderFilters();
  renderTrips();
  renderSummary();
  showUnrated.classList.toggle("active", state.unratedOnly);
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

showUnrated.addEventListener("click", () => {
  state.unratedOnly = !state.unratedOnly;
  render();
});

clearFilters.addEventListener("click", () => {
  state.category = "Vsetko";
  state.query = "";
  state.unratedOnly = false;
  searchInput.value = "";
  render();
});

document.querySelector("#shareLink").addEventListener("click", async () => {
  const url = shareUrl();
  if (navigator.share) {
    try {
      await navigator.share({ title: "Moje hodnotenie vyletov", text: "Tu su moje znamky vyletov:", url });
      return;
    } catch {
      // Fall through to copy.
    }
  }
  await copyToClipboard(url);
});

document.querySelector("#copySummary").addEventListener("click", async () => {
  await copyToClipboard(summaryText());
});

document.querySelector("#exportCsv").addEventListener("click", () => {
  const blob = new Blob([csvText()], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "stupava-vylety-hodnotenie.csv";
  link.click();
  URL.revokeObjectURL(url);
});

document.querySelector("#resetRatings").addEventListener("click", () => {
  if (!confirm("Naozaj vymazat vsetky znamky v tomto zariadeni?")) return;
  state.ratings = {};
  saveRatings();
  render();
});

loadRatings();
render();
