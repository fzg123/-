import zf from '@/assets/min-img/img/27.png'
import zt from '@/assets/min-img/img/26.png'
import tk from '@/assets/min-img/img/25.png'
import jifen from '@/assets/min-img/img/24.png'

import js from '@/assets/min-img/img/34.png'
import yh from '@/assets/min-img/img/33.png'
import hb from '@/assets/min-img/img/32.png'
import pj from '@/assets/min-img/img/31.png'
export default {
    payData: {
        iconAndText: [
            {
                icon: zf,
                text: '待支付',
                path: '/myOrder/waitPay',
                state: 'especial'
            },
            {
                icon: zt,
                text: '代自提',
                path: '/noDevelopment',
                state: 'especial'
            },
            {
                icon: tk,
                text: '已退款',
                path: '/myOrder/alreadyRefund',
                state: 'especial'
            }, {
                icon: jifen,
                text: '积分订单',
                path: '/noDevelopment',
                state: 'especial'
            }
        ],
        totalText: '我的订单',
        link: {
            text: '查看全部订单>',
            path: '/myOrder',
            state: 'especial'
        }
    },
    functionSelect: {
        iconAndText: [
            {
                icon: js,
                text: '积分商城',
                path: '/integralMall'
            },
            {
                icon: yh,
                text: '优惠卷中心',
                path: '/myBoon',
                state: 'especial'
            },
            {
                icon: hb,
                text: '我的红包',
                path: '/myRedPacket'
            }, {
                icon: pj,
                text: '我的评价',
                path: '/noDevelopment'
            }
        ],
        totalText: '我的服务',

    }
}