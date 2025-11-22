import os
import subprocess

class Plugin:
    async def add_discord(self):
        # Pfad zum Steam-Userdata
        steam_user = os.getenv("HOME")
        shortcut_path = os.path.join(steam_user, ".steam", "steam", "userdata")

        # Discord Web als URL
        discord_url = "https://discord.com/app"

        # Startet Standardbrowser mit Discord
        subprocess.Popen(["xdg-open", discord_url])

        return {"status": "ok", "message": "Discord Web gestartet"}
