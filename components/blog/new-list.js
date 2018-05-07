import React, { Component } from 'react'
import { getNewList } from '../../services/blog'
import format from '../../utils/format'
import Link from 'next/link'

class NewList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    getNewList().then(res => {
      this.setState({ data: res.data.data })
    })
  }
  render () {
    const { data } = this.state
    return (
      <div className='chunk-border'>
        {data.map(line => (
          <Link
            key={line._id}
            as={`/blog/${line._id}`}
            href={`/blog/article?_id=${line._id}`}
          >
            <div className='list-line'>
              {line.title}
              <span>{format(line.createTime, 'MM-dd')}</span>
            </div>
          </Link>
        ))}
        <style jsx>{`
          .list-line {
            line-height: 28px;
            font-size: 14px;
            cursor: pointer;
          }
          .list-line:hover {
            border-bottom: 1px solid #ccc;
          }
          span {
            float: right;
            font-size: 12px;
          }
        `}</style>
      </div>
    )
  }
}

export default NewList
