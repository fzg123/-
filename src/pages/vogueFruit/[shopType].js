import React from 'react'
import ShopList from '../../component/vogueFruit/ShopList'
export default function index(props) {
    return (

        <ShopList type={props.match.params.shopType}></ShopList>

    )
}
