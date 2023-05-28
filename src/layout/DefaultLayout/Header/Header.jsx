import { React } from "react";
import debounce from "lodash.debounce";
import Searchbox from "../../../components/Search/Searchbox";
import Account from "./Account/Account";
import "./Header.scss";
import Notifications from "./Notification/Notifications";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { setIsCollapse } from "../../../redux/slices/appSlice";

const Header = () => {
	const dispatch = useDispatch();
	const { isCollapse } = useSelector((state) => state.appReducer);
	const handleOnChange = debounce((event) => {
		console.log(event.target.value);
	}, 300);
	const handleOnSearch = (value) => {
		console.log(value);
	};
	const toggleCollapsed = () => {
		dispatch(setIsCollapse(!isCollapse));
	};
	return (
		<div className="a-header-layout">
			<div
				className={
					isCollapse
						? "a-header-logo a-logo-collapsed"
						: "a-header-logo"
				}
			></div>
			<div className="a-button-header">
				<Button
					type="primary"
					onClick={toggleCollapsed}
					style={{ marginBottom: 16 }}
				>
					{isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				</Button>
			</div>
			<div className="a-header-search">
				<Searchbox
					onChange={(event) => handleOnChange(event)}
					onSearch={(value) => handleOnSearch(value)}
				/>
			</div>
			<div className="a-header-noti-account">
				<Notifications />
				<Account />
			</div>
		</div>
	);
};

export default Header;
