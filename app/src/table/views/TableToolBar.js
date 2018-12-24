import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {lighten} from '@material-ui/core/styles/colorManipulator';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const style = theme => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85)
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark
      },
  spacer: {
    flex: '1 1 100%'
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: '0 0 auto'
  }
});

const TableToolBar = ({title, handleSelect, numSelected, classes}) => (
  <ToolBar
    className={classNames(classes.root, {
      [classes.highlight]: numSelected > 0,
    })}
  >
    <div className={classes.title}>
      {
        numSelected > 0 ? (
          <Typography color='inherit' variant='subtitle1'>
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant='h6' id='tableTitle'>
            {title}
          </Typography>
        )
      }
    </div>
    <div className={classes.spacer} />
    <div className={classes.actions}>
      {
        numSelected > 0 ? (
          <Tooltip title='open'>
            <IconButton aria-label='open' onClick={handleSelect}>
              <OpenInNewIcon/>
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title='Filter list'>
            <IconButton aria-label='Filter list'>
              <FilterListIcon/>
            </IconButton>
          </Tooltip>
        )
      }
    </div>
  </ToolBar>
);

TableToolBar.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  handleSelect: PropTypes.func.isRequired
};

export default withStyles(style)(TableToolBar)
