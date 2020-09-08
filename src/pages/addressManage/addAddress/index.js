import React, { useState, useEffect } from 'react'
import { Input, Form } from 'antd'
import styles from './index.less'
import { connect } from 'dva'
import { addAddress } from '../../../api'
import ctx from '../context'
import { message } from 'antd'
import Address from '../../../component/common/Address'
/**
 * 新增地址
 */
function AddAddress(props) {
    const [address, setaddress] = useState('');
    const [phone, setphone] = useState('');
    const [name, setname] = useState('');
    const onSubmit = () => {
        (async function () {
            const s = await addAddress({
                addressText: address,
                addressName: name,
                addressPhone: phone,
                userId: props.loginData.userId
            })

            message.success('新增地址成功');
            if (props.location.state && props.location.state.targetPath === '/submitOrder') {
                props.history.push({
                    pathname: '/submitOrder',
                    state: {
                        data: {
                            addressText: address,
                            addressName: name,
                            addressPhone: phone,
                            userId: props.loginData.userId,
                            addressId: s.data.result.addressId
                        },
                        dataType: 'address',
                        source: '/addAddress'
                    }
                });
            }
            else {
                console.log(props.history)
                props.history.goBack();
            }
        }())
    }
    return <div className={styles['add-address']}>
        <div className={styles['center']}>
            <Address />
        </div>

    </div>


}

const mapStateToProps = state => ({
    loginData: state.loginData
})
const r = connect(mapStateToProps)(AddAddress);
r.wrappers = ['@/router/ShowHeader'];
r.title = '添加地址';
export default r;
