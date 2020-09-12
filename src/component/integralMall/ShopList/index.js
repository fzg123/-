import React from 'react'
import styles from './index.css'
import ShopListItem from './ShopListItem'
import Link from '../../common/Link'
import { noDevelopment } from '@/_config'
// shopDatas
export default function ShopList(props) {
    const lis = props.shopDatas.map((e, i) => (<Link key={i} to={noDevelopment}><ShopListItem {...e} /></Link>))
    return (
        <ul className={styles['shop-list']}>
            {lis}
        </ul>
    )
}
