<template>
<div>
  <div class="container">
    <!-- <div class="lg:max-w-4xl mx-auto sm:max-w-md md:max-w-2xl"> -->

      		<!-- <div class="max-w-md sm:max-w-xl lg:max-w-6xl sm:px-8 lg:px-10 px-6 py-12"> -->
            <div class="flex flex-wrap mx-6">
              <div class="mx-8 mt-14 grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                <nuxt-link to="/blog/unit-test">
                    <div class="card shadow-lg rounded-md">
                      <img src="/testing.jpg" class="w-full rounded-t-md h-32 sm:h-48" alt="testing vue">
                      <div class="m-3 py-2">
                        <p class="text-gray-800 hover:text-indigo-400 lg:text-base text-sm text-center">
                          Belajar Unit Testing di Vuejs
                        </p>
                        <p class="text-gray-500 lg:text-base text-sm text-center pt-2">
                          Testing app sebelum production
                        </p>
                      </div>
                    </div>
                </nuxt-link>
              </div>
            </div>
          <!-- </div> -->
          
    <!-- </div> -->
  </div>
</div>
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

