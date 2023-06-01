import { AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import {
	FaBookOpen,
	FaChalkboardTeacher,
	FaGraduationCap,
	FaRegCalendarAlt,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { ImBlogger } from "react-icons/im";
import { MdOutlineSubject } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
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
				icon: <AppstoreOutlined style={{ color: "#ffff" }} />,
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
				icon: <FaGraduationCap style={{ color: "#ffff" }} />,
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
				icon: <GiTeacher style={{ color: "#ffff" }} />,
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
				icon: <FaChalkboardTeacher style={{ color: "#ffff" }} />,
				children: [
					{ label: "Department List", key: "department-list" },
					{ label: "Department Add", key: "department-add" },
					{ label: "Department Edit", key: "department-edit" },
				],
			},
			{
				label: "Subjects",
				key: "subjects",
				icon: <MdOutlineSubject style={{ color: "#ffff" }} />,
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
				icon: <FaBookOpen style={{ color: "#ffff" }} />,
			},
			{
				label: "Time Table",
				key: "time-table",
				icon: <FaRegCalendarAlt style={{ color: "#ffff" }} />,
			},
			{
				label: "Library",
				key: "library",
				icon: <VscLibrary style={{ color: "#ffff" }} />,
			},
			{
				label: "Blogs",
				key: "blog",
				icon: <ImBlogger style={{ color: "#ffff" }} />,
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
	const location = useLocation();
	const pathName = location.pathname.split("/")[1];
	const { isCollapse } = useSelector((state) => state.appReducer);
	const [openKeys, setOpenKeys] = useState();
	const onOpenChange = (keys) => {
		setOpenKeys(keys);
	};
	const toggleMenuCollapse = (info) => {
		setOpenKeys(info.keyPath);
	};
	const [currentActive, setCurrentActive] = useState(pathName);
	const navigate = useNavigate();
	const handleClickMenu = (info) => {
		toggleMenuCollapse(info);
		navigate(`/${info.key}`);
	};
	useEffect(() => {
		setCurrentActive(pathName);
	}, [pathName]);

	return (
		<div
			style={{ width: 256 }}
			className={
				isCollapse ? "a-sidebar-layout a-collapsed" : "a-sidebar-layout"
			}
		>
			<div className="a-sidebar">
				<Menu
					mode="inline"
					onClick={(info) => handleClickMenu(info)}
					items={item}
					inlineCollapsed={isCollapse}
					selectedKeys={[currentActive]}
					openKeys={openKeys}
					onOpenChange={(key) => onOpenChange(key)}
				></Menu>
			</div>
		</div>
	);
};
export default Sidebar;
