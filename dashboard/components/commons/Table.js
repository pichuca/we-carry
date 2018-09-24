import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Util sorting functions.
// import { stableSort, getSorting } from './sorting/sorting';

// import './Table.css';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#2196f3',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

function CustomTable(props) {
  const { classes, tableHeads, tableName, cols } = props;

  return (
   
    <Paper className={classes.root}>
      <h2 className="ui-table-title">{tableName}</h2>
      <Table className={classes.table}>       
        <TableHead>
          <TableRow>
            {tableHeads.map((head) => {
              return (
                <CustomTableCell numeric={head.isNumeric} key={head.id}>{head.text}</CustomTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {cols.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.SKU}
                </CustomTableCell>
                <CustomTableCell>{row.buyer}</CustomTableCell>
                <CustomTableCell>{row.products}</CustomTableCell>
                <CustomTableCell>{row.tracking}</CustomTableCell>

                {cols.length === 5 ? <CustomTableCell>{row.status}</CustomTableCell>: null}
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
