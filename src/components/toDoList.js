import React, { useState } from "react";
import { Grid, makeStyles, List } from "@material-ui/core";
import ToDoItem from "./ToDoItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    padding: theme.spacing(2),
  },
}));

const defaultToDos = [
  {
    text: "laundry",
    complete: false,
  },
  {
    text: "grocery store",
    complete: false,
  },
  {
    text: "finish React project",
    complete: false,
  },
];

export default function ToDoList() {
  const classes = useStyles();
  const [complete, setComplete] = useState();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <List className={classes.list}>
          {defaultToDos.map((item, i) => (
            <ToDoItem key={i} text={item.text} />
          ))}
        </List>
      </Grid>
    </div>
  );
}
