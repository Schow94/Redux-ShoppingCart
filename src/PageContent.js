import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';

import ItemList from './ItemList';
import SideBar from './SideBar';

class PageContent extends Component {
  render() {
    const { classes } = this.props;
    const { list, container } = classes;

    return (
      <Container className={container}>
        <SideBar />
        <ItemList
          onSetSortFilter={this.props.onSetSortFilter}
          style={list}
          list={this.props.list}
          add={this.props.add}
          cart={this.props.cart}
          onUpdateCart={this.props.onUpdateCart}
        />
      </Container>
    );
  }
}

const styles = {
  list: {
    zIndex: 1
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 0,
    marginRight: 0,
    marginTop: '2em'
  }
};

export default withStyles(styles)(PageContent);
