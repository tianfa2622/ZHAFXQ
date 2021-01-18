module.exports = {
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
