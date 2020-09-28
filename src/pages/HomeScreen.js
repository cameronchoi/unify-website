import React, { useState, useContext } from "react";
import Avatar from "avataaars";
import Header from "../components/Header";
import { createUseStyles } from "react-jss";

import { AuthContext } from "../contexts/AuthContext";

import Colours from "../constants/colours";
import baseUrl from "../constants/baseUrl";

import { CircularProgress } from "@material-ui/core";

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
    height: "60%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  matchButton: {
    backgroundColor: Colours.primary,
    color: "white",
    fontSize: 25,
  },
  title: {
    fontSize: 30,
  },
});

export default function HomeScreen({ navigation }) {
  const classes = useStyles();
  const [state] = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [uri, setUri] = useState("");

  const onPressHandler = () => {
    setLoading(true);
    // console.log(matchByDegree);
    // console.log(matchBySubject);
    // console.log(matchByPersonality);
    // console.log(state.userToken);
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

  return (
    <Div100vh className={classes.mainContainer}>
      <Header />
      <div className={classes.contentContainer}>
        <div className={classes.title}>Hi, Cameron!</div>
        <Avatar
          style={{ width: 250, height: 250, marginBottom: 25 }}
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
        {loading ? (
          <CircularProgress size={50} />
        ) : (
          <StartButton className={classes.matchButton} onClick={onPressHandler}>
            Find me a match
          </StartButton>
        )}
      </div>
      <Footer homeSelected={true} />
    </Div100vh>
  );
}
