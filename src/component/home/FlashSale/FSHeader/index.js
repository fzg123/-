import React from 'react'
import styles from './index.css'
import s from '@/assets/min-img/img/6.png'
import { NavLink } from 'umi'
import Countdown from '../../../common/Countdown'
export default function index() {
    return (
        <div className={styles.top}>
            <div className={styles.left}>
                <div className={styles.msg}>
                    <p>
                        <img src={s} alt="" />
                        <span>限时抢购</span>
                    </p>
                    <p>
                        欢乐秒杀 嗨购时刻
                    </p>
                </div>
                <div className={styles.time}>
                    <p>
                        本场还剩
                    </p>
                    <div>
                        <Countdown
                            time={{
                                s: 0,
                                f: 13,
                                m: 60
                            }}
                            timeEnd={()=>{console.log('时间到了')}}
                            bgColor={'rgb(94,94,94)'}
                            color={'white'}
                            dianColor={'rgb(94,94,94)'}
                        ></Countdown>
                    </div>
                </div>

            </div>
            <div className={styles.right}>
                <p>
                    <NavLink to='/'>
                        全部商品&gt;&gt;
                    </NavLink>
                </p>
            </div>
        </div>
    )
}
