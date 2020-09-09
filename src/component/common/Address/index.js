import React, { useState } from 'react'
import styles from './index.less'
import { Input, Switch } from 'antd'
import {
    RightOutlined
} from '@ant-design/icons';
import { getAddress } from '@/utils'
import Mask from '../../common/Mask'

function Address(props) {


    // 姓名
    const [name, setname] = useState(props.address ? props.address.name : '');
    // 手机号
    const [phone, setphone] = useState(props.address ? props.address.phone : '');

    // 详细地址
    const [address, setaddress] = useState('');

    // 是否默认地址
    const [moren, setmoren] = useState(props.address ? props.address.default : '');


    return (
        <>
            <ul className={styles['address']}>
                <li className={styles['item']}>
                    <div className={styles["left"]}>
                        收货人
                </div>
                    <div className={styles['right']}>
                        <Input value={name} onChange={(e) => { setname(e.target.value) }} placeholder="收货人姓名" bordered={false} />
                    </div>
                </li>
                <li className={styles['item']}>
                    <div className={styles["left"]}>
                        手机号码
                    </div>
                    <div className={styles['right']}>
                        <Input type='number' value={phone} onChange={(e) => { setphone(e.target.value) }} placeholder="收货人手机号码" bordered={false} />
                    </div>
                </li>
                <li className={styles['item']}>
                    <div className={styles["left"]}>
                        地址选择
                    </div>
                    <div onClick={() => props.onSelectCity()} className={styles['right'] + ' ' + styles['dizhi']}>
                        {/* 迫于无赖 只能这样写 */}
                        {(props.address && props.address.sheng) ? getAddress(props.address) : '点击选择'} <RightOutlined />
                    </div>
                </li>
                <li className={styles['item']}>
                    <div className={styles["left"]}>
                        详情地址
                    </div>
                    <div className={styles['right']}>
                        <Input value={address} onChange={(e) => { setaddress(e.target.value) }} placeholder="街道/学校/酒店" bordered={false} />
                    </div>
                </li>

            </ul>
            <div className={styles['default']}>

                <div className={styles["moren"]}>
                    是否为默认收货地址
                </div>
                <div>
                    <Switch onChange={(b) => { setmoren(b) }} checked={moren} defaultChecked />
                </div>
            </div>
            <div onClick={() => { props.onCommit && props.onCommit({ name, phone, address, default: moren }) }} className={styles["enter"]}>
                添加/修改
            </div>

        </>
    )
}

export default Address;