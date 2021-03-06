import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { purple } from "@material-ui/core/colors";

export const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);
