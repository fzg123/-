import React, { useEffect, useState } from 'react'
import ShopList from '../../component/getIntoBuy/ShopList'
import styles from './index.css'
import {ruYuanCaiGou} from '@/api'
export default function index() {
    useEffect(()=>{
        (async function(){
            const result = await ruYuanCaiGou();
            console.log(result)
        }())
        
    }, [])
    const [shopData, setshopData] = useState([])
    return (
        <div className={styles['get-into-buy']}>
            <div style={{ height: 10 }}></div>
            <ShopList shopDatas={shopData} />
            <div style={{ height: 10 }}></div>
        </div>
    )
}
