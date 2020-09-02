import React from 'react'
import OrderList from '../../../component/common/OrderList'
import Mock from 'mockjs'
import NotOrder from '../../../component/myOrder/NotOrder'
export default function WaitAppraise() {
    const { datas } = Mock.mock({
        datas: [

        ]
    })
    console.log(datas)
    return (
        <>

            {datas.length === 0 ? <NotOrder /> : <OrderList datas={datas}></OrderList>}





        </>


    )
}
