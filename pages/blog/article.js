import React, { Component } from "react";
import marked from "marked";
import moment from "moment";
import PropTypes from "prop-types";
import Blog from "../../components/blog";
import ImageWatch from "../../components/blog/ImageWatch";
import { getOne } from "../../services/blog";
import Tag from "../../components/Tag";

class Article extends Component {
  static async getInitialProps({ req, query }) {
    const { _id } = req ? req.params : query;
    if (_id) {
      let data = await getOne({
        _id
      });
      data.body = marked(data.body);
      return {
        data
      };
    }
  }

  static propTypes = {
    data: PropTypes.object
  };

  state = {
    images: [],
    active: -1,
    ele: null
  };

  componentDidMount() {
    !this.props.isApp && this.imageInit();
  }

  imageInit() {
    const article = document.querySelector(".markdown-body");
    const imgs = article.querySelectorAll("img");
    const images = [].map.call(imgs, function(img) {
      return img.getAttribute("src");
    });
    this.setState({
      images
    });
    article.addEventListener("click", e => {
      let target = e.target;
      if (target.nodeName === "IMG") {
        for (let i = 0, l = imgs.length; i < l; i++) {
          if (imgs[i] === target) {
            this.setState({
              active: i,
              ele: imgs[i]
            });
            break;
          }
        }
      }
    });
  }

  hide() {
    this.setState({
      ele: null
    });
  }
  render() {
    const { data } = this.props;
    const { images, active, ele } = this.state;
    return (
      <Blog title={data.title}>
        <div className="chunk-border article-main">
          <h2>{data.title}</h2>
          <p className="article-more">
            {data.tags.map(tag => (
              <Tag key={tag._id} {...tag} />
            ))}
            <span className="article-time">
              {moment(data.createTime).format("YYYY-MM-DD HH:mm:ss")}
            </span>
          </p>
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{
              __html: data.body
            }}
          />
        </div>
        <ImageWatch
          images={images}
          active={active}
          ele={ele}
          hide={() => this.hide()}
        />
        <style jsx>{`
          .article-main {
            padding: 20px 20px 60px;
          }
          .article-right {
            width: 260px;
            float: right;
          }
          .article-more {
            padding: 10px 0;
            border-bottom: 1px solid #ccc;
          }
          .article-time {
            font-size: 14px;
            margin-left: 20px;
          }
        `}</style>
      </Blog>
    );
  }
}

export default Article;
