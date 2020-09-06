import Header from '../../common/Header'

import { connect } from 'dva'


const mapStateToProps = state => ({
    loginData: state.loginData,
    address: state.selectAddress
})
const result = connect(mapStateToProps)(Header);



export default result;