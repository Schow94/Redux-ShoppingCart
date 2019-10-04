import React, { Component } from 'react';

import Container from '@material-ui/core/Container';
import withStyles from '@material-ui/core/styles/withStyles';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { FEATURED, HIGH_TO_LOW, LOW_TO_HIGH } from './actions/types';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortValue: FEATURED
    };
  }

  handleChange = e => {
    this.setState(
      {
        sortValue: e.target.value
      },
      // Callback ensures code is invoked immediately after setState runs
      () => this.props.onSetSortFilter(this.state.sortValue)
    );
  };

  render() {
    const { classes } = this.props;
    const { root, formControl, select, menuItem } = classes;

    return (
      <form className={root} autoComplete="off">
        <FormControl className={formControl}>
          <Select
            value={this.state.sortValue}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple'
            }}
            className={select}
            disableUnderline
          >
            <MenuItem className={menuItem} value={HIGH_TO_LOW}>
              Sort by price: high to low
            </MenuItem>
            <MenuItem className={menuItem} value={LOW_TO_HIGH}>
              Sort by price: low to high
            </MenuItem>
            <MenuItem className={menuItem} value={FEATURED}>
              Sort by featured
            </MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  select: {
    border: '1px solid #ebebeb',
    borderRadius: '5px',
    paddingLeft: '1em',
    // paddingRight: '6em',
    width: '250px',
    height: '40px',
    textAlign: 'left',
    fontSize: '1em'
  },
  menuItem: {
    fontSize: '1em'
  }
});

export default withStyles(styles)(Sort);
