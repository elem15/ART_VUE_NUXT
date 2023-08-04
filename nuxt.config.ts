// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // Simple usage
    '@nuxtjs/eslint-module',

    // With options
    ['@nuxtjs/eslint-module', {
      cache: true,
      include: [`src/**/*.{js,jsx,ts,tsx,vue}`],
      exclude: ['**/node_modules/**', 'dist', 'build'],
      eslintPath: 'eslint',
      formatter: 'stylish',
      lintOnStart: true,
      emitWarning: true,
      emitError: true,
      failOnWarning: false,
      failOnError: false
    }]
  ]
});
