import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { delWallet } from "../../../Redux/Actions/wallet";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
  root: {
    maxWidth: "80em",
    margin: 20,
    padding: 0,
  },
  root_2: {
    maxWidth: "50em",
    minWidth: "20em",
    marginLeft: "10em",
  },
});

export default function DashTable({ coins }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  let estructure = ["Id", "Cuenta", "Balance", "Acciones"];
  const deleteWallet = (account) => {
    console.log(account);
    dispatch(delWallet(account, history));
  };

  return (
    <>
      <CssBaseline />
      <TableContainer component={Paper} maxWidth="xs">
        {coins.length > 0 ? (
          <>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {estructure.map((item, idx) => {
                    return (
                      <TableCell align="right" key={idx}>
                        {item}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {coins.map((row, idx) => (
                  <TableRow key={row.name}>
                    <TableCell align="right">{idx}</TableCell>
                    <TableCell align="right">
                      {row.account.slice(0, 10) + "..."}
                    </TableCell>
                    <TableCell align="right">
                      {row.balance === 0
                        ? 0
                        : Math.floor(row.balance / (1000000 * 1000000))}
                    </TableCell>
                    <TableCell align="right">
                      <Button onClick={() => deleteWallet(row.account)}>
                        <DeleteSweepIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        ) : (
          "No tienes billetera"
        )}
      </TableContainer>
    </>
  );
}
