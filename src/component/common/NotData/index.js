import React from 'react'
import styles from './index.css'
import img from '../../../assets/min-img/img/57.png'
export default function NotData(props) {
    const style = props.color ? { color: props.color } : {};
    return (
        <div className={styles['not-data']}>
            <p style={style}>没有数据哟~</p>
            <img src={img} alt="" />
        </div>
    )
}
