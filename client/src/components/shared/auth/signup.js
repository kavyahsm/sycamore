import React from 'react'
import { Form, Input,  Button } from 'antd';
import styled from 'styled-components'
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };


  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    }
 
  };


export default function Signup() {

    const onFinish = values => {
        console.log(values);
      };

    return (
        <SignupWrap>
       <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="ConfirmPassword"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
 
 

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </SignupWrap>
    )
}


const SignupWrap = styled.div`

position:absolute;
padding:4rem 4rem;
width:40%;
top:40%;
left:50%;
transform:translate(-50%, -50%);
box-shadow:1px 10px 17px 1px rgba(0,0,0,0.2);

`