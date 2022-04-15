import React, { Component } from 'react'

export default class Btn extends Component {
    static defaultProps = {
        add(){
          console.log('添加商品到购物车')
        }
      }
  render() {
    return (
      <div>
        <button onClick={this.props.add}>添加</button>
      </div>
    )
  }
}
