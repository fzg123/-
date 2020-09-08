import React from 'react'
import styles from './index.css'
import ShopList from '../../component/home/HotShop/ShopList'
import { connect } from 'dva'
import img from '../../assets/min-img/img/72.png'

function OrderAccomplist(props) {

    return (
        <div className={styles['order-accomp-list']}>
            <div className={styles["img"]}>
                <div className={styles["center"]}>
                    <img src={img} />
                    <span>订单完成</span>
                </div>
            </div>
            <div className={styles["btn"]}>
                <div className={styles["btn-center"]}>
                    <div onClick={() => { props.history.push(props.location.state.targetPath) }} className={styles["select-order"]}>
                        继续选购
                    </div>
                    <div
                        onClick={() => {
                            props.setTargetPath(props.location.state.targetPath)
                            props.history.push('/myOrder/all')
                            
                        }}
                        className={styles["select-order"]}
                    >
                        查看订单
                    </div>
                </div>
            </div>
            <div className={styles["guess-you-like"]}>
                <p>
                    你可能还喜欢
                </p>
                <ShopList
                    shopDatas={[]}
                />
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    setTargetPath(path) {
        dispatch({
            type: 'quitTargetPath/setTargetPath',
            payload: {
                key: '/myOrder',
                value: path
            }
        })
    }
})

const r = connect(null,mapDispatchToProps)(OrderAccomplist);
r.wrappers = ['@/router/ShowHeader'];

r.title = '订单完成'
export default r;