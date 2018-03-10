import React, { Component } from "react";
import { withRouter } from 'next/router';

// import '../assets/css/reset.css';
// import '../assets/css/index.css';
// import '../assets/fonts/iconfont.css';
import Nav from "./nav";
import Head from "./Head";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
class Layout extends Component {
  render() {
    console.log(this.props)
    return (
      <MuiThemeProvider>
        <div>
          <Head title="首页" />
          <Nav />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(Layout);
