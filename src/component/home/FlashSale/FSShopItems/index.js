import React from 'react'
import styles from './index.css'
import ShopItem from '../FSShopList/ShopItem'
import { imgSrcRoot } from '@/_config.js'
import joinImgSrc from '../../../../utils/joinImgSrc'
export default function FSShopItems(props) {
    

    const shops = props.datas.map((e, i) => {
        let imgSrc = imgSrcRoot + e.fruitImagesUrl;
        if (e.fruitImagesCount > 1) {
            imgSrc = joinImgSrc(e.fruitImagesUrl);
        }
        
        return <ShopItem
            key={e.fruitId}
            fruitId={e.fruitId}
            shopName={e.fruitName}
            path={'/shopDetail/' + e.fruitId}
            price={'￥' + e.fruitInventedPrice}
            _price={'￥' + e.fruitPrice}
            imgSrc={imgSrc}
        />


    })
    return (
        <ul className={styles['shop-items']}>
            {shops}
        </ul>
    )
}
