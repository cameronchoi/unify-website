import React from "react";
import { createUseStyles } from "react-jss";
import { FaUserFriends, FaUserAlt, FaComments } from "react-icons/fa";
import Colours from "../constants/colours";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 18,
  },
});

const Footer = ({ profileSelected, matchesSelected, homeSelected }) => {
  const classes = useStyles();
  return (
    <footer className={classes.container}>
      <Link to="/profile">
        <FaUserAlt
          size={30}
          color={profileSelected ? Colours.primary : "grey"}
        />
      </Link>
      <Link to="/">
        <FaUserFriends
          size={40}
          color={homeSelected ? Colours.primary : "grey"}
        />
      </Link>
      <Link to="/matches">
        <FaComments
          size={40}
          color={matchesSelected ? Colours.primary : "grey"}
        />
      </Link>
    </footer>
  );
};

export default Footer;
