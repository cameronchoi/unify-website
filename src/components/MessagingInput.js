import React from "react";
import { IconButton, InputBase } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  form: {
    display: "flex",
    width: "100vw",
    borderTop: "1px solid #E8E8E8",
    position: "absolute",
    bottom: 0,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});

const MessagingInput = () => {
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <InputBase className={classes.input} placeholder="Type a message" />
      <IconButton
        type="submit"
        // className={classes.iconButton}
        aria-label="submit"
      >
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default MessagingInput;
