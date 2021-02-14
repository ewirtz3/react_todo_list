import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoItem from "./components/ToDoItem";
import "./styles.css";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Header />
        <ToDoList />
        <ToDoItem />
      </Grid>
    </div>
  );
}
