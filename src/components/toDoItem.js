import React from "react";
import {
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  itemText: {
    fontFamily: ["Karla", "sans-serif"],
  },
  checkbox: {
    backgroundColor: theme.palette.info.light,
  },
}));

export default function ToDoItem({ text, handleComplete, value }) {
  const classes = useStyles();

  return (
    <ListItem dense value={value} button>
      <ListItemIcon>
        <Checkbox
          edge="start"
          onChange={handleComplete}
          className={classes.checkbox}
        />
      </ListItemIcon>
      <ListItemText primary={text} className={classes.itemText} />
    </ListItem>
  );
}
