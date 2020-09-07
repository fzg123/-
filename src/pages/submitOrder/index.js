import React, { useEffect, useState } from 'react'
import styles from './index.css'
import Placeholder from '../../component/common/Placeholder'
import Summation from '../../component/submitOrder/Summation'
import Boon from '../../component/submitOrder/Boon'
import ShopList from '../../component/submitOrder/ShopList'
import { getDefaultHarvestAddress } from '@/api'
import { connect } from 'dva'
import DispatchOrDate from '../../component/submitOrder/DispatchOrDate'
import ShowUserData from '../../component/submitOrder/ShowUserData'
import joinImgSrc from '../../utils/joinImgSrc'
import { getAllShop } from '@/api'
import Loading from '../../component/common/Loading'
import { addOrder as commitOrder, commitOrder as commitOrder1 } from '../../api'
import { message } from 'antd'
import { allowStepPageName } from './config'
import getTotalPrice from '../../utils/getTotalPrice'
function SubmitOrder(props) {
    const state = props.location.state;
    let sourcePath = null;  // 来这个页面的路径
    // 如果不是从指定的页面跳转过来 或者想从浏览器地址输入订单路径 进入 直接跳转至首页
    if (!(state && allowStepPageName.includes(sourcePath = state.source))) props.history.push('/');
    const [shopDatas, setshopDatas] = useState({ data: [], status: 'loading' });  //商品信息
    const [address, setaddress] = useState({ data: {}, states: 'loading' });     // 地址信息
    useEffect(() => { // 得到商品信息
        (async function () {
            const shopItems = (await getAllShop(props.loginData.userId)).data.result;//得到购物车中数据
            let r = getActiveShopItem(shopItems);  // 得到购物车中选中的商品
            r = r.map(e => ({   // 由于组件内使用的属性名跟从得到的服务器数据属性名不一致  所有转换一下
                imgSrc: joinImgSrc(e.fruit.fruitImagesUrl, e.fruit.fruitImagesCount > 1),
                name: e.fruit.fruitName,
                msg: e.fruit.fruitText,
                price: e.shoppingCount * e.fruit.fruitInventedPrice,
                userId: props.loginData.userId,
                fruitcount: e.shoppingCount,
                fruitId: e.fruit.fruitId,
                num: e.shoppingCount
            }))
            setshopDatas({ data: r, status: 'idle' });
        }())
    }, [])
    useEffect(() => {  // 得到地址信息
        (async function () {
            let data = null;
            const state = props.location.state;

            if (state != null && state.dataType === 'address') {
                data = state.data;
            }
            else {
                const result = await getDefaultHarvestAddress(props.loginData.userId);
                data = result.data.result;
            }
            setaddress({
                data,
                states: 'idle'
            })
        }())

    }, [])
    function getActiveShopItem(shops) { // 得到购物车数据中 所有已经选中的商品
        return shops.filter(e => e.shoppingStatus === 1);
    }
    const submitOrderHandle = () => {  // 提交订单操作
        console.log(address.data)
        if (address.data.addressId === undefined) {
            message.info('请选择地址');
            return;
        }
        // 旧版api 处理方式  待删除
        // const promises = [];
        // shopDatas.data.forEach((shopItem, i) => {
        //     const promise = commitOrder({
        //         userId: props.loginData.userId,
        //         shopId: props.shopId,
        //         addressId: address.data.addressId,
        //         fruitcount: shopItem.fruitcount,
        //         fruitId: shopItem.fruitId
        //     })
        //     promises.push(promise);
        // })

        // 这里是正确的
        const promise = commitOrder({
            userId: props.loginData.userId,
            shopId: props.shopId,
            addressId: address.data.addressId,
        })
        promise.then(d => {
            props.setTargetPath({  // 在订单完成页面 回退按钮 回退到购物车而不是提交订单页面
                key: '/orderAccomplish',
                value: sourcePath
            })
            props.history.push({
                pathname: '/orderAccomplish',
                state: {
                    targetPath: sourcePath //  提交成功页面  点击那个继续选购 要跳转的路径
                }

            });
            message.success('提交订单成功');
            props.upDataLoginData(props.loginData.userId);
        })
        // 商品详情页 处理方式
        // commitOrder1({
        //     userId: props.loginData.userId,
        //     shopId: props.shopId,
        //     addressId: address.data.addressId,
        //     fruitcount: 1,
        //     fruitId: 14
        // }).then(d => {
        //     console.log(d)
        // })
    }
    const content = (
        <div className={styles['submit-order']}>
            {/* 用户地址 */}
            <ShowUserData address={address} />
            {/* 配送日期 及 配送方式 */}
            <DispatchOrDate />
            {/* 商品列表 */}
            <ShopList datas={shopDatas.data} />
            {/* 积分抵扣 及 优惠卷 */}
            <Boon path={{ integral: '/integralMall', boon: '/myBoon/notApply' }} integral={23} />
            {/* 占位96的高度 */}
            <Placeholder height={96} />
            {/* 提交订单 */}
            <div className={styles["summation"]}>
                <Summation
                    summation={getTotalPrice(shopDatas.data)}
                    boon={0}
                    onSubmitOrder={submitOrderHandle}
                />
            </div>

        </div>
    );
    const loading = <Loading></Loading>;
    return props.loading ? loading : content;
}
const mapStateToProps = state => ({
    shopItems: state.shopCartItem,
    loginData: state.loginData,
    loading: state.loading.models.shopCartItem,
    shopId: state.shopData.id
})
const mapDispatchToProps = dispatch => ({
    onGetShopDatas(id) {
        return dispatch({
            type: 'shopCartItem/fetchShopItems',
            payload: id
        })
    },
    setTargetPath(obj) {
        dispatch({
            type: 'quitTargetPath/setTargetPath',
            payload: obj
        })
    },
    upDataLoginData(id) {
        dispatch({
            type: 'loginData/upDataLoginData',
            payload: id
        })
    }
})

const r = connect(mapStateToProps, mapDispatchToProps)(SubmitOrder);
r.wrappers = ['@/router/ShowHeader'];

r.title = '提交订单';
export default r;