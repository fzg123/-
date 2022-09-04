import React from 'react'
import { NavLink, Redirect, withRouter } from 'umi'
import { connect } from 'dva'
import ctx from '../../../layouts/context'
import intercept from './intercept'
import { message } from 'antd';
import { noDevelopment } from '../../../_config'
function L({ staticContext, dispatch, ...props }) {


    return (
        <ctx.Consumer>
            {value => (
                
                <a
                    style={{fontSize: 'inherit'}}
                    onClick={(e) => {

                        e.preventDefault();
                        
                        if (props.to === noDevelopment || props.to.pathname === noDevelopment) {
                            message.warning('抱歉, 暂未开发');
                            return;
                        } else if (props.logindata === null) {
                            intercept(e, props, value);
                        } else {

                            props.history.push(props.to);
                        }
                    }}
                    className={props.location.pathname === props.to ? (props.activeClassName || 'acitve') : ""}
                    href={props.to}

                   
                >{props.children}</a>


            )}
        </ctx.Consumer>

    )
}
const mapStateToProps = state => ({
    logindata: state.loginData
})
export default withRouter(connect(mapStateToProps)(L));