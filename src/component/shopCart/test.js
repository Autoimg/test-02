import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: props.mount,
      cname: props.cname,
    };
  }
  
  static getDerivedStateFromProps(nextProps) {
    return { cname: nextProps.cname };
  }
  // 解决constructor只能执行一步的问题
  componentWillReceiveProps(nextProps) {
    this.setState({ num: nextProps.mount });
  }
  // 常用于组件优化
  shouldComponentUpdate(nextProps, nextState) {
    // 在出发事件后会将所有的列表进行render
    // 为解决以上问题，对事件进行优化
    // 只渲染数据改变的列
    return nextState.num !== this.state.num;
  }
  // 常用于定时器，请求的卸载
  componentWillUnmount() {}
  render() {
    const { id, mount, cname, price, decMount, addMount } = this.props;
    return (
      <li>
        <span>{this.state.cname}</span>
        <br />
        <span>{price}</span>
        <br />
        <p>
          <button
            onClick={() => {
              decMount(id);
            }}
          >
            -
          </button>
          {this.state.num}
          <button
            onClick={() => {
              addMount(id);
            }}
          >
            +
          </button>
        </p>
      </li>
    );
  }
}
