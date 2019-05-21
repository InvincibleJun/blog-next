import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./tag.scss";

class Tag extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };

  render() {
    const { props } = this;
    return (
      <span
        onClick={this.props.onClick}
        className={style.tag}
        style={{ backgroundColor: props.color }}
      >
        {props.name}
      </span>
    );
  }
}

export default Tag;
