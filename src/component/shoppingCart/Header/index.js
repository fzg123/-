import React from 'react'
import styles from './index.css'
import { Link } from 'umi'
import logo from '@/assets/min-img/img/73.png'

export default function Header(props) {
    return (
        <div className={styles['header']}>
            <div className={styles['left']}>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className={styles['right']}>
                <span onClick={() => {
                    props.onDelete();
                }}>
                    删除
                </span>
            </div>
        </div>
    )
}
