import React, { useState, useEffect } from 'react'
import styles from './_layout.css'
import { NavLink } from 'umi'
import Placeholder from '../../component/common/Placeholder'
import { getMyOrder } from '../../api'
import { connect } from 'dva'
import Loading from '../../component/common/Loading'
import ctx from './context'
function _layout(props) {
    const [allOrder, setAllOrder] = useState({
        data: {
            'waitReceive': [],
            'waitPay': [],
            'waitAppraise': [],
            'haveFinished': [],
            'all': [],
            'loseEfficacy': []
        },
        status: 'loading'
    });
    useEffect(() => {
        (async function () {
            const r = await getMyOrder(props.loginData.userId);
            const allOrders = {
                ...allOrder.data
            };
            allOrders.all = r.data.result;
            allOrders.all.forEach(e => {
                let target = '';
               
                if (e.orderStatus === 2) target = 'waitReceive'; // 待收货
                else if (e.orderStatus === 3) target = 'waitPay'; // 待付款
                else if (e.orderStatus === 0) target = 'waitAppraise'; // 待评价
                else if (e.orderStatus === 1) target = 'haveFinished'; // 退款成功
                else if (e.orderStatus === 5) target = 'loseEfficacy' // 订单失效
           
                allOrders[target].push(e);
            })
            setAllOrder({
                data: allOrders,
                status: 'idle'
            });
        }())

    }, [])
    const context = { data: allOrder.data }
    return (
        <ctx.Provider value={context}>

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

                        <NavLink activeClassName={styles['active']} to='/myOrder/haveFinished'>

                            <div className={styles["currently"]}></div>已完成
                    </NavLink>


                    </li>
                    <li>

                        <NavLink activeClassName={styles['active']} to='/myOrder/waitReceive'>

                            <div className={styles["currently"]}></div> 待收货
                        </NavLink>

                    </li>
                </ul>
                <Placeholder height={'6.16rem'}></Placeholder>

                <div className={styles["content"]}>
                    {allOrder.status === 'loading' ? <Loading /> : props.children}
                </div>
            </div>
        </ctx.Provider>

    )
}
const r = connect(state => ({ loginData: state.loginData }))(_layout);
r.wrappers = ['@/router/ShowHeader'];
r.title = '订单列表';
export default r;