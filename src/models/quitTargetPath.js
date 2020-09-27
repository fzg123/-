export default {
    state: {
        '/myBoon': null,
        '/myOrder': null,
        '/orderAccomplish': null,
        '/submitOrder': null,
        '/shopDetail': null
    },
    reducers: {
        setTargetPath(state, { payload: { key, value } }) {
            console.log(key, value)
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
    },
    subscriptions: {
        listener({ history, dispatch }) {

            history.listen((l, a) => {
                const pathname = l.pathname;
                if (new RegExp('^\/getIntoBuy').test(pathname)) {
                    dispatch({
                        type: 'setTargetPath',
                        payload: {
                            key: '/shopDetail',
                            value: pathname
                        }
                    })
                }
                else if (new RegExp('^\/vogueFruit').test(pathname)) {
                    dispatch({
                        type: 'setTargetPath',
                        payload: {
                            key: '/shopDetail',
                            value: pathname
                        }
                    })
                }
                else if (pathname === '/') {
                    dispatch({
                        type: 'setTargetPath',
                        payload: {
                            key: '/shopDetail',
                            value: '/'
                        }
                    })
                }
            })
        }
    }
}