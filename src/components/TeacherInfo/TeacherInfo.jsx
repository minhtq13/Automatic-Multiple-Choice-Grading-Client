import { DatePicker, Form, Input, Select, Button } from "antd";
import "./TeacherInfo.scss";
import React from "react";
const TeacherInfo = ({
  onFinish,
  initialValues,
  infoHeader,
  btnText,
  datePickerOnchange,
  genderOnchange,
  loading,
  isPasswordDisplay
}) => {
  const genderOption = [
    {
      value: "MALE",
      label: "Male",
    },
    {
      value: "FEMALE",
      label: "Female",
    },
  ];
  const dateFormat = "YYYY-MM-DD";

  return (
    <div className="a-teacher-info">
      <p className="a-info-header">{infoHeader}</p>
      <Form
        name="info-teacher-form"
        className="info-teacher-form"
        initialValues={initialValues}
        onFinish={onFinish}
      >
        <div className="a-info-teacher-header">Thông tin giảng viên</div>
        <Form.Item
          name="fullName"
          label="Full Name"
          colon={true}
          rules={[
            {
              pattern: /^[\p{L}\s]*$/u,
              message: "The input is not a valid name",
            },
            {
              required: true,
              message: "Please input full name!",
            },
          ]}
        >
          <Input placeholder="Enter user name" />
        </Form.Item>
        {/* <Form.Item
          name="code"
          label="MSSV"
          colon={true}
          rules={[
            {
              required: true,
              message: "Please input MSSV!",
            },
            {
              pattern: /^(2[0-9]{7}|29[0-9]{6})$/,
              message: "MSSV is not exist!",
            },
          ]}
        >
          <Input placeholder="Enter MSSV" />
        </Form.Item> */}
        <Form.Item
          name="username"
          label="User Name"
          colon={true}
          rules={[
            {
              required: true,
              message: "Please input user name!",
            },
          ]}
        >
          <Input placeholder="Enter user name" />
        </Form.Item>
        <Form.Item
          name="gender"
          colon={true}
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select
            placeholder="Select gender"
            options={genderOption}
            onChange={genderOnchange}
            style={{ height: 45 }}
          ></Select>
        </Form.Item>
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
          label="Email"
          colon={true}
        >
          <Input placeholder="Enter email address" />
        </Form.Item>
        <Form.Item
          name="birthday"
          label="Birthday"
          colon={true}
          rules={[
            {
              required: true,
              message: "Please select dob!",
            },
          ]}
        >
          <DatePicker
            onChange={datePickerOnchange}
            format={dateFormat}
          ></DatePicker>
        </Form.Item>
        {isPasswordDisplay && <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input password!",
            },
          ]}
          label="Password"
          colon={true}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>}
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          colon={true}
          rules={[
            {
              pattern: /^(0|\+84)[1-9]\d{8}$/,
              message: "The input is not a valid phone number",
            },
            {
              required: true,
              message: "Please phone number!",
            },
          ]}
        >
          <Input placeholder="Enter phone number" />
        </Form.Item>
        <Form.Item className="a-btn-info">
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            style={{ width: 150, height: 50 }}
          >
            {btnText}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default TeacherInfo;
