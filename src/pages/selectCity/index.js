import React, { useEffect, useState } from 'react'
import { getHotCity, getAllCity } from '../../api'
import styles from './index.less'
import Step from '../../component/selectCity/Step'
import City from '../../component/selectCity/Citys'
import AllCity from '../../component/selectCity/AllCity'
import { connect } from 'dva'
import Loading from '../../component/common/Loading'
/**
 * 选择城市
 */
function SelectCity(props) {
    const [city, setcity] = useState({
        data: {
            hotCity: [],
            allCity: {}
        },
        status: 'loading'
    })
    useEffect(() => {
        const hotCity = getHotCity();
        const allCity = getAllCity();
        Promise.all([hotCity, allCity]).then(d => {
            setcity({
                data: {
                    hotCity: d[0],
                    allCity: d[1]
                },
                status: 'idle'
            })
        })
    }, [])
    const clickHandle = (cityData) => {  // 

        props.setCity(cityData);
        props.history.push('/details');


    }
    return (
        <>
            {city.status === 'loading' ?
                <Loading />
                :
                <div className={styles['select-city']}>
                    <City onClick={clickHandle} color={'#3190e8'} text='热门城市' datas={city.data.hotCity} />
                    <AllCity onClick={clickHandle} datas={city.data.allCity} />
                    <Step datas={city.data.allCity} />
                </div>
            }
        </>

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