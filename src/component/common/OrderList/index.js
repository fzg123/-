import React from 'react'
import OrderListItem from './OrderListItem'
import styles from './index.css'
export default function OrderList(props) {
    const lis = props.datas.map(e => (<OrderListItem {...e} key={e.orderNumber}></OrderListItem>))
    return (
        <ul className={styles['order-list']}>
            {lis}



        </ul>
    )
}
