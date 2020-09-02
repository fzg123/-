import styles from './index.css'
import {
    LeftOutlined
} from '@ant-design/icons';

const _config = {
    intercept: [{ path: /^\/myOrder/, target: '/mine' }, { path: /^\/myBoon/, target: '/mine' }]
}

export default function (props) {
    return (
        <>
            <div className={styles["_w"]}></div>
            <div className={styles['header']}>
                <div className={styles["left"]}
                    onClick={() => {
                        let i;
                        let flag;
                        for (let j = 0; j < _config.intercept.length; j++) {
                            const item = _config.intercept[j];
                            if (item.path.test(props.location.pathname)) {
                                flag = true;
                                i = j;
                                break;
                            }
                        }
                        if (
                            flag
                        ) {
                            props.history.push(_config.intercept[i].target);
                        } else {
                            props.history.go(-1);
                        }

                    }}
                >
                    <span><LeftOutlined /></span>
                    <span className={styles['title']}>{props.route.title}</span>
                </div>

            </div>
            {props.children}
        </>)
}