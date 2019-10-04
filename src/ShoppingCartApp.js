import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart, updateCart } from './actions/cartActions';
import ItemList from './ItemList';
import Navbar from './Navbar';
import ShoppingCart from './ShoppingCart';

import { setSortFilter } from './actions/sortActions';
import { FEATURED, HIGH_TO_LOW, LOW_TO_HIGH } from './actions/types';

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
    const { container, cart, list } = styles;
    return (
      <div style={container}>
        <Navbar toggleCart={this.toggleCartOpen} cart={this.props.cart} />
        {this.state.isCartOpen ? (
          <ShoppingCart
            style={cart}
            isCartOpen={this.state.isCartOpen}
            cart={this.props.cart}
          />
        ) : null}
        <ItemList
          onSetSortFilter={this.props.onSetSortFilter}
          style={list}
          list={this.props.list}
          add={this.props.onAddToCart}
          cart={this.props.cart}
          onUpdateCart={this.props.onUpdateCart}
        />
      </div>
    );
  }
}

const getSortedList = (list, filter) => {
  switch (filter) {
    case FEATURED:
      return list.sort((a, b) => (a.id > b.id ? 1 : -1));

    case HIGH_TO_LOW:
      return list.sort((a, b) => (a.price < b.price ? 1 : -1));

    case LOW_TO_HIGH:
      return list.sort((a, b) => (a.price > b.price ? 1 : -1));

    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => {
  return {
    list: getSortedList(state.list, state.sort),
    cart: state.cart,
    sort: state.sort
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: newItem => dispatch(addToCart(newItem)),
    onUpdateCart: sameItem => dispatch(updateCart(sameItem)),
    onSetSortFilter: filter => dispatch(setSortFilter(filter))
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
  },
  cart: {
    zIndex: 100,
    top: 0,
    right: 0,
    position: 'fixed'
  },
  list: {
    zIndex: 1
  }
};
