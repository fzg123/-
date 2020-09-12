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
import { getAllShop } from '@/api'
import Loading from '../../component/common/Loading'
// 一个是从购物车提交订单   一个是从商品详情页面提交订单
import { addOrder as shoppingCartCommitOrder, commitOrder as commitOrder1 } from '../../api'
import { message } from 'antd'
import { allowStepPageName, mapServerDataToData } from './config'
import getTotalPrice from '../../utils/getTotalPrice'
function SubmitOrder(props) {
    const state = props.location.state;

    // 如果不是从指定的页面跳转过来 或者想从浏览器地址输入订单路径 进入 直接跳转至首页

    let flagPage = allowStepPageName.some(e => new RegExp('^' + e).test(state.source));
    if (!(state && flagPage)) props.history.push('/');
    let sourcePath = state.source;  // 来这个页面的路径
    const [shopDatas, setshopDatas] = useState({ data: [], status: 'loading' });  //商品信息
    const [address, setaddress] = useState({ data: {}, states: 'loading' });     // 地址信息
    useEffect(() => { // 得到商品信息
        (async function () {
            if (new RegExp('^/shoppingCart').test(sourcePath)) {
                const shopItems = (await getAllShop(props.loginData.userId)).data.result;//得到购物车中数据
                let r = getActiveShopItem(shopItems);  // 得到购物车中选中的商品
                r = mapServerDataToData(r, props); // 由于从服务端获取的数据属性名 跟 视图使用的属性名不一致 所以转换一下
                setshopDatas({ data: r, status: 'idle' });
            }
            else if (new RegExp('^/shopDetail').test(sourcePath)) {
                setshopDatas({ data: [props.location.state], status: 'idle' });
            }
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
        let promise = null;
        if (address.data.addressId === undefined) {
            message.info('请选择地址');
            return;
        }
        if (sourcePath === '/shoppingCart') {
            // 发送网络请求
            promise = shoppingCartCommitOrder({
                userId: props.loginData.userId,
                shopId: props.shopId,
                addressId: address.data.addressId,
                orderstatus: 3,

            });
        }
        promise.then(d => {
        
            // 页面跳转
            props.history.push({
                pathname: '/pay',
                state: {
                    price: getTotalPrice(shopDatas.data),
                    source: '/submitOrder',
                    orderId: d.data.result.orderId,
                    sourcePath
                }
            });
        })
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

const r = connect(mapStateToProps)(SubmitOrder);
r.wrappers = ['@/router/ShowHeader'];

r.title = '提交订单';
export default r;