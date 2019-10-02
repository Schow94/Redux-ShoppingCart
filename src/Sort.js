import React, { Component } from 'react';
import { FEATURED, HIGH_TO_LOW, LOW_TO_HIGH } from './actions/types';

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortValue: FEATURED
    };
  }

  handleChange = e => {
    // console.log(this.state.sortValue);
    this.setState(
      {
        sortValue: e.target.value
      },
      // Callback ensures code is invoked immediately after setState runs
      () => this.props.onSetSortFilter(this.state.sortValue)
    );
  };

  render() {
    return (
      <select onChange={this.handleChange} value={this.state.sortValue}>
        <option value={HIGH_TO_LOW}>Sort by price: high to low</option>
        <option value={LOW_TO_HIGH}>Sort by price: low to high</option>
        <option value={FEATURED}>Sort by featured</option>
      </select>
    );
  }
}
