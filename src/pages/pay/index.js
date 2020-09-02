import React,{useState} from 'react'
import styles from './index.less'
import EnterPay from '../../component/pay/EnterPay'
import {
    RightOutlined
  } from '@ant-design/icons';
import Mask from '../../component/common/Mask'
import { tuple } from 'antd/lib/_util/type';
function pay() {
    const [flagShowPay, setflagShowPay] = useState(true)
    return (
        <div className={styles['pay']}>
            <div className={styles["time"]}>
                <div className={styles["left"]}>
                    <span>待支付</span> <RightOutlined />
                </div>
                <div className="right">
                    剩余时间 00 : 59 : 56
                </div>
            </div>
            <div className={styles["msg"]}>
                <p>
                    请尽快支付订单
                    
                </p>
                <span>
                    提货方式: 自提
                </span>
            </div>
            <div className={styles['wait-pay']}>
                <div className={styles["btn1"]}>
                    取消支付
                </div>
                <div className={styles["btn2"]}>
                    待支付
                </div>
            </div>

           <Mask 
                flagShow={flagShowPay}
                position={'bottom'}
                wFlagInherit={true}
           >
                <EnterPay
                    price={
                    15.67 
                    }
                    balance={200}
                />
           </Mask>
        </div>
    )
}
pay.wrappers = ['@/router/ShowHeader'];
pay.title = '支付';
export default pay;
