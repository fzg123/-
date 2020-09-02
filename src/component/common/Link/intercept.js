import { intercept } from '../../../_config'
export default function (e, props, value) {



    e.preventDefault();
  
    const bool = intercept.some(e => new RegExp('^' + e).test(props.to));

    if (bool) {
        value.setFlagShowModal({
            title: '提示',
            children: '您还没有登录，是否跳转到登录页面',
            afterEnterCallback: () => {
                props.history.push('/login');
                value.setFlagShowModal(null);  // 同时关掉蒙层
            }
        })
    }
    else props.history.push(props.to);
}