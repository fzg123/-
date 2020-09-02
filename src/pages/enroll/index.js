import React, { useState } from 'react'
import styles from './index.css';
import { Link } from 'umi'
import { Form, Input, Button, Checkbox } from 'antd';
import { Radio } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import check from './check'
import { message } from 'antd';
import ajax from '../../server/ajax'
import Modal from '../../component/common/Modal'
import { enroll } from '../../api';
Enroll.title = '注册';
Enroll.wrappers = ['@/router/ShowHeader']
function Enroll(props) {
    const [userName, setUserName] = useState('');
    const [pwd, setpwd] = useState('');
    const [nickName, setNickName] = useState('')
    const [t_pwd, sett_pwd] = useState('')
    const [sex, setsex] = useState(1);
    const [showModal, setshowModal] = useState(false)
    const onEnroll = async () => {
        const r = check(userName, pwd, nickName, t_pwd);
        if (!r.state) {

            message.warning(r.msg, 5);
        }
        else {
            const r = await enroll({
                userName: userName,
                userNickname: nickName,
                userPassWord: pwd,
                userSex: sex === 1 ? '男' : '女'
            })
            if (r.status === 'success') {
                message.success('注册成功');
                setshowModal(true);
            }
            else if (r.status === 'fail') {

                message.warning(r.mgs);
            }
        }
    }
    const onUserNameChange = newUserName => {
        setUserName(newUserName);
    }
    const onPwdChange = newPwd => {
        setpwd(newPwd);
    }
    return (
        <div className={styles['enroll']}>
            <div className="center">

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的账号',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入账号" value={userName} onChange={e => { setUserName(e.target.value) }} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的密码',
                            },
                        ]}
                    >
                        <Input
                            value={pwd}
                            onChange={(e) => setpwd(e.target.value)}
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="请输入密码"
                        />
                    </Form.Item>
                    <Form.Item
                        name="twopassword"
                        rules={[
                            {
                                required: true,
                                message: '请再次输入您的密码',
                            },
                        ]}
                    >
                        <Input
                            value={t_pwd}
                            onChange={(e) => sett_pwd(e.target.value)}
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="请再次输入密码"
                        />
                    </Form.Item>
                    <Form.Item
                        name="nickName"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的昵称',
                            },
                        ]}
                    >
                        <Input
                            value={nickName}
                            onChange={(e) => setNickName(e.target.value)}
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="请输入昵称"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Radio.Group onChange={() => { setsex(sex === 1 ? 0 : 1) }} value={sex}>
                            <Radio value={1}>男</Radio>
                            <Radio value={0}>女</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            style={{ display: 'block', width: '100%' }}
                            htmlType="submit"
                            className="login-form-button"
                            onClick={() => {
                                onEnroll();
                            }}
                        >
                            {'注册'}
                        </Button>
                或者去<Link to={'/login'}>{'登录'}</Link>
                    </Form.Item>

                </Form>
            </div>
            <Modal

                afterEnterCallback={() => {
                    setshowModal(false);
                    props.history.push('/login');
                }}
                afterCancelCallback={() => setshowModal(false)}
                title={'提示'}
                isShow={showModal}
            >


                注册成功, 是否跳转至登录页
            </Modal>
        </div>
    )
}

export default Enroll;