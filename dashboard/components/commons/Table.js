import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ImageAvatar from './Avatar.js';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#0076ff',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    color: '#757575',
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    fontFamily: 'Roboto, sans-serif',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    height: 84,
  },
});

const CustomTable = (props) => {
  const { classes, tableHeads, tableName, cols } = props;

  return (
   
    <Paper className={classes.root}>
      <h2 className="ui-table-title">{tableName}</h2>
      <Table className={classes.table}>       
        <TableHead>
          <TableRow>
            {tableHeads.map((head, index) => {
              return (
                <CustomTableCell key={index}>{head.text}</CustomTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {cols.map((row, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell>
                    <ImageAvatar />
                </CustomTableCell>
                <CustomTableCell component="th" scope="row">
                  {row.SKU}
                </CustomTableCell>
                <CustomTableCell>{row.buyer || row.name}</CustomTableCell>
                <CustomTableCell>{row.products || row.availability}</CustomTableCell>
                <CustomTableCell>{row.tracking || row.orders}</CustomTableCell>

                {cols.length === 6 ? <CustomTableCell>{row.status}</CustomTableCell>: null}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomTable);
