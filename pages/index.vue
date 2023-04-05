<template>
  <div class="container p-5">
    <div class="lg:max-w-4xl mx-auto sm:max-w-md md:max-w-2xl">
      <h1 class="title mb-5">
        Hey, I'am Ridwan Maulana <img src="../static/wave.png" class="inline" alt="" height="35" width="35">
      </h1>

      <p class="desc mb-3 text-gray-500">
        I'am a software engineer. I like frontend developer, the frameworks that I often use are vuejs and nuxtjs. 
      </p>

      <h1 class="title mt-14">
        Latest Projects
      </h1>

      <div class="rounded-lg overflow-hidden hover:shadow-md m-2 border border-gray-200">
        <a href="https://www.quran-id.me" target="_blank">
        <div class="px-6 py-4">
          <div class="text-gray-900 font-medium text-xl mb-2">Qur'an-id</div>
          <p class="text-gray-500 text-base">
            Al-Qur'an app from web browser + support install(app native).
          </p>
        </div>
        </a>
      </div>
      <div class="rounded-lg overflow-hidden hover:shadow-md m-2 border border-gray-200">
        <a href="https://info-liga.web.app" target="_blank">
        <div class="px-6 py-4">
          <div class="text-gray-900 font-medium text-xl mb-2">Football league information</div>
          <p class="text-gray-500 text-base">
            Football match information application.
          </p>
        </div>
        </a>
      </div>
      <div class="rounded-lg overflow-hidden hover:shadow-md m-2 border border-gray-200">
        <a href="https://search-repo.netlify.app" target="_blank">
        <div class="px-6 py-4">
          <div class="text-gray-900 font-medium text-xl mb-2">Search repo github</div>
          <p class="text-gray-500 text-base">
            searching username github
          </p>
        </div>
        </a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  head: {
      title: 'Situs pribadi Ridwan Maulana',
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.title {
  font-family:
    'Poppins', sans-serif, 'Montserrat';
  display: block;
  font-weight: 600;
  font-size: 28px;
  color:rgb(8, 8, 8);
  /* letter-spacing: 1px; */
}

</style>
