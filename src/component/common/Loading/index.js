import Mask from './Mask'
import { Spin, Space } from 'antd';
import React from 'react'
import styles from './index.less'
import PropTypes from 'prop-types'

Loading.propTypes = {
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
   
}
Loading.defaultProps = {
    width: '100%',
    height: '100%'
}
export default function Loading(props) {
    const style = {
        width: props.width,
        height: props.height
    }
    return (
        <div style={{ width: props.width, height: props.height }} className={styles['loading']}>

            <Mask customPosition={'absolute'}>
                <Space size="middle">
                    <Spin size="large" />
                </Space>
                <p className={styles['msg']}>加载中...</p>
            </Mask>


        </div>
    )
}
