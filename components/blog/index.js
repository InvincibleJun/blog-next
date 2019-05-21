import React, { Component } from 'react'
import Layout from '../../components/Layout'
import style from './index.scss';

export default class Blog extends Component {
  render () {
    return (
      <Layout>
        <div className={style.header} />
        <div className={style.box}>
          {this.props.children}
        </div>
      </Layout>
    )
  }
}
