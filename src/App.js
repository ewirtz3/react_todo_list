import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import AddNewItem from "./components/AddNewItem";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    justifyContent: "center",
    textAlign: "center",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" xs={12} spacing={3}>
        <Paper elevation={24} className={classes.paper}>
          <Header />
          <AddNewItem />
        </Paper>
      </Grid>
    </div>
  );
}
