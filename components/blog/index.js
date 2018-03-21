import React, { Component } from "react";
import {
  blue500,
  green50,
  grey900,
  amber500,
  blueGrey500
} from "material-ui/styles/colors";
import Layout from "../../components/Layout";
import NewList from "./new-list";

class Blog extends Component {
  render() {
    return (
      <Layout>
        <div className="blog-header">
          <h4>may the force be with you!</h4>
        </div>
        <div className="blog-container">
          <div>{this.props.children}</div>
        </div>
        <style jsx>{`
          .blog-header {
            background: #282537;
            background-image: -webkit-radial-gradient(top, circle cover, #3c3b52 0%, #252233 80%);
            background-image: -moz-radial-gradient(top, circle cover, #3c3b52 0%, #252233 80%);
            background-image: -o-radial-gradient(top, circle cover, #3c3b52 0%, #252233 80%);
            background-image: radial-gradient(top, circle cover, #3c3b52 0%, #252233 80%);
            height: 80px;
            overflow: hidden;
          }
          .blog-header h4 {
            line-height: 80px;
            margin-left: 40px;
            color: white;
          }
          .blog-container {
            width: 1080px;
            margin: 20px auto 60px;
            position: relative;
            min-height: 600px;
          }
          .blog-info {
            width: 260px;
            float: right;
            right: 0;
            top: 0;
            height: 800px;
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
