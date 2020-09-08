import { tuple } from "antd/lib/_util/type";
class CheckIn {
    constructor() {
        /**
         * 传递一个对象  obj
         * 
         * obj.name   处理函数名称
         * 
         * obj.params  执行处理函数时，传递的参数
         */
        this.add = (obj) => {
            this.taskQueue.push(obj);
        }
        this.taskQueue = [];
        /**
         * 出列
         * 
         * @param {*} expectedResults 希望的结果  类型为数组  每一项代表每一个事件处理函数期望返回的结果
         */

        this.start = (expectedResults = []) => {
            let rd = {
                state: true,
                msg: '全部通过'
            };
            for (let i = 0; i < this.taskQueue.length; i++) {

                const { name, params } = this.taskQueue[i];
                // console.log(this.taskQueue[i])
                const hope = expectedResults[i] === undefined ? true : expectedResults[i];
                const func = this.func[name];
                // console.log(func)
                if (!func) continue;

                let result = null;
                if (func[Symbol.toStringTag]) {
                    result = func(...params);
                }
                else result = func(...params);

                if (result.state !== hope) {
                    rd = {
                        state: false,
                        // msg: `第${i + 1}个，名为【${name}】的处理函数没有通过，原因：${result.msg}`
                        msg: result.msg

                    }
                    break;
                }
            }
            // this.clear();
            return rd;
        }
        this.clear = () => {
            this.taskQueue = [];
        }

        this.func = {
            improperCharacter(params, condition = /['",\s%]/) {
                let r = { state: true, msg: 'ok' };
                for (const prop in params) {

                    const result = params[prop].match(condition);
                    if (result !== null) {
                        r = {
                            state: false,
                            msg: `属性${prop}, 存在非法字符【${result[0]}】, 请删除它`
                        }
                    }
                }
                // console.log(r)
                return r;
            },

            form(value, minLength = 6, maxLength = 12) {
                const r = new RegExp(`^[A-z][\\w_]{${minLength - 1},${maxLength - 1}}$`).test(value);

                if (!r) {
                    return {
                        state: false,
                        msg: `只能包含数字、字符串或者下划线,以字母开头,且长度只能在${minLength}到${maxLength}之间`
                    }
                }
                else {
                    return {
                        state: true,
                        msg: ''
                    }
                }

            },
            improperCommand(value, improper = `[%.='"]`, msg) {

                if (value === '') return { state: true, msg: '' }
                const r = new RegExp(improper).exec(value);

                if (r === null) {
                    return {
                        state: true,
                        msg: ''
                    }
                }
                else {
                    return {
                        state: false,
                        msg: `存在非法字符【${r[0]}】, 请重新输入`
                    }
                }
            },
            minLength(value, minLength = 6, msg) {
                if (value.length < minLength) {
                    return {
                        state: false,
                        msg: '长度不能少于' + minLength
                    }
                }
                return {
                    state: true,
                    msg: ''
                }
            },
            maxLength(value, maxLength = 12, msg) {
                if (value.length > maxLength) {
                    return {
                        state: false,
                        msg: '长度不能大于' + maxLength
                    }
                }
                return {
                    state: true,
                    msg: ''
                }
            },
            empty(value, msg) {
                if (value === '') {
                    return {
                        state: false,
                        msg: '不能为空'
                    }
                }
                else {
                    return {
                        state: true
                    }
                }
            },
            compare(value, msg) {
                if (value[1] !== value[0]) {
                    return {
                        state: false,
                        msg: '两次的值不同'
                    }
                }

                return {
                    state: true,
                    msg: ''
                }
            }
        }
    }

}


export default CheckIn;
