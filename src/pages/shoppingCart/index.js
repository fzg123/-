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
import { changeShopState, changeShopNum, getAllShop, deleteShop } from '../../api'
function shoppingCart(props) {
    const [flagShowModal, setflagShowModal] = useState(true)
    const [shopDatas, setshopDatas] = useState([]);
    const isAllChecked = shopDatas.every(e => e.shoppingStatus === 1);
    const [upDataItemMap, setUpDataItemMap] = useState([]);
    const handleShopItemState = (arr) => {
        arr.forEach(e => {

            if ('count' in e) {

                changeShopNum({
                    shoppingId: e.id,
                    count: e.count
                })
            } else {
                changeShopState({
                    shoppingId: e.id,
                    status: e.status
                })
            }
        })
    }
    useEffect(() => {  // 根据登录状态  显示不同的界面
        if (props.loginData !== null) {
            getAllShop(props.loginData.userId).then(d => {
                setshopDatas(d.data.result);
                setflagShowModal(false);
            })
        }
    }, [])
    useEffect(() => {   // 根据upDataItemMap 历史修改  更新服务端数据

        shoppingCart.timer = setTimeout(() => {
            let obj = {};
            const newUpDataItemMap = [];
            for (let i = upDataItemMap.length - 1; i >= 0; i--) {
                if (obj[upDataItemMap[i]['id']] === undefined) {
                    newUpDataItemMap.push(upDataItemMap[i])
                    obj[upDataItemMap[i]['id']] = 1;
                }
            }
            handleShopItemState(newUpDataItemMap);
        }, 100)
        return () => {
            clearTimeout(shoppingCart.timer);
        }
    })
    let allPrice = null; // 总价
    shopDatas.forEach(e => {
        if (e.shoppingStatus != 1) return;
        allPrice += (e.shoppingCount * e.fruit.fruitInventedPrice)
    })
    allPrice = allPrice && allPrice.toFixed(2);
    const notData = <div className={styles['bottom']}><NotData /></div>;
    // 修改商品项  先缓存起来  等到页面离开时  再统一发送ajax请求 
    const mainPage = (<div className={styles['shoppingCart']}>
        {shopDatas.length !== 0 ?
            <>
                <Header onClick={() => {

                    shopDatas.forEach(e => {
                        if (e.shoppingStatus == 1) {
                            deleteShop(e.shoppingId).then(d => {
                                if (d.status === 'success') {
                                    getAllShop(props.loginData.userId).then(d => {
                                        setshopDatas(d.data.result);
                                    })
                                }
                            })
                        }
                    })
                    /**
                     * 通知后端删除，并重新发送ajax请求，重新渲染数据
                     */
                }}></Header>
                <ShopList onChange={(newShopData) => {

                    let proxy;
                    let newItem;
                    const nD = newShopData;
                    if (newShopData.count !== undefined) {
                        newItem = { ...shopDatas[nD.index], shoppingCount: nD.count };
                    }
                    else {
                        newItem = { ...shopDatas[nD.index], shoppingStatus: nD.status };
                    }

                    const r = [].concat(shopDatas.slice(0, nD.index), newItem, shopDatas.slice(nD.index + 1, nD.length));
                    setshopDatas(r);
                    setUpDataItemMap([...upDataItemMap, newShopData]);
                }} datas={shopDatas}></ShopList>

                <div className={styles['footer']}>
                    <Footer
                        onAllChecked={() => {
                            const check = isAllChecked ? 0 : 1;
                            const r = shopDatas.map(e => ({ id: e.shoppingId, status: check }));
                            handleShopItemState(r);
                            setshopDatas(shopDatas.map(e => ({ ...e, shoppingStatus: check })));
                        }}
                        onPayTheBill={() => { // 点击了去结算

                        }}
                        isAllEnter={isAllChecked}
                        boon={0}
                        allPrice={allPrice || 0} />
                </div>
            </>
            :
            notData
        }
        {flagShowModal ? <div className={styles['loading']}><Loading /></div> : null}

    </div>);

    let r = props.loginData !== null ?
        // (shopDatas.length === 0 ? notData : mainPage) :
        mainPage :
        <p className={styles['not-login']}>您还未登录请先<Link to="/login">登录</Link>后, 再查看</p>;


    return r;
}
// shoppingCart.wrappers = ['@/router/ifNotLogin'];
const mapStateToProps = state => ({
    loginData: state.loginData
})

export default connect(mapStateToProps)(shoppingCart);