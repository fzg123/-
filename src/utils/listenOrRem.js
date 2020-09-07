export default function (w = 450, r = 10, m = 350) {
    // window.addEventListener('resize', () => {
    //     setRootRem();

    // })
    function setRootRem() {
        let cilentW = document.documentElement.clientWidth;
        const rootH = document.getElementsByTagName('html')[0];
        if (cilentW > w) {
            cilentW = w;

        }
        else if (cilentW <= m) {
            cilentW = m;
        }

        rootH.style.fontSize = cilentW / (w / r) + 'px';
    }
    setRootRem();
}