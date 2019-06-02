import React, { Component } from "react";
import style from "./process.scss";

export default class Process extends Component {
  render() {
    const { name, percent = 100 } = this.props;
    return (
      <div className={style.box}>
        <div style={{ width: percent + '%' }}>{name}</div>
      </div>
    );
  }
}
