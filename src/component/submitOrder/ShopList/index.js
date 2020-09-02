import React from 'react'
import styles from './index.css'
import ShopListItem from './ShopListItem'
import {
    PhoneFilled
  } from '@ant-design/icons';
/**
 * 
 * @param {*} props 
 * 
 */
export default function index(props) {
    // props.datas
    const lis = props.datas.map((e, i) => (<ShopListItem key={i} {...e} />))
    return (
        <div className={styles['shop-list']}>
            <ul>
                {lis}
            </ul>
            <p>
                <PhoneFilled style={{color:'rgb(102,235,190)'}} />
                <span className={styles['text']}>联系门店</span>
            </p>
        </div>

    )
}
