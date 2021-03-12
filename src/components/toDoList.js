import React, { useState, useEffect } from "react";
import { Grid, makeStyles, List } from "@material-ui/core";
import ToDoItem from "./ToDoItem";
import AddNewItem from "./AddNewItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
  list: {
    padding: theme.spacing(2),
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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
  const [tasks, setTasks] = useState([]);

  const handleComplete = (event) => {
    const check = event;
    console.log("check", check);
  };

  const handleChange = (event) => {
    const change = event;
    console.log("change", change);
  };

  const handleSubmit = (event) => {
    const newTaskText = event.target.parentElement.parentElement[0].value;
    const newTask = {
      text: newTaskText,
      complete: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <AddNewItem handleSubmit={handleSubmit} />
        <List className={classes.list}>
          {tasks.map((item, i) => (
            <ToDoItem
              key={i}
              value={i}
              text={item.text}
              handleComplete={handleComplete}
              handleChange={handleChange}
            />
          ))}
        </List>
      </Grid>
    </div>
  );
}
