export default function (shopDatas) {
    console.log(shopDatas)
    let totalPrice = 0;
    shopDatas.forEach(e => totalPrice += e.price); //得到总价
    totalPrice = totalPrice.toFixed(2);  // 保留两位小数
    return totalPrice;
}