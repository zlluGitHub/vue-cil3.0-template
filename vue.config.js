module.exports = {
  chainWebpack: config => {
    // ie报错无效字符 添加该配置项 解决该问题
    config.module
      .rule('iview')
      .test(/iview.src.*?js$/)
      .use('babel')
      .loader('babel-loader')
      .end()
  },

  baseUrl: './', //vueConf.baseUrl, // 根域上下文目录

  // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
  outputDir: 'build',

  // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'assets',

  //入口文件名
  indexPath: 'index.html',
  
  // 设为false打包时不生成.map文件
  productionSourceMap: false,

  devServer: {
    port: 80,
    sockHost: 'http://127.0.0.0',
    disableHostCheck: true,
    open: true,
    host: "localhost",
    proxy: {
      '/api': {
        target: 'http://127.0.0.0',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    },

  },
  //输出打包文件目录
  outputDir: process.env.NODE_ENV === "development" ? 'devdist' : 'dist'
  // lintOnSave: false // 取消 eslint 验证
}
