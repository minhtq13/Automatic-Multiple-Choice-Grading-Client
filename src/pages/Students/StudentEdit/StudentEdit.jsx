import "./StudentEdit.scss";
import React, { useState } from "react";
import StudentInfo from "../../../components/StudentInfo/StudentInfo";
import { updateStudentsService } from "../../../services/studentsService";
import useNotify from "../../../hooks/useNotify";
import { formatDate } from "../../../utils/tools";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const StudentEdit = () => {
	const [loading, setLoading] = useState(false);
	const { selectedItem } = useSelector((state) => state.appReducer);
	const notify = useNotify();
	const onFinish = (value) => {
		setLoading(true);
		updateStudentsService(
			selectedItem ? selectedItem.id : null,
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
	const genderOnchange = (dateString) => {
		console.log(dateString);
	};
	console.log(selectedItem);
	return (
		<div className="a-student-add">
			<StudentInfo
				infoHeader="Cập nhật thông tin"
				onFinish={onFinish}
				datePickerOnchange={datePickerOnchange}
				genderOnchange={genderOnchange}
				btnText="Cập nhật"
				initialValues={{
					remember: false,
					fullName: selectedItem ? selectedItem.fullName : "",
					username: selectedItem ? selectedItem.username : "",
					email: selectedItem ? selectedItem.email : "",
					code: selectedItem ? selectedItem.code : "",
					phoneNumber: selectedItem ? selectedItem.phoneNumber : "",
					birthday: selectedItem ? dayjs(selectedItem.birthday, "YYYY-MM-DD") : "",
					gender: selectedItem ? selectedItem.gender[0] : null
				}}
				loading={loading}
				isPasswordDisplay={false}
			/>
		</div>
	);
};
export default StudentEdit;
