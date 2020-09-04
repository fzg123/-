import React, { useEffect, useState } from 'react'
import styles from './index.less'
import ShopItem from './ShopItem'
import TakeTurns from '../../../TakeTurns'
import FSShopItems from '../FSShopItems'
import { getXianShiQG } from '@/api'
import Loading from '../../../common/Loading1'
export default function index(props) {
    const [shopData, setshopData] = useState({
        data: [],
        status: 'loading'
    });
    let total;
    const num = 3; // 每列的数量
    const items = [];
    let index = 1;

    if (shopData.data.length !== 0) {

        total = shopData.data.length;
        while (true) {
            if (total <= 0) {
                break;
            }
            const item = <FSShopItems
                datas={shopData.data.filter((e, i) => (index - 1) * num <= i && i < index * num)}
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
            setshopData({
                data: result.data.result,
                status: 'finish'
            });
        }())
    }, [])



    return (
        <div className={styles['shop-list']}>
            {shopData.status === 'finish' ? <TakeTurns

                imgSrcs={items}
                width={props.TakeTurnsWidth - 40}
                height={200}
                howFreight={'custom'}
                flagAuto={true}
                waitAutoTime={3000}
            />
                :
            
                <div className={styles['center']}>
                    <Loading/>
                </div>
            }






        </div>

    )
}
