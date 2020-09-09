import {
    RightOutlined
} from '@ant-design/icons';
export default function (index, addressData, { shengId, shiId, xianId }, styles, setindex, dispatch, props) {
    let content = [];

    const getShi = () => {
        const shis = addressData[shengId].children;
        // 对北京直辖区特殊处理
        return shis.length == 1 ? shis[0].children : shis;
    }
    const getLis = (addressListData, id, func) => {
        const lis = addressListData.map((e, i) => {
            const className = id == i ? styles['active'] : '';
            let index = i;
            return <li
                key={i}
                className={className}
                onClick={() => {
                    func(index);
                }}
            >
                <div className={styles['left']}>
                    {e.name}
                </div>
                <div className={styles['right']}>
                    <RightOutlined />
                </div>
            </li>
        })
        return lis;
    }
    if (index === 0) {
        content = getLis(addressData, shengId, (index) => {
            setindex(1);
         
            dispatch({
                type: 'setAddress',
                payload: {
                    shengId: index
                }
            })
        });
    }
    else if (index === 1) {
        content = getLis(getShi(), shiId, (index) => {
            setindex(2);
         
            dispatch({
                type: 'setAddress',
                payload: {
                    shiId: index
                }

            })
        });
    }
    else if (index === 2) {
        content = getLis(getShi()[shiId].children, xianId, (index) => {
         
            dispatch({
                type: 'setAddress',
                payload: {
                    xianId: index
                }
            })
            props.onEnterAddress({
                sheng: addressData[shengId],
                shi: getShi()[shiId],
                xian: getShi()[shiId].children[index]
            });
        });
    }

    return <ul>{content}</ul>;
}