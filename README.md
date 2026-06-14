# Stupava Day Trips Rating

Mobilna staticka web verzia zoznamu jednodennych vyletov zo Stupavy.

Funkcie:

- hodnotenie kazdej moznosti znamkou 1 az 5, kde 1 je najlepsia;
- lokalne ulozenie v telefone alebo prehliadaci;
- zdieľaci link s vyplnenymi znamkami v URL;
- kopirovatelny textovy suhrn;
- CSV export;
- filtre podla kategorie a hladanie.

## Lokalne spustenie

```powershell
python -m http.server 8080
```

Potom otvor:

`http://127.0.0.1:8080`

## Publikovanie

Projekt je pripraveny ako staticka stranka pre GitHub Pages. Nie je potrebny backend ani build krok.
