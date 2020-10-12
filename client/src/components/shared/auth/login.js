import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components'
// import { Row, Col } from 'antd';
import { fetchLogin } from './authSlice'
import {  useDispatch } from 'react-redux';

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
  };
  const tailLayout = {
    wrapperCol: { offset: 5, span: 19 },
  };
  


export default function Login() {

  const dispatch = useDispatch()


    const onFinish = values => {

         dispatch(fetchLogin(values))
        
     
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
     

    return (
      <LoginWrap>
       
         <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="user_name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  
   </LoginWrap>
    )
}


const LoginWrap = styled.div`





`