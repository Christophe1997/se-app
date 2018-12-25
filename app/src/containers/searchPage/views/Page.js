import React from 'react';
import classNames from 'classnames';
import connect from "react-redux/es/connect/connect";
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Drawer from "@material-ui/core/Drawer/Drawer";

import SearchForm from "./SearchForm";
import {
  changePage,
  changePerPage,
  clickOne,
  closeSideBar,
  openSideBar,
  requestSort,
  selectAll,
  selectOpen
} from "../actions";
import {STATUS} from '../constants'
import {Table} from '../../../components';

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

const Page = ({
                appName,
                classes,
                theme,
                status,
                order,
                orderBy,
                selected,
                page,
                rowsPerPage,
                data,
                error,
                handleSideBarOpen,
                handleSideBarClose,
                handleRequestSort,
                handleSelectAllClick,
                handleClick,
                handleChangePage,
                handleSelectOpen,
                handleChangeRowsPerPage,
                isSideBarOpen
              }) => {
  const renderSwitch = () => {
    switch (status) {
      case STATUS.LOADING:
        return (
          <div>
            waiting for query
          </div>
        );

      case STATUS.SUCCESS:
        return (
          <div>
            <Table
              data={data}
              order={order}
              orderBy={orderBy}
              selected={selected}
              page={page}
              rowsPerPage={rowsPerPage}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
              handleClick={handleClick}
              handleSelectOpen={handleSelectOpen}
              handleRequestSort={handleRequestSort}
              handleSelectAllClick={handleSelectAllClick}
            />
          </div>
        );

      case STATUS.FAILURE:
        return (
          <div>
            {error}
          </div>
        );

      default:
        return (
          <div>
          </div>
        )
    }
  };
  return (
    <div className={classes.root}>
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
      <main className={classNames(classes.content, {
        [classes.contentShift]: isSideBarOpen
      })}
      >
        <div className={classes.drawerHeader}/>
        {
          renderSwitch()
        }
      </main>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => {
  const data = state.searchPage;
  return ({
    ...ownProps,
    order: data.order,
    orderBy: data.orderBy,
    status: data.status,
    selected: data.selected,
    page: data.page,
    data: data.data,
    rowsPerPage: data.rowsPerPage,
    isSideBarOpen: data.isSideBarOpen
  })
};

const mapDispatchToProps = (dispatch) => ({
  handleSideBarOpen: () => dispatch(openSideBar()),
  handleSideBarClose: () => dispatch(closeSideBar()),
  handleRequestSort: (event, property) => dispatch(requestSort(event, property)),
  handleSelectAllClick: event => dispatch(selectAll(event)),
  handleClick: (event, id) => dispatch(clickOne(event, id)),
  handleChangePage: (event, page) => dispatch(changePage(event, page)),
  handleChangeRowsPerPage: (event) => dispatch(changePerPage(event)),
  handleSelectOpen: () => dispatch(selectOpen())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, {withTheme: true})(Page));