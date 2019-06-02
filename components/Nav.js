import React, { Component } from "react";
import Link from "next/link";
import style from "./nav.scss";
import Router, { withRouter } from "next/router";

let isCustom = false;

const linkMap = {
  "/": { name: "Home", include: ["/"] },
  "/blog": { name: "Blog", include: ["/blog", "/blog/article"] },
  "/me":  { name: "Me", include: ["/me"] }
};

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
    const { router } = this.props;
 
    let matched = false;

    return (
      <div
        className={`${style.box} animated ${isCustom ? "" : "fadeInDown"}`}
        ref="title"
      >
        <p className={style.title}>Jarvan's Blog</p>
        <ul className={style.list}>
          {Object.keys(linkMap).map(key => (
            <Link href={key} key={key}>
              <a className={linkMap[key].include.includes(router.pathname) ? style.active : ""}>{linkMap[key].name}</a>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(Menu);
