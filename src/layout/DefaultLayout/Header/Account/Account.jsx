import {
	LogoutOutlined,
	SettingOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Menu } from "antd";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Account.scss";
const user = {
	name: "Nguyen Van A",
	avatar: "https://static1.dienanh.net/upload/202203/db8fd584-5830-40b0-b5e8-c42885d676b4.jpeg",
	role: "Administrator",
};

const Account = () => {
	const overlayRef = useRef(null);
	const navigate = useNavigate();
	const handleAvatarClick = () => {
		overlayRef.current?.handleVisibleChange(true);
	};
	const UserMenu = (
		<>
			<div className="a-account-role">
				<Avatar size={40} src={user.avatar} />
				<div className="a-name-role">
					<span>{user.name}</span>
					<span>{user.role}</span>
				</div>
			</div>
			<Menu>
				<Menu.Item key="profile" className="a-menu-item">
					<UserOutlined />
					<div className="a-account-content">My Profile</div>
				</Menu.Item>
				<Menu.Item key="settings" className="a-menu-item">
					<SettingOutlined />
					<div className="a-account-content">Setting</div>
				</Menu.Item>
				<Menu.Item key="logout" onClick={() => navigate("/login")}>
					<LogoutOutlined />
					<div className="a-account-content">Logout</div>
				</Menu.Item>
			</Menu>
		</>
	);
	return (
		<div className="a-account-menu">
			<Dropdown
				overlay={UserMenu}
				overlayClassName="user-menu-overlay"
				trigger={["click"]}
				ref={overlayRef}
			>
				<div onClick={handleAvatarClick}>
					<Avatar size={35} src={user.avatar} />
				</div>
			</Dropdown>
		</div>
	);
};
export default Account;
