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
import { message } from 'antd'
import ctx from '../../../layouts/context'
import { notLoginShowData } from '../../../_config'
function ShopDetail(props) {
    const [shopData, setshopData] = useState({});
    useEffect(() => {
        (async function () {
            props.fetchShopItems(props.loginData.userId); // 更新仓库中 购物车中数据 该页面需要用的此数据
            const result = await getShopDetail(props.match.params.id);
            setshopData({
                ...shopData,
                ...result.data.result
            });
        }())

    }, [])

    // 加入购物车
    const onGoShopCar = (value) => {

        if (props.loginData === null) {
            value.setFlagShowModal(notLoginShowData(props, { path: props.location.pathname }, value));
        }
        else {
            (async function () {
                const result = await addShopCart({
                    fruitId: shopData.fruitId,
                    userId: props.loginData.userId,
                    count: 1
                })
                if (result.status === 'success') {
                    message.success('添加购物车成功');
                    props.fetchShopItems(props.loginData.userId);
                }
            }())
        }


    }

    // 去抢购
    const onGoBuy = () => {
        console.log('立即抢购操作')
    }


    const mianImgSrc = joinImgSrc(shopData.fruitImagesUrl, shopData.fruitImagesCount > 1);
    return (
        <ctx.Consumer>

            {value => {
                return (<div className={styles['shop-detail']}>
                    <div className={styles['show-img']}>
                        <img src={shopData.fruitImagesUrl == undefined ? '' : mianImgSrc} alt="" />

                    </div>
                    <div className={styles["msg"]}>
                        <p className={styles['shop-name']}>{shopData.fruitName}</p>
                        <p className={styles['shop-msg']}>{shopData.fruitText}</p>
                        <div>
                            <div className={styles["content"]}>
                                <FireFilled style={{ marginRight: 5 }} />销量: {Math.floor(Math.random() * 10000 + 1000)}
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
                            onGoShopCar={() => onGoShopCar(value)}
                            onGoBuy={onGoBuy}
                            shopNum={props.shopCartItem.length}
                            setFlagShowModal={value.setFlagShowModal}
                        ></GoBuy>
                    </div>
                    <Placeholder height={45}></Placeholder>
                </div >)
            }}
        </ctx.Consumer>

    )
}

const mapStateToProps = state => ({
    loginData: state.loginData,
    shopCartItem: state.shopCartItem
})
const mapDispatchToProps = dispatch => ({
    fetchShopItems(id) {
        dispatch({
            type: 'shopCartItem/fetchShopItems',
            payload: id
        })
    }
})
const r = connect(mapStateToProps, mapDispatchToProps)(ShopDetail);
r.title = '商品详情';
r.wrappers = ['@/router/ShowHeader']
export default r;