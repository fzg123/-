import styles from './index.css'
import {
    LeftOutlined
} from '@ant-design/icons';
import { connect } from 'dva'
const _config = {
    intercept: [
        { pathRegexp: /^\/myOrder/, path: '/myOrder' }
        ,
        { pathRegexp: /^\/myBoon/, path: '/myBoon' }
        , {
            pathRegexp: /^\/submitOrder/, target: '/shoppingCart'
        }
    ]
}
let _props;
function ShowHeader(props) {
    _props = props;
    return (
        <>
            <div className={styles["_w"]}></div>
            <div className={styles['header']}>
                <div className={styles["left"]}
                    onClick={() => {
                        
                        let i;
                        let flag;
                        let targetPath = '/';
                        for (let j = 0; j < _config.intercept.length; j++) {
                            const item = _config.intercept[j];
                            if (item.pathRegexp.test(props.location.pathname)) {
                                flag = true;
                                i = j;
                                break;
                            }
                        }
                        if (flag) {
                           
                            targetPath = props.quitTargetPath[_config.intercept[i].path];
                          
                            if (targetPath !== null || _config.intercept[i].target) {
                               
                                props.history.push(_config.intercept[i].target || targetPath);
                            }
                            else {
                                props.history.push('/');
                            }

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
const mapStateToProps = state => ({
    quitTargetPath: state.quitTargetPath
})
const mapDispatchToProps = dispatch => ({
    setTargetPath(obj) {
        dispatch({
            type: 'quitTargetPath/setTargetPath',
            payload: obj
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(ShowHeader);

