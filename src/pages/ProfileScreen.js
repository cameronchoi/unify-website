import React from "react";
import Footer from "../components/Footer";

import { createUseStyles } from "react-jss";
import Header from "../components/Header";

const useStyles = createUseStyles({
  mainContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const ProfileScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Header />
      <div className={classes.contentContainer}>
        <h1>This is the profile screen</h1>
      </div>
      <Footer profileSelected={true} />
    </div>
  );
};

export default ProfileScreen;
