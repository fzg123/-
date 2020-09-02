import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'
export default class index extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        currentImg: PropTypes.number.isRequired
    }
    render() {
        return (
            <div id='take-turns-btn' id={this.props.isShowBtn || this.props.flagMobile ? 'not-display': ''}>
                <div
                    id={'take-turns-btn-left'}
                    ref={this.props.btnLeftRef}
                    onClick={() => {
                        let index;
                        if (this.props.currentImg - 1 < 0 && this.props.model === 'alternation') {
                            this.props.onChange(this.props.imgNum - 1, [{
                                name: 'telesport',
                                params: {
                                    index: this.props.imgNum
                                }
                            }])
                        } else {
                            index = this.props.currentImg - 1 % this.props.imgNum;

                            this.props.onChange(index)
                        }
                    }}
                >&lt;</div>
                <div
                    id="take-turns-btn-right"
                    ref={this.props.btnRightRef}
                    onClick={() => {
                        if (this.props.currentImg + 1 >= this.props.imgNum && this.props.model === 'alternation') {
                            this.props.onChange(this.props.currentImg + 1, null, [{
                                name: 'telesport',
                                params: {
                                    index: 0
                                }
                            }])
                        } else {
                            this.props.onChange(this.props.currentImg + 1)
                        }

                    }}
                >&gt;</div>
            </div>
        )
    }
}
