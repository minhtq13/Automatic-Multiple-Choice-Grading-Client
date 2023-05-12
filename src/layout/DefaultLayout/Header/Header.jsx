import { React } from "react";
import debounce from "lodash.debounce";
import Searchbox from "../../../components/Search/Searchbox";
import Account from "./Account/Account";
import "./Header.scss";
import Notifications from "./Notification/Notifications";

const Header = () => {
	const handleSearch = debounce((event) => {
		console.log(event.target.value);
	}, 300);
	return (
		<div className="a-header-layout">
			<div className="a-header-search">
				<Searchbox
					onChange={(event) => handleSearch(event)}
					onSearch={(value) => console.log(value)}
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
