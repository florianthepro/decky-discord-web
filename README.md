# Decky Discord Web

Dieses Plugin fügt die Discord Webversion als "Spiel" hinzu, sodass du Discord direkt über den Decky Loader starten kannst.

## ✨ Features
- Startet die Discord Webversion im Standardbrowser
- Optional kann ein Steam-Shortcut erstellt werden, damit Discord in der Bibliothek als Spiel erscheint
- Einfache Bedienung über einen Button im Decky Loader

## 🚀 Installation
1. Stelle sicher, dass der **Decky Loader** installiert ist.
2. Lade dieses Repository herunter oder installiere es direkt über den Decky Loader Store (nach Merge in die Plugin Database).
3. Das Plugin erscheint im Decky Loader Menü.

## 🔧 Nutzung
- Öffne den Decky Loader.
- Gehe ins Menü **Discord Web**.
- Klicke auf **Discord starten** → die Webversion öffnet sich im Browser.

## 🛠 Entwicklung
- Backend: `backend/main.py` (öffnet Discord Web über `xdg-open`)
- Frontend: `frontend/index.tsx` (UI mit Button)
- Metadaten: `plugin.json`

## 📦 Contributing
Pull Requests sind willkommen! Bitte nutze die offiziellen Templates der [decky-plugin-database](https://github.com/SteamDeckHomebrew/decky-plugin-database).
