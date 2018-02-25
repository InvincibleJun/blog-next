import React, { Component } from "react";
import {
  blue500,
  green50,
  grey900,
  amber500,
  blueGrey500
} from "material-ui/styles/colors";
import Layout from "../../components/Layout";

import { getArticle } from "../../services/blog";

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
      <Layout>
        <div className="blog-header">
          <h4>may the force be with you!</h4>
        </div>
        <div className="blog-container">
          <div className="blog-info">
            <div className="chunk-border blog-user" />
            <div className="chunk-border blog-user" />
          </div>
          <div className="blog-main">{this.props.children}</div>
        </div>
        <style jsx>{`
          .blog-header {
            background-color: ${grey900};
            height: 80px;
            overflow: hidden;
          }
          .blog-header h4 {
            line-height: 80px;
            margin-left: 40px;
            color: white;
          }
          .blog-main {
            width: 800px;
          }
          .blog-container {
            width: 1080px;
            margin: 20px auto 60px;
            position: relative;
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
      </Layout>
    );
  }
}

export default Blog;
