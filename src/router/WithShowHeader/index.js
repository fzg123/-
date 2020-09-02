import React from 'react'

export default function WithShowHeader(Comp) {
    return class ShouHeader extends React.Component {
        
        render() {
            return <Comp {...this.props} />
        }
    }
}
