import React, { Component } from 'react'

class Banner extends Component {
  render () {
    return (
      <div className='banner'>
        <div className='banner-list'>
          github: https://github.com/InvincibleJun
        </div>
        <style jsx>{`
          .banner {
            height: 60px;
            background-color: #282537;
            bottom: 0;
            width: 100%;
            position: fixed;
            bottom: 0;
          }
          .banner-list {
            color: #fff;
            text-align: center;
            line-height: 60px;
          }
        `}</style>
      </div>
    )
  }
}

export default Banner
