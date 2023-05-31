import Header from "../DefaultLayout/Header/Header";
import Sidebar from "../DefaultLayout/Sidebar/Sidebar";
import { useSelector } from "react-redux";

import "./DefaultLayout.scss";
function DefaultLayout({ children }) {
  const { isCollapse } = useSelector((state) => state.appReducer);
  return (
    <div className="wrapper-default-layout">
      <Header />
      <div className="a-menu-content">
        <Sidebar />
        <div className={isCollapse ? "container-content-collapse" : "container-content"}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
