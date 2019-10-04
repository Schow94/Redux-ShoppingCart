import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const sideBarItems = ['Category', 'Brand', 'Size', 'Width', 'Color', 'Price'];

class SideBar extends Component {
  render() {
    const { classes } = this.props;
    const { container, title, row, text } = classes;

    return (
      <div className={container}>
        <p className={title}>Home / Men / All Men</p>
        <List component="nav" aria-label="main mailbox folders">
          {sideBarItems.map((item, idx) => {
            return (
              <>
                <ListItem className={row}>
                  <ListItemText>
                    <Typography className={text}>{item}</Typography>
                  </ListItemText>
                  <Typography variant="h6">+</Typography>
                </ListItem>
                <Divider />
              </>
            );
          })}
        </List>
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    width: '20%'
  },
  title: {
    fontWeight: 500,
    fontSize: '1em'
  },
  text: {
    fontSize: '0.9em',
    fontWeight: 700
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 0
  }
});

export default withStyles(styles)(SideBar);
