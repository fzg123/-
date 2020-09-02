import React from 'react'
import styles from './index.css'
export default function AddressListItem(props) {
    /**
     *  {
             name: '小甜甜',
              phone: '123514135',
              address: '湖南省长沙市长沙县长兴路1号',
              isDefault: true
          },
     * 
     * 
     */
    return (

        <li className={styles['address-list-item']}>
            <div className={styles["left"]}>

                <p>
                    <span className={styles['name']}>
                        {props.name}
                    </span>
                    <span className={styles['phone']}>
                        {props.phone}
                    </span>
                </p>
                <p className={styles['d_a'] + ' ' + (props.isDefault ? styles['active'] : '')}>
                    <span className={styles['default']}>默认</span>
                    <span className={styles['address']}>
                        {props.address}
                    </span>
                </p>
            </div>
            <div className={styles["right"]}>
                <span>编辑</span>
            </div>
        </li>
    )
}
