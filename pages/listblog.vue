<template>
  <div class="container p-5">
    <div class="lg:max-w-4xl mx-auto sm:max-w-md md:max-w-2xl">
      <nuxt-link to="/blog/unit-test">
        <div class="max-w-sm rounded-md overflow-hidden hover:shadow-xl border border-blue-300 m-5">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Belajar Unit Testing di Vuejs
            </div>
            <p class="text-gray-700 text-base">
              Testing app sebelum production 🚀
            </p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default{
  head: {
    title: 'Berbagi Artikel',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'blog page' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/man.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Poppins:wght@200;300;400;500;600&display=swap'},
    ]
  },
}
</script>

