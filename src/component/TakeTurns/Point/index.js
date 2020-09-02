import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class Point extends Component {
    static propTypes = {
        imgNum: PropTypes.number.isRequired, // 有几张图片
        onChange: PropTypes.func,
        currentImg: PropTypes.number.isRequired // 当前是第几张图片
    }
    render() {
        const pointArr = [];
        for (let i = 0; i < this.props.imgNum; i++) {
            const ele = <li
                key={i}
                className={this.props.currentImg === i ? 'active' : ''}
                onClick={() => {
                    this.props.onChange && this.props.onChange(i);
                }}
            />
            pointArr.push(ele);
        }
        return (
            <ul id={'take-turns-point'}>
                {pointArr}
            </ul>
        )
    }
}
