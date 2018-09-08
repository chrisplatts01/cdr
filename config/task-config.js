module.exports = {
  html        : true,
  images      : true,
  fonts       : true,
  static      : true,
  svgSprite   : true,
  ghPages     : true,
  stylesheets : true,

  javascripts: {
    entry: {
      app: ["./app.js"]
    },
    provide: {
      $: "jquery",
      jQuery: "jquery"
    }
  },

  browserSync: {
    server: {
      baseDir: 'public'
    }
  },

  production: {
    rev: true
  }
}
