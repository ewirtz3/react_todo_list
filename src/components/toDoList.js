import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import ToDoItem from "./ToDoItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function ToDoList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Paper className={classes.paper}>
          <ToDoItem />
        </Paper>
      </Grid>
    </div>
  );
}
