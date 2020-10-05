import React, { useState } from "react";
import "react-chat-elements/dist/main.css";
import { MessageList } from "react-chat-elements";
import MessagingHeader from "../components/MessagingHeader";
import { createUseStyles } from "react-jss";
import MessagingInput from "../components/MessagingInput";
import Div100vh from "react-div-100vh";

const useStyles = createUseStyles({
  messages: {
    marginTop: 10,
  },
  container: {
    position: "relative",
  },
});

const MessagingScreen = () => {
  const [messages, setMessages] = useState([
    {
      position: "right",
      type: "text",
      text: "Hey James!",
      date: new Date(),
    },
    {
      position: "left",
      type: "text",
      text: "Yoooooo what's up",
      date: new Date(),
    },
    {
      position: "left",
      type: "text",
      text: "Whatchu up to??",
      date: new Date(),
    },
  ]);
  const classes = useStyles();
  return (
    <Div100vh className={classes.container}>
      <MessagingHeader />
      <MessageList
        className={["message-list", classes.messages].join(" ")}
        lockable={true}
        toBottomHeight={"100%"}
        dataSource={messages}
      />
      <MessagingInput
        onClick={(newMessage) =>
          setMessages((messages) => [...messages, newMessage])
        }
      />
    </Div100vh>
  );
};

export default MessagingScreen;
