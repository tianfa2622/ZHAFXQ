module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",

  outputDir: "dist",

  assetsDir: "assets",

  filenameHashing: false,

  lintOnSave: true,

  productionSourceMap: false,

  configureWebpack: {
    externals: {
      AMap: "AMap",
      AMapUI: "AMapUI"
    }
  },
  chainWebpack: config => {
    config.module
      .rule("swf")
      .test(/\.swf$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 10000
      });
  }
};
