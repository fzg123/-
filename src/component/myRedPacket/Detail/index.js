import React from 'react'
import styles from './index.less'
import NotData from '../../common/NotData'
export default function Detail() {
    return (
        <div className={styles['detail']}>
            <p>红包明细</p>
            <NotData color="rgb(253,168,168)" />
        </div>
    )
}
