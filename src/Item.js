import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

class Item extends Component {
  // Check if item in cart already & process accordingly
  checkQuantity = (cart, newItem) => {
    //Item not in cart yet
    if (!newItem.inCart) {
      newItem.inCart = true;
      this.props.add(newItem);
    } else {
      // Item already in cart
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === newItem.id) {
          cart[i].quantity += 1;
          console.log('updated cart', cart[i]);
          //add existing items here
          this.props.onUpdateCart(cart[i]);
        }
      }
    }
  };

  onAddToCart = (cart, newItem) => {
    this.checkQuantity(cart, newItem);
    // this.props.add(newItem);
  };

  //Call this inline
  // {this.checkQuantity(this.props.cart, this.props.item)}

  render() {
    const { classes } = this.props;
    const { sizes, image, container, rating, ratingContainer } = classes;

    return (
      <div
        className={container}
        onClick={() => this.onAddToCart(this.props.cart, this.props.item)}
      >
        <img className={image} src={this.props.image} alt={this.props.desc} />
        <h3>{this.props.desc}</h3>
        <h4>{`$${this.props.price}`}</h4>
        <div className={sizes}>
          {this.props.sizes.map((size, idx) => {
            return <h5 key={idx}>{size + ','}</h5>;
          })}
        </div>
        <Container className={ratingContainer}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating size="small" className={rating} value={4} readOnly />
          </Box>
          <Typography style={{ marginTop: '0.2em' }}>(93)</Typography>
        </Container>
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    marginLeft: '5em',
    width: '20%',
    marginBottom: '3em'
  },
  sizes: {
    display: 'flex',
    flexDirection: 'row'
  },
  image: {
    width: '300px'
  },
  rating: {
    color: 'black'
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});

export default withStyles(styles)(Item);
