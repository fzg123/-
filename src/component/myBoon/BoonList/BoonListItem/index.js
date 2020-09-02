import React from 'react'
import styles from './index.css'
export default function BoonListItem(props) {
    return (
        <li className={styles['item']}>
            <img src={props.imgData} alt=""/>
        </li>
    )
}
