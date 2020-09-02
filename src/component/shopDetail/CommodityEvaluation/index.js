import React from 'react'
import styles from './index.css'
import { Link } from 'umi'
import Appraise from '../Appraise'
import {
    RightOutlined
} from '@ant-design/icons';
/**
 * 商品评价模块
 * @param {} props 
 */
export default function CommodityEvaluation(props) {
    const lis = props.datas.map((e, i) => (<Appraise key={i} {...e}></Appraise>))
    return (
        <div className={styles['commodityEvaluation']}>
            <header>
                <div className={styles['left']}>
                    <span>商品评价 ({props.datas.length})</span>
                </div>
                <div className={styles['right']}>
                    <Link to='/'>查看更多评价 <RightOutlined /></Link>
                </div>
            </header>
            <ul className="wrapper">
                {lis}
            </ul>
        </div>
    )
}
