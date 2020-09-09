export const getAddress = (e, xXDZ, space = true) => { // 详细地址
    let str;
    if (space) str = e.sheng.name + ' ' + e.shi.name + ' ' + e.xian.name;
    else str = e.sheng.name + e.shi.name + e.xian.name;

    return xXDZ ? str + xXDZ : str;
}