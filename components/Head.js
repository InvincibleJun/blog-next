import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const Container = styled.div`
  line-height: 40px;
  background: white;
  overflow: hidden;
`
const Logo = styled.div`
  float: left;
  color: white;
  text-align: center;
  font-size: 14px;
  width: 120px;
  background-color: black;  
`

const MenuList = styled.div`
  marigin-left:120px;
  padding-right: 200px;
  &>a {
    float: right;
    width: 100px;
    margin: 0 10px;
    font-size: 14px;
  }
`

class Menu extends Component {
  render() {
    return (
      <Container>
        <Logo>Jarvan's Blog</Logo>
        <MenuList>
          <Link href="/"><a>Home</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
          {/* <Link href="/info">Info</Link>
          <Link href="/video">Video</Link> */}
        </MenuList>
      </Container>
    );
  }
}

export default Menu;