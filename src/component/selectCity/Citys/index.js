import React from 'react'
import styles from './index.less'
import CityItem from '../CityItem'
export default function City({ datas, ...props }) {
    const lis = datas.map((e, i) => {

        return <CityItem
            className={i % 4 == 0 ? styles['view-end'] : ''}
            key={e.id}
            {...e}
            onClick={props.onClick}
        />
    })
    return (
        <div id={props.id} className={styles['city']}>
            <div className={styles['header']}>
                {props.text}
            </div>
            <ul className={styles['content']}>
                {lis}

            </ul>
        </div>
    )
}
