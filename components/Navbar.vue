<template>
    <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 mb-20 mt-8">
    <div class="flex-1 flex justify-between items-center">
      <img class="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="../static/profile.jpg">
    </div>

  <button>
        <label for="menu-toggle" class="cursor-pointer lg:hidden block focus:outline-none"><img :src="toggleIcon" @click="menuIcon = !menuIcon" class="hover:bg-gray-200 rounded-sm"></label>
  </button>
  <input class="hidden" type="checkbox" id="menu-toggle" />

  <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
    <nav>
      <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
        <li><nuxt-link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/">Home</nuxt-link></li>
        <li><nuxt-link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/project">Project</nuxt-link></li>
        <li><nuxt-link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/blog">Blog</nuxt-link></li>
        <li><nuxt-link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/about">About</nuxt-link></li>
      </ul>
    </nav>
  </div>

  </header>
</template>

<script>
export default {
  data() {
    return {
      menuIcon: false
    }
  },
  computed: {
    toggleIcon() {
        if(this.menuIcon) {
            return require('../static/close.svg')
        } else {
            return require('../static/menu.svg')
        }
    }
  }
}
</script>

<style scoped>
      #menu-toggle:checked + #menu {
        display: block;
      }
      .nuxt-link-exact-active {
        color: #2563EB;
      }
</style>
