import React from 'react'
import styles from './index.less'
import PropTypes from 'prop-types'
Mask.propTypes = {
    position: PropTypes.oneOf(['center', 'bottom']),
    bgColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
Mask.defaultProps = {
    bgColor: 'rgba(0,0,0,.45)',
    position: 'center'
}
export default function Mask(props) {
    const position = {
        center: {
            position: 'absolute',
            top: '25%',
            left: '50%',
            transform: 'translate(-50%, 0%)'
        },
        bottom: {
            position: 'absolute',
            bottom: 0,
            left: 0
        }
    }
    return (
        <div style={{ backgroundColor: props.bgColor }} className={styles['mask']}>
            <div style={{...position[props.position]}} className={styles["content"]}>
                {props.children}
            </div>
        </div>
    )
}
