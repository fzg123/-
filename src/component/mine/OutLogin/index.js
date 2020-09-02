import React from 'react'
import styles from './index.css'
export default function OutLogin(props) {
    return (
        <div onClick={() => {
            props.outLogin(props.outLogin);
        }} className={styles['out-login']}>
            退出登录
        </div>
    )
}
