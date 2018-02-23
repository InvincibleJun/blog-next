import React, { Component } from "react";

class List extends Component {
  static getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent: 1 };
  }

  render() {
    const { data } = this.props;
    return data.map(art => (
      <div key={art.title}>
        <h3>{art.title}</h3>
        <p>{art.desc}</p>
        {/* <div dangerouslySetInnerHTML={{ __html: art.body }}></div> */}
      </div>
    ))
  }
}

export default List;
