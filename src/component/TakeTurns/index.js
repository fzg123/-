import React, { Component } from 'react'
import ImgContainer from './ImgContainer'
import propTypes from 'prop-types'
import './index.css'
import HandleBtn from './handleBtn'
import Point from './Point'
import { createRef } from 'react'
export default class TakeTurns extends Component {
    static propTypes = {
        imgSrcs: propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.node])).isRequired,    // 每张图片的路径
        imgHrefs: propTypes.arrayOf(propTypes.string),//每张图片对应的链接地址
        width: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,// 容器宽度
        height: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,// 容器高度
        timeRequired: propTypes.number,//换一张图片所需时间
        model: propTypes.oneOf(['alternation', 'fadeToggle']), // 轮播的方式
        waitAutoTime: propTypes.number,
        flagAuto: propTypes.bool, // 是否自动轮播
        flagMobile: propTypes.bool  // 是否是移动端
    }
    state = {
        currentImg: 0
    }
    constructor(props) {
        super(props);
        this.btnRightRef = createRef();
        this.btnLeftRef = createRef();
        this.takeTurnsContainer = createRef();
    }
    timer = null;

    componentDidMount() {
        this.autoLunBo = () => {

            this.btnRightRef.current && this.btnRightRef.current.click();

        };
        if (this.props.flagAuto && this.props.imgSrcs.length > 1) {
            this.timer = setInterval(this.autoLunBo, this.props.waitAutoTime);
        }
        if (this.props.flagMobile) {
            this.takeTurnsContainer.current.addEventListener('touchstart', (e) => {

                clearInterval(this.timer);
                this.touchStartPageX = e.changedTouches[0].pageX;

            })
            this.takeTurnsContainer.current.addEventListener('touchend', (e) => {
                const r = this.touchStartPageX - e.changedTouches[0].pageX;
                // console.log(r)
                if (Math.abs(r) > 60) {
                    if (r < 0) {
                        this.btnLeftRef.current.click();

                    }
                    else {
                        this.btnRightRef.current.click();
                    }
                }




                this.timer = setInterval(this.autoLunBo, this.props.waitAutoTime);
            })

        }

    }
    static defaultProps = {
        imgSrcs: [],

        imgHref: '#',
        timeRequired: 200,
        model: 'alternation',
        isShowBtn: false,
        waitAutoTime: 2000,
        flagAuto: true,
        flagMobile: true
    }
    imgContainerRef = (v) => {
        this.imgContainer = v;
    }
    /**
     * index  索引
     * 
     * didBefore  移动之前做的事情
     * 
     * happenedAfter  移动之后做的事情
     */
    Database = {
        telesport: function (index, comp) {
            // console.log(index)
            comp.momentMoveTo(index);
        }
    }
    touchStartHandle = (e) => {
        console.log(e)
    }
    moveTo = (index, didBefore, happenedAfter) => {
        // console.log(index, didBefore, happenedAfter)
        if (didBefore && didBefore instanceof Array) {

            didBefore.forEach((e, i) => {
                if (!this.Database[e.name]) return;
                this.Database[e.name](...Object.values(e.params), this.imgContainer)
            })
        }



        if (this.props.model === 'alternation' && (happenedAfter && happenedAfter instanceof Array)) {
            this.setState({
                currentImg: 0
            }, () => {

                this.imgContainer.moveTo(index);


                setTimeout(() => {
                    if (happenedAfter && happenedAfter instanceof Array) {

                        happenedAfter.forEach((e, i) => {
                            if (!this.Database[e.name]) return;
                            this.Database[e.name](...Object.values(e.params), this.imgContainer)
                        })
                    }
                }, this.props.timeRequired + 10)

            })

        } else {
            this.setState({
                currentImg: index
            }, (c) => {

                this.imgContainer.moveTo(index);
            })
        }
    }
    render() {
        const p = this.props;
        return (
            <>
                <div
                    ref={this.takeTurnsContainer}
                    className='take-turns-container'
                    style={{ width: p.width, height: p.height }}
                >
                    <ImgContainer
                        imgSrcs={p.imgSrcs}
                        ref={this.imgContainerRef}
                        timeRequired={p.timeRequired}
                        width={p.width}
                        height={p.height}
                        imgHref={p.imgHrefs}
                        howFreight={this.props.howFreight}

                    />
                    {<HandleBtn
                        isShowBtn={this.props.isShowBtn}
                        onChange={this.moveTo}
                        currentImg={this.state.currentImg}
                        model={this.props.model}
                        imgNum={this.props.imgSrcs.length}
                        btnRightRef={this.btnRightRef}
                        btnLeftRef={this.btnLeftRef}

                    />}
                    {this.props.imgSrcs.length > 1 &&
                        <Point

                            {...this.props}
                            currentImg={this.state.currentImg}
                            imgNum={this.props.imgSrcs.length}
                            onChange={this.moveTo}
                        />

                    }

                </div>

                {/* <button onClick={() => {
                    this.imgContainer.moveTo(1);
                }}>点击移动到第三张</button> */}
            </>
        )
    }
}
