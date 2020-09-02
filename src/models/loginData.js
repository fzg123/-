import { selectUser } from '../api'
export default {
    state: null,
    reducers: {
        changeState(state, { payload }) {
            return payload;
        }
    },
    effects: {
        async upDataLoginData({payload}) {
            const r = await selectUser(payload);
            console.log(r)
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
