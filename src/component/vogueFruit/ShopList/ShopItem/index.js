import React from 'react'
import styles from './index.less'
import { message } from 'antd'
import { addShopCart } from '../../../../api'
import { connect } from 'dva'
import Link from '../../../common/Link'
import {addShopingCart} from '../../../../_config'
function ShopItem(props) {
    return (
        <li className={styles['shop-item']}>
            <Link to={'/shopDetail/' + props.id}>
                <div className={styles.left}>
                    <img src={props.imgSrc} alt="" />
                </div>
                <div className={styles.right}>

                    <p className={styles.name}>
                        {props.name}
                    </p>
                    <p className={styles.type}>

                        {props.type.map((e, i) => (<span key={i}>{e}</span>))}
                    </p>
                    <p className={styles['price']}>
                        <span className={styles['current-price']}><span className={styles.moeeny}>￥</span>{props.price.currPrice}</span>
                        <span className={styles['prev-price']}>{props.price.prevPrice}</span>
                    </p>
                </div>

                <div
                    className={styles['go-shop']}
                    onClick={(e) => {
                        addShopingCart(
                            e,
                            { fruitId: props.id, userId: props.loginData.userId },
                            addShopCart,
                            (bool) => {
                                if (bool) message.success('添加购物车成功');
                            }
                        )
                    }}
                ></div>


            </Link>

        </li>
    )
}
const mapStateToProps = state => ({
    loginData: state.loginData
})
export default connect(mapStateToProps)(ShopItem);