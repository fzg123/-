import React from 'react'
import styles from './index.css'
import layout_ctx from '../../../layouts/context'
import { enterOutLogin } from '@/_config'
export default function OutLogin(props) {
  
    return (
        <layout_ctx.Consumer>

            {value => {
                return (<div onClick={() => {
                    value.setFlagShowModal(Object.assign({}, enterOutLogin(), { afterEnterCallback: () => { props.outLogin(props.outLogin); value.setFlagShowModal(null); } }));
                }} className={styles['out-login']}>
                    退出登录
                </div>)
            }}
        </layout_ctx.Consumer>

    )
}
