import "./TeacherEdit.scss";
import React, { useState } from "react";
import useNotify from "../../../hooks/useNotify";
import { formatDate } from "../../../utils/tools";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { updateTeachersService } from "../../../services/teachersServices";
import TeacherInfo from "../../../components/TeacherInfo/TeacherInfo";

const TeacherEdit = () => {
	const [loading, setLoading] = useState(false);
	const { selectedItem } = useSelector((state) => state.appReducer);
	const notify = useNotify();
	const onFinish = (value) => {
		setLoading(true);
		updateTeachersService(
			selectedItem ? selectedItem.id : null,
			{ ...value, birthday: formatDate(value.birthday) },
			(res) => {
				setLoading(false);
				notify.success("Cập nhật thông tin giảng viên thành công!");
			},
			(error) => {
				setLoading(false);
				notify.error("Lỗi cập nhật thông tin giảng viên!");
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
		<div className="a-teacher-add">
			<TeacherInfo
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
export default TeacherEdit;

