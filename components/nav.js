import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";

class Menu extends Component {
  render() {
    return (
      <div>
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
