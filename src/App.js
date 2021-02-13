import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
  header: {
    fontFamily: ["Pacifico", "cursive"],
    fontSize: "80px",
    color: theme.palette.primary.main,
    textAlign: "center",
  },
  span: {
    color: theme.palette.warning.main,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.header}>
            emily's <span className={classes.span}>to do</span> list
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
