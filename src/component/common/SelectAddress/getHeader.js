export default function (index, addressData, { shengId, shiId, xianId }, styles, setIndex) {

    let lis = null;
    let shiView = <li onClick={() => { setIndex(1); }} className={index == 1 ? styles['active'] : ''}>
        {shiId != null ? getShi()[shiId].name : null}
        <div className={styles['line']}></div>
    </li>

    // 请选择 视图数据那个 class 特殊处理
    const getFlagClass = () => {
        if (index === 0 && shengId != null) return '';
        else if (index === 1 && shiId != null) return '';
        else if (index === 3 && xianId != null) return '';
        else return styles['active'];
    }
    const xuanStep = () => {
        if (shengId === null) setIndex(0);
        else if (shiId === null) setIndex(1);
        else if (xianId === null) setIndex(2);
    }
    // 得到市 的所有数据  由于有直辖市特殊的市 所有特殊处理一下
    function getShi() {
        const shis = addressData[shengId].children;
        // 对北京直辖区特殊处理

        return shis.length == 1 ? shis[0].children : shis;
    }

    // 请选择 视图数据
    const qingXuanZhe = <li onClick={() => { xuanStep() }} className={getFlagClass()}>
        请选择
        <div className={styles['line']}></div>
    </li>;

    const shengView = (
        <li className={index == 0 ? styles['active'] : ''} onClick={() => { setIndex(0) }}>
            {shengId != null ? addressData[shengId].name : shengId}
            <div className={styles['line']}></div>
        </li>
    )
    if (shengId === null) {
        lis = qingXuanZhe;
    }
    else if (shiId == null) {
        lis = <>
            {shengView}
            {qingXuanZhe}
        </>
    }
    else if (xianId == null) {
        let shis = getShi();

        lis = <>

            {shengView}

            {shiView}
            {qingXuanZhe}
        </>
    }
    else {

        let shis = getShi();
        lis = <>
            {shengView}
            {shiView}
            <li onClick={() => { setIndex(2) }} className={index == 2 ? styles['active'] : ''}>
                {shis[shiId].children[xianId].name}
                <div className={styles['line']}></div>
            </li>
        </>
    }
    return <ul>
        {lis}
    </ul>


}