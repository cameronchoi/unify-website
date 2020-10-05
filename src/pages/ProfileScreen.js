import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Div100vh from "react-div-100vh";

import { createUseStyles } from "react-jss";
import Header from "../components/Header";

const useStyles = createUseStyles({
  mainContainer: {
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
    <Div100vh className={classes.mainContainer}>
      <Header />
      <div className={classes.contentContainer}>
        <h1>Profile screen</h1>
      </div>
      <Footer profileSelected={true} />
    </Div100vh>
  );
};

export default ProfileScreen;
