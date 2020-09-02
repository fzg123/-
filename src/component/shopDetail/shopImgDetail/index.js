import React from 'react'
import styles from './index.css'
export default function ShopImgDetail(props) {
    const lis = props.imgs.map((e, i) => <li key={i}><img key={i} src={e}></img></li>)
    return (
        <ul className={styles['shop-img-detail']}>
            {lis}
        </ul>
    )
}
