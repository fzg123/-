import React from 'react'
import styles from './index.css'
import { HeartTwoTone } from '@ant-design/icons';

/**
 * 商品详情模块
 * @param {*} props 
 */
export default function Appraise(props) {
    const starLevel = [];
    for (let i = 0; i < props.starLevel; i++)starLevel.push(<li  key={i}><HeartTwoTone /></li>)
    return (
        <div className={styles['appraise']}>
            <div className={styles["left"]}>
                <img src={props.headPortrait} alt="" />
                <div className={styles['user-data']}>
                    <p className={styles['name']}>{props.name}</p>
                    <ul className={styles['starLevel']}>
                        {starLevel}
                    </ul>
                    <p>
                        {props.text}
                    </p>
                </div>
            </div>
            <div className={styles["right"]}>
                <p>{props.date}</p>
            </div>
        </div>
    )
}
