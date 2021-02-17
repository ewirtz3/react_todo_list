import React from "react";
import {
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";

export default function ToDoItem({ text }) {
  return (
    <ListItem dense button>
      <ListItemIcon>
        <CheckBox edge="start" disableRipple />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}
