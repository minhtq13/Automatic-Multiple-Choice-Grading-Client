import {
	LogoutOutlined,
	SettingOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Menu } from "antd";
import { useRef } from "react";
import "./Account.scss";
const user = {
	name: "Nguyễn Văn A",
	avatar: "https://example.com/avatar.jpg",
};

const UserMenu = (
	<Menu>
		<Menu.Item key="profile">
			<UserOutlined />
			<span>Thông tin tài khoản</span>
		</Menu.Item>
		<Menu.Item key="settings">
			<SettingOutlined />
			<span>Cài đặt</span>
		</Menu.Item>
		<Menu.Divider />
		<Menu.Item key="logout">
			<LogoutOutlined />
			<span>Đăng xuất</span>
		</Menu.Item>
	</Menu>
);
const Account = () => {
	const overlayRef = useRef(null);

	const handleAvatarClick = () => {
		overlayRef.current?.handleVisibleChange(true);
	};

	return (
		<div className="a-account-menu">
			<Dropdown
				overlay={UserMenu}
				overlayClassName="user-menu-overlay"
				trigger={["click"]}
				ref={overlayRef}
			>
				<div onClick={handleAvatarClick}>
					<Avatar size={32} src={user.avatar} />
					<span>{user.name}</span>
				</div>
			</Dropdown>
		</div>
	);
};
export default Account;
