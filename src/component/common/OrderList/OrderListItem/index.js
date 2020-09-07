import React from 'react'
import styles from './index.less'
import joinImgSrc from '../../../../utils/joinImgSrc'
export default function OrderListItem(props) {
    const arr = ['待评价', '退款成功', '待收货', '待付款', '交易成功', '订单失效', '退款中']
    const imgSrc = joinImgSrc(props.fruit.fruitImagesUrl, props.fruit.fruitImagesCount !== 1);
    return (
        <li className={styles['order-list-item']}>
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
