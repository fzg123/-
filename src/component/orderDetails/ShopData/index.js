import React from 'react'
import styles from './index.less'
import joinImgSrc from '../../../utils/joinImgSrc'
export default function ShopData(props) {
    return (

        <div className={styles['shop-data']}>
            <div className={styles['left']}>
                <img src={joinImgSrc(props.fruitImagesUrl, props.fruitImagesCount != 1)} alt="" />
            </div>
            <div className={styles['right']}>
                <p className={styles['name']}>{props.fruitName + ' ' + props.fruitText}</p>
                <p className={styles['count']}>
                    <span className={styles['x']}>X</span><span>{props.count}</span>
                </p>
                <p className={styles['price']}>
                    <span className={styles['current-price']}>

                        <span className={styles['icon']}>￥</span>
                        {props.fruitPrice}
                    </span>
                    <span className={styles['prev-price']}>

                        <span className={styles['icon']}>￥</span>

                        {props.fruitInventedPrice}

                    </span>
                </p>
            </div>
        </div>


    )
}
