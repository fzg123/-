import React from 'react'
import styles from './index.css'
import GoBuy from '../../../component/shopDetail/GoBuy'
import Inessential from '../../../component/common/Inessential'
import PriceAndCountdown from '../../../component/shopDetail/PriceAndCountdown'
import {
    FireFilled,
    SmileTwoTone
} from '@ant-design/icons';
import Placeholder from '../../../component/common/Placeholder'
import CommodityEvaluation from '../../../component/shopDetail/CommodityEvaluation'
import ShopImgDetail from '../../../component/shopDetail/shopImgDetail'
import { getShopDetail, addShopCart } from '@/api'
import { useEffect, useState } from 'react'
import joinImgSrc from '../../../utils/joinImgSrc'
import { connect } from 'dva'
import {message} from 'antd'
function ShopDetail(props) {
    const [shopData, setshopData] = useState({
        showMainImg: 'https://dummyimage.com/1038x298/50B347/FFF&text=Mock.js',
        name: '国产蓝莓1盒',
        msg: '困了累了来一盒',
        salesVolume: 19232
    })
    useEffect(() => {
        (async function () {
            const result = await getShopDetail(props.match.params.id);
            setshopData({
                ...shopData,
                ...result.data.result
            });
        }())

    }, [])

    // 加入购物车
    const onGoShopCar = () => {
        (async function(){
            const result = await addShopCart({
                fruitId: shopData.fruitId,
                userId: props.loginData.userId,
                count: 1
            })
            if(result.status === 'success'){
                message.success('添加购物车成功');
            }
        }())
        
    }

    // 去抢购
    const onGoBuy = () => {
        console.log('立即抢购操作')
    }
    return (
        <div className={styles['shop-detail']}>
            <div className={styles['show-img']}>
                <img src={joinImgSrc(shopData.fruitImagesUrl, shopData.fruitImagesCount > 1)} alt="" />

            </div>
            <div className={styles["msg"]}>
                <p className={styles['shop-name']}>{shopData.fruitName}</p>
                <p className={styles['shop-msg']}>{shopData.fruitText}</p>
                <div>
                    <div className={styles["content"]}>
                        <FireFilled style={{ marginRight: 5 }} />销量: {shopData.salesVolume}
                    </div>

                </div>
            </div>
            <div className={styles["goShopAndCountdown"]}>
                <PriceAndCountdown currentPrice={shopData.fruitInventedPrice} prevPrice={shopData.fruitPrice} time={{ s: 0, f: 33, m: 43 }}></PriceAndCountdown>
            </div>
            <ul className={styles["serve-type"]}>
                <li><SmileTwoTone></SmileTwoTone><span>品质保证</span></li>
                <li><SmileTwoTone></SmileTwoTone><span>花果包退换</span></li>
                <li><SmileTwoTone></SmileTwoTone><span>新鲜水果</span></li>
            </ul>
            <p className={styles['xq']}>商品详情</p>
            <p className={styles['guige']}>规格 --</p>
            <CommodityEvaluation datas={
                [{
                    name: 'fajdifojado',
                    headPortrait: 'https://dummyimage.com/216x200/50B347/FFF&text=Mock.js',
                    starLevel: 3,
                    text: '很好吃，下次不会再来了',
                    date: '2019-05-14 12:51:42'
                }]
            }></CommodityEvaluation>
            <ShopImgDetail imgs={['https://dummyimage.com/1038x398/50B347/FFF&text=Mock.js', 'https://dummyimage.com/1038x598/50B347/FFF&text=Mock.js', 'https://dummyimage.com/1038x198/50B347/FFF&text=Mock.js']}></ShopImgDetail>
            <div className={styles["footer"]}>
                <Inessential></Inessential>
            </div>
            <div className={styles["go-buy"]}>
                <GoBuy
                    onGoShopCar={onGoShopCar}
                    onGoBuy={onGoBuy}
                    shopNum={2}
                ></GoBuy>
            </div>
            <Placeholder height={45}></Placeholder>
        </div >
    )
}

const mapStateToProps = state => ({
    loginData: state.loginData
})
const r = connect(mapStateToProps)(ShopDetail);
r.title = '商品详情';
r.wrappers = ['@/router/ShowHeader']
export default r;