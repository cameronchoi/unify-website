import React from "react";
import { createUseStyles } from "react-jss";
import { FaUserFriends } from "react-icons/fa";

import StartButton from "../components/UI/StartButton";

import Colours from "../constants/colours";

const useStyles = createUseStyles({
  container: {
    backgroundColor: Colours.primary,
    display: "flex",
    height: "100vh",
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
      <div className={classes.logo}>
        <FaUserFriends size={90} color="white" />
        <h1 className={classes.logoTitle}>unify</h1>
      </div>
      <div className={classes.buttons}>
        <StartButton
          className={classes.signInButton}
          onClick={() => {
            navigation.navigate("SignIn");
          }}
        >
          Sign in
        </StartButton>
        <StartButton
          className={classes.signUpButton}
          onClick={() => {
            navigation.navigate("EmailSignUp");
          }}
        >
          Sign up
        </StartButton>
      </div>
    </div>
  );
}
