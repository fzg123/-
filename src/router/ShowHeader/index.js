import styles from './index.less'
import {
    LeftOutlined
} from '@ant-design/icons';
import { leavePay } from '../../_config'
import { connect } from 'dva'
import ctx from '../../layouts/context'
import { message } from 'antd'

const _config = {
    intercept: [
        { pathRegexp: /^\/myOrder/, path: '/myOrder' }
        ,
        { pathRegexp: /^\/myBoon/, path: '/myBoon' }
        ,
        // {
        //     pathRegexp: /^\/submitOrder/, target: '/shoppingCart'
        // },
        {
            pathRegexp: /^\/orderAccomplish/, path: '/orderAccomplish'
        },
        {
            pathRegexp: /^\/pay/,
            path: '/pay',
            beforeLeave: (ctx, props, callback) => {
                ctx.setFlagShowModal(leavePay(props, null, ctx, callback, message));
            },
            target: '/shoppingCart'
        }
    ]
}
let _props;
function ShowHeader(props) {
    _props = props;
    return (<ctx.Consumer>

        {value => <>
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
                                if (_config.intercept[i].beforeLeave !== undefined) {
                                    _config.intercept[i].beforeLeave(value, props, (bool) => {
                                        if (bool) {
                                            props.history.push(_config.intercept[i].target || targetPath);
                                        }
                                    });
                                }
                                else {
                                    props.history.push(_config.intercept[i].target || targetPath);
                                }

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
        </>}
    </ctx.Consumer>)
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

