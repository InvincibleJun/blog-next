import React, { Component } from "react";
import NextHead from "next/head";
import { string } from "prop-types";

class Head extends Component {
  render() {
    const { title } = this.props;
    return (
      <NextHead>
        <meta charSet="UTF-8" />
        <title>{title || ""}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/static/css/reset.css" />
        <link rel="stylesheet" href="/static/css/index.css" />
        <link rel="stylesheet" href="/static/css/animate.css" />
      </NextHead>
    );
  }
}

Head.propTypes = {
  title: string
};

export default Head;
