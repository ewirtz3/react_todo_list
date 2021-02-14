import React from "react";
import { Grid, makeStyles, TextField, Paper, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "60ch",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

export default function AddNewItem() {
  const classes = useStyles();

  return (
    <div>
      <Grid xs={12} container spacing={3}>
        <Paper className={classes.paper} elevation={3}>
          <form className={classes.root} noValidate autoComplete="off">
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
          />
        </Paper>
      </Grid>
    </div>
  );
}
