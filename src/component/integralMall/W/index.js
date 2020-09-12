import React from 'react'
import styles from './index.css'
import $ from '../../../assets/min-img/img/54.png'
import book from '../../../assets/min-img/img/53.png'
import Link from '../../common/Link'
import { noDevelopment } from '@/_config'
export default function W(props) {
    return (
        <div className={styles['w']}>
            <div className={styles["left"]}>

                <img src={$} alt="" />
                积分
                <span className={styles['jifen']}>{props.integral}</span>
            </div>
            <div className={styles["right"]}>
                <img src={book} alt="" />
                <Link to={noDevelopment}><span className={styles['dui-huan']}>兑换记录</span></Link>
            </div>
        </div>
    )
}
