import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class Input extends Component {
  change = e => {
    const { onChange, field } = this.props
    e.preventDefault()
    let value = e.target.value
    onChange && field && onChange(value, field)
  }
  render () {
    const {
      label,
      placeholder,
      style,
      check,
      value,
      change,
      errorText
    } = this.props
    // let action = {}
    // check && check.forEach(c => {
    //   let { trigger, pattern, msg, errorText } = c
    //   action['on' + trigger] = (e) => {
    //     e.preventDefault();
    //     if (typeof pattern === 'string') {
    //       pattern = new RegExp('^' + pattern + '$')
    //     }
    //     let value = e.target.value
    //     this.setState({ errorText: pattern.test(value) ? '' : msg })
    //   }
    // })
    return (
      <TextField
        value={value}
        errorText={errorText}
        hintText={placeholder}
        floatingLabelText={label}
        // {...action}
        style={style}
        fullWidth
        onChange={this.change}
      />
    )
  }
}

Input.state = false

export default Input
