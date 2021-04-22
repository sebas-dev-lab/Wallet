import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { menu } from "./utils/menu";

export const mainListItems = (
  <div>
    {menu.map((item) => {
      return (
        <ListItem button to={item.path} component={Link}>
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>
          <ListItemText primary={item.data} />
        </ListItem>
      );
    })}
  </div>
);
