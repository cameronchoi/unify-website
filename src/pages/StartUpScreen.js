import React from "react";
import { createUseStyles } from "react-jss";
import { FaUserFriends } from "react-icons/fa";
import StartButton from "../components/StartButton";
import { Link } from "react-router-dom";
import Colours from "../constants/colours";
import Div100vh from "react-div-100vh";

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
    alignItems: "center",
  },
  logoTitle: {
    color: "white",
    fontSize: 40,
    margin: 0,
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
    <Div100vh className={classes.container}>
      <div className={classes.logo}>
        <FaUserFriends size={90} color="white" />
        <h1 className={classes.logoTitle}>unify</h1>
      </div>
      <div className={classes.buttons}>
        <Link to="/signin">
          <StartButton className={classes.signInButton}>Sign in</StartButton>
        </Link>
        <Link to="/signup-email">
          <StartButton className={classes.signUpButton}>Sign up</StartButton>
        </Link>
      </div>
    </Div100vh>
  );
}
