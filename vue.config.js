module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/sass/smart-grid.sass";`
      }
    }
  }
};
