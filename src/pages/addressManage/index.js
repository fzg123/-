import React, { useState, useEffect } from 'react'
import styles from './index.less'
import { Link } from 'umi'
import NotData from '../../component/common/NotData'
import AddressList from '../../component/addressManage/AddressList'
import { getAllUserAddress } from '../../api'
import { connect } from 'dva'
import { withRouter } from 'umi'
import ctx from './context'
/**
 * 地址管理页
 */

function AddressManage(props) {
    const [addressDatas, setaddressDatas] = useState([]);
    useEffect(() => {

        getAllUserAddress(props.loginData.userId).then(d => {
            if (d.data.result === '没有结果的亲') {
                setaddressDatas([]);
            }
            else {
                setaddressDatas(d.data.result);
            }
        })
    }, [])

    // 是否从提交订单页面跳转过来的
    const source = props.location.state != null && props.location.state.source === '/submitOrder';
    //点击了地址项
    const clickItemHandle = ({ addressId, addressText, addressName, addressPhone }) => {
        if (props.location.state != null && props.location.state.source === '/submitOrder') {
            props.history.push({
                pathname: props.location.state.source,
                state: {
                    data: { addressId, addressText, addressName, addressPhone },
                    source: '/shoppingCart',
                    dataType: 'address',
                }
            })

        }
    }
    // 点击了添加地址
    const addAddress = function () {
        let state = null;
        if (source) {
            state = { targetPath: '/submitOrder' };
        }
        props.history.push({
            pathname: props.location.pathname + '/addAddress',
            state
        })
    }
    // 点击了编辑
    const edit = function (addressData) {
        props.history.push({
            pathname: props.location.pathname + '/edit',
            state: {
                ...addressData,
                notShowDefault: addressData.default  // 是否不需要展示 选择默认地址
            }
        })
    }
    return (

        <div className={styles['address-manage']}>
            <div className={styles["header"]}>
                <div
                    onClick={() => {
                        addAddress();
                    }}
                    className={styles["right"]}
                >
                    添加地址
                </div>
            </div>
            <div className="content">
                {
                    addressDatas.length === 0
                        ?
                        <div className={styles['bottom']}><NotData text='暂时还没有地址, 快去添加吧~'></NotData></div>
                        :
                        <AddressList
                            onEdit={edit}
                            addressDatas={addressDatas}
                            onClick={clickItemHandle}
                        />

                }
            </div>
            {/* <div  className={styles['add-address']}>
                添加地址
               
            </div> */}
        </div>


    )
}
const mapStateToProps = state => ({
    loginData: state.loginData
})

const r = connect(mapStateToProps)(withRouter(AddressManage));
r.wrappers = ['@/router/ShowHeader'];
r.title = '地址管理';
export default r;
