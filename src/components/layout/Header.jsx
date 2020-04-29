import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { Hidden, List, Divider, Drawer, IconButton, ListItem } from '@material-ui/core'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import Logo from '../Logo'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const linkStyle = {
  color: '#171637',
  textDecoration: 'none',
  margin:  '0 20px',
  padding: '5px',
  textTransform: 'uppercase'
}

const headerStyle = {
  background: 'white',
  'box-shadow': 'none',
  height: '75px'
}

export default function Header(props) {

  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem button>
            <Link style={linkStyle} to="/#about">About</Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link style={linkStyle} to="/#projects">Projects</Link>
          </ListItem>
      </List>
    </div>
  )

  return (
    <>
      <HideOnScroll {...props} >
        <AppBar style={headerStyle}>
          <Toolbar style={{height: '100%'}}>
            <Box height={'100%'} width={'100%'} display="flex" flexDirection="row" justifyContent={'space-between'} alignItems={'center'}>
              <Box padding={'12px'}>
                <Link to="/">
                  <Logo color={'#171637'}></Logo>
                </Link>
              </Box>
              <Box display="flex" flexDirection="row" justifyContent={'space-between'} alignItems={'center'}>
                <Hidden smUp>
                <IconButton onClick={toggleDrawer('right', true)}>
                  <MenuIcon fontSize={'large'} style={{color: '#171637'}}/>
                </IconButton>
                  <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                    {list('right')}
                  </Drawer>
                </Hidden>
                <Hidden xsDown>
                  <Link style={linkStyle} to="/#about">About</Link>
                  <Link style={linkStyle} to="/#projects">Projects</Link>
                </Hidden>
                {/* <a href='mailto:' style={buttonlinkStyle}><LinkButton height={'40px'}>Contact</LinkButton></a> */}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}

