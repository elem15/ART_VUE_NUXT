// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [{ name: 'darkreader-lock' }]
    }
  },
  devtools: { enabled: true, vscode: {} },
  modules: [
    '@nuxtjs/eslint-module',
    ['@nuxtjs/eslint-module', {
      cache: true,
      include: ['**/*.{js,jsx,ts,tsx,vue}'],
      exclude: ['**/node_modules/**', 'dist', 'build'],
      eslintPath: 'eslint',
      formatter: 'stylish',
      lintOnStart: true,
      emitWarning: true,
      emitError: true,
      failOnWarning: false,
      failOnError: false
    }],
    '@nuxt/image',
    '@nuxt/devtools',
    'nuxt-swiper',
    '@nuxtjs/supabase',
    'yandex-metrika-module-nuxt3',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  yandexMetrika: {
    id: '61602646',
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  },
  image: {
    inject: true,
    loading: 'lazy',
    quality: 100,
    format: ['webp', 'jpg', 'png', 'svg'],
    domains: ['nuxtjs.org', 'vercel.app', 'umlxyrmekufynqaatflf.supabase.co'],
    dir: 'public'
  },
  css: ['~/assets/css/global.css', '~/assets/css/normalize.css', '~/assets/css/accordion.css'],
  swiper: {
    // Swiper options
    // ----------------------
    // prefix: 'Swiper'
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  supabase: {
    url: process.env.SUPABASE_URL as string,
    key: process.env.SUPABASE_KEY as string,
    redirect: false
  }
})
