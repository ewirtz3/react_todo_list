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
    color: theme.palette.info.light,
    textAlign: "center",
  },
  span: {
    color: theme.palette.warning.light,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item className={classes.header} xs={12}>
        <p>
          emily's <span className={classes.span}>to do</span> list
        </p>
      </Grid>
    </div>
  );
}
