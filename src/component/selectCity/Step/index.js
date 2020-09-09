import React from 'react'
import styles from './index.less'
import arr from '../config'
Step.defaultProps = {
    datas: {}
}
export default function Step(props) {


    const lis = arr.map((e, i) => {
        if (props.datas[e] === undefined) return;
        return <a
            key={i}
            data-id={e}
            onClick={event => {
                event.preventDefault();
                document.getElementById(e).scrollIntoView()
            }}
            href={'#' + e}
        ><li>{e}</li></a>
    })
    return (
        <ul className={styles['step']}>
            {lis}
        </ul>
    )
}
