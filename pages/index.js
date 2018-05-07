import React, { Component } from 'react'
// import styled from 'styled-components'
// import FontIcon from 'material-ui/FontIcon'
// import { blue500, red500, greenA200 } from 'material-ui/styles/colors'
import Layout from '../components/Layout'

class Index extends Component {
  render () {
    return (
      <Layout>
        <div className='container animated fadeIn'>
          <div className='cover' />
          <div className='word animated fadeInLeft'>
            may the force be with you
          </div>
        </div>
        <div className='motto animated fadeIn'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生活不能等待别人来安排，要自己去争取和奋斗；而不论其结果是喜是悲，但可以慰藉的是，你总不枉在这世界上活了一场。
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有了这样的认识，你就会珍重生活，而不会玩世不恭；同时，也会给人自身注入一种强大的内在力量。
          <br />
          <small>——《平凡的世界》</small>
        </div>
        <style jsx>
          {`
            .container {
              background-image: url(./static/image/home-bg.jpg);
              background-size: cover;
              background-position: 50% 50%;
              height: 500px;
              position: relative;
              animation-duration: 3s;
              z-index: -1;
              overflow: hidden;
            }
            .word {
              font-size: 40px;
              color: white;
              position: relative;
              z-index: 1;
              margin-top: 200px;
              text-align: center;
              font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Ari;
            }
            .cover {
              background-color: #212529;
              opacity: 0.5;
              position: absolute;
              width: 100%;
              height: 500px;
            }
            .motto {
              width: 400px;
              margin: 50px auto;
              line-height: 40px;
              font-weight: normal;
            }
            small {
              display: block;
              text-align: right;
            }
          `}
        </style>
      </Layout>
    )
  }
}

export default Index
