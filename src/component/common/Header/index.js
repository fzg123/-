import React from 'react'
import styles from './index.css'
import logo from '@/assets/min-img/img/73.png'
import { Link, NavLink } from 'umi'
import PropTypes from 'prop-types'

import search from '@/assets/min-img/img/21.png'
import {
    SearchOutlined
    , DownOutlined,
    RightOutlined,
    AppstoreAddOutlined
} from '@ant-design/icons';
export default function Header(props) {
    const { loginData } = props;
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <Link to='/'><img src={logo} alt="" /></Link>
                {loginData !== null ?
                    (<div className={styles.address}>
                        <h3>
                            武汉保利心语东区店
                                </h3>
                        <RightOutlined />
                    </div>)
                    :
                    (<div className={styles.os}>
                        <span>
                            您暂未登录，请先<Link to="/login">登录</Link>或<Link to="/enroll">注册</Link>
                        </span>

                    </div>)
                }

            </div>
            <div className={styles.right}>
                <img src={search} style={{ width: '3.0rem', height: '3rem', cursor: 'pointer' }} alt="" />
                <AppstoreAddOutlined style={{ fontSize: '2.3rem', cursor: 'pointer' }} />
            </div>
            <div className={styles.line}></div>
        </header>
    )
}
