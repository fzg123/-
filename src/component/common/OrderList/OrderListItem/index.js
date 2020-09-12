import React from 'react'
import styles from './index.less'
import joinImgSrc from '../../../../utils/joinImgSrc'
import { withRouter } from 'umi'
function OrderListItem(props) {
    const arr = ['待评价', '退款成功', '待收货', '待付款', '交易成功', '订单失效', '退款中']
    const imgSrc = joinImgSrc(props.fruit.fruitImagesUrl, props.fruit.fruitImagesCount !== 1);

    return (
        <li
            className={styles['order-list-item']}
            onClick={() => {
                props.history.push({
                    pathname: '/orderDetails',
                    state: {
                        orderId: props.orderId,
                        orderStatus: props.orderStatus,
                        orderCount: props.orderCount,
                        fruit: props.fruit,
                        deOrderId: props.deOrderId,
                        userId: props.userId,
                        address: props.address,
                        orderTime: props.orderTime,
                        shop: props.shop,
                        orderIntegral: props.orderIntegral,
                        count: props.orderCount,
                        oddTime: props.oddTime
                    }
                })
            }}
        >
            <div className={styles["top"]}>
                <div className={styles["left"]}>
                    订单编号: {props.orderId}
                </div>
                <div className={styles["right"]}>
                    {arr[props.orderStatus]}
                </div>
            </div>
            <div className={styles["bottom"]}>
                <img src={imgSrc} alt="" />
                <p>
                    实付: ￥<span className={styles['price']}>{props.fruit.fruitPrice}</span> (含运费: ￥0)
                </p>
            </div>
        </li>
    )
}
export default withRouter(OrderListItem);