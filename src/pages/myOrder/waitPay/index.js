import React from 'react'
import OrderList from '../../../component/common/OrderList'
import Mock from 'mockjs'
import NotOrder from '../../../component/myOrder/NotOrder'
import ctx from '../context'
function WaitPay() {
    
    return <ctx.Consumer>
    {value => {
        return value.data['waitPay'].length === 0 ? <NotOrder /> : <OrderList datas={value.data['waitPay']}></OrderList>

    }}
</ctx.Consumer>
}
WaitPay.wrappers = ['@/router/IfNotLogin']
export default WaitPay;