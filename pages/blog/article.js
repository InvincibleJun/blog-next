import Blog from "../../components/blog";
import React, { Component } from "react";
import { getOne } from "../../services/blog";
import NextHead from "next/head";
import marked from 'marked';
// import "../../assets/css/github-markdonw.css";
class Article extends Component {
  static async getInitialProps({ req, query }) {
    const { _id } = req ? req.params : query;
    if (_id) {
      let res = await getOne({ _id });
      return { data: res.data.data };
    } else {
    }
  }
  render() {
    const { data } = this.props;
    return (
      <Blog>
        <NextHead>
          <link rel="stylesheet" href="/static/css/github-markdonw.css" />
        </NextHead>
        <h3>{data.title}</h3>
        <hr />
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: marked(data.body) }} />
        <style jsx>{`
        `}
        </style>
      </Blog>
    );
  }
}

export default Article;
