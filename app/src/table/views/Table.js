import React from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CheckBox from '@material-ui/core/Checkbox';
import TablePagination from '@material-ui/core/TablePagination';

import TableToolBar from "./TableToolBar";
import Head from "./Head";
import {changePage, changePerPage, clickOne, requestSort, selectAll} from "../actions";

const desc = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const stableSort = (array, cmp) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
};

const getSorting = (order, orderBy) => {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: 'auto'
  }
});

const EnhancedTable = ({
                         classes,
                         order,
                         orderBy,
                         selected,
                         data,
                         rows,
                         page,
                         rowsPerPage,
                         handleRequestSort,
                         handleSelectAllClick,
                         handleClick,
                         handleChangePage,
                         handleChangeRowsPerPage,
                       }) => {
  const isSelectedById = id => selected.indexOf(id) !== -1;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  return (
  <Paper className={classes.root}>
    <TableToolBar numSelected={selected.length}/>
    <div className={classes.tableWrapper}>
      <Table className={classes.table} aria-labelledby='tableTitle'>
        <Head
          numSelected={selected.length}
          onRequestSort={handleRequestSort}
          onSelectAllClick={handleSelectAllClick}
          order={order}
          orderBy={orderBy}
          rowCount={data.length}
          rows={rows}/>
        <TableBody>
          {
            stableSort(data, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(n => {
                const isSelected = isSelectedById(n.id);
                return (
                  <TableRow
                    hover
                    onClick={event => handleClick(event, n.id)}
                    role='checkbox'
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={n.id}
                    selected={isSelected}
                  >
                    <TableCell padding='checkbox'>
                      <CheckBox checked={isSelected}/>
                    </TableCell>
                    <TableCell component='th' scope='row' padding='none'>
                      {n.name}
                    </TableCell>
                    <TableCell align='light'>{n.gender}</TableCell>
                    <TableCell align='light'>{n.visirCardNumber}</TableCell>
                    <TableCell align='light'>{n.outpatientNumber}</TableCell>
                    <TableCell align='light'>{n.admissionNumber}</TableCell>
                  </TableRow>
                )
              })}
          {
            emptyRows > 0 && (
              <TableRow style={{hight: 49 * emptyRows}}>
                <TableCell colSpan={6}/>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </div>
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component='div'
      count={data.length}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      page={page}
      rowsPerPage={rowsPerPage}
      backIconButtonProps={{
        'aria-label': 'Previous Page',
      }}
      nextIconButtonProps={{
        'aria-label': 'Next Page'
      }}
      labelRowsPerPage="每页显示行数:"
      labelDisplayedRows={({from, to, count}) => `${from}-${to}, 共${count}条`}
    />
  </Paper>
  );
};

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  selected: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleRequestSort: PropTypes.func.isRequired,
  handleSelectAllClick: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const table = state.table;
  return ({
    ...ownProps,
    order: table.order,
    orderBy: table.orderBy,
    selected: table.selected,
    data: table.data,
    page: table.page,
    rowsPerPage: table.rowsPerPage
  })
};

const mapDispatchToProps = (dispatch) => ({
  handleRequestSort: (event, property) => dispatch(requestSort(event, property)),
  handleSelectAllClick: event => dispatch(selectAll(event)),
  handleClick: (event, id) => dispatch(clickOne(event, id)),
  handleChangePage: (event, page) => dispatch(changePage(event, page)),
  handleChangeRowsPerPage: (event) => dispatch(changePerPage(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EnhancedTable))

