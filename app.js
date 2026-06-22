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
    description: "Biofarma Priroda pri Stupave je najjednoduchsi vylet, ked chcete zvierata, vonkajsi priestor a jedlo bez dlhej cesty. Dieta tam vie pozriet hospodarske zvierata, prejst sa po areali a mat pocit, ze ste boli niekde mimo bez velkeho planovania. Pre 11-rocnu dceru to bude skor pokojny vylet ako velke dobrodruzstvo, ale zvierata a farma vedia stale fungovat. Najlepsie je spojit to s obedom, kratkou prechadzkou alebo dalsou zastavkou v okoli Stupavy. Slabina je, ze cez pekny vikend moze byt plno a ako samostatny celodenny program je to kratke.",
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
    description: "Draci hradok je lesny vylet k malej zrucanine, ktora ma pre dieta dobry nazov a trochu tajomnejsiu atmosferu. Nie je to velky hrad, takze hlavny zazitok je skor cesta lesom, hladanie ciela a pocit malej vypravy. Pre 11-rocne dieta je to fajn, ak ma rada prechadzky, mapu, les a miesta, ktore nie su uplne turisticky naleštene. Treba ratat s tym, ze na mieste nie su sluzby, bufet ani velky program, takze snack a voda su zaklad. Najlepsie funguje v suchom pocasi, lebo po dazdi vie byt trasa blatista a menej prijemna.",
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
    description: "Okruh Pajstun plus Draci hradok je uz poriadnejsi turisticky den, nie rychla prechadzka. V jednom vylete spojite vyhladovu zrucaninu Pajstun, lesne chodniky a mensi ciel pri Dracom hradku. Pre 11-rocne dieta to moze byt vyborne, ak ma energiu a berie turistiku ako vypravu, nie ako trest. Dobre je z toho spravit hru s mapou, prestavkami a jasnym planom, kedy bude jedlo a oddych. Ak je horuco, mokro alebo ma slabsi den, tento okruh by som radsej skratil alebo odlozil.",
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
    description: "Marianka je pokojne putne miesto pri Stupave s prijemnou prechadzkou a tichou atmosferou. Nie je to akčný vylet, skor miesto na spomalenie, prechadzku a kratke zastavenie mimo ruchu. Pre 11-rocne dieta moze byt zaujimave, ak jej vysvetlis, preco je miesto dolezite a co tam ludia chodia hladat. Ak chce atrakcie, treba to spojit so zmrzlinou, malym obedom alebo dalsou blizkou zastavkou. Vyhoda je kratka cesta, nevyhoda je, ze bez kontextu jej to moze pripadat malo zazitkove.",
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
    description: "Vodna nadrz Lozorno je jednoduchy vylet k vode, kde sa da prejst, posediet a dat si pomalsi program. Nie je to aquapark ani velka plazova atrakcia, skor miesto na kludny pobyt vonku. Pre 11-rocne dieta je voda sama o sebe plus, hlavne ked moze pozorovat okolie, zobrat si snack alebo sa prejst pri brehu. Pred kupanim si treba overit aktualne podmienky, lebo rezim vody sa moze menit. Najlepsie to funguje podvecer v lete alebo ako nenarocna zastavka, nie ako velky vrchol vikendu.",
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
    description: "Abeland pri Lozorne je areal s remeselnou a prirodnou atmosferou, ktory dava najvacsi zmysel pocas programu alebo akcie. Dieta tam moze vidiet veci, ktore neposobia ako bezny mestsky park, napriklad remesla, zvierata alebo jednoduchsi vidiecky areal. Pre 11-rocnu dceru je to dobre vtedy, ked sa tam da nieco robit alebo pozorovat, nie len chodit. Pred odchodom je dolezite overit otvorenie, lebo naslepo to moze dopadnut kratko a rozpacito. Ak trafite dobry program, je to velmi prijemny blizky vylet s inou energiou ako klasicka Bratislava.",
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
    description: "Plavecky hrad je zrucanina v Malych Karpatoch, ktora posobi prirodzenejsie a menej komercne ako zname hrady. Cesta hore je dostatocne turisticka na to, aby mala pocit vykonu, ale nie je to extrem, ak zvolite rozumny start. Na mieste su hradby, kamene, vyhlady a priestor na kratky oddych. Pre 11-rocne dieta je dobry preto, ze ciel je jasny a nie je to len nekonecna cesta lesom. Treba mat pevne topanky, vodu a necakat sluzby priamo na hrade.",
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
    description: "Malacky kastiel a park su lahsi mestsky vylet, ked nechcete turistiku ani dlhu cestu. Park vie posluzit na prechadzku, rozhovor a trochu kludnejsi den. Pre 11-rocne dieta to nebude najvacsi zazitok v zozname, ale moze fungovat ako pohodovy program s jedlom alebo zastavkou v meste. Dava zmysel overit, ci je dostupny aj interier alebo nejaka aktualna akcia. Samostatne je to skor pol dna, nie vylet, ktory bude rozpravat este o mesiac.",
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
    description: "Devinska Kobyla s rozhladnou je vylet, kde je ciel jasny uz od zaciatku: vystupit hore a pozriet sa do dialky. Rozhladna ponuka vyhlady na Bratislavu, Rakusko, rieky a okolitu krajinu, takze za dobreho pocasia ma silny efekt. Pre 11-rocne dieta je to vdacne, lebo cesta ma konkretnu odmenu a na vrchu je co pozerat. Ked je hmla alebo silny vietor, polovica zazitku sa strati. Parkovanie a start trasy si radsej naplanuj vopred, lebo cez vikendy sa vie okolie naplnit.",
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
    description: "Sandberg je velmi odlisny od bezneho lesa, lebo ide o pieskovcove a paleontologicke miesto pri Devinskej Novej Vsi. Dieta tam vidi svahy, vyhlady a krajinu, ktora vyzera skoro ako mala prirodna ucebna geologie. Da sa rozpravat o mori, fosiliach a tom, ze tato oblast kedysi vyzerala uplne inak. Je to kratky, vizualne zaujimavy vylet, ale v lete tam byva malo tiena. Dolezite je nic neodlamovat a brat to ako chranene miesto, nie pieskovisko.",
    note: "V lete malo tiena. Je to chranene uzemie, nic neodlamovat.",
    more: "https://www.google.com/search?q=Sandberg+Dev%C3%ADnska+Nov%C3%A1+Ves",
    map: "https://www.google.com/maps/search/?api=1&query=Sandberg%20Dev%C3%ADnska%20Nov%C3%A1%20Ves"
  },
  {
    id: "hrad-devin",
    name: "Hrad Devin",
    category: "Hrady",
    travel: "25-35 min",
    total: "3-5 h",
    difficulty: "easy",
    weather: "jar az jesen",
    score: 8,
    description: "Hrad Devin je velky hradny areal nad sutokom Dunaja a Moravy, takze ma silny vizualny ciel aj bez dlheho vysvetlovania. Pre dieta je fajn, ze sa da chodit po areali, pozerat hradby, rieky a predstavit si, ako miesto fungovalo v minulosti. Nie je to len muzeum za sklom, lebo velka cast zazitku je vonku a v priestore. Dobre sa kombinuje so Sandbergom, sokoliarmi alebo kratkou prechadzkou pri rieke. Cez pekne vikendy byva vela ludi, preto sa oplati ist rano a overit vstupne aj otvaracie hodiny.",
    note: "Over otvaracie hodiny a vstupne. Cez pekne vikendy byva vela ludi, oplati sa ist skor.",
    more: "https://hraddevin.mmb.sk/",
    map: "https://www.google.com/maps/search/?api=1&query=Hrad%20Dev%C3%ADn"
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
    description: "Sokoliarna a minizoo pri Devine su dobry doplnok, ak nechces, aby bol Devin iba o kamenoch a historii. Dravce, ukazky a zvierata su pre dieta konkretnejsie ako dalsia tabula s textom. Pre 11-rocnu dceru to vie byt zaujimave hlavne vtedy, ked trafite cas ukazky alebo krmenia. Samostatne je to skor kratky program, preto ho ber ako bonus k hradu alebo Sandbergu. Pred cestou si over sezonu, casy ukazok a realnu otvorenost.",
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
    description: "ZOO Bratislava je klasicka, ale stale pouzitelna rodinna volba, ked chcete zvierata a jasny program. Pre 11-rocne dieta uz nie je zoo taka magicka ako pre male deti, ale vacsie zvierata, DinoPark a prechadzka arealom stale vedia fungovat. Vyhoda je, ze netreba vela vysvetlovat, dieta hned vie, co sa tam bude robit. Nevyhoda je dav cez vikendy, horucava v lete a pocit, ze to mozno uz pozna. Skore 8/10 ma preto, ze je spolahliva, dostupna a detsky vhodna, aj ked nie je najoriginalnejsia.",
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
    description: "Kamzik s bobovou drahou a Lanolandom je jeden z najlepsich aktivnych vyletov pri Bratislave. Zacne sa to lesom a vyhladom, potom pride bobova draha alebo lanovy park, cize dieta ma jasnu odmenu. Pre 11-rocnu dceru je to dobry vek, lebo uz zvladne prekazky, vysku aj trochu samostatnosti. Treba overit prevadzku, vekove a vyskove limity a pocasie, lebo pri dazdi to nedava zmysel. Slabina je parkovanie a rady cez pekne vikendy, preto by som siel skor rano.",
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
    description: "Zelezna studienka a Partizanska luka su velmi prakticky vylet, lebo sa daju prisposobit energii aj pocasiu. Mozete ist len na ihriska a vodu, alebo spravit dlhsiu prechadzku lesom. Pre 11-rocne dieta je plus, ze prostredie nie je sterilne a stale sa da niekam pokracovat. Je tam priestor na bicykel, kolobezku, piknik alebo jednoducho pomaly den vonku. Najvacsi problem je parkovanie a vikendove davy, nie samotne miesto.",
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
    description: "Kacin je lesny piknikovy vylet, ktory funguje najlepsie, ked si vezmete jedlo, hru alebo plan na ohen tam, kde je to povolene. Nie je to atrakcia s pokladnou a jasnym programom, skor prirodne miesto na oddych. Pre 11-rocne dieta je dobre, ak ma rada volnejsi pobyt vonku a nie iba organizovane atrakcie. Bez pikniku alebo nejakej aktivity moze mat pocit, ze sa len sedelo v lese. Over si pravidla ohna, zober vodu, repelent a radsej necakaj velky wow efekt.",
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
    description: "Botanicka zahrada UK je pokojny mestsky vylet s rastlinami, sklenikmi a prijemnym arealom. Pre dieta mozu byt zaujimave exoticke rastliny, kaktusy, palmy alebo vodne plochy, hlavne ak jej ukazes konkretne zvlastnosti. Nie je to akcne miesto, skor pomaly objavovaci program. Dobre funguje na jar alebo zaciatkom leta, ked je zahrada najzivsia. Ak ma prave naladu na trampoliny alebo zvierata, toto jej moze pripadat prilis tiche.",
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
    description: "Muzeum dopravy v Bratislave je dobry dazdovy program pre dieta, ktore znesie auta, vlaky a techniku. Vystavy su konkretne, takze sa nemusi citit ako v abstraktnom muzeu, kde treba vela citat. Da sa rozpravat o starych autach, zeleznici, doprave a tom, ako sa cestovalo kedysi. Pre 11-rocne dieta je to skor kratsi interierovy vylet, nie celodenny zazitok. Parkovanie v centre vie otravovat, preto si dopredu premysli dopravu.",
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
    description: "BIBIANA je dobra volba do dazda, ak je aktualna vystava vhodna aj pre starsie dieta. Najlepsie funguje vtedy, ked je vystava interaktivna, vizualna alebo tvoriva, nie iba na pozeranie. Pre 11-rocnu dceru moze byt velmi fajn, ale uz je vo veku, kde niektore detske veci mozu posobit prilis male. Preto sa oplati pred odchodom pozriet, co tam prave bezi. Ako kratky program v centre je to dobre, ale slabu vystavu zachrani uz len zmrzlina alebo dalsia zastavka.",
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
    description: "Stara radnica a veza v Bratislave je kratky mestsky vylet s jasnou odmenou: vyhladom na centrum zhora. Pre dieta je vystup na vezu konkretnejsi ako bezna prechadzka po meste. Da sa k tomu pridat Hlavne namestie, zmrzlina, mala hra s hladanim detailov na domoch alebo kratke muzeum. Samostatne je to prilis kratke na velky vylet, ale ako cast pol dna funguje dobre. Najlepsie je ist za jasneho pocasia, inak vyhlad straca cast hodnoty.",
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
    description: "Aurelium je science centrum, kde by dieta nemalo len pozerat vitriny, ale skusat exponaty. Pre 11-rocny vek je to velmi dobra forma ucenia, lebo fyzika a technika su tam viac cez pokus ako cez ucebnicu. Najlepsie funguje, ak su exponaty v prevadzke a nie je tam prilis plno. Pred cestou treba overit aktualnu otvorenost, lebo pri takychto miestach sa rezim vie menit. Ak vsetko funguje, je to jeden z lepsich indoor programov v Bratislave.",
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
    description: "Danubiana je moderna galeria pri vode, co je pre dieta znesitelnejsie ako klasicka galeria v centre mesta. Okrem obrazov a vystav je tam architektura, otvoreny priestor, sochy a voda okolo arealu. Pre 11-rocnu dceru to moze byt dobry kompromis medzi kulturou a vyletom, ak navstevu zbytocne nenatahujete. Dobre je vybrat len cast vystavy a potom ist von alebo spojit vylet s Cunovom. Ak nema rada galerie vobec, predaj jej to skor ako miesto pri vode so sochami, nie ako 'ideme do muzea'.",
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
    description: "Divoka voda Cunovo je sportovy areal, kde sa da pozerat na vodakov, dat si jedlo alebo si rezervovat aktivitu podla veku a skusenosti. Pre 11-rocne dieta je zaujimave uz len sledovat prudku vodu a lode, lebo to ma energiu. Ak chcete aktivnejsi program, treba rezervovat dopredu a overit vekove limity. Samotne pozeranie je skor kratsia zastavka, preto sa oplati spojit to s Danubianou alebo prechadzkou pri vode. V horucich dnoch je to prijemnejsie ako chodit po rozpalenom meste.",
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
    description: "Hrad Cerveny Kamen je jeden z najsilnejsich hradnych vyletov v rozumnej vzdialenosti od Stupavy. Areal je velky, nadvorie posobi dobre a prehliadka vie mat atmosferu aj pre starsie dieta. Pre 11-rocnu dceru je fajn, ze nejde len o zrucaninu, ale o skutocny zachovany hrad s interiermi. Treba vsak vybrat prehliadku tak, aby nebola prilis dlha a nezabila pozornost. Over casy, vstupne a akcie, lebo pocas podujati vie byt hrad plny.",
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
    description: "Velka Homola je turistika s rozhladnou, cize ciel je velmi jasny a motivacny. Cesta je vhodna pre dieta, ktore nema problem s pohybom a vie zvladnut stredne dlhy vystup. Na vrchu je odmena v podobe vyhladu, ktory za dobreho pocasia naozaj stoji za to. V hmle, dazdi alebo silnom vetre by som tento vylet nebral, lebo pointa je prave rozhladna. Zoberte vodu, nieco male na jedenie a pevne topanky.",
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
    description: "Medvedia skala je kludnejsi turisticky vylet v Malych Karpatoch. Nie je tak vyrazna ako velky hrad alebo vysoka rozhladna, ale vie dat prijemny lesny den. Pre 11-rocne dieta funguje, ak chce byt vonku a nevadi jej, ze ciel je menej spektakularny. Je to dobra volba, ked nechcete davy a chcete normalnu prirodu bez komercie. Po dazdi mozu byt chodniky klzke, preto treba zvolit rozumnu trasu.",
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
    description: "Schaubmarov mlyn v Pezinku je kulturne miesto v prostredi stareho mlyna, co je zaujimavejsie ako obycajna vystavna miestnost. Pre dieta je plus, ze budova aj okolie maju vlastny charakter a da sa spojit s kratkou prechadzkou v Pezinku. Aktualna vystava rozhoduje o tom, ci to bude velmi dobre alebo len prijemne. Pre 11-rocnu dceru to nie je akcia, skor kulturny a pokojny program. Pred cestou over otvorenie a vystavy, inak riskujes kratky vylet bez pointy.",
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
    description: "Smolenicky zamok posobi rozpravkovo a uz zvonka ma silny efekt, hlavne pre dieta, ktore ma rado zamky. Okolie je vhodne na prechadzku a da sa spojit s prirodou v Malych Karpatoch. Problem je, ze interier nemusi byt vzdy dostupny, takze treba pred cestou overit prehliadky. Ak sa dostanete dnu alebo trafite vhodny program, vylet je ovela silnejsi. Bez otvoreneho interieru je to stale pekne, ale moze to byt menej naplnene.",
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
    description: "Jaskyna Driny je dobry letny vylet, lebo jaskyna je pre dieta prirodzene zaujimava a vo vnutri je chladnejsie. Cesta ku jaskyni a samotna prehliadka daju vyletu jasny ciel. Pre 11-rocnu dceru je to iny typ zazitku ako hrad, zoo alebo kupalisko. Treba mat mikinu, pevnejsiu obuv a overit casy vstupov, aby ste zbytocne necakali. Dobre sa kombinuje so Smolenicami alebo kratkou prechadzkou v okoli.",
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
    description: "Malkia Park je zvieraci vylet s velkymi selmami a exotickymi zvieratami, co posobi silnejsie ako bezna minizoo. Pre 11-rocne dieta su levy, tigre a podobne zvierata stale velmi konkretna a zapamatatelna vec. Je dobre vysvetlit, ze nejde len o atrakciu, ale aj o miesto spojene so zachranou zvierat. V horucave mozu byt zvierata menej aktivne, takze idealne je ist v miernejsom pocasi. Nie je to najlacnejsi vylet, ale ako specialnejsi zvieraci den vie stat za to.",
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
    description: "Slovak Karting Center je akcia, rychlost a sutazenie v jednom. Pre 11-rocnu dceru to moze byt velmi silny zazitok, ak splna vekove a vyskove limity a neboji sa jazdy. Nie je to prirodny ani lacny vylet, skor specialna odmena alebo narodeninovy typ programu. Dobre je dopredu rezervovat a vysvetlit pravidla bezpecnosti. Ako celodenny vylet je to kratke, preto ho spoj s jedlom alebo dalsou zastavkou.",
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
    description: "Kajaky na Morave su aktivny vodny vylet blizko Zahoria, ktory posobi dobrodruznejsie ako obycajne kupanie. Dieta sedi v lodi, sleduje rieku, brehy a ma pocit, ze sa realne niekam presuva. Pre 11-rocnu dceru to moze byt vyborne, ak vie pocuvat instrukcie a neboji sa vody. Nutne su vesty, rezervacia pozicovne alebo organizatora a kontrola pocasia, hladiny aj vetra. Pri burkach, silnom vetre alebo neistych podmienkach by som to bez debaty zrusil.",
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
    description: "Splav Maleho Dunaja je dlhsi vodacky den na kludnejsej vode, casto s prirodou, mlynmi alebo bufetovou zastavkou podla trasy. Pre dieta je to zazitok, lebo nejde len o pozeranie, ale o realne sedenie v kanoe alebo kajaku. Treba vybrat kratky rodinny usek, nie trasu, ktora bude po dvoch hodinach trapenie. Dolezite su vesty, organizovana doprava spat a rezervacia lode. Ak to dobre naplanujes, je to jeden z najlepsich letnych aktivnych vyletov.",
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
    description: "Kajak alebo paddleboard v Karloveskom ramene je kratsia vodna aktivita v Bratislave bez dlhej cesty. Je to dobre, ked chcete vyskusat vodu, ale nechcete robit velky splav ani riesit zlozitu logistiku. Pre 11-rocnu dceru je to dostupny sposob, ako si skusit rovnovahu, padlovanie a trochu samostatnosti. Treba overit pozicovnu, vesty, stav vody a pocasie, hlavne vietor. Pri burkach alebo neistych podmienkach to nema zmysel riskovat.",
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
    description: "Lezecka stena K2 je aktivny indoor program, ktory sa hodi do dazda, zimy alebo horucavy. Pre 11-rocne dieta je lezenie dobry mix pohybu, odvahy a sustredenia. Ak este neliezla, treba ist s instruktorom alebo minimalne jasne vyriesit istenie a pravidla. Vyhoda je, ze program nie je zavisly od pocasia a dieta sa realne unavi. Nevyhoda je, ze ak sa boji vysky, treba zacat velmi pomaly a netlacit na nu.",
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
    description: "Jump Arena je kratky indoor program s trampolinami a pohybom, dobry hlavne ked treba rychlo minut energiu. Pre 11-rocne dieta je to jednoduche na pochopenie a netreba zlozity plan. Nie je to kulturny ani prirodny vylet, skor funkcna zabava na dve az tri hodiny. Treba overit rezervaciu, pravidla, specialne ponozky a vytazenost. Ako hlavny celodenny program je to slabe, ale do dazda alebo po skole velmi prakticke.",
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
    description: "Schloss Hof je jeden z najlepsich zahranicnych rodinnych vyletov zo Stupavy, lebo je blizko a ma vela roznych casti. Je tam zamek, velke zahrady, zvierata, ihriska a sezonne programy, takze dieta nemusi len chodit po izbách. Pre 11-rocnu dceru je dobra kombinacia pekneho prostredia, pohybu a niecoho na pozeranie. Treba zobrat doklady, overit vstupne, otvaracie hodiny a podujatia. Nie je to najlacnejsie, ale ako plnohodnotny poldenny az celodenny vylet ma velmi dobry pomer zazitku a vzdialenosti.",
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
    description: "Marchegg je pokojny rakusky vylet zamerany na prirodu, bociany a nenarocnu prechadzku. Najlepsi je v sezone, ked su bociany aktivne a dieta vidi nieco konkretne, nie len dalsi park. Pre 11-rocnu dceru moze byt fajn, ak ma rada zvierata a prirodu, ale necaka atrakcie. Dalekohlad tomu velmi pomoze, lebo pozorovanie je potom zaujimavejsie. Vezmite doklady a pred odchodom overte, co je aktualne otvorene alebo pristupne.",
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
    description: "Carnuntum je archeologicky park s rimskou historiou, ktora je podana vizualnejsie ako v beznom muzeu. Rekonstruovane rimske domy pomahaju dietatu predstavit si, ako ludia zili, varili alebo byvali. Pre 11-rocnu dceru to moze byt zaujimave, ak ma aspon trochu rada historiu alebo pribehy zo staroveku. Dobre je jej to predat ako cestu do rimskeho mesta, nie ako povinnu dejepisnu hodinu. V lete treba ratat so slnkom a zobrat vodu, capicu a doklady.",
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
    description: "Familypark je velky zabavny park v Rakusku a patri medzi najsilnejsie zazitkove vyletove moznosti. Pre 11-rocne dieta je tam dost atrakcii na cely den, od kludnejsich veci po rychlejsie jazdy. Je to vylet, ktory si bude pamatat, ale treba ratat s cenou, radmi a unavou. Najlepsie je kupit listky vopred, prist skoro a neplanovat uz dalsi program. Cez prazdniny a pekne vikendy moze byt preplneny, takze trpezlivost je povinna vybava.",
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
    description: "Lednice su krasny celodenny vylet do Ceska so zamkom, obrovskym parkom, minaretom a moznostou lodiek. Pre 11-rocnu dceru je dobre, ze program sa da skladat: kus zamok, kus park, kus vyhlad, kus jedlo. Nie je to jedna atrakcia, ale cele prostredie, kde sa da stravit vela hodin. Slabina je, ze cez vikendy byva vela ludi a bez planu sa len nachodite. Vezmite doklady, overte prehliadky a vyberte si dopredu, co naozaj chcete stihnut.",
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
    description: "Mikulov je pekny mestsky vylet s atmosferou, zamkom, kopcom a vyhladmi. Pre 11-rocne dieta moze fungovat, ak z toho spravis kombinaciu prechadzky, vystupu na Svaty kopecek a dobrej zmrzliny. Nie je to typ vyletu plny atrakcii, skor pekne miesto na objavovanie. V lete tam vie byt horuco a vela ludi, preto je jar alebo jesen lepsia. Vezmite doklady a parkovanie ries radsej skor, lebo centrum sa vie zaplnit.",
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
    description: "Aqualand Moravia je velky aquapark s bazenmi, toboganmi a vodnym programom na vacsinu dna. Pre 11-rocnu dceru je to skoro istota, ak ma rada vodu a smyklavky. Funguje v lete, v dazdi aj v zime, co je velka vyhoda. Nevyhoda je cena, cesta a davy cez vikendy alebo prazdniny. Vezmite doklady, overte ceny a priprav sa, ze to bude skor drahy specialny vylet ako bezna sobota.",
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
    description: "Haus des Meeres vo Viedni je silny indoor vylet s akvariami, rybami, plazmi, zralokmi a vyhladom z budovy. Pre 11-rocne dieta je to velmi vdacne, lebo kazde poschodie prinasa nieco nove a konkretne. Je to jedna z najlepsich volieb do dazda alebo zimy, ked nechcete byt vonku. Treba pocitat s vyssou cenou a s tym, ze parkovanie vo Viedni nie je prijemne, preto zvaz P+R a MHD. Vezmite doklady a listky alebo cas navstevy si overte dopredu.",
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
    description: "Technisches Museum Wien je velke technicke muzeum, kde su stroje, doprava, fyzika a rozne technicke temy. Pre dieta, ktore ma rado pokusy, mechaniku alebo velke exponaty, je to velmi dobry den. Nie je to vsak idealne pre dieta, ktore technika vobec nebavi, lebo potom moze byt muzeum prilis dlhe. Dobre je vybrat len casti, ktore ju zaujmu, a nesnazit sa prejst vsetko. Vezmite doklady a premyslite dopravu vo Viedni, parkovanie vie byt otravne.",
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
    description: "Nationalpark Donau-Auen a Schloss Orth su vylet do luznej prirody pri Dunaji, kde je hlavna vec voda, les a pokojne pozorovanie. Pre 11-rocnu dceru to funguje, ak ma rada prirodu, zvierata, chodniky a objavovanie bez velkych atrakcii. Navstevnicke centrum alebo areal pri zamku mozu dat vyletu jasnejsi ciel. V lete treba ratat s komarmi, preto je repelent skoro povinna vybava. Vezmite doklady a necakajte zabavny park, toto je skor prirodny objavovaci den.",
    note: "V lete pozor na komare. Vezmite doklady a repelent.",
    more: "https://www.donauauen.at/en/",
    map: "https://www.google.com/maps/search/?api=1&query=Schloss%20Orth%20Donau-Auen"
  }
];

const crochetAnimals = [
  { name: "macka", color: "#f6c58f", accent: "#d99558", ears: "cat" },
  { name: "zajac", color: "#f7e1d2", accent: "#dca7a2", ears: "bunny" },
  { name: "medvedik", color: "#c99a68", accent: "#986e45", ears: "round" },
  { name: "liska", color: "#ee8f4d", accent: "#c6642f", ears: "fox" },
  { name: "psik", color: "#d9b48f", accent: "#8c6547", ears: "dog" },
  { name: "ovecka", color: "#f4eee0", accent: "#cfc3a7", ears: "round" },
  { name: "koala", color: "#bfc6c8", accent: "#879194", ears: "round" },
  { name: "prasiatko", color: "#f4b6c2", accent: "#d77f92", ears: "cat" },
  { name: "myska", color: "#d8d2c9", accent: "#a7a097", ears: "round" },
  { name: "jelen", color: "#c58d5a", accent: "#815631", ears: "deer" },
  { name: "zabka", color: "#9fd37c", accent: "#62a345", ears: "frog" },
  { name: "tucniak", color: "#4b6175", accent: "#f2f2ea", ears: "round" }
];

const categoryTypes = {
  Akcia: "fire",
  Blizko: "normal",
  Dazd: "electric",
  Hrady: "rock",
  Mesto: "steel",
  Priroda: "grass",
  "Rakúsko": "psychic",
  Turistika: "grass",
  Voda: "water",
  Vyhlad: "flying",
  Zazitok: "fairy",
  Zvierata: "normal",
  "Česko": "fairy"
};

trips.forEach((trip, index) => {
  trip.crochetAnimal = crochetAnimals[index % crochetAnimals.length];
});

function crochetAnimalUrl(animal) {
  const earShapes = {
    cat: `<path d="M18 24 L24 8 L34 24 Z" fill="${animal.color}" stroke="${animal.accent}" stroke-width="2"/><path d="M46 24 L56 8 L62 24 Z" fill="${animal.color}" stroke="${animal.accent}" stroke-width="2"/>`,
    bunny: `<ellipse cx="26" cy="13" rx="7" ry="17" fill="${animal.color}" stroke="${animal.accent}" stroke-width="2"/><ellipse cx="54" cy="13" rx="7" ry="17" fill="${animal.color}" stroke="${animal.accent}" stroke-width="2"/><ellipse cx="26" cy="14" rx="3" ry="11" fill="#f5b8bf"/><ellipse cx="54" cy="14" rx="3" ry="11" fill="#f5b8bf"/>`,
    round: `<circle cx="24" cy="24" r="10" fill="${animal.color}" stroke="${animal.accent}" stroke-width="2"/><circle cx="56" cy="24" r="10" fill="${animal.color}" stroke="${animal.accent}" stroke-width="2"/>`,
    fox: `<path d="M17 25 L25 6 L36 25 Z" fill="${animal.color}" stroke="${animal.accent}" stroke-width="2"/><path d="M44 25 L55 6 L63 25 Z" fill="${animal.color}" stroke="${animal.accent}" stroke-width="2"/>`,
    dog: `<ellipse cx="20" cy="28" rx="8" ry="14" fill="${animal.accent}" transform="rotate(25 20 28)"/><ellipse cx="60" cy="28" rx="8" ry="14" fill="${animal.accent}" transform="rotate(-25 60 28)"/>`,
    deer: `<path d="M21 22 C15 14 16 9 21 7 M23 20 C21 12 25 8 30 7 M59 22 C65 14 64 9 59 7 M57 20 C59 12 55 8 50 7" fill="none" stroke="${animal.accent}" stroke-width="3" stroke-linecap="round"/><ellipse cx="24" cy="25" rx="8" ry="10" fill="${animal.color}" stroke="${animal.accent}" stroke-width="2"/><ellipse cx="56" cy="25" rx="8" ry="10" fill="${animal.color}" stroke="${animal.accent}" stroke-width="2"/>`,
    frog: `<circle cx="25" cy="22" r="9" fill="${animal.color}" stroke="${animal.accent}" stroke-width="2"/><circle cx="55" cy="22" r="9" fill="${animal.color}" stroke="${animal.accent}" stroke-width="2"/>`
  };
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
      <rect width="80" height="80" rx="16" fill="#fff7e8"/>
      ${earShapes[animal.ears] || earShapes.round}
      <circle cx="40" cy="40" r="27" fill="${animal.color}" stroke="${animal.accent}" stroke-width="2.5"/>
      <path d="M18 35 C30 28 50 28 62 35 M17 43 C30 36 50 36 63 43 M20 51 C31 45 49 45 60 51" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.55" stroke-linecap="round"/>
      <path d="M22 33 C32 25 48 25 58 33 M21 58 C31 66 49 66 59 58" fill="none" stroke="${animal.accent}" stroke-width="1.4" opacity="0.45" stroke-linecap="round"/>
      <circle cx="31" cy="39" r="3.2" fill="#2b2624"/>
      <circle cx="49" cy="39" r="3.2" fill="#2b2624"/>
      <ellipse cx="40" cy="48" rx="8" ry="6" fill="#fff1df" opacity="0.9"/>
      <path d="M37 46 Q40 49 43 46" fill="none" stroke="#2b2624" stroke-width="2" stroke-linecap="round"/>
      <path d="M40 49 Q36 53 32 51 M40 49 Q44 53 48 51" fill="none" stroke="#2b2624" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="25" cy="46" r="3" fill="#f6a9aa" opacity="0.55"/>
      <circle cx="55" cy="46" r="3" fill="#f6a9aa" opacity="0.55"/>
      <path d="M17 61 C24 70 56 70 63 61" fill="none" stroke="#d8b28a" stroke-width="2" stroke-dasharray="2 3" opacity="0.75"/>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}


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
  const params = new URLSearchParams(window.location.search);
  if (params.get("reset") === "1") {
    state.ratings = {};
    localStorage.removeItem(storageKey);
    return;
  }

  const fromUrl = params.get("r");
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
    node.dataset.type = categoryTypes[trip.category] || "normal";
    const crochetImg = node.querySelector(".crochet-img");
    crochetImg.src = crochetAnimalUrl(trip.crochetAnimal);
    crochetImg.alt = `Háčkované zvieratko ${trip.crochetAnimal.name} pre výlet ${trip.name}`;
    crochetImg.addEventListener("error", () => {
      node.querySelector(".crochet-avatar").classList.add("hidden");
    });

    node.querySelector(".category").textContent = trip.category;
    node.querySelector("h3").textContent = trip.name;
    node.querySelector(".score-pill").textContent = `Tip ${trip.score}/10`;
    node.querySelector(".score-pill").title =
      "Orientacne rodicovske odporucanie: zabava, vzdialenost, sila zazitku, cena, logistika a riziko nudy.";
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
