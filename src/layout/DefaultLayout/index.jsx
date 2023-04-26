import "./DefaultLayout.scss";

function DefaultLayout({ children }) {
  return (
    <div className="wrapper-default-layout">
      {/* <Header/> */}
      <div className="">
        {/* <Sidebar/> */}
        <div className="container-content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
