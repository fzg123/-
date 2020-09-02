import React from 'react'
import styles from './index.css'
import FSHeader from './FSHeader'
import FSShopList from './FSShopList'
import Center from '../../../component/common/Center'
export default function FlashSale(props) {
    return (
      

            <div className={styles['flash-sale']}>
                <FSHeader />
                <FSShopList TakeTurnsWidth={props.TakeTurnsWidth} />
            </div>
       
    )
}
