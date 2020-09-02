import React from 'react'
import styles from './_layout.css'
import MenuList from '../../component/vogueFruit/MenuList'
import { Redirect } from 'umi'
export default function index(props) {
    if (props.location.pathname === '/vogueFruit') {
        return <Redirect to='/vogueFruit/1'></Redirect>
    }
    return (
        <div className={styles['vogue-fruit']}>

            <div className={styles['menu']}>
                <MenuList />
            </div>
            <div className={styles['shop-list']}>
                {props.children}
            </div>
        </div>
    )
}