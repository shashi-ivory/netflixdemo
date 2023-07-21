import logo from "./logo.svg";
import "./App.scss";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import Header from "./Component/Header";
import React from "react";
import HomeBanner from "./Component/HomeBanner";
import Login from "./Component/Login";

function App() {
  return (
    <React.Fragment>
      {/* <Header />
      <HomeBanner /> */}
      <Login />
    </React.Fragment>
  );
}

export default App;
