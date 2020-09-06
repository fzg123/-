import React, { useEffect, useState } from 'react'
import styles from './index.css'
import Placeholder from '../../component/common/Placeholder'
import Summation from '../../component/submitOrder/Summation'
import Boon from '../../component/submitOrder/Boon'
import ShopList from '../../component/submitOrder/ShopList'
import { connect } from 'dva'
import DispatchOrDate from '../../component/submitOrder/DispatchOrDate'
import ShowUserData from '../../component/submitOrder/ShowUserData'
import joinImgSrc from '../../utils/joinImgSrc'
import { getAllShop } from '@/api'
import Loading from '../../component/common/Loading'
function SubmitOrder(props) {
    const [shopDatas, setshopDatas] = useState([]);
    useEffect(() => {
        (async function () {
            const shopItems = (await getAllShop(props.loginData.userId)).data.result;
            let r = getActiveShopItem(shopItems);

            r = r.map(e => ({  // 由于组件内使用的属性名跟从服务器得到的不一致  所有转换一下
                imgSrc: joinImgSrc(e.fruit.fruitImagesUrl, e.fruit.fruitImagesCount > 1),
                name: e.fruit.fruitName,
                msg: e.fruit.fruitText,
                price: e.shoppingCount * e.fruit.fruitInventedPrice,
                userId: props.loginData.userId,
                fruitcount: e.shoppingCount,
                fruitId: e.fruit.fruitId,
                num: e.shoppingCount
            }))
            setshopDatas(r);
        }())
    }, [])
    let totalPrice = 0;

    shopDatas.forEach(e => totalPrice += e.price);
    totalPrice = totalPrice.toFixed(2);
    function getActiveShopItem(shops) {
        return shops.filter(e => e.shoppingStatus === 1);
    }

    const content = (
        <div className={styles['submit-order']}>
            <ShowUserData

                userName='小甜甜'
                phone='136133244312'
                address='湖南省长沙市发生大家看法大家是否可见湖南省长沙市发生大家是否可见'
            />
            <DispatchOrDate />
            <ShopList datas={shopDatas} />
            <Boon path={{ integral: '/integralMall', boon: '/myBoon/notApply' }} integral={23} />
            <Placeholder height={96} />
            <div className={styles["summation"]}>
                <Summation
                    summation={totalPrice}
                    boon={0}
                    onSubmitOrder={() => {
                        console.log('提交订单操作')
                    }}
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
    loading: state.loading.models.shopCartItem
})
const mapDispatchToProps = dispatch => ({
    onGetShopDatas(id) {
        return dispatch({
            type: 'shopCartItem/fetchShopItems',
            payload: id
        })
    }
})
const r = connect(mapStateToProps, mapDispatchToProps)(SubmitOrder);
r.wrappers = ['@/router/ShowHeader'];

r.title = '提交订单';
export default r;