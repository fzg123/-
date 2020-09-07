import { selectUser } from '../api'
export default {
    state: null,
    reducers: {
        changeState(state, { payload }) {
            return payload;
        }
    },
    effects: {
        *upDataLoginData({ payload }, { put, call }) {
            const r = yield call(selectUser, payload);
            yield put({
                type: 'changeState',
                payload: r.data.result
            })
        }
    },
    subscriptions: {
        init({ dispatch, history }) {
            let result = window.localStorage.getItem('userId');
            result = JSON.parse(result);
            if (result !== null) {
                dispatch({
                    type: 'changeState',
                    payload: result

                })
            }
        },
        ifNotLogin({ dispatch, history }) {

        }
    }
}
