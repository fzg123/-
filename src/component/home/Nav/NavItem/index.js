import React from 'react'
// import { NavLink } from 'umi'
import styles from './index.css'
// import NavLink from '../../../common/Link'
import NavLink from '@/component/common/Link'
export default function index(props) {
    return (
        <NavLink className={props.NavItem} to={props.path}>
            <div onClick={()=>{props.onClick && props.onClick()}} className={styles.container}>
                <p>
                    <img className={styles.img} src={props.src} alt="" />
                </p>
                <p>
                    {props.text}
                </p>

            </div>

        </NavLink>
    )
}
