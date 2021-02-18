import React from "react";
import { makeStyles, TextField, Paper, Button } from "@material-ui/core";
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

export default function AddNewItem() {
  const classes = useStyles();

  const handleNewToDo = (event) => {
    console.log(event.target.parentElement.parentElement[0].value);
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="new-todo"
          label="Add new to do"
          variant="outlined"
          color="primary"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={handleNewToDo}
        >
          Add To Do
        </Button>
      </form>
    </div>
  );
}
