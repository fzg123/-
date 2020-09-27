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
import { getShopDetail, addShopCart, directAddOrder } from '@/api'
import { useEffect, useState } from 'react'
import joinImgSrc from '../../../utils/joinImgSrc'
import { connect } from 'dva'
import { message } from 'antd'
import ctx from '../../../layouts/context'
import { notLoginShowData } from '../../../_config'
// import joinImgSrc from '../../../utils/joinImgSrc'
function ShopDetail(props) {
    const [shopData, setshopData] = useState({});
    useEffect(() => {
        (async function () {
            if (props.loginData !== null) props.fetchShopItems(props.loginData.userId); // 更新仓库中 购物车中数据 该页面需要用的此数据

            const result = await getShopDetail(props.match.params.id);
            setshopData({
                ...shopData,
                ...result.data.result
            });
        }())

    }, [])
    const getShopDetailImg = () => {  // 获取商品详情描述图

        if (shopData.fruitId === undefined) return [];
        if (shopData.fruitImagesCount == 1) return [joinImgSrc(shopData.fruitImagesUrl, false)];
        const imgArr = [];
        for (let i = 0; i < shopData.fruitImagesCount; i++) {
            imgArr.push(joinImgSrc(shopData.fruitImagesUrl, true, i + 1));
        }
        return imgArr;
    }
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

    // 直接购买操作
    const onGoBuy = async () => {
        if (props.loginData === null) {
            value.setFlagShowModal(notLoginShowData(props, { path: props.location.pathname }, value));
        }
        props.setTargetPath({
            key:'/submitOrder',
            value: props.match.url
        });
        props.history.push({
            pathname: '/submitOrder',
            state: {
                shopData: {

                    name: shopData.fruitName,
                    msg: shopData.fruitText,
                    imgSrc: joinImgSrc(shopData.fruitImagesUrl, shopData.fruitImagesCount != 1),
                    num: 1,
                    price: shopData.fruitPrice
                },
                source: '/shopDetail/' + shopData.fruitId,
                originSource: '/shopDetail/' + shopData.fruitId
            }
        })
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
                    {shopData.fruitIsTime === 1
                        ?
                        <div className={styles["goShopAndCountdown"]}>
                            <PriceAndCountdown currentPrice={shopData.fruitPrice} prevPrice={shopData.fruitInventedPrice} time={{ s: 0, f: 33, m: 43 }}></PriceAndCountdown>
                        </div>
                        :
                        null
                    }


                    <ul className={styles["serve-type"]}>
                        <li><SmileTwoTone></SmileTwoTone><span>品质保证</span></li>
                        <li><SmileTwoTone></SmileTwoTone><span>花果包退换</span></li>
                        <li><SmileTwoTone></SmileTwoTone><span>新鲜水果</span></li>
                    </ul>
                    <p className={styles['xq']}>商品详情</p>
                    <p className={styles['guige']}>规格 --</p>
                    {/* 评价 */}
                    <CommodityEvaluation datas={
                        [{
                            name: 'fajdifojado',
                            headPortrait: 'https://dummyimage.com/216x200/50B347/FFF&text=Mock.js',
                            starLevel: 3,
                            text: '很好吃，下次不会再来了',
                            date: '2019-05-14 12:51:42'
                        }]
                    }></CommodityEvaluation>
                    {/* 商品描述图 */}
                    <ShopImgDetail imgs={getShopDetailImg()}></ShopImgDetail>

                    {/* 脚部 */}
                    <div className={styles["footer"]}>
                        <Inessential></Inessential>
                    </div>
                    {/*  */}
                    <div className={styles["go-buy"]}>
                        <GoBuy
                            onGoShopCar={() => onGoShopCar(value)}
                            onGoBuy={onGoBuy}
                            shopNum={props.shopCartItem !== null ? props.shopCartItem.length : props.shopCartItem}
                            setFlagShowModal={value.setFlagShowModal}
                            isFlagQG={shopData.fruitIsTime} // 是否为抢购 1为抢购 0为不抢购
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
    },
    setTargetPath(obj) {
        dispatch({
            type: 'quitTargetPath/setTargetPath',
            payload: obj
        })
    }
})
const r = connect(mapStateToProps, mapDispatchToProps)(ShopDetail);
r.title = '商品详情';
r.wrappers = ['@/router/ShowHeader']
export default r;