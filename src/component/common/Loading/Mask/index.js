import React from 'react'
import styles from './index.less'
import PropTypes from 'prop-types'
Mask.propTypes = {
    position: PropTypes.oneOf(['center', 'bottom']),
    bgColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maskClick: PropTypes.func, // 点击蒙层区域时，做的事情
    flagShow: PropTypes.bool,
    wFlagInherit: PropTypes.bool //宽度是否继承
}
Mask.defaultProps = {
    bgColor: 'rgba(0,0,0,.8)',
    position: 'center',
    flagShow: true,
    wFlagInherit: false
}
export default function Mask(props) {
    const position = {
        center: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        bottom: {
            position: 'absolute',
            bottom: 0,
            left: 0
        }
    }
    return (
        props.flagShow ?
            <div
                onClick={() => {
                    props.maskClick && props.maskClick();
                }}
                style={{ backgroundColor: props.bgColor, position: props.customPosition || 'fixed' }}
                className={styles['mask']}
            >
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    style={{ ...position[props.position], width: props.wFlagInherit ? '100%' : 'auto' }}
                    className={styles["content"]}
                >
                    {props.children}
                </div>
            </div>
            :
            null
    )
}
