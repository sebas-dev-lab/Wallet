import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import DashTable from "./Table";
import AddWallet from "./CreateWallet";
import TotalTable from "./TotalTable";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "./utils/fade";
import { useStyles } from "./styles/ui.js";

const WalletDash = ({ user, coins, fixedHeightPaper }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper} className={classes.paper}>
          <h3>Billeteras</h3> <DashTable user={user} coins={coins} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper} className={classes.paper}>
          <Button onClick={handleOpen}>Agregar Billetera</Button>
          <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper_modal}>
                <AddWallet handleClose={handleClose} />
              </div>
            </Fade>
          </Modal>
        </Paper>
        <br></br>
        <Paper className={fixedHeightPaper} className={classes.paper}>
          <h3>Balance total</h3>
          <TotalTable user={user} />
        </Paper>
      </Grid>
    </>
  );
};

export default WalletDash;
