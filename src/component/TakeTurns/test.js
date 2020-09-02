import React, { Component } from 'react'
import TakeTurns from './index'

import img1 from '../../../image/1.jpg'
import img2 from '../../../image/2.jpg'
import img3 from '../../../image/3.jpg'
import img4 from '../../../image/4.jpg'
import img5 from '../../../image/5.jpg'
export default class test extends Component {
    render() {
        return (
            <div>
                <TakeTurns
                    width={590}
                    height={470}
                    imgSrcs={[img1, img2, img3, img4, img5]}
                    imgHrefs={['baidu.com', 'ji', 'a', 'b', 'c']}
                />
            </div>
        )
    }
}
