import React from 'react'
import jian from '../../../assets/min-img/img/18.png'
import jia from '../../../assets/min-img/img/19.png'
import styles from './index.less'
import propTypes from 'prop-types'
Counter.propTypes = {
    onChange: propTypes.func.isRequired,
    num: propTypes.oneOfType([propTypes.number, propTypes.string]),
    min: propTypes.number,
    max: propTypes.number
}
Counter.defaultProps = {
    min: 1,
    max: 999
}
export default function Counter(props) {
    return (
        <div className={styles['counter']}>
            <img
                onClick={() => {
                    if (props.num === props.min) props.onChange(props.num);
                    else props.onChange(props.num - 1);
                }}
                src={jian}

            />
            <input

                className={styles['input']}
                value={props.num}
                type="text"
                onChange={(e) => {
                    if (e.target.value != '' && e.target.value <= props.min) {
                        return;
                    }
                    else if (e.target.value != '' && e.target.value >= props.max) {
                        return;
                    }
                    else props.onChange(e.target.value * 1);

                }}
            />
            <img
                src={jia}
                onClick={() => {
                    if (props.num === props.max) props.onChange(props.num);
                    else props.onChange(props.num + 1);
                }}
            />
        </div>
    )
}
