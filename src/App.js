import React, { Component, Fragment } from "react";
import Btn from "./component/shopCart/Btn";
import PropTypes from "prop-types";
import { CarList } from "./component/index";
import { connect } from "react-redux";
// login的dispatch方法
import Login from "./actions/login";
import { loginIn } from "./request";

import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [
        {
          id: "1",
          cname: "连衣裙",
          price: 20,
          mount: 4,
        },
        {
          id: "2",
          cname: "衬衣",
          price: 55,
          mount: 2,
        },
      ],
    };
  }
  // 添加数量
  addMount = (id) => {
    const cart = this.state.cart.map((item) => {
      if (item.id === id) {
        item.mount += 1;
      }
      return item;
    });
    this.setState({
      cart,
    });
  };
  // 减少商品数量
  decMount = (id) => {
    const cart = this.state.cart.map((item) => {
      if (item.id === id) {
        item.mount -= 1;
      }
      return item;
    });
    this.setState({
      cart,
    });
  };
  // 登录请求
  logIn = () => {
    loginIn()
      .then((res) => {
        console.log(res);
        // 将数据通过action传入reducer
        this.props.Login(res.date)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 获取所有商品总价
  // 通过get方法结合reduce方法获取总价
  get total() {
    return this.state.cart.reduce((res, cur) => {
      res += cur.price * cur.mount;
      return res;
    }, 0);
  }
  componentDidMount(){
    // 发送请求
    
  }
  // 添加到购物车
  add = () => {
    const lis = { id: Math.random(), cname: "外套", price: 50, mount: 1 };
    // 向购物车中添加列
    this.setState({
      cart: [...this.state.cart, lis],
    });
  };
  render() {
    console.log(this.props);
    return (
      <Fragment>
        {/* 头部 */}
        <div className="topStyle" style={{ backgroundColor: "red" }}>
          <p>age{this.props.age}</p>
          <button onClick={this.logIn}>login</button>
          {/* <button onClick={this.props.Login}>使用store的dispatch方法</button> */}
        </div>
        {/* 中间内容区域 */}
        <div>
          <p>内容</p>
          <div>
            {/* 按钮信息 增删改查 */}
            <Btn add={this.state.add}></Btn>
            {/* 列表信息 */}
            <CarList
              cart={this.state.cart}
              addMount={this.addMount}
              decMount={this.decMount}
            ></CarList>
            {/* 商品总价 */}
            <span>商品总价{this.total}</span>
          </div>
        </div>
        {/* 底部 */}
        <div>
          <p>版权</p>
        </div>
      </Fragment>
    );
  }
}
// 检验传入参数的类型（也可以在class内部进行验证）
App.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      cname: PropTypes.string,
      price: PropTypes.number,
      mount: PropTypes.number,
    })
  ),
};
export default connect(
  (res) => {
    return { ...res.uName };
  },
  { Login }
)(App);
