import React, { Component } from 'react'
import { Card } from 'material-ui/Card'
// import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
// import FontIcon from 'material-ui/RaisedButton'
// import Layout from "../components/Layout";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { sendMail } from '../../services/user'
import Input from '../../components/user/input'

class Load extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      passwordAagin: '',
      email: '',
      keyCode: ''
    }
  }

  componentDidMount () {}

  githubLogin = event => {
    event.preventDefault()
    window.location.href =
      'https://github.com/login/oauth/authorize?client_id=79c7c7124c99c2c89d7c'
  }

  sendMailHandler = e => {
    sendMail({ email: '398955404@qq.com' })
  }

  inputChange = (value, field) => {
    this.setState({ [field]: value })
  }

  render () {
    const { username, password, passwordAagin, email, keyCode } = this.state
    return (
      <MuiThemeProvider>
        <Card
          style={{
            width: 400,
            margin: '200px 0 0 1000px ',
            padding: '0 50px 50px'
          }}
        >
          <Input
            value={username}
            field='username'
            check={[
              {
                trigger: 'Blur',
                pattern: /^[a-zA-Z0-9\u4e00-\u9fa5]{2,10}$/,
                msg: '请输入2至8位有效字符'
              }
            ]}
            onChange={this.inputChange}
            placeholder='请输入昵称'
            label='昵称'
          />
          <Input
            value={password}
            field='password'
            check={[
              {
                trigger: 'Blur',
                pattern: /^[a-zA-Z0-9]{2,10}$/,
                msg: '请输入6到20位大小字母和数字'
              }
            ]}
            onChange={this.inputChange}
            placeholder='请输入密码'
            label='密码'
          />
          <Input
            field='passwordAagin'
            value={passwordAagin}
            check={[
              { trigger: 'Blur', pattern: password, msg: '上述密码不同' }
            ]}
            placeholder='请再次输入密码'
            onChange={this.inputChange}
            label='确认密码'
          />
          <Input
            field='email'
            value={email}
            check={[
              {
                trigger: 'Blur',
                pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                msg: '请输入正确邮箱'
              }
            ]}
            placeholder='请输入邮箱'
            onChange={this.inputChange}
            label='邮箱'
          />
          <Input
            field='keyCode'
            style={{ marginTop: 20, width: 150 }}
            value={keyCode}
            check={[
              { trigger: 'Blur', pattern: /^\d{6}$/, msg: '请输入六位验证码' }
            ]}
            placeholder='请输入验证码'
            onChange={this.inputChange}
            label='验证码'
          />
          <RaisedButton label='点击发送验证码' onClick={this.sendMailHandler} />
          <RaisedButton label='注册' fullWidth style={{ marginTop: 40 }} />
        </Card>
      </MuiThemeProvider>
    )
  }
}

export default Load
