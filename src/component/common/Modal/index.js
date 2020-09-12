import React from 'react'
import styles from './index.less'
import Mask from './Mask'
import PropTypes from 'prop-types'

Modal.defaultProps = {
    type: 'warning',
    isShowCancel: true
}
Modal.propTypes = {
    afterEnterCallback: PropTypes.func, // 确实之后的回调
    afterCancelCallback: PropTypes.func,// 取消之后的回调
    children: PropTypes.node,   // 内容区显示的内容
    title: PropTypes.string, // 标题，不传递就是用默认的
    isShow: PropTypes.bool, // 是否显示
    isShowCancel: PropTypes.bool,  //是否显示取消按钮
}

export default function Modal(props) {
    const types = {
        warning: {
            title: '警告',
            headerBgColor: 'rgb(255, 251, 230)'
        },
        hint: {
            title: '提示',
            headerBgColor: 'rgb(246,255,237)'
        }
    }
    // console.log(object)
    return (props.isShow ? (<Mask
        bgColor='rgba(0,0,0,.75)'
    >
        <div className={styles['modal']}>
            <header style={{ backgroundColor: types[props.type].headerBgColor }}>
                {props.title ? props.title : types[props.type].title}
            </header>
            <div className={styles["content"]}>
                <p>
                    {props.children}
                </p>
            </div>
            <footer>
                <div
                    onClick={() => {
                        props.afterEnterCallback && props.afterEnterCallback();
                    }}
                    className={styles["left"]}
                >
                    确认
        </div>
                {
                    props.isShowCancel
                        ?
                        <div
                            className={styles["right"]}
                            onClick={() => {
                                props.afterCancelCallback && props.afterCancelCallback();
                            }}
                        >
                            取消
                        </div>
                        : null}
            </footer>
        </div>
    </Mask>) : null)

}
