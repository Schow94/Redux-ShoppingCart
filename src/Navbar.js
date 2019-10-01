import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Container from '@material-ui/core/Container';

const navLinks = [
  'Designer Collections',
  'Women',
  'Men',
  'Kids',
  'Home & Gifts',
  'Beauty',
  'Sale',
  'Brands',
  'Style Guide'
];

class Navbar extends Component {
  render() {
    const { classes, toggleCart } = this.props;
    const {
      root,
      title,
      freeShipping,
      shippingText,
      details,
      button,
      navbar,
      list,
      fullList,
      links
    } = classes;

    //  PROB DON'T WANT CART RENDERED INSIDE NAVBAR. Going to need to add toggle
    // to Redux so can access outside

    // const toggleCart = () => {
    //   return (
    //     <div className={classes.list} role="presentation">
    //       <List>
    //         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //           <ListItem button key={text}>
    //             <ListItemIcon>
    //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //             </ListItemIcon>
    //             <ListItemText primary={text} />
    //           </ListItem>
    //         ))}
    //       </List>
    //       <Divider />
    //       <List>
    //         {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //           <ListItem button key={text}>
    //             <ListItemIcon>
    //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //             </ListItemIcon>
    //             <ListItemText primary={text} />
    //           </ListItem>
    //         ))}
    //       </List>
    //     </div>
    //   );
    // };

    return (
      <div className={root}>
        <AppBar className={freeShipping} position="static">
          <Toolbar>
            <Typography className={shippingText}>
              <strong>Free shipping. Free returns.</strong> All the time. See
              <span className={details}> details.</span>
            </Typography>
          </Toolbar>
        </AppBar>

        <Toolbar position="static" className={navbar}>
          <Typography variant="h4" className={title}>
            NORDSTROM
          </Typography>
          <Container className={links}>
            {navLinks.map(item => {
              return <Typography>{item}</Typography>;
            })}
          </Container>
          <Button color="inherit">Sign In</Button>
          <IconButton className={button} onClick={toggleCart}>
            <ShoppingCartIcon /> {this.props.cart.length}
          </IconButton>
        </Toolbar>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  freeShipping: {
    backgroundColor: 'black',
    height: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  shippingText: {
    fontSize: '0.9em'
  },
  details: {
    textDecoration: 'underline'
  },
  button: {
    margin: theme.spacing(1),
    color: 'black'
  },
  navbar: {
    backgroundColor: 'none',
    color: 'black'
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

export default withStyles(styles)(Navbar);
