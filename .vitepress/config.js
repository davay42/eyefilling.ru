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
      email: 'davay@ooley.ru',
      vk: 'ooley42',
      instagram: 'ooley42',
      github: 'ooley42'
    }
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 300000,
    },
  },
});
