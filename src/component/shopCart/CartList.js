import React, { Component } from 'react';
import ListItem from './test'

class CartList extends Component {
    render() {
        return (
            <ul>
              {this.props.cart.map((item) => {
                return (
                <ListItem key={item.id} 
                addMount={this.props.addMount}
                decMount={this.props.decMount}
                 {...item}></ListItem>
                );
              })}
            </ul>
        );
    }
}

export default CartList;