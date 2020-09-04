import React from 'react'
import styles from './index.css'
import { pageDatas } from './viewDatas'
import { NavLink, withRouter } from 'umi'

function MenuList(props) {
    const lis = pageDatas.map((e, i) => (<li key={i}>
        <NavLink activeClassName={styles.active} to={e.path}>
            <span>
                {e.text}
            </span>
            <div className={styles.line}></div>
        </NavLink>
    </li>))
    return (
        <ul className={styles['menu-list']}>
            {lis}
        </ul>
    )
}

export default withRouter(MenuList)