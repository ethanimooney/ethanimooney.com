import "../assets/main.scss";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "lightTheme",
    themes: {
      lightTheme: {
        dark: false,
        colors: {
          blueGray: "#73869f",
          darkBlue: "#14262f",
          gray: "#c2c2c2",
          orange: "#f78166",
          green: "#7c9d88",
        },
      },
    },
  },
});
