import React, { Component } from 'react'
import Link from 'next/link'
import {
  blueGrey50,
  lightGreen50,
  grey800,
  grey600
} from 'material-ui/styles/colors'
import { getArticle } from '../../services/blog'
import PropTypes from 'prop-types'

import format from '../../utils/format'
import Blog from '../../components/blog'

class List extends Component {
  static async getInitialProps () {
    const res = await getArticle()
    const data = res.data.data
    if (data) {
      return { data }
    }
  }

  static propTypes = {
    data: PropTypes.array
  }

  render () {
    const { data } = this.props
    return (
      <Blog>
        <div>
          {data.map(art => (
            <Link
              as={`/blog/${art._id}`}
              href={`/blog/article?_id=${art._id}`}
              key={art.title}
            >
              <a className='blog-list'>
                <h3>{art.title}</h3>
                <p className='article-time'>{format(art.createTime)}</p>
                <p className='article-desc'>{art.desc}</p>
              </a>
            </Link>
          ))}
          <style jsx>
            {`
              a {
                display: block;
              }
              h3 {
                color: ${grey800};
              }
              .article-desc {
                font-size: 14px;
                line-height: 20px;
              }
              .article-time {
                margin: 15px 0;
                font-size: 14px;
                color: ${grey600};
              }
              .blog-list {
                margin-bottom: 20px;
                padding: 20px;
                box-sizing: border-box;
                border: 1px solid ${lightGreen50};
                background-color: ${blueGrey50};
                border-radius: 4px;
              }
            `}
          </style>
        </div>
      </Blog>
    )
  }
}

export default List
