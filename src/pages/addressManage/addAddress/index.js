import React, { useState, useEffect } from 'react'
import { Input, Form } from 'antd'
import styles from './index.less'
import { connect } from 'dva'
import { addAddress } from '../../../api'
import ctx from '../context'
import { message } from 'antd'
import SelectAddress from '../../../component/common/SelectAddress'
import Mask from '../../../component/common/Mask'
import Address from '../../../component/common/Address'
import { getAddress } from '@/utils'
import globalCtx from '../../../layouts/context'

/**
 * 新增地址
 */
function AddAddress(props) {
    const [flagSelectCity, setFlagSelectCity] = useState(false);

    // 选择的地区
    const [address, setaddress] = useState(null);

    const onCommit = (data, ctx) => {
        if (address === null) {
            message.info('请选择城市');
            return;
        }
        (async function () {
            const s = await addAddress({
                addressText: getAddress(address, data.address, false),
                addressName: data.name,
                addressPhone: data.phone,
                userId: props.loginData.userId,
                addressDefault: data.default * 1,  // false => 0   true => 1
            })

            message.success('新增地址成功');
            if (props.location.state && props.location.state.targetPath === '/submitOrder') {
                console.log(props.location.state)
                props.history.push({
                    pathname: '/submitOrder',
                    state: {
                        ...props.location.state,
                        data: {
                            addressText: getAddress(address, data.address, false),
                            addressName: data.name,
                            addressPhone: data.phone,
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
    const onClose = (ctx) => {
        setFlagSelectCity(false);
    }
    const enterSelectCity = (address) => {
        setFlagSelectCity(false);
        setaddress(address);
    }
    return (

        <div className={styles['add-address']}>
            <div className={styles['center']}>
                <Address address={address} onCommit={(data) => { onCommit(data) }} onSelectCity={() => { setFlagSelectCity(true) }} />
            </div>
            <Mask flagShow={flagSelectCity} height={'50%'} wFlagInherit={true} position='bottom'>
                <SelectAddress onClose={() => { onClose() }} onEnterAddress={enterSelectCity} />
            </Mask>
        </div>


    )

}

const mapStateToProps = state => ({
    loginData: state.loginData
})
const r = connect(mapStateToProps)(AddAddress);
r.wrappers = ['@/router/ShowHeader'];
r.title = '添加地址';
export default r;
