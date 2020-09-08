import React from 'react'
import styles from './index.css'
import propTypes from 'prop-types'
import Center from '../../common/Center'
import Link from '../../common/Link'
Advert.propTypes = {
    imgSrc: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired
}
export default function Advert(props) {
    return (

        <div className={styles.advert}>
            <Link to='/noDevelopment'>
                <img src={props.imgSrc} />
            </Link>

        </div>

    )
}
