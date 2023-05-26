import { React } from "react";
import debounce from "lodash.debounce";
import Searchbox from "../../../components/Search/Searchbox";
import Account from "./Account/Account";
import "./Header.scss";
import Notifications from "./Notification/Notifications";
import { useSelector } from "react-redux";

const Header = () => {
	const { isCollapse } = useSelector((state) => state.appReducer)
	console.log(isCollapse);
	const handleOnChange = debounce((event) => {
		console.log(event.target.value);
	}, 300);
	const handleOnSearch = (value) => {
		console.log(value);
	};
	return (
		<div className="a-header-layout">
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
