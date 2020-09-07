export default {
    state: {
        '/myBoon': null,
        '/myOrder': null,
        '/orderAccomplish': null,
        '/submitOrder': '/shoppingCart'
    },
    reducers: {
        setTargetPath(state, { payload: { key, value } }) {
            return {
                ...state,
                [key]: value

            }
        },
        setTargetPaths(state, { payload }) {
            const obj = {};
            payload.forEach(e => {
                obj[e.key] = e.value;
            })
            return {
                ...state,
                ...obj
            }
        }
    }
}