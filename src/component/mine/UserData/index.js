import React from 'react'
import styles from './index.css'
import Bottom from './Bottom'
import Top from './Top'
import { connect } from 'dva'
function UserData(props) {

    return (
        <div className={styles['user-data']}>
            <Top
                userName={props.loginData.userName}
                grade={'普通会员'}
                userHeadSculptureSrc='https://dummyimage.com/1038x298/50B347/FFF&text=Mock.js'

            ></Top>
            <Bottom
                balance={props.loginData.userBalance}
                integral={props.loginData.userIntegral}
                preferentialVolume={props.loginData.userYhjCount}
            ></Bottom>
        </div>
    )
}
const mapStateToProps = state => ({
    loginData: state.loginData
})
export default connect(mapStateToProps)(UserData);
