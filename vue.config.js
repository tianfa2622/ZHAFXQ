module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",

  outputDir: "dist",

  assetsDir: "assets",

  filenameHashing: false,

  lintOnSave: false,

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
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://pm2.winvers.com/zhnfxq",
        // target: "http://192.168.1.17:8081",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
