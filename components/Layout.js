import React, { Component } from "react";
import { withRouter } from "next/router";
import Nav from "./Nav";
import Head from "./Head";
import Banner from "./Banner";

class Layout extends Component {
  render() {
    return (
      <div>
        <Head title="首页" />
        <Nav />
        {this.props.children}
        <div style={{ height: 60 }} />
        <Banner />
      </div>
    );
  }
}

export default Layout;
