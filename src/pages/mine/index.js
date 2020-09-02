import React from 'react'
import styles from './index.css'
import OperateOption from '../../component/common/OperateOption'
import UserData from '../../component/mine/UserData'
import OutLogin from '../../component/mine/containers/OutLogin'
import { connect } from 'dva'
import NotLoingShow from '../../component/mine/NotLoginShow'

import viewDatas from './data'

function Mine(props) {
    return (
        <div className={styles['mine']}>
            {props.loginData === null ? <NotLoingShow /> : <UserData></UserData>}

            <div className={styles['operate-wrapper']}>
                <OperateOption {...viewDatas.payData}></OperateOption>
                <OperateOption {...viewDatas.functionSelect}></OperateOption>
                {props.loginData !== null ? (<OutLogin />) : null}
            </div>

        </div>

    )
}
export default connect(state => ({ loginData: state.loginData }))(Mine);

