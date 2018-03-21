import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner-list">
          github:  https://github.com/InvincibleJun
        </div>
        <style jsx>{`
        .banner{
          height: 60px;
          background: #282537;
          background-image: -webkit-radial-gradient(top, circle cover, #3c3b52 0%, #252233 80%);
          background-image: -moz-radial-gradient(top, circle cover, #3c3b52 0%, #252233 80%);
          background-image: -o-radial-gradient(top, circle cover, #3c3b52 0%, #252233 80%);
          background-image: radial-gradient(top, circle cover, #3c3b52 0%, #252233 80%);
          bottom: 0;
          width: 100%;
        }
        .banner-list{
          color: #fff;
          text-align:center;
          line-height: 60px;
        }
        `}</style>
      </div>
    )
  }
}

export default Banner;