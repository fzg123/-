import React from 'react'

Placeholder.defaultProps = {
    height: 200
}
export default function Placeholder(props) {
    return (
        <div style={{ height: props.height }}>

        </div>
    )
}
