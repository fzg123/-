import React from 'react'
import { connect } from 'dva'
function IfNotLogin(props) {
    
    if(props.loginData === null ){
        props.history.push('/')
    }
    return props.children;
}

const mapStateToProps = state => ({
    loginData: state.loginData
})
export default connect(mapStateToProps)(IfNotLogin);
