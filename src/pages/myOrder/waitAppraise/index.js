import React from 'react'
import OrderList from '../../../component/common/OrderList'
import Mock from 'mockjs'
import NotOrder from '../../../component/myOrder/NotOrder'
import ctx from '../context'
export default function WaitAppraise() {
    const { datas } = Mock.mock({
        datas: [

        ]
    })
    return <ctx.Consumer>
        {value => {
            return value.data['waitAppraise'].length === 0 ? <NotOrder /> : <OrderList datas={value.data['waitAppraise']}></OrderList>

        }}
    </ctx.Consumer>
}
