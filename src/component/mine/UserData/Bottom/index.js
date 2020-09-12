import styles from './index.css'
import Inessential from '../../../common/Inessential'
import Link from '../../../common/Link'
import { noDevelopment } from '@/_config'
export default function (props) {
    return (
        <div className={styles['bottom']}>
            <div className={styles['content']}>
                <div className={styles['top']}>
                    <div className={styles['left']}>
                        <Inessential notCenter={true}></Inessential>
                    </div>
                    <div className={styles['right']}>
                        <Link to={noDevelopment}>查看会员权益></Link>

                    </div>
                </div>
                <div className={styles['mian']}>
                    <div className={styles['money']}>
                        <p className={styles['money'] + ' ' + styles['number']}>{props.balance}</p>
                        <p className={styles['msg']}>
                            钱包余额
                        </p>
                    </div>
                    <div className={styles['integral'] + ' '}>
                        <p className={styles['number']}>{props.integral}</p>
                        <p>我的积分</p>
                    </div>
                    <div className={styles['number youHuiJuan']}>
                        <p className={styles['number']}>{props.preferentialVolume}</p>
                        <p>优惠卷</p>

                    </div>
                </div>
            </div>
        </div>
    )
}