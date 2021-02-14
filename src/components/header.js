import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    padding: theme.spacing(2),
    fontFamily: ["Pacifico", "cursive"],
    fontSize: "80px",
    color: theme.palette.primary.main,
    textAlign: "center",
  },
  span: {
    color: theme.palette.warning.main,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.header} elevation={3}>
          emily's <span className={classes.span}>to do</span> list
        </Paper>
      </Grid>
    </div>
  );
}
