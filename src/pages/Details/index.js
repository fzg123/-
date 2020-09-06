import React, { useState, useEffect } from 'react'
import styles from './index.less'
import { Input } from 'antd';
import Link from '../../component/common/Link'
import AddressList from './component/AddressList'
import { searchAddress } from '../../api'
import Loading from '../../component/common/Loading'
import { connect } from 'dva'
import { message } from 'antd'
import { act } from 'react-test-renderer';
function Details(props) {
    if (props.city === null) props.history.push('/selectCity'); // 没有选择城市的话  页面重定向到选择城市页面

    const [addressDatas, setAddressDatas] = useState({ data: [], status: 'idel' })
    const [addressKey, setaddressKey] = useState('');
    const searchHandle = () => {  // 点击搜索按钮后  要做的事情
        if (addressKey === '') {
            message.info('输入框内容为空');
            return false;
        }

        (async function () {
            setAddressDatas({
                data: [],
                status: 'loading'
            })
            const result = await searchAddress({ key: addressKey, id: props.city.id });
            setAddressDatas({
                data: result,
                status: 'finish'
            });
        }())

    }
    const clickHandle = (addressData) => { // 点击地址后要做的事情

        props.setAddress(addressData);
        props.history.push('/');





    }
    const content = addressDatas.status === 'loading' ?
        <Loading />
        :
        (
            addressDatas.status === 'finish' ?
                <AddressList onClick={clickHandle} datas={addressDatas.data} />
                :
                <p>历史记录</p>
        )
    return (
        <div className={styles['details']}>
            <div className={styles['msg']}>
                <span>
                    在{props.city.name}境内搜索
                </span>
                <Link to={{ pathname: '/selectCity' }}>
                    切换城市
                </Link>
            </div>
            <Input value={addressKey} onChange={(e) => { setaddressKey(e.target.value) }} placeholder="输入学校/医院/写字楼" />
            <div onClick={() => {
                searchHandle();
            }} className={styles["search"]}>
                搜索
            </div>
            <div className={styles['content']}>
                {
                    content
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
const mapStateToProps = state => ({
    city: state.selectCity
})
const r = connect(mapStateToProps, mapDispatchToProps)(Details);
r.wrappers = ['@/router/ShowHeader'];
r.title = '详细位置'
export default r;