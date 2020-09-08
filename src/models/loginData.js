import { selectUser } from '../api'
export default {
    state: null,
    reducers: {
        resetState(state, { payload }) {
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
        },
        *changeState({ payload }, { put }) {
            window.localStorage.setItem('userId', JSON.stringify(payload));
            yield put({
                type: 'resetState',
                payload
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
