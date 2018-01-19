import React, { Component } from 'react';
import styled from 'styled-components';
import bg from '../../assets/img/bg-big.jpg';
import FontIcon from 'material-ui/FontIcon';
import { blue500, red500, greenA200 } from 'material-ui/styles/colors';

const Container = styled.div`
  line-height: 40px;
  height: 400px;
  background-image: url(${bg});
  overflow: hidden;  
  opacity: 0.8;
  box-shadow: 0 4px 5px 0px #ccc;
`

const Title = styled.div`
  width: 300px;
  height: 200px;
  margin: 200px auto 0;
  color: white;
  font-size: 30px;
  line-height: 60px;
  text-shadow: 2px 2px 5px #FF0000;
`
const Down = styled.div`
  width: 30px;
  height: 30px;
  font-size: 20px;
`

class Index extends Component {
  render() {
    return (
      <Container>
        <Title>
          <p>WHY ARE YOU LINE</p>
          <p>FOR BETTER LIFE</p>
          <Down>
            <i className="iconfont icon-down"> </i>
          </Down>
        </Title>
      </Container>
    );
  }
}

export default Index;
