import React from 'react'
import styles from './index.less'
import ShopItem from './ShopItem'
export default function ShopList(props) {

    return (
        <ul className={styles['shop-list']}>
            <ShopItem
                imgSrc={'https://dummyimage.com/130x130/50B347/FFF&text=Mock.js'}
                name='红心火龙果+凤梨双排的水果'
                type={['折扣', '满减']}
                price={{ currPrice: 25, prevPrice: 29.9 }}
            ></ShopItem>

            <ShopItem
                imgSrc={'https://dummyimage.com/130x130/50B347/FFF&text=Mock.js'}
                name='红心火龙果+凤梨双排的水果'
                type={['折扣', '满减']}
                price={{ currPrice: 25, prevPrice: 29.9 }}
            ></ShopItem>

            <ShopItem
                imgSrc={'https://dummyimage.com/130x130/50B347/FFF&text=Mock.js'}
                name='红心火龙果+凤梨双排的水果'
                type={['折扣', '满减']}
                price={{ currPrice: 25, prevPrice: 29.9 }}
            ></ShopItem>
            <ShopItem
                imgSrc={'https://dummyimage.com/130x130/50B347/FFF&text=Mock.js'}
                name='红心火龙果+凤梨双排的水果'
                type={['折扣', '满减']}
                price={{ currPrice: 25, prevPrice: 29.9 }}
            ></ShopItem>
            <ShopItem
                imgSrc={'https://dummyimage.com/130x130/50B347/FFF&text=Mock.js'}
                name='红心火龙果+凤梨双排的水果'
                type={['折扣', '满减']}
                price={{ currPrice: 25, prevPrice: 29.9 }}
            ></ShopItem>
            <ShopItem
                imgSrc={'https://dummyimage.com/130x130/50B347/FFF&text=Mock.js'}
                name='红心火龙果+凤梨双排的水果'
                type={['折扣', '满减']}
                price={{ currPrice: 25, prevPrice: 29.9 }}
            ></ShopItem>
        </ul>
    )
}
