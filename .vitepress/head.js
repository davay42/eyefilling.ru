import { metaData } from "./constants.js";

const head = [


  ["script", { async: true, defer: true, "data-website-id": "7d301c8a-7fce-4644-927a-38f5ec57d0ef", src: "https://stat.defucc.me/script.js" }],


  ["meta", { name: "author", content: metaData?.author }],
  ["meta", { name: "keywords", content: metaData?.tags }],
  ["link", { rel: "icon", type: "image/svg+xml", href: metaData.icon }],
  [
    "meta",
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "white-translucent",
    },
  ],
  ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
  ["meta", { name: "HandheldFriendly", content: "True" }],
  ["meta", { name: "MobileOptimized", content: "320" }],
  ["meta", { name: "theme-color", content: "#f9a02c" }],

  ["meta", { name: "twitter:card", content: "summary_large_image" }],
  ["meta", { name: "twitter:site", content: metaData?.site }],
  ["meta", { name: "twitter:title", value: metaData?.title }],
  ["meta", { name: "twitter:description", value: metaData.description }],
  //@ts-ignore
  ["meta", { name: "twitter:image", content: metaData?.image }],

  ["meta", { property: "og:type", content: "website" }],
  ["meta", { property: "og:locale", content: metaData.locale }],
  ["meta", { property: "og:site", content: metaData.site }],
  ["meta", { property: "og:site_name", content: metaData.title }],
  ["meta", { property: "og:title", content: metaData.title }],
  //@ts-ignore
  ["meta", { property: "og:image", content: metaData?.image }],
  ["meta", { property: "og:description", content: metaData.description }],
  ['link', { rel: 'preload', as: 'font', type: "font/woff2", href: "/fonts/commissioner-v3-latin_cyrillic-ext_cyrillic-regular.woff2" }],
  ['link', { rel: 'preload', as: 'font', type: "font/woff2", href: "/fonts/commissioner-v3-latin_cyrillic-ext_cyrillic-700.woff2" }],

];

export default head;
