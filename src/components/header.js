import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

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
    <div container className={classes.root}>
      <Grid item className={classes.header} xs={12}>
        <p>
          emily's <span className={classes.span}>to do</span> list
        </p>
      </Grid>
    </div>
  );
}
