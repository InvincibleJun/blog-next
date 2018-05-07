import Blog from '../../components/blog'
import ImageWatch from '../../components/blog/image-watch'
import Anchors from '../../components/blog/anchors'
import React, { Component } from 'react'
import { getOne } from '../../services/blog'
import marked from 'marked'
import moment from 'moment'
import PropTypes from 'prop-types'

// import "../../assets/css/github-markdonw.css";

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
        data
      }
    }
  }

  static propTypes = {
    data: PropTypes.object
  }

  state = {
    images: [],
    active: -1,
    ele: null
  }

  componentDidMount () {
    this.imageInit()
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
    const { data } = this.props
    const { images, active, ele } = this.state
    return (
      <Blog>
        <div className='article-right'>
          <Anchors data={data.anchors} />
        </div>
        <div className='chunk-border article-main'>
          <h3>{data.title}</h3>
          <p className='article-time'>
            {moment(data.createTime).format('YYYY-MM-DD hh:mm:ss')}
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
          .article-main {
            width: 800px;
          }
          .article-right {
            width: 260px;
            float: right;
          }
          .article-time {
            font-size: 14px;
            margin: 10px 20px;
          }
        `}</style>
      </Blog>
    )
  }
}

export default Article
// parser: 'babel-eslint',
