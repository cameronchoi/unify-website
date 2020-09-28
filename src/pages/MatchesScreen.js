import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { createUseStyles } from "react-jss";
import Div100vh from "react-div-100vh";

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

const MatchesScreen = () => {
  const classes = useStyles();
  return (
    <Div100vh className={classes.mainContainer}>
      <Header />
      <div className={classes.contentContainer}>
        <h1>This is the matches screen</h1>
      </div>
      <Footer matchesSelected={true} />
    </Div100vh>
  );
};

export default MatchesScreen;
