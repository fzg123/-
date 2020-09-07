// ref: https://umijs.org/config/
export default {
    dva: {},
    antd: {

    },
    history: {
        type: 'hash'
    },
    proxy: {
      
        // '/api': {
        //     target: 'http://localhost:8888',
        //     changeOrigin: true
        // }
    },
    chainWebpack(memo, { env, webpack, createCSSRule }) {
       
      }
}
