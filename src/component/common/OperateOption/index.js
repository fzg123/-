import React, { useState, useEffect } from 'react'
import styles from './index.css'
import propTypes from 'prop-types'
import Link from '../../common/Link'
import { connect } from 'dva'
import { createRef } from 'react'
import getUls from './getUls'
OperateOption.propTypes = {
    iconAndText: propTypes.arrayOf(propTypes.shape({
        icon: propTypes.oneOfType([propTypes.string, propTypes.node]),
        text: propTypes.string
    })).isRequired,
    totalText: propTypes.string.isRequired,
    link: propTypes.shape({
        text: propTypes.string,
        path: propTypes.string
    }),
    rowNum: propTypes.number
}
OperateOption.defaultProps = {
    rowNum: 4
}
function OperateOption(props) {
    const [itemWidth, setitemWidth] = useState(0);  // 占位的标签需要得到同级元素的宽
    const itemRef = createRef();
    useEffect(() => {
        setitemWidth(window.getComputedStyle(itemRef.current, null)['width'])
    },[])
    const uls = getUls(props, itemWidth, itemRef, styles);
    const content = uls.map((e, i) => (<ul key={i}>
        {e}
    </ul>))

    return (
        <div className={styles['operate']}>
            <div className={styles['header']}>
                <div className={styles['left']}>
                    <span>{props.totalText}</span>
                </div>
                <div className={styles['right']}>
                    {props.link && <Link to={props.link.path}>{props.link.text}</Link>}
                </div>
            </div>
            <div className={styles['content']}>
                {content}
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    setTargetPath(obj) {
        dispatch({
            type: 'quitTargetPath/setTargetPath',
            payload: obj
        })
    },
    setTargetPaths(arr) {
        dispatch({
            type: 'quitTargetPath/setTargetPaths',
            payload: arr
        })
    }
})
export default connect(null, mapDispatchToProps)(OperateOption);
