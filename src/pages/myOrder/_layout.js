import React from 'react'
import styles from './_layout.css'
import { NavLink } from 'umi'
import Placeholder from '../../component/common/Placeholder'
_layout.wrappers = ['@/router/ShowHeader'];
_layout.title = '订单列表';
function _layout(props) {
    return (
        <div className={
            styles['order-list']
        }>
            <ul>
                <li>

                    <NavLink activeClassName={styles['active']} to='/myOrder/all'>
                        <>全部</>

                        <div className={styles["currently"]}></div>
                    </NavLink>
                </li>
                <li>

                    <NavLink activeClassName={styles['active']} to='/myOrder/waitPay'>
                        待支付
                        <div className={styles["currently"]}></div>
                    </NavLink>

                </li>
                <li>

                    <NavLink activeClassName={styles['active']} to='/myOrder/waitAppraise'>
                        待评价
                    <div className={styles["currently"]}></div>
                    </NavLink>

                </li>
                <li>

                    <NavLink activeClassName={styles['active']} to='/myOrder/alreadyRefund'>

                        <div className={styles["currently"]}></div>已退款
                    </NavLink>

                </li>

            </ul>
            <Placeholder height={61.6}></Placeholder>

            <div className={styles["content"]}>
                {props.children}
            </div>
        </div>
    )
}
export default _layout;