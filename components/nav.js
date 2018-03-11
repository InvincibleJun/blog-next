import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";

let isCustom = false;
class Menu extends Component {
  state = {
    isCustom
  }
  componentDidMount() {
    isCustom = true;
    this.refs['title'].addEventListener("webkitAnimationEnd", () => {
      this.setState({ isCustom })
    });
  }
  render() {
    const { isCustom } = this.state
    return (
      <div className={`animated ${isCustom ? '' : 'fadeInDown'}`} ref="title">
        <p>Jarvan's Blog</p>
        <ul>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </ul>
        <style jsx>{`
          div {
            line-height: 40px;
            height: 40px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
          }
          p {
            float: left;
            color: white;
            text-align: center;
            font-size: 14px;
            width: 120px;
            background-color: black;
          }
          ul {
            height: 40px;
            background-color: #fff;      
            marigin-left: 120px;
            padding-right: 200px;
          }
          a {
            float: right;
            width: 100px;
            margin: 0 10px;
            font-size: 14px;
          }
        `}</style>
      </div>
    );
  }
}

export default Menu;
