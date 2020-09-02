import React from 'react'
import { connect } from 'dva'
function LoginWrapper(props) {
    if (props.loginData !== null) {
        props.history.push('/')
        return null;
    } else {
        return props.children;
    }

}

const mapStateToProps = state => ({
    loginData: state.loginData
})
export default connect(mapStateToProps)(LoginWrapper);