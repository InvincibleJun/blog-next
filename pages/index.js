import React, { Component } from "react";
import styled from "styled-components";
import FontIcon from "material-ui/FontIcon";
import { blue500, red500, greenA200 } from "material-ui/styles/colors";
import Layout from "../components/Layout";

class Index extends Component {
  render() {
    return (
      <Layout>
        <div className="container animated fadeIn">
          <div className="cover"></div>
          <div className="word animated fadeInLeft">may the force be with you</div>
        </div>
        <style jsx>{`
        .container{
          background-image:url(./static/image/home-bg.jpg);
          background-size: cover;
          background-position: 50% 50%;
          height: 500px;
          position: relative;
          animation-duration:3s;
          z-index: -1;
          overflow: hidden;
        }
        .word{
          font-size: 40px;
          color: white;
          position: relative;
          z-index:1;
          margin-top: 200px;
          text-align:center;
          font-family: 'Open Sans','Helvetica Neue',Helvetica,Ari;
        }
        .cover{
          background-color: #212529;
          opacity: .5;
          position: absolute;
          width: 100%;
          height: 500px;
        }
        `}</style>
      </Layout >
    );
  }
}

export default Index;
