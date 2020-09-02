import React, { useState } from 'react'
import styles from './index.css'
import Menu from '../component/menu'
import Header from '../component/common/containers/Header'
import { connect } from 'dva'
import Modal from '../component/common/Modal'
import ctx from './context'
import Mask from '../component/common/Mask'
import DisplayInform from '../component/common/DisplayInform'

import { message } from 'antd';

import qDImg from '../assets/min-img/img/60.png'
let unblock;
function Layouts(props) {
    const [flagShowHintModal, setFlagShowHintModal] = useState(null); // 为 null 表示不显示蒙层
    const [flagShowActivity, setflagShowactivity] = useState(false)
    const arr = ['/shoppingCart', '/mine']

   
    /**
     * 需要使用到通用布局的页面
     */
    const needShowNav = ['/', '/getIntoBuy', '/vogueFruit/\\d+', '/shoppingCart', '/mine']
    if (!needShowNav.some(e => new RegExp('^' + e + '$').test(props.location.pathname))) {
        return props.children;
    }


    return (
        <ctx.Provider
            value={{
                flagShowModal: flagShowHintModal,
                setFlagShowModal: (obj) => {
                    setFlagShowHintModal(obj);
                },
                setflagShowactivity
            }}
        >
            <div className={styles.container} >

                {
                    !arr.includes(props.location.pathname) ?
                        (<Header />)
                        : ''

                }

                <div className={styles.content}>
                    {props.children}
                </div>


                <div className={styles.footer}>
                    <Menu location={props.location}></Menu>
                </div>

            </div>
            {/* 没有登录情况下，提示用的对话框 */}
            <Modal
                afterCancelCallback={() => setFlagShowHintModal(false)}
                {...flagShowHintModal}
                isShow={!!flagShowHintModal}
            ></Modal>

            {/* 用于展示一些活动 例如 签到  */}
            <Mask
                flagShow={flagShowActivity}
                maskClick={() => setflagShowactivity(false)}
            >
                <DisplayInform
                    width={300}
                    height={390}
                >

                    <img
                        style={{ width: '100%', height: '100%' }}
                        src={qDImg}
                        onClick={()=>{
                            setflagShowactivity(false);
                            message.success('签到成功');
                        }}
                    />
                </DisplayInform>
            </Mask>
        </ctx.Provider>


    )
}
const mapStateToProps = state => ({
    loginData: state.loginData
})

export default connect(mapStateToProps)(Layouts);