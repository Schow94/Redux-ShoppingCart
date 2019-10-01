import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

export default class CartItem extends Component {
  render() {
    const { item, itemInfo, image } = styles;

    return (
      <div style={item}>
        <img
          style={image}
          src={this.props.item.image}
          alt={this.props.item.description}
        />
        <div style={itemInfo}>
          <h4>{this.props.item.description}</h4>
          <h4>Quantity: 1</h4>
        </div>
      </div>
    );
  }
}

const styles = {
  item: {
    display: 'flex',
    flexDirection: 'row',
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
    height: '100px'
  }
};
