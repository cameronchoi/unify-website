import React, { useState } from "react";
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

const MessagingInput = ({ onClick }) => {
  const [message, setMessage] = useState("");
  const classes = useStyles();

  const onClickHandler = () => {
    const sendMessage = {
      position: "right",
      type: "text",
      text: message,
      date: new Date(),
    };
    onClick(sendMessage);
    setMessage("");
  };

  return (
    <div className={classes.form}>
      <InputBase
        className={classes.input}
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <IconButton
        onClick={onClickHandler}
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
