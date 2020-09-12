import React from 'react'
import styles from './index.less'
import PropTypes from 'prop-types'

Footer.propTypes = {
    status: PropTypes.number.isRequired,
    onEnterShouHuo: PropTypes.func, // 确认收货操作
    onAppraise: PropTypes.func, // 去评价操作
    onPay: PropTypes.func, // 去付款操作
    onDelete: PropTypes.func, // 删除订单操作
    onCancel: PropTypes.func
}
export default function Footer(props) {
    let content = null;
    if (props.status === 3) {
        content = <>
            <div onClick={e => props.onCancel && props.onCancel()} className={styles['button']}>取消订单</div>
            <div onClick={e => props.onPay && props.onPay()} className={styles['button']}>去付款</div>
        </>
    }
    else if (props.status === 2) {
        content = <>
            <div onClick={e => props.onEnterShouHuo && props.onEnterShouHuo()} className={styles['button']}>确认收货</div>
        </>
    }
    else if (props.status === 0) {
        content = <>
            <div onClick={e => props.onAppraise && props.onAppraise()} className={styles['button']}>
                去评价
            </div>
        </>
    }
    else if (props.status === 4 || props.status === 5) {
        content = <>
            <div onClick={e => props.onDelete && props.onDelete()} className={styles['button']}>删除订单</div>
            <div onClick={e => props.onAgain && props.onAgain()} className={styles['button']}>再次购买</div>
        </>
    }
    return (
        <div className={styles['footer']}>
            {content}
        </div>
    )
}
