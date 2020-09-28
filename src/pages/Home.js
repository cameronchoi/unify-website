import React from "react";
import { createUseStyles } from "react-jss";
import { FaUserFriends } from "react-icons/fa";

import StartButton from "../components/StartButton";

import Colours from "../constants/colours";

const useStyles = createUseStyles({
  container: {
    backgroundColor: Colours.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  logo: {
    flex: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  logoTitle: {
    color: "white",
  },
  buttons: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
  },
  signInButton: {
    marginTop: 20,
    backgroundColor: "white",
    color: Colours.primary,
  },
  signUpButton: {
    marginTop: 20,
    backgroundColor: Colours.primary,
    color: "white",
  },
});

export default function StartUpScreen({ navigation }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Not converted over yet...</h1>
    </div>
  );
}
