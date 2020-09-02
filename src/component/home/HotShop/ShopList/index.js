import React from 'react'
import propTypes from 'prop-types'
import ShopListItem from '../ShopListItem'
import styles from './index.css'
ShopList.propTypes = {
    shopDatas: propTypes.array.isRequired
}
export default function ShopList(props) {
    
    const r = props.shopDatas.map((e,i) => (<ShopListItem {...e} key={e.fruitId} />))
    return (
        <ul className={styles.shopList}>
            {r}

        </ul>
    )
}
