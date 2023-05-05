import {
	AppstoreOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import { FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import "./Sidebar.scss";
import SidebarComponent from "./SidebarComponent";

const getItem = (label, key, icon, children, type) => {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
};
const items = [
	{
		item: [
			getItem("Dashboard", "sub1", <AppstoreOutlined />, [
				getItem("Admin Dashboard", "1"),
				getItem("Student Dashboard", "2"),
				getItem("Teacher Dashboard", "3"),
			]),
			getItem("Students", "sub2", <FaGraduationCap />, [
				getItem("Student List", "4"),
				getItem("Student View", "5"),
				getItem("Student Add", "6"),
				getItem("Student Edit", "7"),
			]),
			getItem("Teachers", "sub3", <FaChalkboardTeacher />, [
				getItem("Teacher List", "8"),
				getItem("Teacher View", "9"),
				getItem("Teacher Add", "10"),
				getItem("Teacher Edit", "11"),
			]),
			getItem("Departments", "sub4", <AppstoreOutlined />, [
				getItem("Department List", "12"),
				getItem("Department Add", "13"),
				getItem("Department Edit", "14"),
			]),
			getItem("Subjects", "sub5", <AppstoreOutlined />, [
				getItem("Subject List", "15"),
				getItem("Subject Add", "16"),
				getItem("Subject Edit", "17"),
			]),
		],
		title: "Main menu",
	},
	{
		item: [
			getItem("Exam List", "1", <AppstoreOutlined />),
			getItem("Time Table", "2", <AppstoreOutlined />),
			getItem("Library", "3", <AppstoreOutlined />),
			getItem("Blogs", "sub1", <AppstoreOutlined />, [
				getItem("All blogs", "4"),
				getItem("Add Blog", "5"),
				getItem("Edit Blog", "6"),
			]),
			getItem("Setting", "7", <SettingOutlined />),
		],
		title: "Management",
	},
];

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};
	return (
		<div style={{ width: 256 }} className="a-sidebar-layout">
			<Button
				type="primary"
				onClick={toggleCollapsed}
				style={{ marginBottom: 16 }}
			>
				{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			</Button>
			{items.map((item, index) => {
				return (
					<SidebarComponent
						sidebarTitle={item.title}
						items={item.item}
						key={index}
						collapsed={collapsed}
					/>
				);
			})}
		</div>
	);
};
export default Sidebar;
