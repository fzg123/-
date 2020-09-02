import React from 'react'
import styles from './index.css'
import NotData from '../../common/NotData'
/**
 * 
 * @param {*} props 
 * 
 * props.integralDetail 
 */
export default function IntegralDetail(props) {
    return (
        <div className={styles['integral-detail']}>
            <p>
                积分明细
            </p>
            {/* 如果没有数据就显示这个组件 */}
            <NotData />
        </div>
    )
}
