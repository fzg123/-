import React from 'react'
import styles from './index.css'
import ShopListItem from './ShopListItem'
// shopDatas
export default function ShopList(props) {
    const lis = props.shopDatas.map((e, i) => (<ShopListItem key={i} {...e} />))
    return (
        <ul className={styles['shop-list']}>
            {lis}
        </ul>
    )
}
