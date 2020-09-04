import React, { useEffect, useState } from 'react'
import styles from './index.css'
import ShopItem from './ShopItem'
import TakeTurns from '../../../TakeTurns'
import FSShopItems from '../FSShopItems'
import { getXianShiQG } from '@/api'

export default function index(props) {
    const [shopData, setshopData] = useState([]);
    let total;
    const num = 3; // 每列的数量
    const items = [];
    let index = 1;
    if (shopData.length !== 0) {

        total = shopData.length;
        while (true) {
            if (total <= 0) {
                break;
            }
            const item = <FSShopItems
                datas={shopData.filter((e, i) => (index - 1) * num <= i && i < index * num)}
            />
            items.push(item);
            total -= 3;
            index++;
        }

        index++;
    }

    useEffect(() => {
        (async function () {
            const result = await getXianShiQG();
            setshopData(result.data.result);
        }())
    }, [])



    return (
        <div className={styles['shop-list']}>
            <TakeTurns

                imgSrcs={items}
                width={props.TakeTurnsWidth - 40}
                height={200}
                howFreight={'custom'}
                flagAuto={true}
                waitAutoTime={3000}
            />

        </div>

    )
}
