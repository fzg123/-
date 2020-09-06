import React from 'react'
import styles from './index.less'
import { withRouter } from 'umi'
function NotDefaultAddress(props) {
    return (

        <div className={styles['not-default-address']}>
            <div onClick={() => {
               
                props.history.push('/addressManage');
            }} className="icon">
                您还没有地址，点击去添加地址
            </div>
        </div>

    )
}
export default withRouter(NotDefaultAddress);
