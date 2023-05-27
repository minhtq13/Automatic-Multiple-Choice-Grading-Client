import { Button, Form, Input } from "antd";
import React from "react";

import SignFragment from "../../components/SignFragment/SignFragment";
import "./Login.scss";
const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const loginForm = (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: false }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not a valid email address",
            },
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
      <div className="a-forgot-password">Forgot Password?</div>
    </>
  );
  return (
    <SignFragment
      header={"Login"}
      socialText={"Login with"}
      endText={"Don't have an account?"}
      signText={"Register"}
      href={"/register"}
    >
      {loginForm}
    </SignFragment>
  );
};
export default Login;
