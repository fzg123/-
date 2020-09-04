import React from 'react'
import styles from './index.less'
export default function CityItem(props) {
    return (
        <li onClick={() => { props.onClick(props) }} className={props.className + ' ' + styles['city-item']}>
            {props.name}
        </li>
    )
}
