import React, { useState, useEffect } from 'react'
import styles from './index.less'
import { Input } from 'antd';
import NotData from '../../component/common/NotData'
import AddressList from './component/AddressList'
import { searchAddress } from '../../api'
import Loading from '../../component/common/Loading'  
import { connect } from 'dva'
function Details(props) {
    if(props.city === null) props.history.push('/selectCity'); // 没有选择城市的话  页面重定向到选择城市页面

    const [addressDatas, setAddressDatas] = useState({ data: [], status: 'finish' })
    const [addressKey, setaddressKey] = useState('');
    const searchHandle = () => {
        (async function () {
            setAddressDatas({
                data: [],
                status: 'loading'
            })
            const result = await searchAddress({key: addressKey, id: props.city.id});
            setAddressDatas({
                data: result,
                status: 'finish'
            });
        }())

    }
    const clickHandle = (addressData) => {
        props.setAddress(addressData);
    }
    return (
        <div className={styles['details']}>
            <Input value={addressKey} onChange={(e) => { setaddressKey(e.target.value) }} placeholder="输入学校/医院/写字楼" />
            <div onClick={() => {
                searchHandle();
            }} className={styles["search"]}>
                搜索
            </div>
            <div className={styles['content']}>
                {addressDatas.status === 'loading' ?
                    <Loading />
                    :
                    <AddressList onClick={clickHandle} datas={addressDatas.data} />
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setAddress(addressData) {
        dispatch({
            type: 'selectAddress/setAddress',
            payload: addressData
        })
    }
})
const mapStateToProps = state=>({
    city: state.selectCity
})
const r = connect(mapStateToProps, mapDispatchToProps)(Details);
r.wrappers = ['@/router/ShowHeader'];
r.title = '详细位置'
export default r;