<template>
  <div class="container1 p-5">
    <div class="lg:max-w-4xl mx-auto sm:max-w-md md:max-w-2xl">
      <article class="detail-card">
        <h1 class="title">
          {{ article.title }}
        </h1>
        <h2 class="mt-3">
          By: {{ article.author }}
        </h2>
        <p class="pb-4 mr-3 text-gray-500">
          Post last updated: {{ formatDate(article.updatedAt) }}
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
  }
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
