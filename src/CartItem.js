import React, { Component } from 'react';

export default class CartItem extends Component {
  // shouldComponentUpdate(nextProps) {
  //   return nextProps.quantity !== this.props.quantity;
  // }

  handleRemove = id => {
    // this.props.remove();
    console.log(id);
  };

  render() {
    const { item, itemInfo, image, itemPrice, remove, price } = styles;

    return (
      <div style={item}>
        <img
          style={image}
          src={this.props.item.image}
          alt={this.props.item.description}
        />
        <div style={itemInfo}>
          <h4>{this.props.item.description}</h4>
          <div style={itemPrice}>
            <p>Quantity: {this.props.item.quantity}</p>
            <p style={price}>
              ${this.props.item.price * this.props.item.quantity}
            </p>
          </div>
          <p
            style={remove}
            onClick={() => this.handleRemove(this.props.item.description)}
          >
            Remove
          </p>
        </div>
      </div>
    );
  }
}

const styles = {
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginTop: '1em',
    marginBottom: '1em'
  },
  itemInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 0,
    width: '50%'
  },
  image: {
    height: '150px'
  },
  itemPrice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  remove: {
    textDecoration: 'underline'
  },
  price: {
    fontWeight: 600
  }
};
