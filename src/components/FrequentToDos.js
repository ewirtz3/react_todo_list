import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "row wrap",
    "& > *": {
      margin: theme.spacing(1),
    },
    border: "3px solid blue",
  },
}));

export default function FrequentToDos({ todos }) {
  const classes = useStyles();
  const defaultTodos = [
    { value: "laundry", label: "laundry" },
    { value: "gym", label: "gym" },
    { value: "clean", label: "clean" },
    { value: "mow lawn", label: "mow lawn" },
  ];
  return (
    <div className={classes.root}>
      {defaultTodos.map((task) => {
        return (
          <Button variant="outlined" color="secondary">
            {task.label}
          </Button>
        );
      })}
    </div>
  );
}
