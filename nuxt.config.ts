// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  modules: ['@formkit/nuxt', '@nuxtjs/tailwindcss'],
  devtools: { enabled: false },
})
