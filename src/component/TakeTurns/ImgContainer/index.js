import React, { Component } from 'react'
import propTypes from 'prop-types'
import './index.css'
import { Link } from 'umi'
export default class ImgContainer extends Component {
    static propTypes = {
        imgSrcs: propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.node])).isRequired,    // 每张图片的路径
        imgHrefs: (prop, propName, comName) => {     // 图片映射的地址
            if (prop[propName] == null || typeof prop[propName] === 'string') return;
            if (!prop[propName] instanceof Array) {
                // eslint-disable-next-line no-throw-literal
                throw `${prop}的属性为${typeof prop[propName]}, 期望的是一个数组`;
            } else if (prop[propName].length !== prop['imgSrcs'].length) {
                // eslint-disable-next-line no-throw-literal
                throw `${prop[propName]}的长度跟href对应的长度不一致`;
            }
        },
        width: propTypes.oneOfType([propTypes.string, propTypes.number]),// 容器宽度
        height: propTypes.oneOfType([propTypes.string, propTypes.number]),// 容器高度
        timeRequired: propTypes.number,
        howFreight: propTypes.string
    }
    static defaultProps = {
        howFreight: 'custom'
    }
    moveTo = (index) => {   // 运动到第几张图片
        // if (index < 0 || index > this.props.imgSrcs.length - 1) {
        //     return;
        // }

        let curLeft = parseFloat(window.getComputedStyle(this.imgContainer, null)['left']);// 当前位置

        let targetLeft = -index * this.props.width;//目标位置

        let moveDistance = targetLeft - curLeft;//运动的距离

        const howManyTimes = Math.ceil(this.props.timeRequired / 16);//移动的次数

        const everyMoveDistance = moveDistance / howManyTimes;//每次移动的距离

        let i = 0;
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            if (this.imgContainer === null) return null;
            i++;
            curLeft = parseFloat(window.getComputedStyle(this.imgContainer, null)['left']);// 当前位置
            this.imgContainer.style.left = curLeft + everyMoveDistance + 'px';
            if (i >= howManyTimes) {
                clearInterval(this.timer);
                this.imgContainer.style.left = targetLeft + 'px';
            }
        }, 16)
    }
    momentMoveTo = (index) => {

        let targetLeft = -index * this.props.width;//目标位置
        this.imgContainer.style.left = targetLeft + 'px';
    }
    imgContainerRef = (v) => {
        this.imgContainer = v;
    }
    render() {
        const p = this.props;
        let doms;

        if (p.howFreight === 'custom') {
            doms = p.imgSrcs.map((E, i) => {


                return <div style={{width: p.width}} className={'custom'} key={i}>{E}</div>
            })


            doms.push(<div className={'custom'} key={p.imgSrcs.length}>{p.imgSrcs[0]}</div>);
         
        }
        else {
            doms = p.imgSrcs.map((e, i) => {
                let href = typeof p.imgHref !== undefined ? (typeof p.imgHref === 'string' ? p.imgHref : p.imgHref[i]) : '#';
                return (
                    <Link
                        to={href}
                        key={i}
                        style={{
                            float: 'left',
                            width: p.width,
                            height: p.height,
                        }}
                    >
                        <img
                            src={e}
                            alt=""
                            style={{
                                width: '100%',
                                height: '100%'
                            }}

                        />
                    </Link>
                )
            })
            doms.push((
                <a
                    href={typeof p.imgHref === undefined ? (typeof p.imgHref === 'string' ? p.imgHref : p.imgHref[0]) : '#'}
                    key={'31452353254'}
                    style={{
                        float: 'left',
                        width: p.width,
                        height: p.height,
                    }}
                >
                    <img
                        src={this.props.imgSrcs[0]}
                        alt=""
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                    />
                </a>
            ));
        }

        return (
            <div
                className={'img-container ' + this.props.howFreight}
                ref={this.imgContainerRef}
                style={{
                    width: (p.imgSrcs.length + 1) * p.width,
                    height: p.height,
                    left: 0
                }}
            >
                {doms}
            </div>
        )
    }
}
