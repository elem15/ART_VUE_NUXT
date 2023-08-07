// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true, vscode: {} },
  modules: [
    // Simple usage
    '@nuxtjs/eslint-module',

    // With options
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
    'nuxt-swiper'
  ],
  image: {
    inject: true,
    quality: 80,
    format: ['webp', 'jpg', 'png', 'svg'],
    domains: ['umlxyrmekufynqaatflf.supabase.co'],
    dir: 'public'
  },
  css: ['~/assets/css/global.css', '~/assets/css/normalize.css'],
  swiper: {
    // Swiper options
    // ----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  }
})
