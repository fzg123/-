import React from 'react'
import styles from './index.css'
import joinImgSrc from '@/utils/joinImgSrc'
import Link from '../../../common/Link'
import { withRouter } from 'umi'

function ShopListItem(props) {
    const imgUrl = joinImgSrc(props.fruitImagesUrl, props.fruitImagesCount != 1);
    return (


        <li className={styles.item} onClick={() => {
            props.history.push('/shopDetail/' + props.fruitId)
        }}>

            <img src={imgUrl} alt="" />

            <div className={styles.msg}>
                <p>
                    {props.fruitName}
                </p>
                <p>
                    {props.fruitText}

                </p>
                <div className={styles.left}>
                    <p>
                        距结束: {Math.floor((Math.random() * 40)) + 3}天
                    </p>
                    <p>
                        ￥{props.fruitPrice}
                    </p>
                </div>
                <div onClick={(e)=>{e.stopPropagation()}}>
                    <Link to='/noDevelopment'>
                        <div className={styles.right}>
                            去抢购
                    </div>
                    </Link>
                </div>


            </div>

        </li>


    )
}

export default withRouter(ShopListItem);