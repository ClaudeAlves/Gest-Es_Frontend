const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '',
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
})
