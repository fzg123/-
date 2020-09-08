// 允许跳转至 提交订单的页面名
export const allowStepPageName = ['/shoppingCart', '/shopDetail', '/addAddress', '/addressManage'];
import joinImgSrc from '../../utils/joinImgSrc'

// 由于组件内使用的属性名跟从得到的服务器数据属性名不一致  所有转换一下
export const mapServerDataToData = (arr, props) => arr.map(e => ({
    imgSrc: joinImgSrc(e.fruit.fruitImagesUrl, e.fruit.fruitImagesCount > 1),
    name: e.fruit.fruitName,
    msg: e.fruit.fruitText,
    price: e.fruit.fruitPrice,
    userId: props.loginData.userId,
    fruitcount: e.shoppingCount,
    fruitId: e.fruit.fruitId,
    num: e.shoppingCount
}))


