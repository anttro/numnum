# NumNum

Numeral systems trainer PWA

**Demo:** [numnum.atroshin.ru](https://numnum.atroshin.ru)

## Features

- 10 numeral systems: Binary, Ternary, Balanced Ternary, Octal, Hexadecimal, Braille Decimal, Roman, Church Slavonic, Greek, Hebrew
- Two game modes: multiple choice and manual entry (numpad)
- Configurable number range, time limit (1s–30s or no limit), question count (5–100)
- Installable PWA with full offline support (theory content cached)
- Dark/light theme · Bilingual (English / Русский)
- In-app theory reference for each system

## Usage

Serve the directory with any HTTP server:

```
python3 -m http.server 8080
```

## Project structure

```
index.html       — Entry point
app.js           — Game logic and UI
numerals.js      — Numeral system converters and choice generator
styles.css       — Styles, dark/light theme
sw.js            — Service worker (PWA caching)
manifest.json    — PWA manifest
theory/          — Theory HTML files (10 systems × 2 languages)
```

## Supported systems

| System | Type | Range |
|---|---|---|
| Binary | Positional | 1–32768 |
| Ternary | Positional | 1–27 |
| Balanced Ternary | Positional | –27–27 |
| Octal | Positional | 1–4096 |
| Hexadecimal | Positional | 1–65536 |
| Braille Decimal | Positional | 0–9999 |
| Roman | Non-positional | 1–3999 |
| Church Slavonic | Non-positional | 1–9999 |
| Greek | Non-positional | 1–9999 |
| Hebrew | Non-positional | 1–9999 |

## Development

Theory HTML files live in `theory/`. After editing them, bump the version in `sw.js` to refresh the cache on next install.

## License

MIT
