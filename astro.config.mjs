import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    ssr: {
      external: ["svgo"],
    }
  },
  server: {
    port: 8000
  },
  site: 'https://adexot.github.io'
});
