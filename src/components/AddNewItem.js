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

  return (
    <div container className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="outlined-primary"
          label="Add new to do"
          variant="outlined"
          color="primary"
        />
      </form>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Add To Do
      </Button>
    </div>
  );
}
