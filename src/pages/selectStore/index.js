import React, { useState } from 'react'
import styles from './index.less'
import { Input } from 'antd';
import NearbyStore from '../../component/selectStore/NearbyStore'
import CurrentPosition from '../../component/selectStore/CurrentPosition'
function selectStore() {
    const [store, setstore] = useState('');
    const nearbyStoreDatas = [
        {
            storeName: "长沙上河国际店",
            distance: 17.97,
            address: '上河国际c1栋22号'
        },
        {
            storeName: "长沙上河国际店",
            distance: 17.97,
            address: '上河国际c1栋22号'
        },
        {
            storeName: "长沙上河国际店",
            distance: 17.97,
            address: '上河国际c1栋22号'
        },{
            storeName: "长沙上河国际店",
            distance: 17.97,
            address: '上河国际c1栋22号'
        }
        ,{
            storeName: "长沙上河国际店",
            distance: 17.97,
            address: '上河国际c1栋22号'
        }
        ,{
            storeName: "长沙上河国际店",
            distance: 17.97,
            address: '上河国际c1栋22号'
        },{
            storeName: "长沙上河国际店",
            distance: 17.97,
            address: '上河国际c1栋22号'
        }
        ,{
            storeName: "长沙上河国际店",
            distance: 17.97,
            address: '上河国际c1栋22号'
        }
    ]
    return (

        <div className={styles['select-store']}>
            <div className={styles["search"]}>
                <Input style={{ backgroundColor: 'rgb(225,242,236)', borderRadius: '10px' }} value={store} onChange={(e) => setstore(e.target.value)} placeholder='搜索门店' type="text" />

            </div>
            <div className={styles['current-position']}>
                <CurrentPosition


                    address='湖南省长沙市天心区南北大道'
                    detailedAddress='天心区长沙远航企业广场(南北干道东)'

                />

            </div>
            <NearbyStore nearbyStoreDatas={nearbyStoreDatas} />

        </div>
    )
}
selectStore.title = '选择门店';
selectStore.wrappers = ['@/router/ShowHeader'];
export default selectStore;
