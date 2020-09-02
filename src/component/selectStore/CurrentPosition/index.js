import React from 'react'
import styles from './index.less'
import {
    RightOutlined
} from '@ant-design/icons';
import img from '../../../assets/min-img/img/69.png'
export default function CurrentPosition(props) {
    return (
        <div className={styles['current-position']}>
            <p><img src={img} alt="" /><span>当前位置</span></p>
            <div>
                <div className={styles["left"]}>
                    <p>
                        {props.detailedAddress}
                    </p>
                    <p>
                        {props.address}
                    </p>
                </div>
                <div className="right">
                    <RightOutlined />
                </div>
            </div>
        </div>
    )
}
