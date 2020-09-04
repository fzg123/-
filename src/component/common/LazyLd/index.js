import React, { useEffect, createRef, useState } from 'react'
import styles from './index.less'
import PropTypes from 'prop-types'
LazyLd.propTypes = {
    defaultImgSrc: PropTypes.string.isRequired,
    imgSrc: propTypes.string.isRequired,

}
export default function LazyLd({ defaultImgSrc, imgSrc, ...props }) {
    const imgRef = createRef();
    const [done, setdone] = useState(false);
    useEffect(() => {
        const newImg = new Image();
        newImg.current.onload = function () {
            setdone(true);
        }
        newImg.src = imgSrc;
        imgSrc.current.src = imgSrc;
    })
    return (
        <img ref={imgRef} {...props} src={done ? imgSrc : defaultImgSrc} alt="" />
    )
}
