import React from 'react'
import styles from './index.less'
import PropTypes from 'prop-types'
import Countdown from '../../common/Countdown'
Header.propTypes = {
    status: PropTypes.number.isRequired
}
export default function Header(props) {

    let statusMsg;
    if (props.status === 3) statusMsg = '待付款';
    else if (props.status === 2) statusMsg = '待收货';
    else if (props.status === 4) statusMsg = '交易成功';
    else if (props.status === 0) statusMsg = '待评价';
    else if (props.status === 5) statusMsg = '已失效';
    return (
        <div className={styles['header']}>
            <div className={styles['left']}>
                {statusMsg}
            </div>
            <div className={styles['right']}>
                {
                    props.status === 3 ?

                        <Countdown
                            time={{ s: props.daoJiShi[0], f: props.daoJiShi[1], m: props.daoJiShi[2] }}
                            timeEnd={() => { console.log('时间到了') }}
                            dianColor={'rgb(102,233,193)'}
                        />

                        :
                        null
                }

            </div>
        </div>
    )
}
