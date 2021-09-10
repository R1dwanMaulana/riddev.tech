<template>
  <div class="container1 p-5">
    <div class="lg:max-w-4xl mx-auto sm:max-w-md md:max-w-3xl">
      <article class="detail-card">
        <img :src=article.img alt="" class="w-full max-h-96 object-cover rounded mb-4">
        <h1 class="title">
          {{ article.title }}
        </h1>
        <!-- <h2 class="mt-3">
          By: {{ article.author }}
        </h2> -->
        <p class="pb-7 mr-3 text-gray-500 text-sm pt-3">
          Dibuat pada {{ formatDate(article.createdAt) }} | Diperbarui pada {{ formatDate(article.updatedAt) }}
        </p>
        <nuxt-content :document="article" />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('id', options)
    }
  },
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

<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight:normal;
  }
  /* .detail-card {
    position: relative;
  } */
  .container1 {
    display: block;
  }
</style>
