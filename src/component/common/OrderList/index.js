import React from 'react'
import OrderListItem from './OrderListItem'
import styles from './index.css'
export default function OrderList(props) {
    const lis = props.datas.map((e, i) => {
        return (<OrderListItem key={i} {...e}></OrderListItem>);
    })
    console.log(lis)
    return (
        <ul className={styles['order-list']}>
            {lis}
        </ul>
    )
}
