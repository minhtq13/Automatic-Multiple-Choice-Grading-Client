import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import SignLayout from "../SignLayout/SignLayout";
import "./Register.scss";
const Register = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleConfirmPasswordChange = (e) => {
		setConfirmPassword(e.target.value);
	};

	const validateConfirmPassword = (_, value) => {
		if (value && value !== password) {
			return Promise.reject(new Error("The two passwords do not match"));
		}
		return Promise.resolve();
	};
	const registerForm = (
		<Form
			name="normal_login"
			className="login-form"
			initialValues={{ remember: false }}
			onFinish={onFinish}
		>
			<Form.Item
				name="name"
				rules={[
					{
						required: true,
						message: "Please input your name!",
					},
				]}
			>
				<Input placeholder="Name" />
			</Form.Item>
			<Form.Item
				name="email"
				rules={[
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
				<Input.Password
					placeholder="Password"
					value={password}
					onChange={handlePasswordChange}
				/>
			</Form.Item>
			<Form.Item
				name="confirmPassword"
				rules={[
					{
						required: true,
						message: "Please confirm your password!",
					},
					{
						validator: validateConfirmPassword,
					},
				]}
			>
				<Input.Password
					placeholder="Confirm Password"
					value={confirmPassword}
					onChange={handleConfirmPasswordChange}
				/>
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Register
				</Button>
			</Form.Item>
		</Form>
	);
	return (
		<SignLayout
			header={"Register"}
			socialText={"Register with"}
			endText={"Already have an account?"}
			signText={"Login"}
			href={"/auth/login"}
		>
			{registerForm}
		</SignLayout>
	);
};
export default Register;
