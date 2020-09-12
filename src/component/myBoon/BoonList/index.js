import React from 'react'
import styles from './index.css'
import BoonListItem from './BoonListItem'
import Link from '../../common/Link'
import { noDevelopment } from '@/_config'
export default function BoonList(props) {
    const lis = props.imgData.map((e, i) => (<Link key={i} to={noDevelopment}><BoonListItem imgData={e} /></Link>))
    return (
        <ul className={styles['boon-list']}>
            {lis}
        </ul>
    )
}
