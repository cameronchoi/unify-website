import React, { useState, useContext, forwardRef, useEffect } from "react";
import Avatar from "avataaars";
import Header from "../components/Header";
import { createUseStyles } from "react-jss";

import { AuthContext } from "../contexts/AuthContext";
import Cookies from "js-cookie";

import Colours from "../constants/colours";
import baseUrl from "../constants/baseUrl";

import { CircularProgress, Dialog, Slide } from "@material-ui/core";
import { Link } from "react-router-dom";

import StartButton from "../components/StartButton";
import Footer from "../components/Footer";

import Div100vh from "react-div-100vh";

const useStyles = createUseStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  contentContainer: {
    display: "flex",
    height: "80%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  matchButton: {
    backgroundColor: Colours.primary,
    color: "white",
    fontSize: 25,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
  },
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
  },
  modalText: {
    color: "white",
    fontSize: 20,
    margin: "20px 0px",
  },
  messageButton: {
    backgroundColor: Colours.primary,
    color: "white",
    marginTop: 20,
    marginBottom: 30,
  },
  homeButton: {
    backgroundColor: "transparent",
    color: Colours.primary,
    borderColor: Colours.primary,
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 20,
  },
  pageLoader: {},
});

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HomeScreen({ navigation }) {
  const classes = useStyles();
  const [state] = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [matchLoading, setMatchLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [uri, setUri] = useState("");

  const [topType, setTopType] = useState("");
  const [hairColour, setHairColour] = useState("");
  const [clotheType, setClotheType] = useState("");
  const [skinColour, setSkinColour] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    setLoading(true);

    const token = Cookies.get("userToken");
    fetch(`${baseUrl.au}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        setTopType(resData.avatar.topType);
        setHairColour(resData.avatar.hairColour);
        setClotheType(resData.avatar.clotheType);
        setSkinColour(resData.avatar.skinColour);
        setFirstName(resData.firstName);
        setLastName(resData.lastName);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Something wrong happened...");
        setLoading(false);
      });
  }, []);

  const onPressHandler = () => {
    setMatchLoading(true);
    setOpen(true);
    setMatchLoading(false);
    // fetch(`${baseUrl.au}/match`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${state.userToken}`,
    //   },
    //   body: JSON.stringify({
    //     degree: matchByDegree,
    //     subject: matchBySubject,
    //     personality: matchByPersonality,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((resData) => {
    //     console.log(resData);
    //     if (resData.error) {
    //       setLoading(false);
    //       alert(resData.error);
    //     } else {
    //       let fullName = `${resData.result.firstName} ${resData.result.lastName}`;
    //       let uri = `https://avataaars.io/png?topType=${resData.result.avatar.topType}&hairColor=${resData.result.avatar.hairColour}&clotheType=${resData.result.avatar.clotheType}&skinColor=${resData.result.avatar.skinColour}&avatarStyle=Circle`;
    //       //   matchDispatch({
    //       //     type: "SET_MATCH",
    //       //     email: resData.result.email,
    //       //     fullName,
    //       //     id: resData.id,
    //       //     uri,
    //       //   });
    //       setFullName(fullName);
    //       setUri(uri);
    //       setLoading(false);
    //       setModalOpen(true);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Div100vh className={classes.mainContainer}>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            backgroundColor: "black",
            opacity: 0.95,
            boxShadow: "none",
          },
        }}
      >
        <Div100vh className={classes.modalContainer}>
          <div className={classes.modalText}>You have matched with...</div>
          <Avatar
            style={{ width: 200, height: 200, marginBottom: 25 }}
            avatarStyle="Circle"
            topType="LongHairMiaWallace"
            accessoriesType="Prescription02"
            hairColor="BrownDark"
            facialHairType="Blank"
            clotheType="Hoodie"
            clotheColor="PastelBlue"
            eyeType="Happy"
            eyebrowType="Default"
            mouthType="Smile"
            skinColor="Light"
          />
          <div className={classes.modalText}>Bob Smith</div>
          <Link
            to="/messages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <StartButton className={classes.messageButton}>
              Send them a message
            </StartButton>
          </Link>
          <StartButton className={classes.homeButton} onClick={handleClose}>
            Go back to home screen
          </StartButton>
        </Div100vh>
      </Dialog>
      <Header />
      {loading ? (
        <div className={classes.contentContainer}>
          <CircularProgress size={50} />
        </div>
      ) : (
        <div className={classes.contentContainer}>
          <div className={classes.title}>{`Hi, ${firstName}!`}</div>
          <Avatar
            style={{ width: 250, height: 250, marginBottom: 25 }}
            avatarStyle="Circle"
            topType={topType}
            hairColor={hairColour}
            clotheType={clotheType}
            skinColor={skinColour}
          />
          {matchLoading ? (
            <CircularProgress size={50} />
          ) : (
            <StartButton
              className={classes.matchButton}
              onClick={onPressHandler}
            >
              Find me a match
            </StartButton>
          )}
        </div>
      )}
      <Footer homeSelected={true} />
    </Div100vh>
  );
}
