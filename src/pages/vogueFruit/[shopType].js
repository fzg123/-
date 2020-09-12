import React, { useState, useEffect } from 'react'
import ShopList from '../../component/vogueFruit/ShopList'
import { getFruitgoods, getManagerFruitgoods } from '../../api'
import Loading from '../../component/common/Loading'
export default function index(props) {
    const type = props.match.params.shopType;
    const [shopDatas, setshopDatas] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {

        if (type === 'selectRecommend') {
            getManagerFruitgoods(1).then(d => {
                setshopDatas({
                    data: d.data.result,
                    loading: false
                })
            })
        }
        else {
            getFruitgoods(type).then(d => {
                setshopDatas({
                    data: d.data.result,
                    loading: false
                });
            })
        }
        return () => {
           
        }
    }, [type])

    return (
        <>
            {shopDatas.loading ?
                <Loading></Loading>
                :
                <ShopList shopDatas={shopDatas.data} type={props.match.params.shopType}></ShopList>
            }
        </>


    )
}
