<template>
  <div class="container p-5">
    <div class="lg:max-w-4xl mx-auto sm:max-w-md md:max-w-2xl">
      <h1 class="title mb-5">
        Hey, I'am Ridwan Maulana <img src="../static/wave.png" class="inline" alt="" height="35" width="35">
      </h1>

      <p class="desc mb-3 text-gray-500">
        I'am a Software Developer and cloud computing enthusiast. Student at Informatics Engineering, <br/><strong>University Of Islam Malang.</strong>
      </p>

      <div class="bg-blue-100 border-l-4 rounded border-blue-500 text-white-700 p-4 mb-3" role="alert">
        <p class="font-bold">About Me 👨🏻‍🎓</p>
        <p class="surel">I am a student in my final semester, and interested in technology and startups,<br/>like to find new things about programming and cloud computing. <br/> Want to know more, please contact me at this e-mail 👇🏻</p>
        <a href="mailto:rdwanf49@gmail.com">
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>Email
        </button>
        </a>
      </div>

      <h1 class="title mt-14">
        Latest Projects
      </h1>

      <div class="rounded-lg overflow-hidden hover:shadow-xl shadow-md border border-transparent hover:bg-gray-200 m-2">
        <a href="https://quran-id.vercel.app" target="_blank">
        <div class="px-6 py-4">
          <div class="text-gray-900 font-medium text-xl mb-2">Qur'an-id</div>
          <p class="text-gray-500 text-base">
            Al-Qur'an app from web browser + support install(app native).
          </p>
        </div>
        </a>
      </div>
      <div class="rounded-lg overflow-hidden hover:shadow-xl shadow-md border border-transparent hover:bg-gray-200 m-2">
        <a href="https://info-liga.web.app" target="_blank">
        <div class="px-6 py-4">
          <div class="text-gray-900 font-medium text-xl mb-2">Football league information</div>
          <p class="text-gray-500 text-base">
            Football match information application.
          </p>
        </div>
        </a>
      </div>
      <div class="rounded-lg overflow-hidden hover:shadow-xl shadow-md border border-transparent hover:bg-gray-200 m-2">
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
export default {}

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
