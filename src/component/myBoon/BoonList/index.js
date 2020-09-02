import React from 'react'
import styles from './index.css'
import BoonListItem from './BoonListItem'
export default function BoonList(props) {
    const lis = props.imgData.map((e, i) => (<BoonListItem imgData={e} key={i} />))
    return (
        <ul className={styles['boon-list']}>
            {lis}
        </ul>
    )
}
