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
          background-color: black;
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