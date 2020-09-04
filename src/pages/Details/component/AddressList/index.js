import React, { useState, useEffect } from 'react'
import styles from './index.less'
export default function AddressList(props) {
    
    const lis = props.datas.map((e, i) => {
        return <li key={i}
            onClick={() => {
               
                props.onClick(e)
            }}
        >
            <p className={styles['name']}>
                {e.name}
            </p>

            {/* 具体地址 */}
            <p className={styles['address']}>
                {e.address}
            </p>
        </li>
    })
    return (
        <ul className={styles['address-list']}>
            {lis}
        </ul>
    )
}
