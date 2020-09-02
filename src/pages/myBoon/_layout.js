import React from 'react'
import styles from './index.css'
import { NavLink } from 'umi'
function MyBoon(props) {
    return (
        <div className={styles['my-boon']}>
            <ul className={styles["nav"]}>
                <li>
                    <NavLink activeClassName={styles['active']} to={'/myBoon' + '/notApply'}>
                        未使用
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles['active']} to={'/myBoon' + '/alreadyApply'}>
                        已使用
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles['active']} to={'/myBoon' + '/overdue'}>
                        已过期
                    </NavLink>
                </li>
            </ul>
            <div className={styles['content']}>
                {props.children}
            </div>
        </div>
    )
}
MyBoon.wrappers = ['@/router/ShowHeader'];
MyBoon.title = '我的优惠卷';
export default MyBoon;
