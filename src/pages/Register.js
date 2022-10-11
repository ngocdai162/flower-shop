import React from 'react';
import styled from 'styled-components';
import { Button, Checkbox, Form, Input } from 'antd';
import {style} from "../constants/style";


const RegisterStyled = styled.div`
    background-image: url('../../image/login-background-2.jpg') ;
    background-size:cover;
    background-repeat: no-repeat ;
    width: 100vw;
    height: 100vh;
    display: flex ;
    justify-content: center ;
    align-items: center ;
    .login-form {
      width: 40%;
      background-color: #bfbfbf69;
      padding: 10px;
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 20px;;
      h1 {
        text-align: center ;
        font-size: 30px ;
        font-weight: 700;
        color: #fff;
        margin-bottom: 50px; ;
      }

      .ant-form-item-required {
        width: 100%;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        &::before {
          display: none !important;
        }
      }
      .ant-input {
        height: ${style.heightModule};
        border-radius: ${style.borderRadius} ;
        &::selection {
          border: 0px !important;
        }
      }
      #basic_username::selection {
        border: none !important;
      }
      .ant-input-password {
        height: ${style.heightModule};
        border-radius: ${style.borderRadius} ;
        display: flex ;
        align-items: center ;
      }
      .ant-checkbox-wrapper {
        color: #fff ;
      }
      .ant-checkbox-checked {
        & span::last-child {
          color: #fff !important;
        }
      }
      .ant-form-item-control-input-content {
        display: flex ;
        justify-content: flex-end ;
        button {
          border-radius: ${style.borderRadius} ;
          height: ${style.heightModule};
          background-color: ${style.primaryColor} ;
          color: #fff;
          font-size:${style.buttonFont} ;
          padding: 0 ${style.buttonPadding} !important;
          margin-top: 10px;
          font-weight: ${style.buttonWeight};
        }
      }
      .ant-form-item-explain-error {
        color: #ffeb00;
        margin-bottom: 20px;

      }
      .ant-form-item-row {
        margin-bottom: 12px;
      }

    }
`
export  const Register = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <RegisterStyled>
      <div className='login-form flex justify-center'>
        <h1>Register</h1>
        <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Fullname"
        name="Fullname"
        rules={[
          {
            required: true,
            message: 'Please input your fullname!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your address!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

     

      <Form.Item
        label="Confirm password"
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: 'Please confirm password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {/* <span>Register</span> */}
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
      </div>
    </RegisterStyled>
  )
}
