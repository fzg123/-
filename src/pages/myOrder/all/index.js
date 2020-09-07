import React, { useState, useEffect } from 'react'
import OrderList from '../../../component/common/OrderList'
import Mock from 'mockjs'
import { getMyOrder } from '../../../api'
import NotOrder from '../../../component/myOrder/NotOrder'
import { connect } from 'dva'
import ctx from '../context'
function All(props) {
    return <ctx.Consumer>
        {value => {
            return value.data['all'].length === 0 ? <NotOrder /> : <OrderList datas={value.data['all']}></OrderList>

        }}
    </ctx.Consumer>
}
All.wrappers = ['@/router/IfNotLogin']
const mapStateToProps = state => ({
    loginData: state.loginData
})
export default connect(mapStateToProps)(All);