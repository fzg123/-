import React from 'react'
import styles from './index.css'
import img from '../../../../assets/min-img/img/7.png'
import joinImgSrc from '../../../../utils/joinImgSrc'
import Link from '../../../common/Link'
import { message } from 'antd'
import { addShopCart } from '@/api'
import { connect } from 'dva'
import { addShopingCart } from '../../../../_config'
function index({ shopImages, name, msg, currentPrice, price, id }) {

    return (
        <li className={styles['shop-list-item']}>
            <Link to={'/shopDetail/' + id}>
                <div className={styles.left}>
                    <img src={shopImages} alt="" />

                </div>
                <div className={styles.right}>
                    <p>
                        {name}
                    </p>
                    <p>
                        {msg}
                    </p>
                    <p className={styles.type}>
                        <span >满减</span>
                    </p>
                    <p>
                        <span className={styles['cur-price']}>￥{price}</span>
                        <span className={styles['pre-price']}>￥ {currentPrice}</span>
                    </p>
                </div>
                <div
                    className={styles['go-shop']}
                    onClick={(e) => {
                        addShopingCart(
                            e,
                            { fruitId: id, userId: 1},
                            addShopCart,
                            (bool) => {
                                message.success('添加购物车成功');
                            }
                        )
                    }}
                >
                    <img src={img} alt="" />
                </div>
            </Link>

        </li>
    )
}
const mapStateToProps = state => ({
    loginData: state.loginData
})

export default connect(mapStateToProps)(index);