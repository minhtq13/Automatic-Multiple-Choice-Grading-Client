import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import GlobalStyles from "../src/components/GlobalStyles";
import App from "./App";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#8c1515",
        },
      }}
    >
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </ConfigProvider>
  </Provider>
);

reportWebVitals();
