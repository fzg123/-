import React from 'react'
import styles from './index.css'
import MenuItem from './MenuItem'

import h from '../../assets/min-img/img/9.png'
import r from '../../assets/min-img/img/9.png'
import s from '../../assets/min-img/img/10.png'
import g from '../../assets/min-img/img/11.png'
import w from '../../assets/min-img/img/12.png'

import _h from '../../assets/min-img/img/13.png'
import _r from '../../assets/min-img/img/13.png'
import _s from '../../assets/min-img/img/14.png'
import _g from '../../assets/min-img/img/15.png'
import _w from '../../assets/min-img/img/23.png'
export default function Menu(props) {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <MenuItem path='/' text='首页' icon={{
                        def: h,
                        active: _h
                    }} active={props.location.pathname === '/'} />

                </li>
                <li>
                    <MenuItem path='/getIntoBuy' text='入园采购' icon={{
                        def: r,
                        active: _r
                    }} active={props.location.pathname === '/getIntoBuy'} />

                </li>
                <li>
                    <MenuItem path='/vogueFruit' exact text='时令水果' icon={{
                        def: s,
                        active: _s
                    }} active={/^\/vogueFruit/.test(props.location.pathname)} />

                </li>
                <li>
                    <MenuItem path='/shoppingCart' text='购物袋' icon={{
                        def: g,
                        active: _g
                    }} active={props.location.pathname === '/shoppingCart'} />

                </li>
                <li>
                    <MenuItem path='/mine' text='我的' icon={{
                        def: w,
                        active: _w
                    }} active={props.location.pathname === '/mine'} />

                </li>
            </ul>
        </nav>
    )
}
