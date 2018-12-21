import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import connect from "react-redux/es/connect/connect";

import './style.css'
import {closeSideBar, openSideBar} from "../actions";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SearchForm from "./SearchForm";
import Drawer from "@material-ui/core/Drawer/Drawer";

const Header = ({appName, handleSideBarOpen, handleSideBarClose, isSideBarOpen}) => (
  <div>
    <AppBar position="static">
      <Toolbar disableGutters={!isSideBarOpen}>
        <IconButton className={isSideBarOpen && "hide"}
                    color="inherit" aria-label="Open sideBar" onClick={handleSideBarOpen}>
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" color="inherit">
          {appName}
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer variant="persistent" anchor="left" open={isSideBarOpen}>
      <div>
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

const mapStateToProps = (state) => {console.log(state.isSideBarOpen); return ({
  isSideBarOpen: state.isSideBarOpen
})};

const mapDispatchToProps = (dispatch) => ({
  handleSideBarOpen: () => dispatch(openSideBar()),
  handleSideBarClose: () => dispatch(closeSideBar())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);