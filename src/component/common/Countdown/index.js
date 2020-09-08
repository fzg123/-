import React, { useState, useEffect } from 'react'
import styles from './index.css'
import propTypes from 'prop-types'

Countdown.propTypes = {
    time: propTypes.shape({   // 时分秒
        s: propTypes.number,
        f: propTypes.number,
        m: propTypes.number
    }).isRequired,
    timeEnd: propTypes.func.isRequired,// 倒计时到了要执行的函数
    bgColor: propTypes.string,
    color: propTypes.string
}
Countdown.defaultProps = {
    bgColor: 'white',
    color: 'rgb(101,232,188)',
    dianColor: 'white',
    timeSpace: 1000
}
let timer = null;
export default function Countdown(props) {
    const [time, settime] = useState({
        ...props.time
    })
    const [stopCountdown, setstopCountdown] = useState(false)
    useEffect(() => {
        const checkUp = () => {clearTimeout(timer);}

        if (time.m === 0) {

            if (time.f === 0) {
                if (time.s === 0) {
                    if (stopCountdown) return;
                    props.timeEnd();
                    setstopCountdown(true);
                    return checkUp;
                }
                timer = setTimeout(() => {
                    settime({
                        ...time,
                        s: time.s - 1,
                        f: 59
                    });

                }, props.timeSpace)
                return checkUp;
            }
            timer = setTimeout(() => {
                settime({
                    ...time,
                    m: 59,
                    f: time.f - 1
                })
            }, props.timeSpace);

            return checkUp;

        }

        timer = setTimeout(() => {
            settime({
                ...time,
                m: time.m - 1
            })

        }, props.timeSpace)

        return checkUp;
    });


    return (
        <div className={styles['countdown']}>
            <div style={{ backgroundColor: props.bgColor }} className={styles["time"]}>
                <span style={{ color: props.color }}>
                    {(time.s + '').length === 1 ? '0' + time.s : time.s}
                </span>
            </div>
            <span style={{ color: props.dianColor, lineHeight: '30px' }}>:</span>
            <div style={{ backgroundColor: props.bgColor }} className={styles["time"]}>
                <span style={{ color: props.color }}>
                    {(time.f + '').length === 1 ? '0' + time.f : time.f}
                </span>
            </div>
            <span style={{ color: props.dianColor, lineHeight: '30px' }}>:</span>
            <div style={{ backgroundColor: props.bgColor }} className={styles["time"]}>
                <span style={{ color: props.color }}>
                    {(time.m + '').length === 1 ? '0' + time.m : time.m}
                </span>
            </div>
        </div>
    )
}
