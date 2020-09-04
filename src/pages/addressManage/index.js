import React, { useState, useEffect } from 'react'
import styles from './index.less'
import { Link } from 'umi'
import NotData from '../../component/common/NotData'
import AddressList from '../../component/addressManage/AddressList'
import { getAllUserAddress } from '../../api'
import { connect } from 'dva'
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
    return (
        <div className={styles['address-manage']}>
            <div className={styles["header"]}>
                <div className={styles["right"]}>
                    <Link to="/">新增地址</Link>
                </div>
            </div>
            <div className="content">
                {
                    addressDatas.length === 0
                        ?
                        <div className={styles['bottom']}><NotData text='暂时还没有地址, 快去添加吧~'></NotData></div>
                        :
                        <AddressList
                            addressDatas={addressDatas}
                        />
                }

            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    loginData: state.loginData
})

const r = connect(mapStateToProps)(AddressManage);
r.wrappers = ['@/router/ShowHeader'];
r.title = '地址管理';
export default r;


/**
 *
 *
 * [
                        {
                            name: '小甜甜',
                            phone: '123514135',
                            address: '湖南省长沙市长沙县长兴路1号',
                            isDefault: true
                        },
                        {
                            name: '小甜甜',
                            phone: '123514135',
                            address: '湖南省长沙市长沙县长兴路1号',
                            isDefault: false
                        }
                    ]
 */