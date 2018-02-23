import React, { Component } from "react";
import styled from "styled-components";
import List from "../components/blog/list";
import {
  blue500,
  green50,
  amber500,
  blueGrey500
} from "material-ui/styles/colors";
import Layout from "../components/Layout";
import css from "styled-jsx/css";

import { getArticle } from '../services/blog'
import list from "../components/blog/list";

class Blog extends Component {
  static async getInitialProps({ req }) {
    let res = await getArticle();
    if (res) {
      return { list: res.data.data }
    }
  }
  render() {
    const { list } = this.props;

    return (
      < Layout >
        <div className="blog-header">header{this.props.userAgent}</div>
        <div className="blog-container">
          <div className="blog-info">
            <div className="chunk-border blog-user" />
            <div className="chunk-border blog-user" />
          </div>
          <div className="chunk-border blog-list">
            <List data={list} />
          </div>
        </div>
        <style jsx>{`
          .blog-header {
            background-color: ${blue500};
            height: 80px;
          }
          .blog-container {
            width: 1080px;
            margin: 20px auto;
            background-color: ${green50};
            position: relative;
            overflow: auto;
          }
          .blog-info {
            width: 260px;
            float: right;
            right: 0;
            top: 0;
            height: 800px;
            background-color: ${amber500};
          }
          .blog-user {
            height: 300px;
            background-color: ${blueGrey500};
            margin-bottom: 20px;
          }
          .blog-list {
            width: 800px;
            height: 400px;
            background-color: ${amber500};
          }
        `}</style>
      </Layout >
    );
  }
}

export default Blog;
