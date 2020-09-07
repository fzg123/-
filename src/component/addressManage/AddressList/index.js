import React from 'react'
import styles from './index.css'
import AddressListItem from './AddressListItem'
export default function AddressList(props) {
    const lis = props.addressDatas.map((e, i) => {
        return (
            <AddressListItem onClick={props.onClick} key={i} {...e} />
        )
    })
    return (
        <ul className={styles['address-list']}>
            {lis}
        </ul>
    )
}
