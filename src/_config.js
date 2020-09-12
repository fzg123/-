
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
//当离开支付里面时  弹出的提示框 的 内容
export const leavePay = (props, state, ctx, callback, message) => {
    return {
        title: '提示',
        children: '您还没支付, 确定要离开吗',
        afterEnterCallback: () => {
            message.info('支付失败, 订单已添加到我的订单, 超过指定时间之后, 订单将失效', 5)
            callback(true);

            ctx.setFlagShowModal(null);  // 同时关掉蒙层
        }
    }
}

// export const storeId = {
//     id: 1,

// }

// 首页轮播图数据

export const lunBoData = [
    {
        fruitId: 6,
        fruitImagesCount: 1,
        fruitInventedPrice: 8.1,
        fruitPrice: 9.1,
        fruitImagesUrl: "/拼盘3.jpg",
        fruitName: "拼盘产品3",
        fruitText: "这个拼盘第三好吃",
        fruitIsTime: 0
    },
    {
        fruitId: 9,
        fruitImagesCount: 1,
        fruitInventedPrice: 23.1,
        fruitPrice: 14.1,
        fruitImagesUrl: "/拼盘6.jpg",
        fruitName: "拼盘产品6",
        fruitText: "这个拼盘第",
        fruitIsTime: 0,
    },
    {
        fruitId: 23,
        fruitImagesCount: 4,
        fruitInventedPrice: 15.8,
        fruitPrice: 11.9,
        fruitImagesUrl: "/水蜜桃.jpg",
        fruitName: "水蜜桃",
        fruitText: "xxxxxx",
        fruitIsTime: 0,
    }
]
/**
 * 添加购物车操作
 * @param {*} e 事件对象
 * @param {*} data 商品信息
 * @param {*} count 数量
 */
export const addShopingCart = (e, { fruitId, userId }, fetch, callback, count = 1) => {
    if (e != null) {
        e.preventDefault();
        e.stopPropagation();
    }
    (async function () {
        const result = await fetch({
            fruitId: fruitId,
            userId: userId,
            count
        })
        if (result.status === 'success') {
            callback(true);
            // message.success('添加购物车成功');
        }
    }())
}