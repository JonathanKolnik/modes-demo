import type { Preview } from "@storybook/react";

import { withThemeByClassName } from "@storybook/addon-styling";

/* TODO: update import to your tailwind styles file */
import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
        solarized: "solarized",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
