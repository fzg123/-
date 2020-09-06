import React, { useState, useEffect } from 'react'
import styles from './index.less'
import NotData from '../../../../component/common/NotData'
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
        <>
            {
                props.datas.length === 0 ?
                    <div className={styles["bottom"]}>
                        <NotData text='没有该关键词的地址, 请重新输入' />
                    </div>

                    :
                    <ul className={styles['address-list']}>
                        {lis
                        }
                    </ul>}
        </>

    )
}
