import React, { Component } from 'react';
import Item from './Item';

export default class ItemList extends Component {
  render() {
    const { listContainer, title } = styles;
    return (
      <div>
        <h3 style={title}>All Men</h3>
        <div style={listContainer}>
          {this.props.list.map(item => {
            return (
              <Item
                item={item}
                image={item.image}
                key={item.id}
                id={item.id}
                desc={item.description}
                price={item.price}
                sizes={item.sizes}
                add={this.props.add}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  title: {
    marginLeft: '1em',
    marginTop: '2em',
    marginBottom: '1em'
  }
};
