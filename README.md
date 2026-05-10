# Avifauna Kartierung — Portfolio Website

Statische Portfolio-Website für GitHub Pages.

## Dateien

```
index.html   — Hauptseite
style.css    — Styles
script.js    — Scroll-Animationen
README.md    — Diese Datei
```

## Deployment auf GitHub Pages

### 1. Repository erstellen
- Gehe zu github.com → "New repository"
- Name: `deinname.github.io` (für User-Site) ODER beliebiger Name (für Project-Site)
- Visibility: Public
- Ohne README initialisieren

### 2. Dateien hochladen
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DEINNAME/DEINREPO.git
git push -u origin main
```

### 3. GitHub Pages aktivieren
- Repository → Settings → Pages
- Source: "Deploy from a branch"
- Branch: main / (root)
- Save

### 4. Website aufrufen
- User-Site: `https://deinname.github.io`
- Project-Site: `https://deinname.github.io/repo-name`

## Anpassungen

### E-Mail ändern
In `index.html` suchen nach:
```
ihre@email.de
```
Ersetzen mit deiner echten E-Mail.

### Name anpassen
- Seiten-Titel: `<title>` Tag in index.html
- Footer: `© 2026 Maltinho`
- Nav-Logo: `M.`

### Farben anpassen
In `style.css` unter `:root` die CSS-Variablen ändern:
- `--forest`: Hauptfarbe (Dunkelgrün)
- `--highlight`: Akzentfarbe (Goldbraun)
- `--cream`: Hintergrund

### Eigene Domain (optional)
- DNS: CNAME-Record auf `deinname.github.io`
- Repository → Settings → Pages → Custom domain eintragen
- Datei `CNAME` mit deiner Domain erstellen
