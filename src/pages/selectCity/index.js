import React, { useEffect, useState } from 'react'
import { getHotCity, getAllCity } from '../../api'
import styles from './index.less'
import Step from '../../component/selectCity/Step'
import City from '../../component/selectCity/Citys'
import AllCity from '../../component/selectCity/AllCity'
import { connect } from 'dva'
/**
 * 选择城市
 */
function SelectCity(props) {
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
    const clickHandle = (cityData) => {  // 
        props.setCity(cityData);
        props.history.push('/details');
    }
    return (
        <div className={styles['select-city']}>
            <City onClick={clickHandle} color={'#3190e8'} text='热门城市' datas={city.hotCity} />
            <AllCity onClick={clickHandle} datas={city.allCity} />
            <Step datas={city.allCity} />
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    setCity(cityData) {
        dispatch({
            type: 'selectCity/setCity',
            payload: cityData
        })
    }
})
const r = connect(null, mapDispatchToProps)(SelectCity);
r.wrappers = ['@/router/ShowHeader'];
r.title = '选择城市';

export default r;