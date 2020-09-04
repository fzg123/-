import React, { useEffect, useState } from 'react'
import { getHotCity, getAllCity } from '../../api'
import styles from './index.less'
import Step from '../../component/selectCity/Step'
import City from '../../component/selectCity/Citys'
import AllCity from '../../component/selectCity/AllCity'
/**
 * 选择城市
 */
function SelectCity() {
    const [city, setcity] = useState({
        hotCity: [],
        allCity: {}
    })
    useEffect(() => {
        const hotCity = getHotCity();
        const allCity = getAllCity();
        Promise.all([hotCity, allCity]).then(d => {
            setcity({
                hotCity: d[0],
                allCity: d[1]
            })
        })
    }, [])
    return (
        <div className={styles['select-city']}>
            <City color={'#3190e8'} text='热门城市' datas={city.hotCity} />
            <AllCity datas={city.allCity} />
            <Step datas={city.allCity} />
        </div>
    )
}
SelectCity.wrappers = ['@/router/ShowHeader'];
SelectCity.title = '选择城市';
export default SelectCity;