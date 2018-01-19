import React, { Component } from "react";

class List extends Component {
  static getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent: 1 };
  }

  render() {
    const { userAgent } = this.props;
    return <div>{this.props.userAgent}</div>;
  }
}

export default List;
