import React from "react";
import {
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {},
  itemText: {
    fontFamily: ["Karla", "sans-serif"],
  },
  checkbox: {
    backgroundColor: theme.palette.info.light,
  },
}));

export default function ToDoItem({ text }) {
  const classes = useStyles();

  return (
    <ListItem dense button>
      <ListItemIcon>
        <CheckBox edge="start" disableRipple className={classes.checkbox} />
      </ListItemIcon>
      <ListItemText primary={text} className={classes.itemText} />
    </ListItem>
  );
}
