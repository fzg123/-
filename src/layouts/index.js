import React, { useState, useEffect, createRef } from 'react'
import styles from './index.css'
import Menu from '../component/menu'
import Header from '../component/common/containers/Header'
import { connect } from 'dva'
import Modal from '../component/common/Modal'
import ctx from './context'
import Mask from '../component/common/Mask'
import DisplayInform from '../component/common/DisplayInform'
import { specific } from '../router/ShowHeader'
import { message } from 'antd';
import useListen from './useListen'
import qDImg from '../assets/min-img/img/60.png'
import useTransition from './useTransition'
function Layouts(props) {
    const [flagShowHintModal, setFlagShowHintModal] = useState(null); // 为 null 表示不显示蒙层
    const [flagShowActivity, setflagShowactivity] = useState(false); // 是否显示签到页面
    const arr = ['/shoppingCart', '/mine'];  // 不需要使用头部组件的页面

    const contentRef = createRef();
    const containerRef = createRef();
    const initOpacity = '.3';

    // useTransition(() => flag, containerRef, contentRef, initOpacity, props);  // 每次渲染页面 都 过度一下透明度 实现淡显效果

    /**
     * 需要使用到通用布局的页面路径
     */
    const needShowNav = ['/', '/getIntoBuy', '/vogueFruit/\\w+', '/shoppingCart', '/mine']
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
                ref={containerRef}
                className={styles.container}
               
            >
                {/* 头部 */}
                {
                    !arr.includes(props.location.pathname) ? (<Header />) : ''
                }



                {/* 内容区 */}
                <div
                    ref={contentRef}

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
                    ref={contentRef}
                 
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
    loginData: state.loginData
})
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Layouts);