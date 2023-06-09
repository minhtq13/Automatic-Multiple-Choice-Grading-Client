/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./SubjectList.scss";
import { Button, Space, Table, Tag } from "antd";
import useSubjects from "../../../hooks/useSubjects";
import exportIcon from "../../../assets/images/export-icon.svg";
import deleteIcon from "../../../assets/images/delete-icon.svg";
import addIcon from "../../../assets/images/add-icon.svg";
import deletePopUpIcon from "../../../assets/images/delete-popup-icon.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useNotify from "../../../hooks/useNotify";
import { appPath } from "../../../config/appPath";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../../../redux/slices/appSlice";

import { deleteSubjectsService } from "../../../services/subjectsService";
import ModalPopup from "../../../components/ModalPopup/ModalPopup";

const SubjectList = () => {
	const [deleteDisable, setDeleteDisable] = useState(true);
	const { allSubjects, getAllSubjects, tableLoading } = useSubjects();
	const [deleteKey, setDeleteKey] = useState(null);
	const dispatch = useDispatch();
	const onRow = (record) => {
		return {
			onClick: () => {
				dispatch(setSelectedItem(record));
			},
		};
	};
	const handleEdit = () => {
		navigate(appPath.studentEdit);
	};
	useEffect(() => {
		getAllSubjects();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const notify = useNotify();
	const navigate = useNavigate();

	const columns = [
		{
			title: "Code",
			dataIndex: "code",
			key: "code",
		},
		{
			title: "Title",
			dataIndex: "title",
			key: "title",
			// eslint-disable-next-line jsx-a11y/anchor-is-valid
			render: (text) => <a>{text}</a>,
		},
		{
			title: "Description",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "Credit",
			dataIndex: "credit",
			key: "credit",
		},
		{
			title: "Chapter quantity",
			dataIndex: "chapterQuantity",
			key: "chapterQuantity",
		},
		{
			title: "Question quantity",
			dataIndex: "questionQuantity",
			key: "questionQuantity",
		},
		{
			title: "Action",
			key: "action",
			render: (_, record) => (
				<Space size="middle" style={{ cursor: "pointer" }}>
					<Button danger onClick={handleEdit}>
						Edit
					</Button>
				</Space>
			),
		},
	];
	const dataFetch = allSubjects.map((obj, index) => ({
		key: (index + 1).toString(),
		title: obj.title,
		description: obj.description,
		credit: obj.credit,
		chapterQuantity: obj.chapterQuantity,
		questionQuantity: obj.questionQuantity,
		code: obj.code,
		id: obj.id,
	}));
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const onSelectChange = (newSelectedRowKeys) => {
		setSelectedRowKeys(newSelectedRowKeys);
		if (newSelectedRowKeys.length === 1) {
			setDeleteKey(dataFetch.find((item) => item.key === newSelectedRowKeys[0]).id);
			setDeleteDisable(false);
			console.log(dataFetch.find((item) => item.key === newSelectedRowKeys[0]));
		} else {
			setDeleteDisable(true);
		}
	};
	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
		selections: [Table.SELECTION_ALL],
	};
	const handleClickAddStudent = () => {
		navigate("/subject-add");
	};
	const handleDelete = () => {
		deleteSubjectsService(
			deleteKey,
			null,
			(res) => {
				notify.success("Xoá học phần thành công!");
				getAllSubjects();
			},
			(error) => {
				notify.error("Lỗi xoá học phần!");
			}
		);
	};

	return (
		<div className="a-subject-list">
			<div className="header-subject-list">
				<p>Danh sách học phần</p>
				<div className="block-button">
					<Button className="options">
						<img src={exportIcon} alt="Export Icon" />
						Export
					</Button>
					<ModalPopup
						buttonOpenModal={
							<Button className="options" disabled={deleteDisable}>
								<img src={deleteIcon} alt="Delete Icon" />
								Delete
							</Button>
						}
						title="Delete Subject"
						message={"Are you sure to remove this subject and all of its related data? "}
						confirmMessage={"This action cannot be undone"}
						icon={deletePopUpIcon}
						ok={"Ok"}
						onAccept={handleDelete}
					/>
					<Button className="options" onClick={handleClickAddStudent}>
						<img src={addIcon} alt="Add Icon" />
						Add Subject
					</Button>
				</div>
			</div>
			<div className="subject-list-wrapper">
				<Table
					className="subject-list-table"
					columns={columns}
					dataSource={dataFetch}
					rowSelection={rowSelection}
					pagination={{
						pageSize: 8,
					}}
					onRow={onRow}
					loading={tableLoading}
				/>
			</div>
		</div>
	);
};
export default SubjectList;
