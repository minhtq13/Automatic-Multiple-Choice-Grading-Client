import "./TeacherAdd.scss";
import React, { useState } from "react";
import useNotify from "../../../hooks/useNotify";
import { formatDate } from "../../../utils/tools";
import { addTeachersService } from "../../../services/teachersServices";
import TeacherInfo from "../../../components/TeacherInfo/TeacherInfo";
const TeacherAdd = () => {
	const [loading, setLoading] = useState(false);
	const notify = useNotify();
	const onFinish = (value) => {
		setLoading(true);
		addTeachersService(
			{ ...value, birthday: formatDate(value.birthday) },
			(res) => {
				setLoading(false);
				notify.success("Thêm mới giảng viên thành công!");
			},
			(error) => {
				setLoading(false);
				notify.error("Lỗi thêm mới giảng viên!");
			}
		);
		console.log(value);
	};
	const datePickerOnchange = (date, dateString) => {
		console.log(date, dateString);
	};
	const genderOnchange = (value) => {
		console.log(value);
	};
	return (
		<div className="a-student-add">
			<TeacherInfo
				infoHeader="Thêm giảng viên"
				onFinish={onFinish}
				datePickerOnchange={datePickerOnchange}
				genderOnchange={genderOnchange}
				btnText="Thêm"
				initialValues={{ remember: false }}
				loading={loading}
				isPasswordDisplay={true}
			/>
		</div>
	);
};
export default TeacherAdd;


