import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import { getArticle } from "../../services/blog";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import format from "../../utils/format";
import Blog from "../../components/blog";
import { loadTag, loadArticleList } from "../../actions/article";
import { getTags, getArticles } from "../../services/blog";
import Tag from "../../components/Tag";
import style from './index.scss';

class List extends Component {
  static async getInitialProps({ store, query }) {
    const { tag } = query;
    const [tags, articles] = await Promise.all([
      getTags(),
      getArticles({tag})
    ]);
    store.dispatch(loadTag(tags));
    store.dispatch(loadArticleList(articles));
    return { loaded: true };
  }

  static propTypes = {
    data: PropTypes.array
  };

  async handlerClickTag({name}) {
    Router.replace(`/blog?tag=${name}`)
  }

  render() {
    const { list, tags } = this.props.article;
    return (
      <Blog>
        <div style={{lineHeight: '40px'}}>
          {tags.map(tag => (
            <Tag key={tag._id} {...tag} onClick={() => this.handlerClickTag(tag)} />
          ))}
        </div>
        <div>
          {list.map(art => (
            <Link
              as={`/blog/${art._id}`}
              href={`/blog/article?_id=${art._id}`}
              key={art._id}
            >
              <a className={style.box}>
                <h3>{art.title}</h3>
                <p className={style.time}>{format(art.createTime)}</p>
                <p className={style.desc}>{art.desc}......</p>
              </a>
            </Link>
          ))}
        </div>
      </Blog>
    );
  }
}

const mapStateToProps = ({ article }) => ({ article });

export default connect(mapStateToProps)(List);
