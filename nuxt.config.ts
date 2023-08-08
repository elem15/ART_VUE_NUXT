// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    'yandex-metrika-module-nuxt3'
  ],
  yandexMetrika: {
    id: '61602646',
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  },
  image: {
    inject: true,
    quality: 80,
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
