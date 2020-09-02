import React from 'react'
import styles from './index.css'
import img from '../../../../assets/min-img/img/7.png'
import { imgSrcRoot } from '@/_config.js'
export default function index(props) {
    /**
     * {
            src: 'https://dummyimage.com/216x200/50B347/FFF&text=Mock.js',
            shopName: '梨子',
            msg: '实力派',
            type: ['满减'],
            price: 17.8,
            _price: 18.9
        }
     * 
     */
    let imgSrc = imgSrcRoot;
    if (props.fruitImagesCount > 1) {
        imgSrc += props.fruitImagesUrl.replace(/(\.)/, ($, $1) => '1' + $1);
    }
    else imgSrc += props.fruitImagesUrl;
    return (
        <li className={styles['shop-list-item']}>
            <div className={styles.left}>


                <img src={imgSrc} alt="" />
                {/* <img src="http://n.sinaimg.cn/news/crawl/44/w550h294/20200723/4f4d-iwtqvyk4521648.jpg" alt=""/> */}
            </div>
            <div className={styles.right}>
                <p>
                    {props.fruitName}

                </p>
                <p>
                    {props.fruitName}
                </p>
                <p className={styles.type}>
                    {/* {props.type.map((e, i) => (<span key={i}>{e}</span>))} */}
                    <span >满减</span>
                </p>
                <p>
                    <span className={styles['cur-price']}>￥{props.fruitPrice}</span>
                    <span className={styles['pre-price']}>￥ {props.fruitInventedPrice}</span>
                </p>
            </div>
            <div className={styles['go-shop']}>
                <img src={img} alt="" />
            </div>
        </li>
    )
}
