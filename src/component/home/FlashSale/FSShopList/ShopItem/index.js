import React from 'react'
import propTypes from 'prop-types'
import styles from './index.css'
// import { Link } from 'umi'
import Link from '@/component/common/Link'
index.propTypes = {
    imgSrc: propTypes.string.isRequired,
    shopName: propTypes.string.isRequired,
    price: propTypes.oneOfType([
        propTypes.number,
        propTypes.string
    ]), //现价
    _price: propTypes.oneOfType([
        propTypes.number,
        propTypes.string
    ]), //原价
}

export default function index(props) {
    return (
        <Link to={props.path}>
            <li className={styles.shop}>

                <div className={styles.shop}>
                    <img src={props.imgSrc} alt="" />
                    <p>{props.shopName}</p>
                </div>
                <div className={styles.price}>
                    <span>
                        {props.price}
                    </span>
                    <span>
                        {props._price}
                    </span>
                </div>
            </li>

        </Link>

    )
}
