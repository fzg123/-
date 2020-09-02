import React from 'react'
import styles from './index.css'
/**
 * 展示一些活动，例如签到得积分  
 */
export default function DisplayInform(props) {
    return (
        <div
            style={{
                width: props.width,
                height: props.height
            }}
            className={styles['d-f']}
        >
            {props.children}
        </div>
    )
}
