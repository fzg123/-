export default {
    state: null,
    reducers: {
        resetAddress(state, { payload }) {
            return payload;
        }
    },
    effects: {
        *setAddress({ payload }, { put }) {
            window.localStorage.setItem('address', JSON.stringify(payload));
            yield put({
                type: 'resetAddress',
                payload
            });
        }
    },
    subscriptions: {
        init({ dispatch }) {
            let address = window.localStorage.getItem('address');
            address = JSON.parse(address);
            if (address !== null) {
                dispatch({
                    type: 'setAddress',
                    payload: address
                })
            }

        }
    }
}