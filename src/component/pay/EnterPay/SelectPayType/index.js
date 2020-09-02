import React, { useState } from 'react'
import i1 from '@/assets/min-img/img/67.png'
import i2 from '@/assets/min-img/img/68.png'
import styles from './index.less'
import { Radio } from 'antd';
export default function SelectPayType(props) {
    const [value, setvalue] = useState(1)
    return (
        <Radio.Group style={{width:'100%'}} onChange={(e) => {
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
                <li>
                    <div className={styles["left"]}>
                        <img src={i1} alt="" />
                        <div>
                            <p>
                                微信支付
                    </p>
                            <p>
                                可用余额: ￥ 0
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
