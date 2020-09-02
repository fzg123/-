import React from 'react'
import { Redirect } from 'umi'
function MyOrder(props) {
    return (
        <Redirect to={props.location.pathname + '/all'}></Redirect>
    )
}

MyOrder.wrappers = ['@/router/IfNotLogin'];

export default MyOrder;
