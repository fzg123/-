import React from 'react'
import OrderList from '../../../component/common/OrderList'
import Mock from 'mockjs'
import NotOrder from '../../../component/myOrder/NotOrder'
import ctx from '../context'
function HaveFinished() {
    return <ctx.Consumer>
        {value => {
            return value.data['haveFinished'].length === 0 ? <NotOrder /> : <OrderList datas={value.data['haveFinished']}></OrderList>

        }}
    </ctx.Consumer>
}

HaveFinished.wrappers = ['@/router/IfNotLogin']
export default HaveFinished;