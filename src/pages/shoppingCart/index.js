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
    let allPrice = null; // 总价
    props.shopDatas.forEach(e => {   // 得到总价
        if (e.shoppingStatus != 1) return;
        allPrice += (e.shoppingCount * e.fruit.fruitInventedPrice)
    })

    allPrice = allPrice && allPrice.toFixed(2); // 保留两位小数

    const notData = <div className={styles['bottom']}><NotData /></div>; // 没有数据要展示的内容

    // 主要的内容页面
    const mainPage = (<div className={styles['shoppingCart']}>
        {props.shopDatas.length !== 0 ?
            <>
                <Header onClick={() => {
                    setflagShowModal(true);
                    let flag = false;
                    const promises = [];  // 得到所有删除商品项的promise  
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
                    /**
                     * 通知后端删除，并重新发送ajax请求，重新渲染数据
                     */
                }}></Header>
                <ShopList onChange={(newShopData) => {
                    props.setShopitem(newShopData);
                }} datas={props.shopDatas}></ShopList>

                <div className={styles['footer']}>
                    <Footer
                        onAllChecked={() => {
                            const check = isAllChecked ? 0 : 1;
                            props.setAllShopStatus(check)
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
        {flagShowModal ? <Loading /> : null}

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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(shoppingCart);