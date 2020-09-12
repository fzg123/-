import React, { useState } from 'react'
import styles from './index.less'
import Header from '../../component/orderDetails/Header'
import Footer from '../../component/orderDetails/Footer'
import Interrelated from '../../component/orderDetails/Interrelated'
import ShopData from '../../component/orderDetails/ShopData'
import Address from '../../component/orderDetails/Address'
import { enterOrder, selectOrder, cancelOrder, deleteOrder } from '@/api'
import { message } from 'antd'
import { connect } from 'dva'
import Placeholder from '../../component/common/Placeholder'
/**
 * 订单详情
 */
function orderDetails(props) {
    const [orderData, setOrderData] = useState(props.location.state);
    const { address, orderId, oddTime, orderStatus, orderTime, orderCount, fruit, count } = orderData;
    const daoJiShi = oddTime.split(':').map(e => e * 1) // 待支付状态的 一个 倒计时 第一位为时第二位为分第三位为秒
    // 确认收货操作
    const onEnterShouHuo = async () => {
        await enterOrder({
            orderId,
            shopId: props.shopId,
            status: 0
        });
        message.success('收货成功');
        const result = await selectOrder(orderId);
        setOrderData(result.data.result[0]);
    }
    // 去评价操作
    const onAppraise = () => {
        message.info('抱歉，暂未开发');
    }
    // 去支付操作
    const onPay = () => {
        props.history.push({
            pathname: '/pay',
            state: {
                source: '/orderDetails',
                orderId,
                price: fruit.fruitPrice,
                sourcePath: '/vogueFruit/selectCut'
            }
        })
    }
    // 删除订单操作
    const onDelete = async () => {
        await deleteOrder(orderId);
        message.success("删除成功");
        props.history.push('/myOrder');
    }
    // 取消订单
    const onCancel = async () => {
        await cancelOrder({
            status: 5,
            shopId: props.shopId,
            orderId
        })
        message.success('取消成功');
        const result = await selectOrder(orderId);
        setOrderData(result.data.result[0]);
    }
    return (
        <div className={styles['order-defails']}>
            <div className={styles['header']}>
                <Header daoJiShi={daoJiShi} status={orderStatus} />
            </div>
            <div className={styles['address']}>
                <Address {...address} />
            </div>
            <div className={styles['shop-data']}>
                <ShopData count={count} {...fruit} />
            </div>
            <div className={styles['interrelated']}>
                <Interrelated time={orderTime} count={orderCount} price={orderCount * fruit.fruitPrice} id={orderId} />
            </div>
            <Placeholder style={{ backgroundColor: "transparent" }} height='50px' />
            <div className={styles['footer']}>
                <Footer
                    onEnterShouHuo={onEnterShouHuo}
                    onAppraise={onAppraise}
                    onPay={onPay}
                    onDelete={onDelete}
                    onCancel={onCancel}
                    status={orderStatus}
                />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    shopId: state.shopData.id
})

const r = connect(mapStateToProps)(orderDetails);
r.wrappers = ['@/router/ShowHeader'];
r.title = '订单详情';
export default r;