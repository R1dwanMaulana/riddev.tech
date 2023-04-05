<template>
  <div class="container p-5">
    <div class="lg:max-w-4xl mx-auto sm:max-w-md md:max-w-2xl">
      <h1 class="title mb-5">
        Hey, I'am Ridwan Maulana <img src="../static/wave.png" class="inline" alt="" height="35" width="35">
      </h1>

      <p class="desc mb-3 text-gray-500">
        I'am a software engineer. I like frontend developer, the frameworks that I often use are vuejs and nuxtjs.
      </p>

    <div class="flex items-center bg-blue-500 rounded-lg text-white text-sm font-bold px-4 py-3" role="alert">
      <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
      <p>I am a student in my final semester, and interested in technology and startups, like to find<br/> new things about programming and cloud computing. Want to know more, <br/> please contact me at this e-mail.</p>
      
      <a href="mailto:rdwanf49@gmail.com">
        <button class="bg-transparent hover:bg-blue-700 shadow-md text-blue-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded-lg mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>Email
        </button>
        </a>
    </div>

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
