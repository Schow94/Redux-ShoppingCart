import React, { Component } from 'react';

export default class Item extends Component {
  handleClick = id => {
    this.props.add(this.props.item);
  };

  render() {
    const { sizes, image, container } = styles;

    return (
      <div style={container} onClick={() => this.handleClick(this.props.id)}>
        <img style={image} src={this.props.image} alt={this.props.desc} />
        <h3>{this.props.desc}</h3>
        <h4>{`$${this.props.price}`}</h4>
        <div style={sizes}>
          {this.props.sizes.map((size, idx) => {
            return <h5 key={idx}>{size + ','}</h5>;
          })}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginLeft: '4em',
    width: '20%',
    marginBottom: '3em'
  },
  sizes: {
    display: 'flex',
    flexDirection: 'row'
  },
  image: {
    width: '300px'
  }
};
