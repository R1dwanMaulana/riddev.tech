<template>
    <div class="container p-5">
        <div class="lg:max-w-4xl mx-auto sm:max-w-md md:max-w-2xl">
            <div class="md:grid lg:grid grid-flow-col grid-cols-4 grid-rows-1 gap-8">
                <div>
                    <p class="title mt-3">Languages</p>
                    <ul>
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>TypeScript</li>
                    </ul>
                </div>
                <div>
                    <p class="title mt-3">Frontend</p>
                    <ul>
                        <li>Vue.js</li>
                        <li>Nuxt</li>
                        <li>React.js</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div>
                    <p class="title mt-3">Backend</p>
                    <ul>
                        <li>Firebase</li>
                        <li>Node.js</li>
                        <li>Laravel</li>
                    </ul>
                </div>
                <div>
                    <p class="title mt-3">Infrastructure</p>
                    <ul>
                        <li>Google Cloud</li>
                        <li>AWS</li>
                        <li>Vercel</li>
                        <li>Netlify</li>
                    </ul>
                </div>
            </div>

            <h1 class="title mt-5">
                Contact Me👌🏻
            </h1>
                <p>You can contact via email at <span class="text-red-500"><a href=" mailto:rdwanf49@gmail.com" target="_blank">rdwanf49@gmail.com</a></span>, or through the social media listed below :</p>
                <ul>
                    <li>Github : <span class="text-red-500 text-base"><a href="https://github.com/R1dwanMaulana" target="_blank">r1dwanmaulana</a></span></li>
                    <li>Linkedln : <span class="text-red-500 text-base"><a href="https://www.linkedin.com/in/ridwanms/" target="_blank">ridwanms</a></span></li>
                    <li>Twitter : <span class="text-red-500 text-base"><a href="https://www.twitter.com/in/ridvisible/" target="_blank">ridvisible</a></span></li>
                </ul>
        </div>
    </div>
</template>

<script>
export default {
    head: {
      title: 'Tentang - Ridwan Maulana',
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
