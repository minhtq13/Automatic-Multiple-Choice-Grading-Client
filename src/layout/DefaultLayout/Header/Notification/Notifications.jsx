import { Badge, Popover, List, Avatar } from "antd";
import { useState } from "react";
import { FaBell } from "react-icons/fa";
import moment from "moment";
import "./Notifications.scss";
const notifications = [
	{
		id: 1,
		title: "New message from John",
		description: "Hey there, how are you?",
		date: "2020-05-16T08:00:00.000Z",
		read: false,
	},
	{
		id: 2,
		title: "Payment received",
		description: "You have received a payment of $100 from Jane Doe.",
		date: "2021-12-28T10:32:00.000Z",
		read: true,
	},
	{
		id: 3,
		title: "New order received",
		description: "Order #12345 has been placed.",
		date: "2021-12-25T15:20:00.000Z",
		read: true,
	},
	{
		id: 4,
		title: "Account locked",
		description: "Your account has been locked due to suspicious activity.",
		date: "2021-12-23T21:05:00.000Z",
		read: true,
	},
	{
		id: 5,
		title: "New comment on your post",
		description:
			'Someone commented on your post "Lorem ipsum dolor sit amet".',
		date: "2021-12-22T13:15:00.000Z",
		read: true,
	},
	{
		id: 6,
		title: "Password reset requested",
		description:
			"A password reset has been requested for your account. If you did not request this, please ignore this message.",
		date: "2021-12-20T09:45:00.000Z",
		read: true,
	},
	{
		id: 7,
		title: "New follower",
		description: "You have a new follower named Jane Doe.",
		date: "2021-12-18T16:30:00.000Z",
		read: true,
	},
	{
		id: 8,
		title: "New message from Jane",
		description: "Hi there, just wanted to say hello!",
		date: "2021-12-17T08:55:00.000Z",
		read: true,
	},
	{
		id: 9,
		title: "New blog post",
		description:
			'A new blog post titled "Lorem ipsum dolor sit amet" has been published.',
		date: "2021-12-15T11:20:00.000Z",
		read: true,
	},
	{
		id: 10,
		title: "Server maintenance",
		description:
			"We will be performing scheduled maintenance on our servers on December 13th from 10pm to 2am. Some features may be unavailable during this time.",
		date: "2021-12-13T23:00:00.000Z",
		read: true,
	},
	{
		id: 11,
		title: "Account created",
		description: "Your account has been successfully created.",
		date: "2021-12-11T14:10:00.000Z",
		read: true,
	},
	{
		id: 12,
		title: "Welcome to our newsletter",
		description:
			"Thank you for subscribing to our newsletter. You will receive monthly updates about our latest products and promotions.",
		date: "2021-12-09T09:00:00.000Z",
		read: true,
	},
	{
		id: 13,
		title: "New message from John",
		description: "Hey there, how are you?",
		date: "2021-12-07T07:45:00.000Z",
		read: true,
	},
	{
		id: 14,
		title: "New message from Jane",
		description: "Hi there, just wanted to say hello!",
		date: "2021-12-05T16:20:00.000Z",
		read: true,
	},
	{
		id: 15,
		title: "New comment on your post",
		description:
			'Someone commented on your post "Lorem ipsum dolor sit amet".',
		date: "2021-12-03T13:25:00.000Z",
		read: true,
	},
];
const MAX_NOTIFICATIONS = 10;
const Notifications = () => {
	const [showAll, setShowAll] = useState(false);
	const [visible, setVisible] = useState(false);

	const handleVisibleChange = (visible) => {
		setVisible(visible);
	};
	const getTimeString = (createdAt) => {
		const now = moment();
		const diffMinutes = now.diff(createdAt, "minutes");
		const diffHours = now.diff(createdAt, "hours");
		const diffDays = now.diff(createdAt, "days");
		const diffWeeks = now.diff(createdAt, "weeks");
		const diffMonths = now.diff(createdAt, "months", true);
		const diffYears = now.diff(createdAt, "years");

		if (diffMinutes < 60) {
			return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
		} else if (diffHours < 24) {
			return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
		} else if (diffDays < 7) {
			return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
		} else if (diffWeeks < 4) {
			return `${diffWeeks} week${diffWeeks !== 1 ? "s" : ""} ago`;
		} else if (now.date() > new Date(createdAt)) {
			return `${Math.floor(diffMonths)} month${
				Math.floor(diffMonths) !== 1 ? "s" : ""
			} ago`;
		} else if (diffMonths < 12) {
			return `${diffMonths} month${diffMonths !== 1 ? "s" : ""} ago`;
		} else {
			return `${diffYears} year${diffYears !== 1 ? "s" : ""} ago`;
		}
	};
	const content = (
		<List
			size="small"
			header={
				<div className="a-noti-header">
					<div className="a-noti-text">Notifications</div>
					<a href="/delete">CLEAR ALL</a>
				</div>
			}
			footer={
				notifications.length > MAX_NOTIFICATIONS && !showAll ? (
					<div
						onClick={() => setShowAll(true)}
						className="a-view-all"
					>
						View all notifications
					</div>
				) : (
					<div
						onClick={() => setShowAll(false)}
						className="a-view-all"
					>
						View less notifications
					</div>
				)
			}
			bordered
			dataSource={
				showAll
					? notifications
					: notifications.slice(0, MAX_NOTIFICATIONS)
			}
			renderItem={(notification) => (
				<List.Item key={notification.id}>
					<List.Item.Meta
						title={notification.title}
						description={
							<>
								<div className="a-noti-description">
									{notification.description}
								</div>
								<small>
									{getTimeString(notification.date)}
								</small>
							</>
						}
						avatar={
							<Avatar
								src={
									"https://static1.dienanh.net/upload/202203/db8fd584-5830-40b0-b5e8-c42885d676b4.jpeg"
								}
							/>
						}
					/>
				</List.Item>
			)}
		/>
	);
	return (
		<Popover
			className="a-notification"
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
