import React, { Component } from "react";
import { withRouter } from "next/router";
import Nav from "./Nav";
import Head from "./Head";
import Banner from "./Banner";

function Layout(props) {
  const { title = "jarvan的博客" } = props;
  return (
    <div>
      <Head title={title} />
      <Nav />
      {props.children}
      <div style={{ height: 60 }} />
      {/* <Banner /> */}
    </div>
  );
}

export default Layout;
