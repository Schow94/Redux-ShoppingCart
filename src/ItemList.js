import React, { Component } from 'react';
import Item from './Item';
import Sort from './Sort';

export default class ItemList extends Component {
  render() {
    const { listContainer, title, categoryContainer } = styles;
    return (
      <>
        <div style={categoryContainer}>
          <h3 style={title}>All Men</h3>
          <Sort onSetSortFilter={this.props.onSetSortFilter} />
        </div>

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
      </>
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
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};
