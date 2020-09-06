export default {
    state: null,
    reducers: {
        resetCity(state, { payload }) {

            return payload;
        }
    },
    effects: {
        *setCity({ payload }, { put }) {

            window.localStorage.setItem('city', JSON.stringify(payload));
            yield put({
                type: 'resetCity',
                payload: payload
            })
        }
    },
    subscriptions: {
        init({ dispatch }) {
            let cityData = window.localStorage.getItem('city');

            cityData = JSON.parse(cityData);
            if (cityData !== null) {
                dispatch({
                    type: 'setCity',
                    payload: cityData
                })
            }

        }
    }
}