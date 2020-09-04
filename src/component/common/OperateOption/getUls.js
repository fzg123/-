import Link from '../../common/Link'

export default function (props, itemWidth, itemRef, styles) {
    const uls = [];
    let j = 0;
    while (j < props.iconAndText.length) {
        const lis = [];

        for (let i = 0; i < props.rowNum; i++) {
            const index = j + i;
            const e = props.iconAndText[index];
            let li;
            if (e === undefined) {
                lis.push(<a style={{ width: itemWidth }} key={Math.random() + ''}></a>);
                continue;
            }
            li = (<Link
                key={index}
                to={e.path}
            >
                <li
                    ref={itemRef}
                    onClick={() => {
                        props.setTargetPaths([{
                            key: '/myBoon',
                            value: '/mine'
                        },
                        {
                            key: '/myOrder',
                            value: '/mine'
                        }])
                    }} className={styles['item']}>
                    {typeof e.icon === 'string' ? <img src={e.icon}></img> : props.icon}
                    <p>
                        {e.text}
                    </p>
                </li>
            </Link>);
            lis.push(li);
        }
        uls.push(lis);

        j += props.rowNum;
    }

    return uls;
}