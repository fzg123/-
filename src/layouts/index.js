import React, { useState, useEffect } from 'react'
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
import pxToRem from '../utils/listenOrRem'

// import d from '../assets/json/five-level-address.json'
function Layouts(props) {
    console.log('重新渲染了');
    const [flagShowHintModal, setFlagShowHintModal] = useState(null); // 提示窗口 为 null 表示不显示蒙层
    const [flagShowActivity, setflagShowactivity] = useState(false); // 是否显示签到页面
    const arr = ['/shoppingCart', '/mine'];  // 不需要使用头部组件的页面
    useEffect(() => {
        pxToRem();
        
    }, [])
    /**
     * 需要使用到通用布局的页面路径
     */
    const needShowNav = ['/', '/getIntoBuy', '/vogueFruit/\\w+', '/shoppingCart', '/mine']
    if (props.address === null && props.location.pathname != '/details' && props.location.pathname != '/selectCity') {

        props.history.push('/selectCity'); // 如果还没有选择地区就进入首页的话  就重定向至选择城市页面
    }
    const flag = needShowNav.some(e => new RegExp('^' + e + '$').test(props.location.pathname));

    return (

        <ctx.Provider
            value={{
                flagShowModal: flagShowHintModal,
                setFlagShowModal: (obj) => { // 控制显示或者隐藏 提示的窗口
                    setFlagShowHintModal(obj);
                },
                setflagShowactivity  // 控制 显示或者隐藏  签到窗口
            }}
        >
            {/* 判断是否需要通用布局组件 */}
            {flag ? <div

                className={styles.container}

            >
                {/* 头部 */}
                {
                    !arr.includes(props.location.pathname) ? (<Header />) : ''
                }
                {/* 内容区 */}
                <div

                    style={{ height: 'calc(100% - 7rem)' }}
                    className={styles.content}
                >
                    {props.children}
                </div>


                {/* 脚部 */}
                <div className={styles.footer}>
                    <Menu location={props.location}></Menu>
                </div>

            </div>
                :

                <div

                    className={styles.content}
                >
                    {props.children}
                </div>
            }


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
                        onClick={() => {
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
    loginData: state.loginData,
    address: state.selectAddress
})
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Layouts);