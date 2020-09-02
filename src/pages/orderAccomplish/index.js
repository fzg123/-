import React from 'react'
import styles from './index.css'
import ShopList from '../../component/home/HotShop/ShopList'

import img from '../../assets/min-img/img/72.png'
OrderAccomplist.wrappers = ['@/router/ShowHeader'];

OrderAccomplist.title = '订单完成'
function OrderAccomplist() {
    const r = [
        {
            src: 'https://dummyimage.com/216x200/50B347/FFF&text=Mock.js',
            shopName: '好吃的梨子o快买',
            msg: '实力派',
            type: ['满减'],
            price: 17.8,
            _price: 18.9
        },
        {
            src: 'https://dummyimage.com/216x200/50B347/FFF&text=Mock.js',
            shopName: '好吃的梨子o快买',
            msg: '实力派',
            type: ['满减'],
            price: 17.8,
            _price: 18.9
        },
        {
            src: 'https://dummyimage.com/216x200/50B347/FFF&text=Mock.js',
            shopName: '好吃的梨子o快买',
            msg: '实力派',
            type: ['满减'],
            price: 17.8,
            _price: 18.9
        }
    ]
    return (
        <div className={styles['order-accomp-list']}>
            <div className={styles["img"]}>
                <div className={styles["center"]}>
                    <img src={img} />
                    <span>订单完成</span>
                </div>
            </div>
            <div className={styles["btn"]}>
                <div className={styles["btn-center"]}>
                    <div className={styles["select-order"]}>
                        查看订单
                    </div>
                    <div className={styles["select-order"]}>
                        查看订单
                    </div>
                </div>
            </div>
            <div className={styles["guess-you-like"]}>
                <p>
                    你可能还喜欢
                </p>
                <ShopList
                    shopDatas={r}
                />
            </div>
        </div>
    )
}

export default OrderAccomplist;
