import React, { useState } from 'react'
import Address from '../../../component/common/Address'
import styles from './index.less'
import Mask from '../../../component/common/Mask'
import SelectAddress from '../../../component/common/SelectAddress'
import { getAddress } from '@/utils'
import { editAddress, deletaAddress } from '@/api'
import { message } from 'antd'
import { connect } from 'dva'
import globalCtx from '../../../layouts/context'
function Edit(props) {

    const [flagSelectCity, setflagSelectCity] = useState(false);
    // 选择的地址
    const [address, setaddress] = useState({
        name: props.location.state.name,
        phone: props.location.state.phone,
        default: props.location.state.default * 1,  // false => 0   true => 1
        // address:  由于后端返回的数据原因 初始地址无法注入
        // xQAddress: 详情地址   由于后端原因 无法注入
    });
    const onCommit = (data) => {
        if (address === null) {
            message.info('请选择城市');
            return;
        }
        (async function () {
            const result = await editAddress({
                addressId: props.location.state.id,
                addressText: getAddress(address, data.address, false),
                addressPhone: data.phone,
                addressName: data.name,
                addressDefault: data.default * 1,
                userId: props.loginData.userId
            });
            message.success('修改成功');
            props.history.goBack();
        }())

    }
    // 删除操作
    const deleteAddress = async (ctx) => {
        ctx.setFlagShowModal({
            title: '提示',
            children: '真的要删除该地址吗?',
            afterEnterCallback: async () => {
                const r = await deletaAddress(props.location.state.id);
                message.success('删除成功');
                props.history.goBack();
                ctx.setFlagShowModal(null);  // 同时关掉蒙层
            }
        })

    }
    const enterSelectCity = (address) => {
        setflagSelectCity(false);
        setaddress(address);
    }
    return (
        <globalCtx.Consumer>
            {ctx => (<div className={styles['edit']}>
                <div className={styles["center"]}>
                    <Address notShowDefault={props.location.state.notShowDefault} address={address} onCommit={onCommit} onSelectCity={() => { setflagSelectCity(true) }} />
                    <div onClick={e => { deleteAddress(ctx) }} className={styles['delete']}>删除该地址</div>
                </div>
                <Mask flagShow={flagSelectCity} height={'50%'} wFlagInherit={true} position='bottom'>
                    <SelectAddress onClose={() => { setflagSelectCity(false) }} onEnterAddress={enterSelectCity} />
                </Mask>
            </div>)}
        </globalCtx.Consumer>

    )
}

const mapStateToProps = state => ({
    loginData: state.loginData
})
const r = connect(mapStateToProps)(Edit);
r.wrappers = ['@/router/ShowHeader'];
r.title = '编辑地址';
export default r;
