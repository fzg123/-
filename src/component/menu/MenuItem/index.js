import React from 'react'
import propTypes from 'prop-types'
// import { Link, NavLink } from 'umi'
import NavLink from '../../common/Link'
export default function index(props) {
    const { def, active } = props.icon;
    return (
        <NavLink  to={props.path}>
            <img src={props.active ? active : def} alt="" />
            <p>{props.text}</p>
        </NavLink>
    )
}
index.defaultProps = {
    icon: '',
    text: '',
    path: '',
    icon: {
        def: '',
        active: ''
    },
    active: false
}
index.propTypes = {
    icon: propTypes.string,
    text: propTypes.string,
    path: propTypes.string,
    icon: propTypes.shape({
        def: propTypes.string,
        active: propTypes.string
    }),
    active: propTypes.bool
}