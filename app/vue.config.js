module.exports = {
    //配置Ppostcss-pxtorem
    css: {
      loaderOptions: {
        postcss: { 
          // 这里的选项会传递给 postcss-loader
          plugins: [
            require('postcss-pxtorem')({ 
              rootValue: 37.5,//效果的宽度/10
              unitPrecision: 5,
              propList: ['*'],
              selectorBlackList: [],
              replace: true,
              mediaQuery: false,
              minPixelValue: 0,
              exclude: /node_modules/i
            })
          ]
        }
      }
    },
    //配置代理
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
            }
        }
    }
 }