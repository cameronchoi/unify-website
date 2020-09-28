import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid #E8E8E8",
  },
  title: {
    fontSize: 20,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.container}>
      <p className={classes.title}>unify</p>
    </header>
  );
};

export default Header;
