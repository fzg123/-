import React from 'react'
import styles from './index.less'
import img from '../../../../assets/min-img/img/70.png'
/**
* props: {
           storeName: "长沙上河国际店",
           distance: 17.97,
           address: '上河国际c1栋22号'
       },
*/
export default function NearbyStoreItem(props) {

    return (
        <li className={styles['nearby-store-item']}>
            <div className={styles["left"]}>

                <p>
                    {props.storeName}
                </p>
                <p>
                    <span>{props.distance} </span>
                    |
                    <span> {props.address}</span>
                </p>
            </div>
            <div className={styles["right"]}>
                <img src={img} alt="" />
                <span>到这去</span>
            </div>
        </li>
    )
}
