import Blog from '../../components/blog'
import ImageWatch from '../../components/blog/image-watch'
import Anchors from '../../components/blog/anchors'
import React, { Component } from 'react'
import { getOne } from '../../services/blog'
import marked from 'marked'
import moment from 'moment'
import PropTypes from 'prop-types'

class Article extends Component {
  static async getInitialProps ({ req, query }) {
    const { _id } = req ? req.params : query
    if (_id) {
      let res = await getOne({
        _id
      })
      let data = res.data.data
      data.body = marked(data.body)
      return {
        data,
        isApp: req && !!req.query.isApp
      }
    }
  }

  static propTypes = {
    data: PropTypes.object,
    isApp: PropTypes.boolean
  }

  state = {
    images: [],
    active: -1,
    ele: null
  }

  componentDidMount () {
    !this.props.isApp && this.imageInit()
  }

  imageInit () {
    const article = document.querySelector('.markdown-body')
    const imgs = article.querySelectorAll('img')
    const images = [].map.call(imgs, function (img) {
      return img.getAttribute('src')
    })
    this.setState({
      images
    })
    article.addEventListener('click', e => {
      let target = e.target
      if (target.nodeName === 'IMG') {
        for (let i = 0, l = imgs.length; i < l; i++) {
          if (imgs[i] === target) {
            this.setState({
              active: i,
              ele: imgs[i]
            })
            break
          }
        }
      }
    })
  }

  hide () {
    this.setState({
      ele: null
    })
  }
  render () {
    const { data, isApp } = this.props
    const { images, active, ele } = this.state
    return (
      <div>
        {isApp ? (
          <div
            className='markdown-body'
            dangerouslySetInnerHTML={{
              __html: data.body
            }}
          />
        ) : (
          <Blog>
            <div className='article-right'>
              <Anchors data={data.anchors} />
            </div>
            <div className='chunk-border article-main'>
              <h2>{data.title}</h2>
              <p className='article-time'>
                {moment(data.createTime).format('YYYY-MM-DD HH:mm:ss')}
              </p>
              <hr />
              <div
                className='markdown-body'
                dangerouslySetInnerHTML={{
                  __html: data.body
                }}
              />
              <div
                style={{
                  height: 500
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
              h2 {
                margin-left: 20px;
              }
              .article-main {
                width: 800px;
                padding: 20px;
              }
              .article-right {
                width: 260px;
                float: right;
              }
              .article-time {
                font-size: 14px;
                margin: 20px;
              }
            `}</style>
          </Blog>
        )}
      </div>
    )
  }
}

export default Article
// parser: 'babel-eslint',
