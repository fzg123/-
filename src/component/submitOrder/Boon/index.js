import React from 'react'
import styles from './index.css'
import Link from '../../common/Link'
import {
    RightOutlined
} from '@ant-design/icons';
import { connect } from 'dva'
/**
 *  integral
 * @param {*} props 
 */
function Boon(props) {

    return (
        <div className={styles['boon']}>
            <Link to={props.path.integral}>
                <div className={styles['integral']}>
                    <span>积分抵扣</span>
                    <span>{props.integral}积分<RightOutlined /></span>
                </div>
            </Link>
            <Link to={{
                pathname: props.path.boon,
                state: {
                    path: '/shoppingCart'
                }
            }} target='/'>
                <div onClick={()=>{
                    props.setTargetPath({
                        key: '/myBoon',
                        value: '/submitOrder'
                    })
                }} className="dikou">
                    <span>优惠卷</span>
                    <span>暂无可用优惠卷<RightOutlined /></span>
                </div>
            </Link>

        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    setTargetPath(obj) {
        dispatch({
            type: 'quitTargetPath/setTargetPath',
            payload: obj
        })
    }
})

export default connect(null, mapDispatchToProps)(Boon);