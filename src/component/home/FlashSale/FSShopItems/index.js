import React from 'react'
import styles from './index.css'
import ShopItem from '../FSShopList/ShopItem'
export default function FSShopItems(props) {
    const shops = props.datas.map((e, i) => {
        const { shopImages, name, msg, currentPrice, price, id } = e;
        return <ShopItem
            key={id}
            fruitId={id}
            shopName={name}
            path={'/shopDetail/' + id}
            price={'￥' + currentPrice}
            _price={'￥' + price}
            imgSrc={shopImages}
        />


    })
    return (
        <ul className={styles['shop-items']}>
            {shops}
        </ul>
    )
}
