import { defineConfig } from "vitepress";

import { metaData } from "./constants.js";
import head from "./head.js";


export default defineConfig({
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
  head,
  outDir: "_dist",
  themeConfig: {
    repo: "",
    logo: metaData.logo,
    color: '#f9a02c',
    social: {
      tel: '+7 (963) 979-02-04',
      email: 'me@starovdenis.com',
      instagram: 'starov',
      github: 'davay42'
    }
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 300000,
    },
  },
});
