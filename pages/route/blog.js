import React, { Component } from 'react';
import styled from 'styled-components';
import {
  blue500, green50, amber500, blueGrey500

} from 'material-ui/styles/colors';
// import { Editor, EditorState } from 'draft-js';
// import Backupground from '../../components/index-page/Backupground'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import index from './route/index.js'
// import logo from './logo.svg';
// import './App.css';
// import { DatePicker, BackTop } from 'antd'
// import 

const Header = styled.div`
  background-color: ${blue500};
  height: 80px;
`
const Container = styled.div`
  width: 1080px;
  margin: 20px auto;
  // height: 800px;
  background-color: ${green50};
  position:relative;
  overflow: auto;
`

const List = styled.div`
  width: 800px;
  height: 400px;
  background-color: ${amber500};
`

const Info = styled.div`
  width: 260px;
  float: right;
  right: 0;
  top: 0;
  height: 800px;
  background-color: ${amber500};
`
const User = styled.div`
  height: 300px;
  background-color: ${blueGrey500}; 
  margin-bottom: 20px; 
`

class Blog extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div>
        <Header>
          header
        </Header>
        <Container>
          <Info>
            <User className="chunk-border"></User>
            <User className="chunk-border"></User>
          </Info>
          <List className="chunk-border"></List>
        </Container>
      </div>
    );
  }
}

export default Blog;