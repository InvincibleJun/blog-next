import React, { Component } from "react";
import styled from "styled-components";
import {
  blue500,
  green50,
  amber500,
  blueGrey500
} from "material-ui/styles/colors";
import Layout from "../components/Layout";
import css from "styled-jsx/css";

// const scoped = resolveScopedStyles(
//   <scope>
//     <style jsx>{".link { color: green }"}</style>
//   </scope>
// );

const Header = styled.div`
  background-color: ${blue500};
  height: 80px;
`;
const Container = styled.div``;

const List = styled.div``;

const User = styled.div``;

class Blog extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <Layout>
        <div className="header">header</div>
        <div className="container">
          <info>
            <div className="chunk-border user" />
            <div className="chunk-border user" />
          </info>
          <div className="chunk-border list" />
        </div>
        <style jsx>{`
          .header {
            background-color: ${blue500};
            height: 80px;
          }
          .container {
            width: 1080px;
            margin: 20px auto;
            background-color: ${green50};
            position: relative;
            overflow: auto;
          }
          .info {
            width: 260px;
            float: right;
            right: 0;
            top: 0;
            height: 800px;
            background-color: ${amber500};
          }
          .user {
            height: 300px;
            background-color: ${blueGrey500};
            margin-bottom: 20px;
          }
          .list {
            width: 800px;
            height: 400px;
            background-color: ${amber500};
          }
        `}</style>
      </Layout>
    );
  }
}

export default Blog;
