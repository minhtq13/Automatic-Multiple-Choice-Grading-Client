import {
	AppstoreOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useState } from "react";
import {
	FaChalkboardTeacher,
	FaGraduationCap,
	FaBookOpen,
	FaRegCalendarAlt,
} from "react-icons/fa";
import { ImBlogger } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { VscLibrary } from "react-icons/vsc";
import { MdOutlineSubject } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import "./Sidebar.scss";

const item = [
	{
		label: "Main Menu",
		key: "mainmenu",
		type: "group",
		children: [
			{
				label: "Dashboard",
				key: "dashboard",
				icon: <AppstoreOutlined />,
				children: [
					{
						label: "Student Dashboard",
						key: "student-dashboard",
					},
					{
						label: "Teacher Dashboard",
						key: "teacher-dashboard",
					},
					{
						label: "Admin Dashboard",
						key: "admin-dashboard",
					},
				],
			},
			{
				label: "Students",
				key: "students",
				icon: <FaGraduationCap />,
				children: [
					{ label: "Student List", key: "student-list" },
					{ label: "Student View", key: "student-view" },
					{ label: "Student Add", key: "student-add" },
					{ label: "Student Edit", key: "student-edit" },
				],
			},
			{
				label: "Teachers",
				key: "Teachers",
				icon: <GiTeacher />,
				children: [
					{ label: "Teacher List", key: "teacher-list" },
					{ label: "Teacher View", key: "teacher-view" },
					{ label: "Teacher Add", key: "teacher-add" },
					{ label: "Teacher Edit", key: "teacher-edit" },
				],
			},
			{
				label: "Departments",
				key: "departments",
				icon: <FaChalkboardTeacher />,
				children: [
					{ label: "Department List", key: "department-list" },
					{ label: "Department Add", key: "department-add" },
					{ label: "Department Edit", key: "department-edit" },
				],
			},
			{
				label: "Subjects",
				key: "subjects",
				icon: <MdOutlineSubject />,
				children: [
					{ label: "Subject List", key: "subject-list" },
					{ label: "Subject Add", key: "subject-add" },
					{ label: "Subject Edit", key: "subject-edit" },
				],
			},
		],
	},
	{
		label: "Management",
		key: "management",
		type: "group",
		children: [
			{
				label: "Exam List",
				key: "exam-list",
				icon: <FaBookOpen />,
			},
			{
				label: "Time Table",
				key: "time-table",
				icon: <FaRegCalendarAlt />,
			},
			{ label: "Library", key: "library", icon: <VscLibrary /> },
			{
				label: "Blogs",
				key: "blog",
				icon: <ImBlogger />,
				children: [
					{ label: "All Blogs", key: "all-blogs" },
					{ label: "Add Blog", key: "add-blog" },
					{ label: "Edit Blog", key: "edit-blog" },
				],
			},
		],
	},
];

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [openKeys, setOpenKeys] = useState([]);
	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};
	const onOpenChange = (keys) => {
		setOpenKeys(keys);
	};
	const toggleMenuCollapse = (info) => {
		setCollapsed(false);
		setOpenKeys(info.keyPath);
	};
	const navigate = useNavigate();
	return (
		<div
			style={{ width: 256 }}
			className={
				collapsed ? "a-sidebar-layout a-collapsed" : "a-sidebar-layout"
			}
		>
			<div className="a-button-sidebar">
				<Button
					type="primary"
					onClick={toggleCollapsed}
					style={{ marginBottom: 16 }}
				>
					{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				</Button>
			</div>
			<div className="a-sidebar">
				<Menu
					mode="inline"
					onClick={(info) => {
						toggleMenuCollapse(info);
						navigate(`/${info.key}`);
					}}
					items={item}
					inlineCollapsed={collapsed}
					openKeys={openKeys}
					onOpenChange={(key) => onOpenChange(key)}
				></Menu>
			</div>
		</div>
	);
};
export default Sidebar;
