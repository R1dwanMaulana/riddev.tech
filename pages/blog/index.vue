<template>
  <!-- <div class="container p-5"> -->
    <!-- <div class="lg:max-w-4xl mx-auto sm:max-w-md md:max-w-2xl"> -->
      		<div class="max-w-md sm:max-w-xl lg:max-w-6xl sm:px-8 lg:px-10 px-6 py-12">
            <div class="flex flex-wrap ml-2">
                <nuxt-link to="/blog/unit-test">
                  <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
                      <div class="p-2">
                        <h4 class="lg:text-base md:text-base text-sm font-medium leading-tight text-gray-800 pt-1 hover:text-pink-600">Belajar Unit Testing di Vuejs</h4>
                        <p class="text-gray-500 lg:text-sm md:text-sm text-xs leading-tight pt-1">Testing app sebelum production</p>
                      </div>
                      <img class="lg:h-48 lg:w-44 md:h-44 md:w-44 h-44 w-36 flex-shrink-0 object-cover" src="/testing.jpg" alt="cover">
                  </div>  
                </nuxt-link>
            </div>
          </div>
    <!-- </div> -->
  <!-- </div> -->
</template>

<script>
export default{
  head: {
      title: 'Blog - Ridwan Maulana',
      meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
          { name: "format-detection", content: "telephone=no" },
          { name: "author", content: "Riddev"},
          { name: "description", content: "A personal site of Ridwan Maulana"},
          { property: "og:title", content: "Riddev"},
          { property: "og:description", content: "A personal site of Ridwan Maulana"},
          { property: "og:image", content: "/profile.jpg"},
          { property: "og:site_name", content: "Riddev"},
          { property: "og:type", content: "website"},
          { property: "og:url", content: "https://riddev.tech"}
      ],
    },
}
</script>

