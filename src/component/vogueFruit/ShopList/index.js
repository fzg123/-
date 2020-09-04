import React from 'react'
import styles from './index.less'
import ShopItem from './ShopItem'
import joinImgSrc from '../../../utils/joinImgSrc'
export default function ShopList(props) {
    const items = props.shopDatas.map((e, i) => {
        const imgSrc = joinImgSrc(e.fruitImagesUrl, e.fruitImagesCount != 1);
        return <ShopItem
            key={i}
            imgSrc={imgSrc}
            name={e.fruitName}
            type={['折扣', '满减']}
            price={{ currPrice: e.fruitPrice, prevPrice: e.fruitInventedPrice }}
            id={e.fruitId}
        ></ShopItem>
    })
    return (
        <ul className={styles['shop-list']}>
            
            {items}
        </ul>
    )
}
