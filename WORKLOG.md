# Worklog

## 2026-06-14

- Vytvorena staticka mobilna web aplikacia pre hodnotenie vyletov zo Stupavy.
- Pridane hodnotenie znamkou 1-5, lokalne ukladanie, filtre, vyhladavanie, zdieľaci link a CSV export.
- Data vychadzaju z predchadzajuceho suboru `stupava_day_trips.md`, doplnene o linky a odhad celkoveho casu od domu po navrat.
- Na zaklade vyberu vyradene menej vhodne polozky, Kamzik spojeny s Lanolandom a doplnene kajaky/splavy plus indoor akcie na finalny pocet 45 aktivit.
- Projekt publikovany cez GitHub Pages:
  `https://skubo86.github.io/stupava-day-trips-rating/`
- Na poziadanie pridany Hrad Devin spat do hodnotiacej aplikacie; zoznam ma teraz 46 aktivit.
- Rozsirene popisy v hodnotiacej aplikacii na minimalne 5 viet pre kazdu aktivitu.
- Doplnene vysvetlenie, ze skore 1-10 je orientacne rodicovske odporucanie, nie znamka dietata.
- Pridana jemna Pokemon tema: male sprite obrazky v kartach, farebne typy podla kategorie a cache-busting verzia `20260614-pokemon1`.

## 2026-06-22

- Nahradena Pokemon tema lokalne generovanymi hackovanymi/amigurumi zvieratkami v kartach.
- Odstranena zavislost na PokeAPI sprite obrazkoch a nastavena cache-busting verzia `20260622-crochet1`.
- Pridany reset link parameter `?reset=1`, ktory vymaze lokalne ulozene znamky v prehliadaci a otvori prazdny formular.
