import {
	AppstoreOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useState } from "react";
import { FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
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
						key: "studentdashboard",
					},
					{
						label: "Teacher Dashboard",
						key: "teacherdashboard",
					},
					{
						label: "Admin Dashboard",
						key: "admindashboard",
					},
				],
			},
			{
				label: "Students",
				key: "students",
				icon: <FaGraduationCap />,
				children: [
					{ label: "Student List", key: "studentlist" },
					{ label: "Student View", key: "studentview" },
					{ label: "Student Add", key: "studentadd" },
					{ label: "Student Edit", key: "studentedit" },
				],
			},
			{
				label: "Teachers",
				key: "Teachers",
				icon: <FaChalkboardTeacher />,
				children: [
					{ label: "Teacher List", key: "teacherlist" },
					{ label: "Teacher View", key: "teacherview" },
					{ label: "Teacher Add", key: "teacheradd" },
					{ label: "Teacher Edit", key: "teacheredit" },
				],
			},
			{
				label: "Departments",
				key: "departments",
				icon: <FaChalkboardTeacher />,
				children: [
					{ label: "Department List", key: "departmentlist" },
					{ label: "Department Add", key: "departmentadd" },
					{ label: "Department Edit", key: "departmentedit" },
				],
			},
			{
				label: "Subjects",
				key: "subjects",
				icon: <FaChalkboardTeacher />,
				children: [
					{ label: "Subject List", key: "subjectlist" },
					{ label: "Subject Add", key: "subjectadd" },
					{ label: "Subject Edit", key: "subjectedit" },
				],
			},
		],
	},
	{
		label: "Management",
		key: "management",
		type: "group",
		children: [
			{ label: "Exam List", key: "examlist", icon: <AppstoreOutlined /> },
			{
				label: "Time Table",
				key: "timetable",
				icon: <AppstoreOutlined />,
			},
			{ label: "Library", key: "library", icon: <AppstoreOutlined /> },
			{
				label: "Blogs",
				key: "blog",
				icon: <AppstoreOutlined />,
				children: [
					{ label: "All Blogs", key: "allblogs" },
					{ label: "Add Blog", key: "addblog" },
					{ label: "Edit Blog", key: "editblog" },
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
		console.log(keys);
	};
	const toggleMenuCollapse = (info) => {
		setCollapsed(false);
		setOpenKeys(info.keyPath);
	};
	const navigate = useNavigate();
	return (
		<div style={{ width: 256 }} className="a-sidebar-layout">
			<Button
				type="primary"
				onClick={toggleCollapsed}
				style={{ marginBottom: 16 }}
			>
				{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			</Button>
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
