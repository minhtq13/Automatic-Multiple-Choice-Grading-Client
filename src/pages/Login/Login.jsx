import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import SignFragment from "../../components/SignFragment/SignFragment";
import "./Login.scss";
import { loginAuthenticService } from "../../services/accountServices";
import useNotify from "../../hooks/useNotify";
import { appPath } from "../../config/appPath";
import { useNavigate } from "react-router-dom";
import { setRefeshToken, setToken } from "../../utils/storage";

const Login = () => {
	const [loading, setLoading] = useState(false);
	const [authenticResult, setAuthenticResult] = useState("");
	const notify = useNotify();
	const navigate = useNavigate();
	const onFinish = (values) => {
		setLoading(true);
		loginAuthenticService(
			values,
			(res) => {
				setLoading(false);
				setAuthenticResult(res.data.message);
				notify.success(`Đăng nhập thành công!`);
				navigate(appPath.default);
				setToken(res.data.access_token)
				setRefeshToken(res.data.refresh_token)
			},
			(error) => {
				setLoading(false);
				setAuthenticResult("error");
			}
		);
	};
	const loginForm = (
		<>
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{ remember: false }}
				onFinish={onFinish}
			>
				{/* <Form.Item
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
        </Form.Item> */}
				<Form.Item
					name="username"
					rules={[
						{
							required: true,
							message: "Please input your user name!",
						},
					]}
				>
					<Input placeholder="User name" />
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
				{authenticResult === "error" && (
					<div className="error-authentic">
						Tài khoản đăng nhập hoặc mật khẩu không đúng!
					</div>
				)}
				<Form.Item>
					<Button type="primary" htmlType="submit" loading={loading}>
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
