import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">
        Coin Tracker
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
