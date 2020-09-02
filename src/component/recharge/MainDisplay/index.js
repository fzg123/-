import React from 'react'
import styles from './index.css'
import img from '../../../assets/min-img/img/59.png'

export default function MainDisplay() {
    return (
        <div className={styles['main-display']}>
            <img src={img} alt=""/>
        </div>
    )
}
