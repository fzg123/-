import { useEffect } from 'react'
/**
 * 添加一个监听器  地址发生变化后  会执行回调函数  并传递 旧的location 与 新的location
 * @param {*} props 
 * @param {*} callback 
 */
export default function (props, callback) {
    const prevLocation = props.location;
    useEffect(() => {
        const unlisten = props.history.listen((newLocation,newAction) => {
            if (newLocation.pathname === prevLocation.pathname) return;
            callback && callback(prevLocation, newLocation, newAction);
        })
        return () => unlisten();
    }, [props.location.pathname]);
}