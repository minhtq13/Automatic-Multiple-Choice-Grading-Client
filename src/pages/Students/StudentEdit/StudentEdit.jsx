import "./StudentEdit.scss";
import React, { useState } from "react";
import StudentInfo from "../../../components/StudentInfo/StudentInfo";
import { updateStudentsService } from "../../../services/studentsService";
import useNotify from "../../../hooks/useNotify";
import { formatDate } from "../../../utils/tools";

const StudentEdit = () => {
	const [loading, setLoading] = useState(false);
	const notify = useNotify();
	const onFinish = (value) => {
		setLoading(true);
		updateStudentsService(
			100,
			{ ...value, birthday: formatDate(value.birthday) },
			(res) => {
				setLoading(false);
				notify.success("Cập nhật thông tin sinh viên thành công!");
			},
			(error) => {
				setLoading(false);
				notify.error("Lỗi cập nhật thông tin sinh viên!");
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
			<StudentInfo
				infoHeader="Cập nhật thông tin"
				onFinish={onFinish}
				datePickerOnchange={datePickerOnchange}
				genderOnchange={genderOnchange}
				btnText="Cập nhật"
				initialValues={{ remember: false }}
				loading={loading}
			/>
		</div>
	);
};
export default StudentEdit;
