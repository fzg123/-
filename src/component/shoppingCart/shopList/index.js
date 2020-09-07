import React from 'react'
import styles from './index.less'
import ShopListItem from './shopListItem'
import { imgSrcRoot } from '@/_config'
import joinImgSrc from '../../../utils/joinImgSrc'
export default function index(props) {
    const lis = props.datas.map((e, i) => {
        const obj = {
            isEnter: e.shoppingStatus === 1,
            imgSrc: joinImgSrc(e.fruit.fruitImagesUrl, e.fruit.fruitImagesCount > 1),
            name: e.fruit.fruitName,
            msg: e.fruit.fruitText,
            price: {
                currentPrice: e.fruit.fruitPrice,
                prevPrice: e.fruit.fruitInventedPrice
            },
            shopNum: e.shoppingCount,
            id: e.fruit.fruitId,
            shoppingId: e.shoppingId
        }
        return (<ShopListItem {...obj} index={i} onChange={(newShopData) => {
            props.onChange(newShopData);
        }} key={i} {...e}></ShopListItem>)
    })

    return (
        <ul className={styles['shop-list']}>
            {lis}
        </ul>
    )
}
