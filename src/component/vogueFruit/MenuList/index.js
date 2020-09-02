import React from 'react'
import styles from './index.css'
import { NavLink ,withRouter} from 'umi'

function MenuList(props) {
   
    const currentPath = props.location.pathname;
    return (
        <ul className={styles['menu-list']}>
            <li>
                <NavLink activeClassName={styles.active} to={'/vogueFruit'+ '/1'}>
                    <span>
                        轻食水果
                    </span>
                    <div className={styles.line}></div>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={styles.active} to={'/vogueFruit'+ '/2'}>
                    <span>
                        轻食水果
                    </span>
                    <div className={styles.line}></div>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={styles.active} to={'/vogueFruit'+ '/3'}>
                    <span>
                        轻食水果
                    </span>
                    <div className={styles.line}></div>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={styles.active} to={'/vogueFruit'+ '/4'}>
                    <span>
                        轻食水果
                    </span>
                    <div className={styles.line}></div>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={styles.active} to={'/vogueFruit'+ '/5'}>
                    <span>
                        轻食水果
                    </span>
                    <div className={styles.line}></div>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={styles.active} to={'/vogueFruit'+ '/6'}>
                    <span>
                        轻食水果
                    </span>
                    <div className={styles.line}></div>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={styles.active} to={'/vogueFruit'+ '/7'}>
                    <span>
                        轻食水果
                    </span>
                    <div className={styles.line}></div>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={styles.active} to={'/vogueFruit'+ '/8'}>
                    <span>
                        轻食水果
                    </span>
                    <div className={styles.line}></div>
                </NavLink>
            </li>

        </ul>
    )
}

export default withRouter(MenuList)