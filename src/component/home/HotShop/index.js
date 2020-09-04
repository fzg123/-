import React,{useEffect,useState} from 'react'
import ShopList from './ShopList'
import styles from './index.less'
import Center from '../../common/Center'
import { createRef } from 'react'
import {getAllHotShop} from '../../../api'
import Loading from '../../common/Loading'
export default function HotShop() {
    const [shopDatas, setshopDatas] = useState({
        data: [],
        loading: true // 加载状态
    })
    useEffect(()=>{
        (async function(){
            const r = await getAllHotShop({
                shopId: 1,
                showCount: 3
            });
            setshopDatas({
                data: r.data.result,
                loading: false
            });
        }())
        
    }, [])
    
    
    return (
      
<div className={styles['hot-shop']}>
            <h2>
                门店热销
                
            </h2>
            <div className={styles["content"]}>
                {shopDatas.loading ? <Loading></Loading> : <ShopList shopDatas={shopDatas.data}/>}
            </div>
            
            
        </div>

       
        
    )
}
