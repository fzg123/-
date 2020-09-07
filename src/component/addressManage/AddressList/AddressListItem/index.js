import React from 'react'
import styles from './index.css'
export default function AddressListItem(props) {
    return (

        <li className={styles['address-list-item']} onClick={(e) => { props.onClick(props) }}>
            <div className={styles["left"]}>

                <p>
                    <span className={styles['name']}>
                        {props.addressName}
                    </span>
                    <span className={styles['phone']}>
                        {props.addressPhone}
                    </span>
                </p>
                <p className={styles['d_a'] + ' ' + (props.isDefault ? styles['active'] : '')}>
                   
                    {props.addressDefault === 1 ? <span className={styles['default']}>默认</span> : null}
                    <span className={styles['address']}>
                        {props.addressText}
                    </span>
                </p>
            </div>
            <div className={styles["right"]}>
                <span onClick={() => { props.onReset() }}>编辑</span>
            </div>
        </li>
    )
}
