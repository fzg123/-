export default {
    intercept: [
        { pathRegexp: /^\/myOrder/, path: '/myOrder' }
        ,
        { pathRegexp: /^\/myBoon/, path: '/myBoon' }
        ,
        {
            pathRegexp: /^\/orderAccomplish/, path: '/orderAccomplish'
        },
        {
            pathRegexp: /^\/pay/,
            path: '/pay',
            beforeLeave: (ctx, props, callback) => {
                ctx.setFlagShowModal(leavePay(props, null, ctx, callback, message));
            },
            target: '/shoppingCart'
        },
        // {
        //     pathRegexp: /^\/addressManage\/edit/, path: '/addressManage/edit', target: '/addressManage'
        // },
        {
            pathRegexp: /^\/addressManage\/addAddress/,
            path: '/addressManage/addAddress',
            beforeLeave: (ctx, props, callback) => {
                ctx.setFlagShowModal({
                    title: '提示',
                    children: '离开此页面可能会造成你输入的数据丢失, 确认要离开吗',
                    afterEnterCallback: () => {
                        props.history.goBack();
                        ctx.setFlagShowModal(null);  // 同时关掉蒙层
                    }
                });
            }
        }
    ]
}