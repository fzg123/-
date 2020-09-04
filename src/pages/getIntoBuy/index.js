import React, { useEffect, useState } from 'react'
import ShopList from '../../component/getIntoBuy/ShopList'
import styles from './index.css'
import { ruYuanCaiGou } from '@/api'
import Loading from '../../component/common/Loading'

export default function index() {
    useEffect(() => {
        (async function () {
            const result = await ruYuanCaiGou();
            setshopData({
                data:result.data.result,
                status:false
            });
           
        }())

    }, [])
    const [shopData, setshopData] = useState({
        data: [],
        status: true
    })
    return (
        <div className={styles['get-into-buy']}>


            {shopData.status ? <Loading /> :
                <>
                    <div style={{ height: 10 }}></div>
                    <ShopList shopDatas={shopData.data} />
                    <div style={{ height: 10 }}></div>
                </>
            }


        </div>

    )
}
