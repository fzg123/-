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

        (async function () {
            const s = await addAddress({
                addressText: getAddress(address, data.address, false),
                addressName: data.name,
                addressPhone: data.phone,
                userId: props.loginData.userId,
                addressDefault: data.default
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
    const onClose = (ctx) => {
        setFlagSelectCity(false);
    }
    const enterSelectCity = (address) => {
        setFlagSelectCity(false);
        setaddress(address);
    }
    return (
        <globalCtx.Consumer>
            {ctx => (
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

        </globalCtx.Consumer>

    )

}

const mapStateToProps = state => ({
    loginData: state.loginData
})
const r = connect(mapStateToProps)(AddAddress);
r.wrappers = ['@/router/ShowHeader'];
r.title = '添加地址';
export default r;
