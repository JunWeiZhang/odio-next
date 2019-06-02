const Vibrant = require("node-vibrant");
const Color = require("color");
const colorContrast = require("color-contrast");

const { ipcMain } = require("electron");

ipcMain.on("get-vibrant-colors", async (event, url) => {
  try {
    const vibrant = await Vibrant.from(url);

    vibrant.getPalette((e, palette) => {
      if (e) {
        console.log("has error: ", e);
        return event.sender.send("set-vibrant-colors", null);
      }

      const lightMuted = palette.LightMuted.getHex();
      const darkVibrant = palette.DarkVibrant.getHex();
      const vibrant = palette.Vibrant.getHex();
      const muted = palette.Muted.getHex();

      let lightVibrant2 = "";

      if (vibrant)
        lightVibrant2 = Color(lightMuted)
          .darken(0.1)
          .rgb()
          .string();

      const data = {
        darkMuted: palette.DarkMuted.getHex(),
        darkVibrant: palette.DarkVibrant.getHex(),
        lightMuted: palette.LightMuted.getHex(),
        lightVibrant: palette.LightVibrant.getHex(),
        muted: palette.Muted.getHex(),
        vibrant: palette.Vibrant.getHex(),
        lightVibrant2
      };

      event.sender.send("set-vibrant-colors", data);
    });
  } catch (e) {
    console.log(e);
    return event.sender.send("set-vibrant-colors", null);
  }
});
