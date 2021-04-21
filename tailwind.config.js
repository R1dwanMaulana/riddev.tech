module.exports = {
    theme: {},
    variants: {},
    plugins: [],
    purge: {
      content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js',
      ]
    },
    fontFamily: {
        sans: ['Poppins', 'sans-serif'],
    },
    options: {
        fix : true
    }
}