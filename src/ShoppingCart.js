import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import CartItem from './CartItem';

// Want to be able to remove items from cart here

class ShoppingCart extends Component {
  calcSubTotal = () => {
    const priceArray = this.props.cart.map(item => {
      return item.price * item.quantity;
    });
    const reducer = (acc, curr) => acc + curr;

    const total = priceArray.reduce(reducer);
    return total;
  };

  render() {
    const { classes } = this.props;
    const {
      container,
      button,
      shippingText,
      subtotal,
      cartItems,
      viewBag,
      subtotalPrice,
      divider
    } = classes;

    return (
      <div className={container}>
        <div className={cartItems}>
          {this.props.cart.map(item => {
            return (
              <CartItem
                remove={this.props.remove}
                key={item.cartId}
                id={item.id}
                item={item}
              />
            );
          })}
        </div>
        <hr className={divider} />
        <Container className={subtotal}>
          <Typography className={viewBag}>
            View Shopping Bag({this.props.cart.length})
          </Typography>
          <Typography className={subtotalPrice}>
            Subtotal: {this.props.cart.length > 0 ? '$' : null}
            {this.props.cart.length > 0 ? this.calcSubTotal() : null}
          </Typography>
        </Container>
        <Button className={button}>Checkout</Button>
        <Typography className={shippingText}>
          FREE SHIPPING. FREE RETURNS.
        </Typography>
      </div>
    );
  }
}
const styles = theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    width: '80%'
  },
  container: {
    width: '400px',
    marginLeft: 'auto',
    marginRight: 10,
    border: '1px solid grey',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  shippingText: {
    fontSize: '0.9em',
    paddingTop: '1em',
    paddingBottom: '1em',
    fontWeight: 800
  },
  subtotal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cartItems: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em'
  },
  viewBag: {
    textDecoration: 'underline',
    fontSize: '0.9em'
  },
  subtotalPrice: {
    fontSize: '0.9em',
    fontWeight: 600
  },
  divider: {
    border: '0.5px solid #d9d7d7',
    width: '96%',
    color: '#FFFF00',
    height: '0.1px'
  }
});

export default withStyles(styles)(ShoppingCart);
