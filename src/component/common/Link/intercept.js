import { intercept } from '../../../_config'
import { notLoginShowData } from '../../../_config'
export default function (e, props, value) {



    e.preventDefault();

    const bool = intercept.some(e => new RegExp('^' + e).test(props.to));
    if (bool) {
        value.setFlagShowModal(notLoginShowData(props, { path: props.to }, value));
    }
    else props.history.push(props.to);
}