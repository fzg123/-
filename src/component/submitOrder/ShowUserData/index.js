import React, { useState, useEffect } from 'react'
import { getDefaultHarvestAddress } from '../../../api'
import styles from './index.css'
import {
    PhoneFilled
} from '@ant-design/icons';
import img from '../../../assets/min-img/img/user.png'
import NotDefaultAddress from '../../submitOrder/NotDefaultAddress'
import { connect } from 'dva'
function ShowUserData(props) {
    const [addressData, setAddressData] = useState({
        data: {},
        states: 'idle'
    })
    useEffect(() => {
        (async function () {
            const result = await getDefaultHarvestAddress(props.loginData.userId);
            setAddressData({
                data: result.data.result,
                states: 'idle'
            })

        }())
    }, [])
    return (
        <div className={styles['show-user-data']}>
            {Array.isArray(addressData.data) ?
                <NotDefaultAddress />
                :
                <>
                    <p>
                        <span className={styles['user']}>
                            <img src={img} alt="" />
                            {addressData.data.addressName}
                        </span>
                        <span>
                            <span>
                                <PhoneFilled />
                            </span>
                            {addressData.data.addressPhone}
                        </span>
                    </p>
                    <p>
                        地址: {addressData.data.addressText}
                    </p>
                </>
            }

        </div>
    )
}
const mapStateToProps = state => ({
    loginData: state.loginData
})
export default connect(mapStateToProps)(ShowUserData);