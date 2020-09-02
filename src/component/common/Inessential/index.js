import React from 'react'
import styles from './index.css'
import i from '@/assets/min-img/img/73.png'
Inessential.defaultProps = {
    notCenter: false
}
export default function Inessential(props) {
    let style = {};
    if (!props.notCenter) {
        style = {
            transform: 'translateX(-50%)',
            position: 'absolute',
            top: 0,
            left: '50%'
        }
    }
    return (
        <div className={styles['inessential']}>
            <div style={style} className={styles['center']}>
                <img src={i} alt="" />
                <span className={styles['line']}></span>
                <span>
                    好吃不上火
                </span>

            </div>
        </div>
    )
}
