/*
 * 图片浏览器
***/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ImageWatch extends Component {
  static propTypes = {
    // images: PropTypes.array,
    // active: PropTypes.number,
    hide: PropTypes.func,
    ele: PropTypes.object
  }

  componentDidMount () {
    this.banScroll = this.makeBanScroll()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.ele) {
      this.banScroll(true)
    }
  }

  getPosition (ele) {
    if (!ele) return
    let x = 0
    let y = 0
    let h = ele.offsetHeight
    let w = ele.offsetWidth
    while (ele.offsetParent) {
      x += ele.offsetLeft
      y += ele.offsetTop
      ele = ele.offsetParent
    }
    return {
      x,
      y,
      h,
      w
    }
  }

  makeBanScroll () {
    let b = document.body
    let top = 0
    return function (isFixed) {
      if (isFixed) {
        top = window.scrollY
        b.style.position = 'fixed'
        b.style.top = -top + 'px'
        b.style.width = '100%'
      } else {
        b.style.position = ''
        b.style.top = ''
        window.scroll(0, top)
      }
    }
  }

  hide () {
    this.banScroll(false)
    this.props.hide()
  }

  render () {
    const { ele } = this.props
    this.getPosition(ele)
    let url = ele && ele.getAttribute('src')
    return (
      <div
        className='container'
        style={{
          display: ele ? 'block' : 'none'
        }}
        onClick={() => this.hide()}
      >
        {ele && <div className='cover' />}
        <img src={url} className='img' />
        <style jsx>{`
          .container {
            cursor: zoom-out;
            position: fixed;
            background-color: rgba(220, 220, 220, 0.6);
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            overflow: auto;
          }
          .cover {
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
          }
          .img {
            width: 80vw;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}</style>
      </div>
    )
  }
}
