import React from 'react'
import styles from './index.css'
import propTypes from 'prop-types'
import Center from '../../common/Center'
Advert.propTypes = {
    imgSrc: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired
}
export default function Advert(props) {
    return (
   
            <div onClick={() => {
                props.onClick();
            }} className={styles.advert}>
                <img src={props.imgSrc} />
            </div>
      
    )
}
