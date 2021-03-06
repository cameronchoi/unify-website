import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { createUseStyles } from "react-jss";
import Div100vh from "react-div-100vh";
import NewMatch from "../components/NewMatch";
import Colours from "../constants/colours";
import Conversation from "../components/Conversation";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  contentContainer: {
    height: "calc(100% - 120px)",
    display: "flex",
    flexDirection: "column",
  },
  matchesScroll: {
    display: "flex",
    flexShrink: 0,
    width: "100vw",
    overflowX: "auto",
    marginBottom: 15,
  },
  matchesText: {
    margin: 10,
    color: Colours.primary,
  },
  conversationScroll: {
    overflowY: "auto",
  },
});

const MatchesScreen = () => {
  const classes = useStyles();
  return (
    <Div100vh className={classes.mainContainer}>
      <Header />
      <div className={classes.contentContainer}>
        <div className={classes.matchesText}>New Matches</div>
        <div className={classes.matchesScroll}>
          <Link
            to="/messages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <NewMatch />
          </Link>
          <Link
            to="/messages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <NewMatch />
          </Link>
          <Link
            to="/messages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <NewMatch />
          </Link>
          <Link
            to="/messages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <NewMatch />
          </Link>
          <Link
            to="/messages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <NewMatch />
          </Link>
          <Link
            to="/messages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <NewMatch />
          </Link>
          <Link
            to="/messages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <NewMatch />
          </Link>
        </div>
        <div className={classes.matchesText}>Conversations</div>
        <div className={classes.conversationScroll}>
          <Link
            to="/messages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Conversation />
          </Link>
          <Link
            to="/messages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Conversation />
          </Link>
          <Link
            to="/messages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Conversation />
          </Link>
          <Link
            to="/messages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Conversation />
          </Link>
          <Link
            to="/messages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Conversation />
          </Link>
          <Link
            to="/messages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Conversation />
          </Link>
          <Link
            to="/messages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Conversation />
          </Link>
          <Link
            to="/messages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Conversation />
          </Link>
        </div>
      </div>
      <Footer matchesSelected={true} />
    </Div100vh>
  );
};

export default MatchesScreen;
