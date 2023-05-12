import { Badge, Popover } from "antd";
import { useState } from "react";
import { FaBell } from "react-icons/fa";
import "./Notifications.scss";
const notifications = [
	{
		id: 1,
		title: "Thông báo 1",
		description: "Nội dung thông báo 1",
		timestamp: Date.now(),
	},
	{
		id: 2,
		title: "Thông báo 2",
		description: "Nội dung thông báo 2",
		timestamp: Date.now(),
	},
];

const Notifications = () => {
	const [visible, setVisible] = useState(false);

	const handleVisibleChange = (visible) => {
		setVisible(visible);
	};
	const content = (
		<div>
			{notifications.map((notification) => (
				<div key={notification.id}>
					<h4>{notification.title}</h4>
					<p>{notification.description}</p>
					<small>
						{new Date(notification.timestamp).toLocaleString()}
					</small>
				</div>
			))}
		</div>
	);
	return (
		<Popover
			content={content}
			placement="bottomRight"
			trigger="click"
			open={visible}
			onOpenChange={handleVisibleChange}
		>
			<Badge count={notifications.length}>
				<FaBell size={24} />
			</Badge>
		</Popover>
	);
};
export default Notifications;
