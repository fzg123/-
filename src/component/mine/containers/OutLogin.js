import OutLogin from '../OutLogin'

import { connect, routerRedux } from 'dva'
const mapDispatchToProps = dispatch => ({
    outLogin() {
        dispatch({ type: 'loginData/changeState', payload: null });
        dispatch(routerRedux.push({
            path: '/',
            state: 'notBlock'
        }));
        window.localStorage.removeItem('userId');
    }
})
export default connect(null, mapDispatchToProps)(OutLogin);