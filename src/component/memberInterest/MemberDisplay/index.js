import React from 'react'
import styles from './index.less'
export default function MemberDisplay(props) {
    return (
        <div className={styles['member-display']}>
            <p>等级说明</p>
            <div className="img-wrp">
                <img src={props.imgSrc} alt=""/>
            </div>
        </div>
    )
}
