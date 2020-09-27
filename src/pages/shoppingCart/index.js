import React, { useState, useEffect } from 'react'
import Footer from '../../component/shoppingCart/Footer'
import ShopList from '../../component/shoppingCart/shopList'
import { tuple } from 'antd/lib/_util/type'
import styles from './index.css'
import Header from '../../component/shoppingCart/Header'
import NotData from '../../component/common/NotData'
import { connect } from 'dva'
import Loading from '../../component/common/Loading'
import Link from '../../component/common/Link'
import { message } from 'antd'
function shoppingCart(props) {
    const [flagShowModal, setflagShowModal] = useState(true)
    const isAllChecked = props.shopDatas.every(e => e.shoppingStatus === 1);
    useEffect(() => {  // 根据登录状态  显示不同的界面
        if (props.loginData !== null) {
            const bool = props.fetchShopItems(props.loginData.userId);
            bool.then(d => {
                if (d) {
                    setflagShowModal(false);
                }
            })
        }
    }, [])
    const getTotalPrice = function () {// 得到总价
        let allPrice = 0;
        props.shopDatas.forEach(e => {
            if (e.shoppingStatus != 1) return;
            allPrice += (e.shoppingCount * e.fruit.fruitPrice)
        })
        allPrice = allPrice && allPrice.toFixed(2); // 保留两位小数
        return allPrice;
    }
    const clickPayTheBill = function () {  // 点击了去结算要做的事情

        if (!props.shopDatas.some(e => e.shoppingStatus === 1)) {
            message.info('至少选择一个商品，再点击去结算');
            return;
        }
        props.setTargetPath({
            key: '/submitOrder',
            value: props.match.url
        })
        props.history.push({
            pathname: '/submitOrder',
            state: {
                source: '/shoppingCart',
                originSource: '/shoppingCart'
            }
        })
    }
    const deleteItems = function () {  // 删除购物车选中项
        setflagShowModal(true);
        let flag = false;
        const promises = [];  // 所有删除商品项的promise  
        props.shopDatas.forEach(e => {
            if (e.shoppingStatus == 1) {
                flag = true;
                const result = props.fetchRemoveShopItem(e.shoppingId);  // 删除该项
                promises.push(result);
            }
        })
        if (flag) {
            Promise.all(promises).then(d => {  // 等待全部删除完成
                props.fetchShopItems(props.loginData.userId);  // 刷新购物车
                setflagShowModal(false);
                message.success('删除成功');
            })
        }
    }

    const notData = <div className={styles['bottom']}><NotData /></div>; // 没有数据要展示的内容
    const content = (props.shopDatas.length !== 0 ?
        <>
            <Header onDelete={() => { deleteItems() }}></Header>
            {/* 商品数据来自于仓库 */}
            <ShopList onChange={(newShopData) => {
                props.setShopitem(newShopData);
            }} datas={props.shopDatas}></ShopList>

            <div className={styles['footer']}>
                <Footer
                    onAllChecked={() => {
                        const check = isAllChecked ? 0 : 1;
                        props.setAllShopStatus(check)
                    }}
                    onPayTheBill={() => { clickPayTheBill() }}  // 点击了去结算
                    isAllEnter={isAllChecked}  // 全选
                    boon={0} // 优惠了多少钱
                    allPrice={getTotalPrice()} />
            </div>
        </>
        :
        notData);
    // 主要的内容页面
    const mainPage = (<div className={styles['shoppingCart']}>
        {flagShowModal ? <Loading /> : content}

    </div>);

    let r = props.loginData !== null ?
        mainPage :
        <p className={styles['not-login']}>您还未登录请先<Link to="/login">登录</Link>后, 再查看</p>;
    return r;
}
const mapStateToProps = state => ({
    loginData: state.loginData,
    shopDatas: state.shopCartItem
})
const mapDispatchToProps = dispatch => ({
    fetchShopItems(id) {
        return dispatch({
            type: 'shopCartItem/fetchShopItems',
            payload: id
        })
    },
    setShopitem(newShopItem) {
        dispatch({
            type: 'shopCartItem/setShopitem',
            payload: newShopItem
        })
    },
    setAllShopStatus(status) {
        dispatch({
            type: 'shopCartItem/setAllShopStatus',
            payload: status
        })
    },
    fetchRemoveShopItem(id) {
        return dispatch({
            type: 'shopCartItem/fetchRemoveShopItem',
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

export default connect(mapStateToProps, mapDispatchToProps)(shoppingCart);