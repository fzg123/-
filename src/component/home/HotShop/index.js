import React,{useEffect,useState} from 'react'
import ShopList from './ShopList'
import styles from './index.css'
import Center from '../../common/Center'
import { createRef } from 'react'
import {getAllHotShop} from '../../../api'

export default function HotShop() {
    const [shopDatas, setshopDatas] = useState([])
    useEffect(()=>{
        (async function(){
            const r = await getAllHotShop({
                shopId: 1,
                showCount: 3
            });
            console.log(r)
            setshopDatas(r.data.result);
        }())
        
    }, [])
   
    
    return (
      
<div className={styles['hot-shop']}>
            <h2>
                门店热销
                
            </h2>
            <ShopList shopDatas={shopDatas}/>
        </div>

       
        
    )
}
