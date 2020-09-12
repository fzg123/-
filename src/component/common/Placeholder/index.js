import React from 'react'

Placeholder.defaultProps = {
    height: 200
}
export default function Placeholder(props) {
    return (
        <div className='redundant' style={{ height: props.height,...props.style }}>

        </div>
    )
}
