import React, { useState, useEffect } from "react";
import { Grid, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ToDoItem from "./ToDoItem";
import AddNewItem from "./AddNewItem";
import FrequentToDos from "./FrequentToDos";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    flexDirection: "column",
    justifyContent: "center",
    flexGrow: 1,
    padding: theme.spacing(5),
    border: "3px solid red",
  },
  list: {
    padding: theme.spacing(2),
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    border: "3px solid purple",
  },
}));

export default function ToDoList() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!tasks) {
      return;
    }
  }, [tasks]);

  const handleComplete = (event) => {
    const completedText =
      event.target.parentElement.parentElement.parentElement.nextSibling
        .children[0].innerText;
    let completedTask = tasks.find((element) => element.text == completedText);
    completedTask.complete = true;
    const uncheckedTasks = tasks.filter((task) => task.complete === false);
    setTasks([...uncheckedTasks]);
  };

  const handleSubmitKey = (event) => {
    event.preventDefault();
    console.log(event);
    const newTaskText = event.target[0].value;
    let newTask = {
      text: newTaskText,
      id: Math.floor(Math.random() * 10000),
      complete: false,
    };
    setTasks([...tasks, newTask]);
    event.target[0].value = "";
  };

  const handleSubmitBtn = (event) => {
    const newTaskText = event.target.parentElement.parentElement[0].value;
    let newTask = {
      text: newTaskText,
      id: Math.floor(Math.random() * 10000),
      complete: false,
    };
    setTasks([...tasks, newTask]);
    event.target.parentElement.parentElement[0].value = "";
  };

  return (
    <Grid container spacing={3} className={classes.root}>
      <FrequentToDos />
      <AddNewItem
        handleSubmitBtn={handleSubmitBtn}
        handleSubmitKey={handleSubmitKey}
      />
      <List className={classes.list}>
        {tasks.map((item) => (
          <ToDoItem
            key={item.id}
            value={item.text}
            text={item.text}
            handleComplete={handleComplete}
          />
        ))}
      </List>
    </Grid>
  );
}
