import React from "react";
import Searchbox from "../../../components/Search/Searchbox";
import Account from "./Account/Account";
import "./Header.scss";
import Notifications from "./Notification/Notifications";

const Header = () => {
	return (
		<div className="a-header-layout">
			<Searchbox onChange={(value) => console.log(value.nativeEvent)} />
			<Notifications />
			<Account />
		</div>
	);
};

export default Header;
