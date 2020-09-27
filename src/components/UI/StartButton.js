import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  button: {
    width: "300px",
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    borderShadow: "none",
    borderWidth: 0,
  },
});

const StartButton = (props) => {
  const classes = useStyles();
  return (
    <button {...props} className={[props.className, classes.button].join(" ")}>
      {props.children}
    </button>
  );
};

export default StartButton;
