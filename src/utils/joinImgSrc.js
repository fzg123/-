import { imgSrcRoot } from '@/_config.js'

export default function (imgSrc, chuliFlag = true, num = 1) {
    chuliFlag ? (imgSrc = imgSrc.replace(/(\.)/, ($, $1) => num + $1)) : '';
    return imgSrcRoot + imgSrc;
}