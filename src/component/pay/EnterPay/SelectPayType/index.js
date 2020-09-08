import React, { useState } from 'react'
import i1 from '@/assets/min-img/img/67.png'
import i2 from '@/assets/min-img/img/68.png'
import styles from './index.less'
import { Radio } from 'antd';
import {connect} from 'dva'
import { message } from 'antd'
export default function SelectPayType(props) {
    const [value, setvalue] = useState(1);

    const clickWXPay = () => {  // 点击了微信支付
        // 由于暂时不支持微信支付 所以做了该处理 
        message.info('暂不支持微信支付');
    }
    return (
        <Radio.Group style={{ width: '100%' }} onChange={(e) => {
            setvalue(e.target.value);
        }} value={value}>


            <ul className={styles['select-pay-type']}>


                <li>
                    <div className={styles["left"]}>
                        <img src={i1} alt="" />
                        <div>
                            <p>
                                钱包余额支付
                    </p>
                            <p>
                                可用余额: ￥{props.balance}
                            </p>
                        </div>
                    </div>
                    <div className={styles["right"]}>
                        <Radio value={1}></Radio>
                    </div>
                </li>
                <li onClick={() => { clickWXPay() }}>
                    <div className={styles["left"]}>
                        <img src={i1} alt="" />
                        <div>
                            <p>
                                微信支付
                    </p>
                            <p>
                                可用余额: ￥ xxx
                        </p>
                        </div>
                    </div>
                    <div className={styles["right"]}>
                        <Radio disabled value={2}></Radio>
                    </div>
                </li>

            </ul>
        </Radio.Group>
    )
}
