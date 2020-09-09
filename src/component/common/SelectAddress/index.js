import React, { useState, useReducer } from 'react'
import styles from './index.less'
import getHeader from './getHeader'
import getAddressList from './getAddressList'
import addressData from '../../../assets/json/five-level-address.json'
SelectAddress.defaultProps = {
    shengId: null,
    shiId: null,
    xianId: null,
    onEnterAddress: () => false,  //确认地址事件
}
export default function SelectAddress(props) {

    const [address, dispatch] = useReducer((state, { type, payload }) => {
        let data;
        switch (type) {
            case 'setAddress':

                data = {
                    ...state,
                    ...payload
                }
                if (payload.shengId !== undefined) {
                    data.shiId = null;
                    data.xianId = null;
                }
                else if (payload.shiId !== undefined) {
                    data.xianId = null;
                }
                return data;

        }
    }, { shengId: null, shiId: null, xianId: null })
    // 当前正在选择的页
    const [currentSelect, setcurrentSelect] = useState(0);
    // 控制显示 省市县  0 为省 1为市 2为县
    const [index, setindex] = useState(0);

    // 地址列表
    const addressList = getAddressList(index, addressData, address, styles, setindex, dispatch, props, { setcurrentSelect });

    const headerContent = getHeader(index, addressData, address, styles, setindex, dispatch, { currentSelect, setcurrentSelect });
    return (
        <div className={styles['select-address']}>
            <div className={styles["header"]}>
                <div className={styles['left']}>
                    {headerContent}
                </div>
                <div onClick={() => { props.onClose && props.onClose() }} className={styles['right']}>X</div>
            </div>
            <div className={styles['content']}>
                {
                    addressList
                }
            </div>
        </div>
    )
}
