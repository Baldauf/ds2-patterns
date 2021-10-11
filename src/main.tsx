import React, { useState } from "react";
import ReactDOM from "react-dom";
import { EuiPageTemplate } from "@elastic/eui";
import Header from "./header/index";
import { AccountSwitcher } from "./account-switcher/account-switcher";

const Skeleton = () => {
  return (
    <div>
      <Header />
      <EuiPageTemplate template="centeredContent">
        <AccountSwitcher />
      </EuiPageTemplate>
    </div>
  );
};

export default Skeleton;

ReactDOM.render(
  <React.StrictMode>
    <Skeleton />
  </React.StrictMode>,
  document.getElementById("root")
);
