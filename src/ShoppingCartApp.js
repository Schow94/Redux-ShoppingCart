import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart } from './actions/cartActions';
import ItemList from './ItemList';
import Navbar from './Navbar';
import ShoppingCart from './ShoppingCart';

class ShoppingCartApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCartOpen: false
    };
  }

  toggleCartOpen = () => {
    this.setState({
      isCartOpen: !this.state.isCartOpen
    });
  };

  render() {
    const { container } = styles;
    return (
      <div style={container}>
        <Navbar toggleCart={this.toggleCartOpen} cart={this.props.cart} />
        {this.state.isCartOpen ? (
          <ShoppingCart
            isCartOpen={this.state.isCartOpen}
            cart={this.props.cart}
          />
        ) : null}
        <ItemList list={this.props.list} add={this.props.onAddToCart} />
      </div>
    );
  }
}

const mapStateToProps = ({ list, cart }) => {
  return {
    list,
    cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: task => dispatch(addToCart(task))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartApp);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white'
  }
};
