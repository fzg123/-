import React from 'react'
import styles from './index.less'
export default function Center(props) {
    return (
        <div className={styles.wrapper}>
            <div ref={props.r} className={styles.center}>
                {props.children}
            </div>

        </div>
    )
}
