// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY,
  },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@formkit/nuxt', '@nuxtjs/tailwindcss'],
  devtools: { enabled: false },
})
