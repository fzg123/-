import React, { useState, useEffect } from 'react'
import styles from './index.css'
import { connect } from 'dva'
import { upDataUser } from '../../api'
import { message } from 'antd';
function PersonalData(props) {
    const { userId, userYnVip, userBalance, userName, userSex, userPassWord, userNickname, userBirthday, userImagesUrl } = props.loginData;
    const obj = {
        imgSrc: userImagesUrl || 'https://dummyimage.com/1038x298/50B347/FFF&text=Mock.js',
        name: userNickname,
        accountNum: userName,
        sex: userSex === '男' ? 1 : 0,
        birthday: userBirthday,
        userYnVip: userYnVip
    }
    const inputChange = (key, value) => {
        setuserData({
            ...userData,
            [key]: value
        })
    }
    const enterSave = async () => {
        const { imgSrc, name, userBirthday, accountNum, birthday, userYnVip } = userData;
        const sex = userData.sex === 1 ? '男' : '女';

        const result = await upDataUser({
            userBirthday: birthday,
            userPassWord: userPassWord,
            userNickname: name,
            userSex: sex,
            userId: userId,
        })
        if (result.status === 'success') {
            message.success("修改成功");
            props.upDataLoginData(userId)
        }
    }
    const [userData, setuserData] = useState(obj);
    return (
        <div className={styles['personal-data']}>
            <div className={styles["touxiang"]}>
                <div className={styles["center"]}>
                    <img src={userData.imgSrc} alt="" />
                    <span>{userData.name}</span>
                </div>
            </div>
            <div className={styles["form"]}>
                <div className={styles["item"]}>
                    <label>当前账号</label>
                    <span>
                        {userData.accountNum}
                    </span>

                </div>
                <div className={styles["item"]}>
                    <label>昵 &nbsp;&nbsp;&nbsp;&nbsp;称</label>
                    <input onChange={(e) => inputChange('name', e.target.value)} value={userData.name} type="text" />

                </div>
                <div className={styles["item"] + ' ' + styles['sex']}>
                    <div className={styles["center"]}>
                        <span onClick={() => {
                            setuserData({
                                ...userData,
                                sex: 1
                            })
                        }} className={userData.sex === 1 ? styles['active'] : ''}>先生</span>
                        <span onClick={() => {
                            setuserData({
                                ...userData,
                                sex: 0
                            })
                        }} className={userData.sex === 0 ? styles['active'] : ''}>女士</span>
                    </div>
                </div>
                <div className={styles["item"]}>
                    <label>生 &nbsp;&nbsp;&nbsp;&nbsp;日</label>
                    <input onChange={(e) => inputChange('birthday', e.target.value)} value={userData.birthday} type="text" />

                </div>
                <div className={styles["item"]}>
                    <label>会员等级</label>
                    <span>{userData.userYnVip === 0 ? '普通会员' : ''}</span>

                </div>
            </div>
            <div onClick={() => {
                enterSave();
            }} className={styles["enterUpdate"]}>
                保存信息
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    loginData: state.loginData
})
const mapDispatchToProps = dispatch => ({
    upDataLoginData(id) {
        dispatch({
            type: 'loginData/upDataLoginData',
            payload: id
        })
    }
})
const r = connect(mapStateToProps, mapDispatchToProps)(PersonalData);
r.title = '个人资料';
r.wrappers = ['@/router/ShowHeader']
export default r;
