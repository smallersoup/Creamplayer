const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",

  devServer: {
    proxy: {
      '/api': {
        target: 'http://music.163.com',
        changeOrigin: true,
      },
    },
  },
})
