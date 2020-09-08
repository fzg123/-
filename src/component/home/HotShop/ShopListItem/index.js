import React from 'react'
import styles from './index.css'
import img from '../../../../assets/min-img/img/7.png'
import joinImgSrc from '../../../../utils/joinImgSrc'
import Link from '../../../common/Link'
import { message } from 'antd'
import { addShopCart } from '@/api'
import { connect } from 'dva'
import { addShopingCart } from '../../../../_config'
function index(props) {
    let imgSrc = joinImgSrc(props.fruitImagesUrl, props.fruitImagesCount > 1);
    return (
        <li className={styles['shop-list-item']}>
            <Link to={'/shopDetail/' + props.fruitId}>
                <div className={styles.left}>
                    <img src={imgSrc} alt="" />

                </div>
                <div className={styles.right}>
                    <p>
                        {props.fruitName}
                    </p>
                    <p>
                        {props.fruitText}
                    </p>
                    <p className={styles.type}>
                        {/* {props.type.map((e, i) => (<span key={i}>{e}</span>))} */}
                        <span >满减</span>
                    </p>
                    <p>
                        <span className={styles['cur-price']}>￥{props.fruitPrice}</span>
                        <span className={styles['pre-price']}>￥ {props.fruitInventedPrice}</span>
                    </p>
                </div>
                <div
                    className={styles['go-shop']}
                    onClick={(e) => {
                        addShopingCart(
                            e,
                            { fruitId: props.fruitId, userId: props.loginData.userId },
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