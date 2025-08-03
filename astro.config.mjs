// @ts-check
import { defineConfig } from 'astro/config';


import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://arge2004.github.io",
  base: "portfolio-web-developer", // importante para rutas en GitHub Pages
});