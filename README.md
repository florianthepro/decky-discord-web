# Decky Plugin Backup

Dieses Plugin ermöglicht es, Decky-Plugins und deren Einstellungen zu sichern und wiederherzustellen.  
Es ist besonders nützlich, wenn du dein Steam Deck neu aufsetzt oder deine Plugins zwischen Geräten übertragen möchtest.

## ✨ Features
- Backup aller installierten Decky-Plugins und deren Konfigurationen
- Wiederherstellung aus einer YAML-Datei
- Frei wählbarer Speicherort für die Backup-Datei
- Integration in den Decky Loader (Frontend + Backend)

## 🚀 Installation
1. Stelle sicher, dass der **Decky Loader** installiert ist.
2. Lade dieses Repository herunter oder installiere es direkt über den Decky Loader Store (nach Merge in die Plugin Database).
3. Das Plugin erscheint im Decky Loader Menü.

## 🔧 Nutzung
- Backup erstellen:
  ```bash
  python3 backend/update_backup_restore.py backup --all --path /pfad/zur/datei.yaml
