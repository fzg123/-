import React from 'react'
import styles from './index.less'
import { Input } from 'antd';
function Details(props) {
    return (
        <div className={styles['details']}>
            <Input placeholder="输入学校/医院/写字楼" />
        </div>
    )
}
Details.wrappers = ['@/router/ShowHeader'];
Details.title = '详细位置'
export default Details;