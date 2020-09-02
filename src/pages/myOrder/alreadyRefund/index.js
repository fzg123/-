import React from 'react'
import OrderList from '../../../component/common/OrderList'
import Mock from 'mockjs'
function AlreadyRefund() {
    const { datas } = Mock.mock({
        "datas|4-16": [
            {
                shopImgSrc: 'https://dummyimage.com/1038x298/50B347/FFF&text=Mock.js',
                orderNumber: /\d{10,13}/,
                price: /\d{1,3}\.\d/,
                text: '已退款'

            }
        ]
    })

    return (

        <OrderList datas={datas}>
            
        </OrderList>

    )
}

AlreadyRefund.wrappers = ['@/router/IfNotLogin']
export default AlreadyRefund;