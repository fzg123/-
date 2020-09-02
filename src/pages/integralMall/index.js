import React from 'react'
import styles from './index.css'
import ShopList from '../../component/integralMall/ShopList'
import primary from '../../assets/min-img/img/55.png'
import W from '../../component/integralMall/W'
function IntegralMall(props) {
    const shopDatas = [
        {
            imgSrc: 'https://dummyimage.com/216x200/50B347/FFF&text=Mock.js',
            name: '[积分兑]红心火龙果+凤梨双拼的商品',
            msg: '甜度爆表, 解暑必备',
            suoXuJiFen: 1200,
            prevPrice: 18
        },
        {
            imgSrc: 'https://dummyimage.com/216x200/50B347/FFF&text=Mock.js',
            name: '[积分兑]红心火龙果+凤梨双拼的商品',
            msg: '甜度爆表, 解暑必备',
            suoXuJiFen: 1200,
            prevPrice: 18
        },
        {
            imgSrc: 'https://dummyimage.com/216x200/50B347/FFF&text=Mock.js',
            name: '[积分兑]红心火龙果+凤梨双拼的商品',
            msg: '甜度爆表, 解暑必备',
            suoXuJiFen: 1200,
            prevPrice: 18
        }
    ]
    const integral = 100;
    return (
        <div className={styles['integral-mall']}>
            <div className={styles["primary"]}>
                <img src={primary} alt="" />
            </div>
            <W integral={integral} path={'/'} />
            <div className={styles["shop-list"]}>

                <ShopList shopDatas={shopDatas} />
            </div>
            
        </div>
    )
}

IntegralMall.wrappers = ['@/router/IfNotLogin','@/router/ShowHeader'];
IntegralMall.title = '积分商城'

export default IntegralMall;