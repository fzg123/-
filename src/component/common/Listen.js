import React, { useEffect } from 'react'
import {withRouter} from 'umi'
let prevLocation;
function Listen(props) {
    prevLocation = props.location;
    console.log('渲染')
    useEffect(() => {
        const unListen = props.history.listen((newLocation, newAction) => {
            console.log('触发')
            props.onChange && props.onChange(prevLocation.pathname, newLocation.pathname, newAction, unListen)
        })
    }, [])

    return null;
}


export default withRouter(Listen);