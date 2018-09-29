import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';

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
  const { classes, tableHeads, cols, type } = props;

  return (
   
    <Paper className={classes.root}>
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
                {type === 'inventory'? <CustomTableCell><ImageAvatar /></CustomTableCell>: null}
                <CustomTableCell component="th" scope="row">
                  {/* <Link  as={`/product/${row.SKU}`} href={`/product?sku=${row.SKU}&name=${row.name}`}> */}
                  <Link as={`/product/${row.SKU}`} href={`/product?sku=${row.SKU}&name=${row.name}`}>
                    <a>{row.SKU}</a>
                  </Link>
                </CustomTableCell>
                <CustomTableCell>
                    {/* { type === 'inventory' ? row.buyer.name : null } */}
                    {/* { type === 'orders' ? row.name : null } */}
                    <br />
                    {/* {row.buyer.email ? row.buyer.email : null} */}
                </CustomTableCell>
                <CustomTableCell>{row.products || row.availability}</CustomTableCell>
                <CustomTableCell>{row.tracking || row.orders}</CustomTableCell>

                {type === 'orders' ? <CustomTableCell>{row.status}</CustomTableCell>: null}
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
