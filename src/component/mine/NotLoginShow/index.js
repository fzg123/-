import React from 'react'
import styles from './index.less'
import Link from '../../../component/common/Link'
export default function NotLoginShow() {
    return (
        <div className={styles['not-login-show']}>
            <p><Link to='/login'>登录</Link> / <Link to='/enroll'>注册</Link></p>
        </div>
    )
}
