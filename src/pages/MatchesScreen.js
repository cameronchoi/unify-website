import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { createUseStyles } from "react-jss";

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

const MatchesScreen = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Header />
      <div className={classes.contentContainer}>
        <h1>This is the matches screen</h1>
      </div>
      <Footer matchesSelected={true} />
    </div>
  );
};

export default MatchesScreen;
