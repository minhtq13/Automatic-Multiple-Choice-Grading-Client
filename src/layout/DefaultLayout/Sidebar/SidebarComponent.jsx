import { Menu } from "antd";
const SidebarComponent = (props) => {
	return (
		<div style={{ width: 256 }}>
			<div>{props.sidebarTitle}</div>
			<Menu
				defaultSelectedKeys={["1"]}
				defaultOpenKeys={["sub1"]}
				mode="inline"
				inlineCollapsed={props.collapsed}
				items={props.items}
			/>
		</div>
	);
};
export default SidebarComponent;
