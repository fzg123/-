import React from 'react'
import styles from './index.less'
import {
    RightOutlined
} from '@ant-design/icons';
export default function Summation(props) {
    return (
        <div className={styles['summation']}>
            <div className={styles['detail']}>
                <span>账单明细</span>
                <span>
                    合计: <span className={styles['price']}>￥{props.summation}</span>
                    <RightOutlined style={{fontSize:'14px',color:'#666'}} />
                </span>

            </div>
            <div className={styles['bottom']}>
                <div className={styles['left']}>
                    <span className={styles['price']}>￥{props.summation}</span>
                    <span className={styles['line']}>|</span>
                    <span className={styles['boon']}>优惠 : {props.boon}</span>
                </div>
                <div className={styles["right"]}>
                    提交订单
                </div>
            </div>
        </div>
    )
}
