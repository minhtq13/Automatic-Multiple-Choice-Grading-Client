// import "antd/dist/antd.min.css";
import "antd/dist/reset.css";
import { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./bootstrap.min.css";
import { publicRoutes } from "./config/appRouter";
import PrivateRoute from "./config/privateRouter";
import DefaultLayout from "./layout/DefaultLayout";
import SignLayout from "./layout/SignLayout";

function App() {
  const getLayout = (layout) => {
    if (layout === null) return Fragment;
    else if (layout === "SignLayout") return SignLayout;
    else return DefaultLayout;
  };

  return (
    <Router>
      <ToastContainer className="foo" />
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = getLayout(route.layout);
            const Page = route.component;
            const privateRoute = route.isPrivateRouter;
            return (
              <Route
                key={index}
                path={route.path}
                exact
                element={
                  <Layout>
                    {privateRoute === true ? (
                      <PrivateRoute>
                        <Page />
                      </PrivateRoute>
                    ) : (
                      <Page />
                    )}
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
