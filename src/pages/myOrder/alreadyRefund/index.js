import React from 'react'
import OrderList from '../../../component/common/OrderList'
import Mock from 'mockjs'
import NotOrder from '../../../component/myOrder/NotOrder'
import ctx from '../context'
function AlreadyRefund() {
    return <ctx.Consumer>
        {value => {
            return value.data['alreadyRefund'].length === 0 ? <NotOrder /> : <OrderList datas={value.data['alreadyRefund']}></OrderList>

        }}
    </ctx.Consumer>
}

AlreadyRefund.wrappers = ['@/router/IfNotLogin']
export default AlreadyRefund;