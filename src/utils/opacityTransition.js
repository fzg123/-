export default function (dom, origin, target, timer = 200) {  // 淡显
    let current;
    const frequency = Math.ceil(timer / 16); // 要移动的次数
    const distance = target - origin;  // 总路程
    const everyRange = distance / frequency; // 每次移动的距离
    let i = frequency; // 拷贝 要移动的次数

    const time = setInterval(() => {
        if (i <= 0) {
            dom.style.opacity = 1;
            clearInterval(time);
            return;
        }
        current = window.getComputedStyle(dom, null)['opacity'] * 1;

        dom.style.opacity = current + everyRange;

        i--;

    }, 16)
}


function animation(time) {

}