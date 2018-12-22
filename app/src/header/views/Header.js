import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import connect from "react-redux/es/connect/connect";

import {closeSideBar, openSideBar} from "../actions";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SearchForm from "./SearchForm";
import Drawer from "@material-ui/core/Drawer/Drawer";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

const Header = ({appName, classes, theme, handleSideBarOpen, handleSideBarClose, isSideBarOpen}) => (
  <div>
    <AppBar position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: isSideBarOpen
            })}
    >
      <Toolbar disableGutters={!isSideBarOpen}>
        <IconButton className={classNames(classes.menuButton, isSideBarOpen && classes.hide)}
                    color="inherit" aria-label="Open sideBar" onClick={handleSideBarOpen}>
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          {appName}
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer variant="persistent"
            anchor="left"
            open={isSideBarOpen}
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper
            }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleSideBarClose}>
          <ChevronLeftIcon/>
        </IconButton>
      </div>
      <div>
        <SearchForm/>
      </div>
    </Drawer>
  </div>
);

Header.propTypes = {
  appName: PropTypes.string.isRequired,
  handleSideBarOpen: PropTypes.func.isRequired,
  handleSideBarClose: PropTypes.func.isRequired,
  isSideBarOpen: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  console.log(state.isSideBarOpen);
  return ({
    isSideBarOpen: state.isSideBarOpen
  })
};

const mapDispatchToProps = (dispatch) => ({
  handleSideBarOpen: () => dispatch(openSideBar()),
  handleSideBarClose: () => dispatch(closeSideBar())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, {withTheme: true})(Header));