import React from 'react'
import styles from './index.less'
import NearbyStoreItem from './NearbyStoreItem'
export default function NearbyStore(props) {
    const lis = props.nearbyStoreDatas.map((e, i) => (<NearbyStoreItem key={i} {...e} />));

    return (
        <div className={styles['nearby-store']}>
            <p className={styles['title']}>
                附近门店
            </p>
            <ul>
                {lis}
            </ul>
        </div>

    )
}
