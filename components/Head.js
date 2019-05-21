import React, { Component } from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

class Head extends Component {
  render () {
    const { title } = this.props
    return (
      <NextHead>
        <meta charSet='UTF-8' />
        <title>{title || ''}</title>
        <meta name='viewport' content='width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover' />
        <link rel='stylesheet' href='/static/css/reset.css' />
        <link rel='stylesheet' href='/static/css/animate.css' />
        <link rel='stylesheet' href='/static/css/github-markdonw.css' />
      </NextHead>
    )
  }
}

Head.propTypes = {
  title: string
}

export default Head
