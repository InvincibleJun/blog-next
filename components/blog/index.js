import React, { Component } from "react";
import {
  blue500,
  green50,
  amber500,
  blueGrey500
} from "material-ui/styles/colors";
import Layout from "../../components/Layout";

import { getArticle } from '../../services/blog'

class Blog extends Component {
  // static async getInitialProps({ req }) {
  //   let res = await getArticle();
  //   if (res) {
  //     return { list: res.data.data }
  //   }
  // }
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
          {this.props.children}
        </div>
        <style jsx>{`
            .blog-header {
              background-color: ${blue500};
              height: 80px;
            }
            .blog-container {
              width: 1080px;
              margin: 20px auto;
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