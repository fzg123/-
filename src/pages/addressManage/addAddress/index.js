import React, { useState, useEffect } from 'react'
import { Input, Form } from 'antd'
import styles from './index.less'
import { connect } from 'dva'
import { addAddress } from '../../../api'
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
            console.log(s)
        }())
    }
    return (
        <ul className={styles['add-address']}>
            <li className={styles['item']}>
                <label htmlFor="address">收获地址: </label>
                <input
                    value={address}
                    id='address'
                    type="text"
                    onChange={(e) => { setaddress(e.target.value) }}
                />
            </li>
            <li className={styles['item']}>
                <label htmlFor="name">姓名: </label>
                <input
                    value={name}
                    id='name'
                    type="text"
                    onChange={(e) => { setname(e.target.value) }}
                />
            </li>
            <li className={styles['item']}>
                <label htmlFor="phone">电话: </label>
                <input
                    value={phone}
                    id='phone'
                    type="text"
                    onChange={(e) => { setphone(e.target.value) }}
                />
            </li>
            <li>
                <button onClick={() => {
                    onSubmit();
                }}>添加</button>
            </li>
        </ul>
    )
}

const mapStateToProps = state => ({
    loginData: state.loginData
})
const r = connect(mapStateToProps)(AddAddress);
r.wrappers = ['@/router/ShowHeader'];
r.title = '添加地址';
export default r;
