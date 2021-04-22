import { THEMES } from "../../services/constants";
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    ...(theme.name === THEMES.LIGHT
      ? {
          boxShadow: "none",
          backgroundColor: theme.palette.primary.main,
        }
      : {}),
    ...(theme.name === THEMES.DARK
      ? {
          backgroundColor: theme.palette.background.default,
        }
      : {}),
    color: "#fff",
  },
  toolbar: {
    minHeight: 75,
  },
}));
