module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://buxueyeba.admin.mogeek.cn',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    },
    // pwa: {
    //     iconPaths: {
    //       favicon32: 'favicon.ico',
    //       favicon16: 'favicon.ico',
    //       appleTouchIcon: 'favicon.ico',
    //       maskIcon: 'favicon.ico',
    //       msTileImage: 'favicon.ico'
    //     }
    //   }
    
}