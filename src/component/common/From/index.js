import React, { useState } from 'react'
import { Link } from 'umi'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import propTypes from 'prop-types'

LoginFrom.propTypes = {
    onLogin: propTypes.func.isRequired,
    userName: propTypes.string.isRequired,
    pwd: propTypes.string.isRequired,
    onUserNameChange: propTypes.func.isRequired,
    onPwdChange: propTypes.func.isRequired
}
export default function LoginFrom(props) {
    return (
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
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" value={props.userName} onChange={e=>{props.onUserNameChange(e.target.value)}} />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    value={props.pwd}
                    onChange={(e) => props.onPwdChange(e.target.value)}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>


            <Form.Item>
                <Button
                    type="primary"
                    style={{ display: 'block', width: '100%' }}
                    htmlType="submit"
                    className="login-form-button"
                    onClick={() => {
                        props.onLogin();
                    }}
                >
                    {props.text}
                         </Button>

                或者去<Link to={props.link.path}>{props.link.text}</Link>
            </Form.Item>
        </Form>
    )
}
