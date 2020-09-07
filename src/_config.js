// 功能没有开发 跳转的路径
export const noDevelopment = '/noDevelopment';

// 没有登录情况下，需要拦截的路径
export const intercept = ['/myRedPacket',
    '/integralMall',
    '/myOrder',
    '/recharge',
    '/myBoon',
    '/addressManage'
];
// 主域名

export const host = 'http://zaima.cool:8888';

// 图片的网络地址主要的前缀

export const imgSrcRoot = host + '/fruitImages';


// 没有登录情况下,进入需要登录才能看的页面时,提示框里面显示的内容
export const notLoginShowData = (props, state, ctx) => {
    return {
        title: '提示',
        children: '您还没有登录，是否跳转到登录页面',
        afterEnterCallback: () => {
            props.history.push({
                pathname: '/login',
                state
            });
            ctx.setFlagShowModal(null);  // 同时关掉蒙层
        }
    }
}

export const storeId = {
    id: 1,
    
}
