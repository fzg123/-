import React from 'react'
import styles from './index.css'
import propTypes from 'prop-types'
import Link from '../../common/Link'
OperateOption.propTypes = {
    iconAndText: propTypes.arrayOf(propTypes.shape({
        icon: propTypes.oneOfType([propTypes.string, propTypes.node]),
        text: propTypes.string
    })).isRequired,
    totalText: propTypes.string.isRequired,
    link: propTypes.shape({
        text: propTypes.string,
        path: propTypes.string
    })
}

function OperateOption(props) {
    const lis = props.iconAndText.map((e, i) => {
        const li = (<Link key={i}  to={e.path}><li className={styles['item']}>
            {typeof e.icon === 'string' ? <img src={e.icon}></img> : props.icon}
            <p>
                {e.text}
            </p>
        </li>
        </Link>);
        return li;

    })
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
            <ul className={styles['content']}>
                {lis}
            </ul>
        </div>
    )
}
export default OperateOption;
