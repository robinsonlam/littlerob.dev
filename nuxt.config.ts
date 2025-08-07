// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@compodium/nuxt'
  ],
  css: ["~/assets/css/main.css"],
  fonts: {
    families: [
      { name: 'Pixelify Sans', provider: 'google' }
    ]
  }
})