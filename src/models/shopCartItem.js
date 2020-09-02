import { getAllShop } from '@/api'
export default {
    state: [],
    reducers: {
        setShops(state, { payload }) {
            return payload;
        }
    },
    effects: {
        *fetchShopItems({ payload }, { put, call }) {
            // console.log(call)
            // yield call(getAllShop(payload));
            const r = yield call(getAllShop, payload);
            yield put({ type: 'setShops', payload: r.data.result });
            return r.data.result;
        }
    },
    subscriptions: {

    }


}