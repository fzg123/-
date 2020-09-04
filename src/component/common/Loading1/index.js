import React from 'react'
import styles from './index.less'
import PropTypes from 'prop-types'
Loading.propTypes = {
    color: PropTypes.string
}
Loading.defaultProps = {
    color: 'rgb(80,179,71)'
}
export default function Loading(props) {
    const lis = [1, 2, 3, 4, 5, 6].map((e, i) => <li key={i} style={{ backgroundColor: props.color }}></li>)
    return (
        <ul className={styles['loading']}>
            {lis}
        </ul>
    )
}
