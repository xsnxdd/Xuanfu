


module.exports = {
    configureWebpack: {
       devServer:{
        proxy:{
            '/api':{
                target:'http://1.116.64.64:5004/',
                changeOrigin:true
            }
        }
       }
    }
  }



// module.exports = {
//     chainWebpack: config => {
//      }, devServer: {
//          proxy:
//          {
//              '/api':
//              {
//                  target: 'http://1.116.64.64:5004/',  
//                  changeOrigin: true,
//              },
//          },
//      }
//  }