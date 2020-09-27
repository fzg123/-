import React, { useState, useEffect } from 'react'
import { getDefaultHarvestAddress } from '../../../api'
import styles from './index.css'
import {
    PhoneFilled
} from '@ant-design/icons';
import img from '../../../assets/min-img/img/user.png'
import NotDefaultAddress from '../../submitOrder/NotDefaultAddress'
import { connect } from 'dva'
import { withRouter } from 'umi'
function ShowUserData(props) {
    
    const clickHandle = _ => props.history.push({
        pathname: '/addressManage',
        state: {
            ...props.location.state,
            source: '/submitOrder',
        }
    });
    return (
        <div className={styles['show-user-data']} onClick={clickHandle}>
            {Array.isArray(props.address.data) ?
                <NotDefaultAddress />
                :
                <>
                    <p>
                        <span className={styles['user']}>
                            <img src={img} alt="" />
                            {props.address.data.addressName}
                        </span>
                        <span>
                            <span>
                                <PhoneFilled />
                            </span>
                            {props.address.data.addressPhone}
                        </span>
                    </p>
                    <p>
                        地址: {props.address.data.addressText}
                    </p>
                </>
            }

        </div>
    )
}
const mapStateToProps = state => ({
    loginData: state.loginData
})
export default connect(mapStateToProps)(withRouter(ShowUserData));