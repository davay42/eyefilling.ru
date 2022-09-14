import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Pages from "vite-plugin-pages";
import { extendRoutes } from "vitepress-pages";
import generateSitemap from 'vite-plugin-pages-sitemap'
import Unocss from 'unocss/vite'
import { presetUno, presetIcons, transformerDirectives, extractorSplit } from "unocss";
import extractorPug from '@unocss/extractor-pug'



export default defineConfig({
  server: {
    port: 3088,
  },
  plugins: [
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
      ],
      imports: ["vue"],
    }),
    Pages({
      dirs: [
        { dir: ".", baseRoute: "." },
      ],
      exclude: ['**/node_modules/**/*.*', '**/!(index).md'],
      extensions: ['md'],
      ...extendRoutes(),
      onRoutesGenerated: routes => (generateSitemap({ routes, hostname: 'https://eyefilling.ru/' })),
    }),
    Components({
      dirs: [".vitepress/theme/components"],
      extensions: ["vue", "ts"],
      directoryAsNamespace: true,
      globalNamespaces: ["global"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/node_modules/, /\.git/],
    }),
    Unocss({
      presets: [
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
        presetUno()
      ],
      transformers: [
        transformerDirectives(),
      ],
      extractors: [
        extractorPug(),
        extractorSplit,
      ],
    }),
  ],
  optimizeDeps: {
    include: ["vue", "@vueuse/core"],
  },
  ssr: {
    noExternal: ["ol"],
  },
});
