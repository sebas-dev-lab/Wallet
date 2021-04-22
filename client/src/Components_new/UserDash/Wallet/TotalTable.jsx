import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    alignItems: "center",
  },
  root: {
    maxWidth: "20em",
    margin: 10,
    padding: 0,
  },
  root_2: {
    maxWidth: "16em",
    minWidth: "16em",
  },
});

const TotalTable = ({ user }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root_2}>
      {user.walletMsj === "ok" ? (
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{user.total.total_2}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ) : (
        0
      )}
    </TableContainer>
  );
};

export default TotalTable;
