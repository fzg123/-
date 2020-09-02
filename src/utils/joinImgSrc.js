import { imgSrcRoot } from '@/_config.js'

export default function (imgSrc, chuliFlag = true) {
    chuliFlag ? (imgSrc = imgSrc.replace(/(\.)/, ($, $1) => '1' + $1)) : '';
    return imgSrcRoot + imgSrc;
}