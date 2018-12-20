import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import connect from "react-redux/es/connect/connect";

const Header = ({ appName }) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" color="inherit">
          {appName}
        </Typography>
        <Button color="inherit">登入</Button>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  appName: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);