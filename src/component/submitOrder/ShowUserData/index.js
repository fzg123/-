import React from 'react'
import styles from './index.css'
import {
    PhoneFilled
} from '@ant-design/icons';
import img from '../../../assets/min-img/img/user.png'
export default function ShowUserData(props) {
    return (
        <div className={styles['show-user-data']}>
            <p>
                <span className={styles['user']}>
                    <img src={img} alt="" />
                    {props.userName}
                </span>
                <span>
                    <span>
                        <PhoneFilled />
                    </span>
                    {props.phone}
                </span>
            </p>
            <p>
                地址: {props.address}
            </p>
        </div>
    )
}
