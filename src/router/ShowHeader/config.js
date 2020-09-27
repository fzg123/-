import { leavePay } from '../../_config'
import { message } from 'antd'
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
        { pathRegexp: /^\/submitOrder/, path: '/submitOrder' }
    ]
}