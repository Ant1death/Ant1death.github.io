import React from "react";
import ReactDOM from "react-dom/client";
import useMockAdapter from "src/api/useMockAdapter";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import App from "./App";
import FontLoader from "./helmet/FontLoader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const RootApp = () => {
  useMockAdapter();

  return <App />;
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FontLoader />
      <RootApp />
    </Provider>
  </React.StrictMode>
);
