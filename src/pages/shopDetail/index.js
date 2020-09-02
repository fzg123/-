import React from 'react'
import { Redirect } from 'umi'
export default function index(props) {
    if (props.id === undefined) {
        return <Redirect to='/'></Redirect>
    } else {
        return <Redirect to={'/shopDetail/' + props.id}></Redirect>
    }
}
