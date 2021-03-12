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

export default function ToDoItem({
  text,
  handleComplete,
  handleChange,
  value,
}) {
  const classes = useStyles();

  return (
    <ListItem dense value={value} onClick={handleComplete} button>
      <ListItemIcon>
        <Checkbox
          edge="start"
          onChange={handleChange}
          className={classes.checkbox}
        />
      </ListItemIcon>
      <ListItemText primary={text} className={classes.itemText} />
    </ListItem>
  );
}
