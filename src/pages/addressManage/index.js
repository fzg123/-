import React from 'react'
import styles from './index.less'
import { Link } from 'umi'

import AddressList from '../../component/addressManage/AddressList'
/**
 * 地址管理页
 */
AddressManage.wrappers = ['@/router/ShowHeader'];
AddressManage.title = '地址管理';
function AddressManage() {
    return (
        <div className={styles['address-manage']}>
            <div className={styles["header"]}>
                <div className={styles["right"]}>
                    <Link to="/">新增地址</Link>
                </div>
            </div>
            <div className="content">
                <AddressList
                    addressDatas={[
                        {
                            name: '小甜甜',
                            phone: '123514135',
                            address: '湖南省长沙市长沙县长兴路1号',
                            isDefault: true
                        },
                        {
                            name: '小甜甜',
                            phone: '123514135',
                            address: '湖南省长沙市长沙县长兴路1号',
                            isDefault: false
                        }
                    ]}
                />
            </div>
        </div>
    )
}

export default AddressManage;
