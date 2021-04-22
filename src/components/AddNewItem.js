import React, { useState } from "react";
import { makeStyles, TextField, Button, MenuItem } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  form: {
    "& > *": {
      margin: theme.spacing(2),
      width: "60ch",
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

const defaultTodos = [
  { value: "laundry", label: "laundry" },
  { value: "grocery store", label: "grocery store" },
  { value: "gym", label: "gym" },
  { value: "clean room", label: "clean room" },
];

export default function AddNewItem({ handleSubmitKey, handleSubmitBtn }) {
  const [newTodo, setNewTodo] = useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewTodo(event.target.value);
  };

  return (
    <div className={classes.root}>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmitKey}
      >
        <TextField
          id="new-todo"
          label="Add new to do"
          variant="outlined"
          color="primary"
        />
        <TextField
          id="select-default"
          select
          label="Or select a default to do"
          value={newTodo}
          onChange={handleChange}
          helperText="like laundry"
        >
          {defaultTodos.map((todo) => (
            <MenuItem key={todo.value} value={todo.value}>
              {todo.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={handleSubmitBtn}
        >
          Add To Do
        </Button>
      </form>
    </div>
  );
}
