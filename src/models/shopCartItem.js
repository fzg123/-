import { getAllShop, changeShopState, changeShopNum, deleteShop } from '@/api'
export default {
    state: [],
    reducers: {
        resetShops(state, { payload }) {

            return payload;
        },
        removeShopItem(state, { payload }) {
            const r = state.filter(e => e.shoppingId !== payload);
            return r;
        },

    },
    effects: {
        *fetchShopItems({ payload }, { put, call }) {  // 获取购物车中所有的商品
            const r = yield call(getAllShop, payload);
            yield put({ type: 'resetShops', payload: r.data.result });
            return true;
        },
        *setAllShopStatus({ payload }, { put, select, call }) { // 更改全部的商品状态

            const shopDatas = yield select(store => store.shopCartItem);
            const r = shopDatas.map(e => ({ ...e, shoppingStatus: payload }))
            yield put({
                type: 'resetShops',
                payload: r
            })
            for (let i = 0; i < shopDatas.length; i++) {
                const e = shopDatas[i];
                if (e.status === payload) return;
                yield call(changeShopState, { shoppingId: e.shoppingId, status: payload })
            }
        }
        ,
        *setShopitem({ payload }, { put, call, select }) { // 更改某一个视图商品的数量或者状态
            const { index, status, count } = payload;
            const shopDatas = yield select(store => store.shopCartItem);
            const upDataItem = shopDatas[index];
            let left = shopDatas.slice(0, index);
            let right = shopDatas.slice(index + 1, shopDatas.length);
            let newShopDatas;
            if (count !== undefined) {
                newShopDatas = [...left, { ...upDataItem, shoppingCount: count }, ...right];
            }
            else {
                newShopDatas = [...left, { ...upDataItem, shoppingStatus: status }, ...right];
            }
            yield put({
                type: 'resetShops',
                payload: newShopDatas
            })

            yield put({
                type: 'fetchSetShopItem',
                payload
            })
        },
        *fetchSetShopItem({ payload }, { call, apply }) {   // 更改数据库中某一个商品的数量或者状态
            const { status, count, id } = payload;
            if (status !== undefined) {
                yield call(changeShopState, {
                    shoppingId: id,
                    status: status
                });
            }
            else {
                yield call(changeShopNum, {
                    shoppingId: id,
                    count: count
                });
            }

        },
        *fetchRemoveShopItem({ payload }, { call,put }) { // 删除某一个商品
            return yield call(deleteShop, payload);
        }
    },
    subscriptions: {

    }
}