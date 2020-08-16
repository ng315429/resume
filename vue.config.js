module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/resume/' : '/',
  outputDir: 'docs',
  devServer: {
    overlay: false,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/style.scss";`,
      },
    },
  },
};
