import React from 'react'
import BoonList from '../../../component/myBoon/BoonList'
import img1 from '../../../assets/min-img/img/48.png'
import img2 from '../../../assets/min-img/img/49.png'

export default function AlreadyApply() {
    const img = [img1, img2]
    return (

        <BoonList imgData={img} />

    )
}
