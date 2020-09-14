import React,{useState,useEffect} from 'react'
import styles from './index.less'
import EnterPay from '../../component/pay/EnterPay'
import {
    RightOutlined
  } from '@ant-design/icons';
import Mask from '../../component/common/Mask'
import {connect} from 'dva'
import Loading from '../../component/common/Loading'
import {orderPay} from '../../api'
import {message} from 'antd'
function pay(props) {
    const state = props.location.state;
    const permitStepPage = ['/submitOrder', '/orderDetails']; // 允许跳转的页
    if(!permitStepPage.includes(state.source)) props.history.push('/')
    const [status, setstatus] = useState('loading');
   
    useEffect(()=>{
        // 假装一下  加载中
        setTimeout(()=>{
            setstatus('idle');
        }, Math.random() * 300 + 200);
        
    },[])
    const [flagShowPay, setflagShowPay] = useState(true);
    const onCancelPay = ()=>{  // 支付操作
        (async function(){
            const result  = await orderPay({
                orderId: state.orderId,
                userId: props.loginData.userId, 
                shopId: props.shopId,
                status:2
            });
            if(result.data.result){
                message.success('支付成功');
                // 扣款了  所有更新一下 仓库个人信息
                props.upDataLoginData(props.loginData.userId);

                if(state.source === '/submitOrder'){
                    // 在订单完成页面 回退按钮 回退到购物车而不是 提交订单页面
                    props.setTargetPath({  
                        key: '/orderAccomplish',
                        value: state.sourcePath
                    })
                }
              
                props.history.push({
                    pathname: '/orderAccomplish',
                    state: {
                        //  提交成功页面  点击那个继续选购 要跳转的路径
                        targetPath: state.sourcePath 
                    }

                });
               
            }
        }())
        
    }
    return (
        <>
            {status === 'loading' 
            ?
             <Loading/> 
             :
             <div className={styles['pay']}>
                <div className={styles["time"]}>
                    <div className={styles["left"]}>
                        <span>待支付</span> <RightOutlined />
                    </div>
                    <div className="right">
                        {/* 剩余时间 00 : 59 : 56 */}
                    </div>
                </div>
                <div className={styles["msg"]}>
                    <p>
                        请尽快支付订单
                        
                    </p>
                    <span>
                        提货方式: 自提
                    </span>
                </div>
                <div className={styles['wait-pay']}>
                    <div className={styles["btn1"]} >
                        取消支付
                    </div>
                    <div className={styles["btn2"]} onClick={()=>{setflagShowPay(true)}}>
                        支付
                    </div>
                </div>

            <Mask 
                    flagShow={flagShowPay}
                    position={'bottom'}
                    wFlagInherit={true}
                    maskClick={()=>{
                        setflagShowPay(false);
                    }}
            >
                    <EnterPay
                        balance={props.loginData.userBalance}
                        price={state.price}
                        
                        onCancelPay={onCancelPay}
                    />
            </Mask>
            </div>
            
        }
            
        </>
    )
}

const mapStateToProps = state=>({
    loginData: state.loginData,
    shopId: state.shopData.id
})
const mapDispatchToProps = dispatch => ({
    setTargetPath(obj) {
        dispatch({
            type: 'quitTargetPath/setTargetPath',
            payload: obj
        })
    },
    upDataLoginData(id) {
        dispatch({
            type: 'loginData/upDataLoginData',
            payload: id
        })
    }
})

const r = connect(mapStateToProps,mapDispatchToProps)(pay);
r.wrappers = ['@/router/ShowHeader'];
r.title = '支付';
export default r;
