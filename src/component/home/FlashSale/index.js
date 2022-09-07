import React, { useState } from 'react'
import styles from './index.css'
import FSHeader from './FSHeader'
import FSShopList from './FSShopList'
export default function FlashSale(props) {
    const [characteristic, forceUpdate] = useState({});
    return (
        <div className={styles['flash-sale']}>
            <FSHeader onUpdata={() => forceUpdate({})} />
            <FSShopList characteristic={characteristic} TakeTurnsWidth={props.TakeTurnsWidth} />
        </div>

    )
}
