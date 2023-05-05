import {
	LogoutOutlined,
	SettingOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Menu } from "antd";

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
	return (
		<Dropdown overlay={UserMenu}>
			<div className="user-menu">
				<Avatar size={32} src={user.avatar} />
				<span>{user.name}</span>
			</div>
		</Dropdown>
	);
};
export default Account;
