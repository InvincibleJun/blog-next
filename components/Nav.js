import React, { Component } from "react";
import Link from "next/link";
import style from "./nav.scss";

let isCustom = false;

class Menu extends Component {
  state = {
    isCustom
  };
  componentDidMount() {
    isCustom = true;
    this.refs["title"].addEventListener("webkitAnimationEnd", () => {
      this.setState({ isCustom });
    });
  }
  render() {
    const { isCustom } = this.state;
    return (
      <div
        className={`${style.box} animated ${isCustom ? "" : "fadeInDown"}`}
        ref="title"
      >
        <p className={style.title}>Jarvan's Blog</p>
        <ul className={style.list}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Menu;
