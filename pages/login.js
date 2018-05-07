import React, { Component } from 'react'
import { Card } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Load extends Component {
  state = {
    username: '',
    password: ''
  }

  githubLogin = event => {
    event.preventDefault()
    window.location.href =
      'https://github.com/login/oauth/authorize?client_id=79c7c7124c99c2c89d7c'
  }

  render () {
    return (
      <MuiThemeProvider>
        <Card
          style={{
            width: 400,
            margin: '200px 0 0 1000px ',
            padding: '0 50px 50px'
          }}
        >
          <TextField
            style={{ marginTop: 20 }}
            hintText='请输入用户名'
            floatingLabelText='用户名'
            fullWidth
            type='text'
          />
          <br />
          <TextField
            style={{ marginTop: 20 }}
            hintText='请输入密码'
            floatingLabelText='密码'
            type='password'
            fullWidth
          />
          <RaisedButton label='登录' fullWidth style={{ marginTop: 40 }} />
          <br />
          <br />

          <p onClick={this.githubLogin}>
            <i className='iconfont icon-github' style={{ fontSize: 22 }} />github登陆
            <a href='javascript:void(0)'>注册</a>
          </p>
        </Card>
      </MuiThemeProvider>
    )
  }
}

export default Load
