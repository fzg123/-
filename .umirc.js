
// ref: https://umijs.org/config/
export default {
    dva: {},
    antd: {

    },
    history: {
        type: 'browser'
    },
    proxy: {
        // '/user': {
        //     target: 'http://localhost:8888',
        //     changeOrigin: true
        // },
        // '/fruitgoods': {
        //     target: 'http://localhost:8888',
        //     changeOrigin: true
        // },
        // '/shopping/selectUserShopping': {
        //     target: 'http://localhost:8888',
        //     changeOrigin: true
        // }
        '/api': {
            target: 'http://localhost:8888',
            changeOrigin: true
        }
    }
}
