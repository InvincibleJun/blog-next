import React, { Component } from 'react'
import Layout from '../components/Layout'
import style from './index.scss';

class Index extends Component {
  render () {
    return (
      <Layout>
        <div className={`${style.container} animate fadeIn`}>
          <div className={`${style.cover} animate fadeIn`} />
          <div className={`${style.word} animate fadeIn`}>
            may the force be with you
          </div>
        </div>
        <div className={`${style.motto} animate fadeIn`}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生活不能等待别人来安排，要自己去争取和奋斗；而不论其结果是喜是悲，但可以慰藉的是，你总不枉在这世界上活了一场。
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有了这样的认识，你就会珍重生活，而不会玩世不恭；同时，也会给人自身注入一种强大的内在力量。
          <br />
          <small>——《平凡的世界》</small>
        </div>
      </Layout>
    )
  }
}

export default Index
