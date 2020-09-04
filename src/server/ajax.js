import axios from 'axios'
import qs from 'qs'
export default function ajax({ type = 'get', url, data = {} } = {}) {
    let searchStr = '?';
    const keys = Object.keys(data);

    let temp = '&';

    keys.forEach((e, i) => {
        if (i === keys.length - 1) {
            temp = '';
        }
        searchStr += e + '=' + data[e] + temp;
    })
    if (type === 'get') {
        if (Object.keys(data).length === 0) return axios[type](url);
        return axios[type](url + searchStr)
    }
    else if (type === 'post') {
        data = qs.stringify(data);
        return axios[type](url, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
    }

}