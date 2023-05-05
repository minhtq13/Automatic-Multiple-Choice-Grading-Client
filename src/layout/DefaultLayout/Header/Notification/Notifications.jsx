import { BellOutlined } from "@ant-design/icons";
import { Badge, Popover } from "antd";
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
const Notifications = () => {
	return (
		<Popover content={content} placement="bottomRight">
			<Badge count={notifications.length}>
				<BellOutlined />
			</Badge>
		</Popover>
	);
};
export default Notifications;
