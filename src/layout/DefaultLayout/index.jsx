import Header from "../DefaultLayout/Header/Header";
import Sidebar from "../DefaultLayout/Sidebar/Sidebar";

import "./DefaultLayout.scss";
function DefaultLayout({ children }) {
	return (
		<div className="wrapper-default-layout">
			<Header />
			<div className="a-menu-content">
				<Sidebar />
				<div className="container-content">{children}</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
