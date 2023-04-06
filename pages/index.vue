<template>
  <div class="container p-4">
    <div class="lg:max-w-4xl mx-auto sm:max-w-md md:max-w-2xl">
      <h1 class="title mb-5">
        Hey, I'am Ridwan Maulana <img src="../static/wave.png" class="inline" alt="" height="35" width="35">
      </h1>

      <p class="desc mb-3 text-gray-500">
        I'am a software engineer. I like frontend developer, the frameworks that I often use are vuejs and reactjs. 
      </p>

      <h1 class="title mt-14">
        Latest Projects
      </h1>
      <div class="rounded-lg overflow-hidden m-2 ">
        <div class="py-4 justify-around flex">
          <img src="/mobile (7).png" class="w-32 h-64" alt="">
          <div class="px-4">
            <p class="font-bold text-md">Cari Emot App</p>
            <p class="text-xs text-gray-500">Aplikasi untuk mencari emot</p>
            <div class="flex mt-5 items-center">
            <p class="text-xs text-gray-500 font-bold pr-2">build with</p>
            <img class="w-6" src="/React-icon.svg.png" alt="">
            </div>
            <button class="mt-2 bg-blue-300 py-1 px-3 text-white text-sm font-bold rounded-md"><a href="https://cari-emot.vercel.app" target="_blank">view</a></button>
          </div>
        </div>
      </div>
      <div class="rounded-lg overflow-hidden m-2 ">
        <div class="py-4 justify-around flex">
          <img src="/mobile (5).png" class="w-32 h-64" alt="">
          <div class="px-4">
            <p class="font-bold text-md">Movie App</p>
            <p class="text-xs text-gray-500">Aplikasi untuk mencari film</p>
            <div class="flex mt-5 items-center">
            <p class="text-xs text-gray-500 font-bold pr-2">build with</p>
            <img class="w-6" src="/React-icon.svg.png" alt="">
            </div>
            <button class="mt-2 bg-blue-300 py-1 px-3 text-white text-sm font-bold rounded-md"><a href="https://moviezapp.vercel.app" target="_blank">view</a></button>
          </div>
        </div>
      </div>
      <div class="rounded-lg overflow-hidden m-2 ">
        <div class="py-4 justify-around flex">
          <img src="/mobile (3).png" class="w-32 h-64" alt="">
          <div class="px-4">
            <p class="font-bold text-md">Qur'an-id</p>
            <p class="text-xs text-gray-500">Aplikasi Al-Quran dari browser</p>
            <div class="flex mt-5 items-center">
            <p class="text-xs text-gray-500 font-bold pr-2">build with</p>
            <img class="w-6" src="/nuxt-icon.svg" alt="">
            </div>
            <button class="mt-2 bg-blue-300 py-1 px-3 text-white text-sm font-bold rounded-md"><a href="https://quran-id.vercel.app" target="_blank">view</a></button>
          </div>
        </div>
      </div>
      <div class="rounded-lg overflow-hidden m-2 ">
        <div class="py-4 justify-around flex">
          <img src="/mobile (4).png" class="w-32 h-64" alt="">
          <div class="px-4">
            <p class="font-bold text-md">Kosbot kit</p>
            <p class="text-xs text-gray-500">Aplikasi pencarian harga kost</p>
            <div class="flex mt-5 items-center">
            <p class="text-xs text-gray-500 font-bold pr-2">build with</p>
            <img class="w-6" src="/nuxt-icon.svg" alt="">
            </div>
            <button class="mt-2 bg-blue-300 py-1 px-3 text-white text-sm font-bold rounded-md"><a href="https://kosbot-kit.web.app" target="_blank">view</a></button>
          </div>
        </div>
      </div>
      
      <!-- <div class="rounded-lg overflow-hidden hover:shadow-md m-2 border border-gray-200">
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
      </div> -->

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
