import {
	LogoutOutlined,
	SettingOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import "./Account.scss";
import { clearUserInfo } from "../../../../utils/storage";
const user = {
	name: "Nguyen Van A",
	avatar: "https://static1.dienanh.net/upload/202203/db8fd584-5830-40b0-b5e8-c42885d676b4.jpeg",
	role: "Administrator",
};

const Account = () => {
	const navigate = useNavigate();

	const items = [
		{
			key: 1,
			label: (
				<div className="a-account-role a-menu-item">
					<Avatar size={40} src={user.avatar} />
					<div className="a-name-role">
						<span>{user.name}</span>
						<span>{user.role}</span>
					</div>
				</div>
			),
			onClick: () => { },
		},
		{
			key: 2,
			label: (
				<div className="a-menu-item">
					<UserOutlined />
					<div className="a-account-content">My Profile</div>
				</div>
			),
			onClick: () => { },
		},
		{
			key: 3,
			label: (
				<div className="a-menu-item">
					<SettingOutlined />
					<div className="a-account-content">Setting</div>
				</div>
			),
			onClick: () => { },
		},
		{
			key: 4,
			label: (
				<div className="a-menu-item">
					<LogoutOutlined />
					<div className="a-account-content">Logout</div>
				</div>
			),
			onClick: () => {
				navigate("/login");
				clearUserInfo()
			},
		},
	];
	return (
		<div className="a-account-menu">
			<Dropdown
				menu={{
					items,
				}}
				overlayClassName="user-menu-overlay"
				trigger={["click"]}
			>
				<div>
					<Avatar size={35} src={user.avatar} />
				</div>
			</Dropdown>
		</div>
	);
};
export default Account;
