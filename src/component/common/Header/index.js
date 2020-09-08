import React from 'react'
import styles from './index.css'
import logo from '@/assets/min-img/img/73.png'
import Link from '../../common/Link'
import PropTypes from 'prop-types'
import { withRouter } from 'umi'
import search from '@/assets/min-img/img/21.png'
import {
    SearchOutlined
    , DownOutlined,
    RightOutlined,
    AppstoreAddOutlined
} from '@ant-design/icons';
function Header(props) {
    const { loginData } = props;

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <Link to='/'><img src={logo} alt="" /></Link>

                <div onClick={() => {
                    props.history.push('/selectCity')
                }} className={styles.address}>
                    <h3>
                        {props.address == null ? '点此去选择地址' : props.address.name}
                    </h3>
                    <RightOutlined />
                </div>



            </div>
            <div className={styles.right}>
                <Link to='/noDevelopment'>
                    <img src={search} style={{ width: '3.0rem', height: '3rem', cursor: 'pointer' }} alt="" />
                </Link>

                <Link to='/noDevelopment'>
                    <AppstoreAddOutlined style={{ fontSize: '2.3rem', cursor: 'pointer',color:'rgb(112,112,112)' }} />
                </Link>
            </div>
            <div className={styles.line}></div>
        </header>
    )
}
export default withRouter(Header);