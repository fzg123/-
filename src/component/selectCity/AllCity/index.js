import React from 'react'
import Citys from '../Citys'
import arr from '../config'
export default function AllCity(props) {
    const citys = [];
    arr.forEach((initial, i) => {
        if (props.datas[initial] === undefined) return;
        citys.push(<Citys id={initial} key={i} text={i === 0 ? '按字母排序 ' + initial : initial} datas={props.datas[initial]} />)
    })

    return (
        <div>
            {citys}
        </div>
    )
}
