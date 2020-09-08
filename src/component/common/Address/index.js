import React, { useState } from 'react'
import styles from './index.less'
import { Select } from 'antd'

import addressData from '../../../assets/json/five-level-address.json'
Address.defaultValue = {
    shengId: 17,
    shiId: 0,
    xianId: 0
}
function Address(props) {
    const { Option } = Select;
    // 省
    const [shengId, setShengId] = useState(props.shengId);
    // 市
    const [shiId, setShiId] = useState(props.shiId);
    // 县
    const [xianId, setXianId] = useState(props.xianId);

    // 得到省数据
    const shengData = addressData.map((e, i) => {
        return <Option id={i} key={i} value={i}>{e.name}</Option>
    });

    // 得到市数据
    let shiData = null;
    let shi = addressData[shengId].children;
    if (shi.length === 1) {

        shiData = shi[0].children.map((e, i) => {
            return <Option id={i} key={e.code} value={i}>{e.name}</Option>
        })
    }
    else {
        shiData = shi.map((e, i) => {
            return <Option id={i} key={e.code} value={i}>{e.name}</Option>
        })
    }


    let xian = null;
    let xianData = null;

    if (shi[shiId].length === 1) xian = shi[shiId].children[0];
    else xian = shi[shiId].children;
    xianData = xian.map((e, i) => {
        return <Option id={i} key={e.code} value={i}>{e.name}</Option>
    })
    return (
        <ul className={styles['address']}>
            <li className={styles['item']}>
                <div className={styles["header"]}>
                    地址选择
                </div>
                <div className="content">
                    <Select onChange={(value) => {
                        setShengId(value);
                    }} defaultValue={shengId}>

                        {shengData}
                    </Select>
                    <Select onChange={(value) => {
                        setShiId(value);
                    }} defaultValue={shiId}>

                        {shiData}
                    </Select>
                    <Select onChange={(value) => {
                        setXianId(value);
                    }} defaultValue={xianId}>

                        {xianData}
                    </Select>
                </div>
            </li>
        </ul>
    )
}

export default Address;