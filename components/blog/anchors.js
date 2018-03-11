import React, { Component } from "react";

class Anchors extends Component {
  state = {
    top: 0,
    fixed: false,
    anchorsEls: null,
    hash: ""
  };
  componentDidMount() {
    const el = document.querySelector(".anchors"),
      anchorsEls = document.querySelectorAll("a[name]"),
      top = getTop(el);
    this.setState({ top, anchorsEls });
    window.addEventListener("scroll", e => {
      this.scroll(e);
    });
  }
  scroll(e) {
    const { top, anchorsEls } = this.state;
    let sTop =
      document.documentElement.scrollTop || document.documentElement.scrollTop;

    this.setState({ fixed: top < sTop + 50 });

    let i = 0,
      l = anchorsEls.length,
      hash = "";
    while (i < l && getTop(anchorsEls[i]) < sTop + 20) {
      hash = anchorsEls[i].getAttribute("name");
      i++;
    }
    if (hash && hash !== window.location.hash) {
      this.setState({ hash });
      // window.location.hash = hash;
    }
  }
  render() {
    const { data } = this.props;
    const { fixed, hash } = this.state;
    return (
      <div className={`anchors ${fixed ? "fixed" : ""}`} ref="anchors">
        {data.map((v, k) => (
          <li key={k} className={`${hash === v.title ? "active" : ""}`}>
            <a style={{ marginLeft: v.level * 15 }} href={`#${v.title}`}>
              {v.title}
            </a>
          </li>
        ))}
        <style jsx>{`
          .anchors {
            line-height: 30px;
            border-left: 1px solid #ddd;
          }
          .active {
            background-color: #f3f3f3
            color: green;
            box-sizing: border-box;
            border-left: 2px solid green;
          }
          .anchors.fixed {
            position: fixed;
            top: 50px;
          }
        `}</style>
      </div>
    );
  }
}

function getTop(el) {
  if (el.offsetParent && el.offsetParent !== document.body) {
    return el.offsetTop + getTop(el.offsetParent);
  } else {
    return el.offsetTop;
  }
}

export default Anchors;
