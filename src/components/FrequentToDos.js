import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
    border: "3px solid #333333",
    borderRadius: "2% 6% 5% 4% / 1% 1% 2% 4%",
  },
  header: {
    fontFamily: ["Pacifico", "cursive"],
    fontSize: "40px",
    color: theme.palette.info.light,
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
      <Typography variant="h2" gutterBottom className={classes.header}>
        Frequent Fliers
      </Typography>
      {defaultTodos.map((task, i) => {
        return (
          <Button key={i} variant="outlined" color="secondary">
            {task.label}
          </Button>
        );
      })}
    </div>
  );
}
