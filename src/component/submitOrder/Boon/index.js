import React from 'react'
import styles from './index.css'
import {
    RightOutlined
} from '@ant-design/icons';
/**
 *  integral
 * @param {*} props 
 */
export default function Boon(props) {
    return (
        <div className={styles['boon']}>
            <div className={styles['integral']}>
                <span>积分抵扣</span>
                <span>{props.integral}积分<RightOutlined /></span>
            </div>
            <div className="dikou">
                <span>优惠卷</span>
                <span>暂无可用优惠卷<RightOutlined /></span>
            </div>
        </div>
    )
}
