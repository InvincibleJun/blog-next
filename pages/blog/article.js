import Blog from "../../components/blog";
import Anchors from "../../components/blog/anchors";
import React, { Component } from "react";
import { getOne } from "../../services/blog";
import NextHead from "next/head";
import marked from "marked";
// import "../../assets/css/github-markdonw.css";
class Article extends Component {
  static async getInitialProps({ req, query }) {
    const { _id } = req ? req.params : query;
    if (_id) {
      let res = await getOne({ _id });
      let data = res.data.data
      data.body = marked(data.body)
      return { data };
    } else {
    }
  }
  render() {
    const { data } = this.props;
    console.log(data)
    return (
      <Blog>
        <NextHead>
          <link rel="stylesheet" href="/static/css/github-markdonw.css" />
        </NextHead>
        <div className="article-right">
          <Anchors data={data.anchors} />
        </div>
        <div className="chunk-border article-main">
          <h3>{data.title}</h3>
          <hr />
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: data.body }}
          />
        </div>
        <style jsx>{`
          .article-main {
            width: 800px;
          }
          .article-right {
            width: 260px;
            float: right;
          }
        `}</style>
      </Blog>
    );
  }
}

export default Article;
