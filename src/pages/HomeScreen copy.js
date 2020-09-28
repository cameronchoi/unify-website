import React, { useState, useContext } from "react";

import { createUseStyles } from "react-jss";
// import Card from "../components/Card";
// import NormalText from "../components/NormalText";
// import MatchCriteria from "../components/MatchCriteria";
// import MatchModal from "../components/MatchModal";

import Switch from "@material-ui/core/Switch";

// import { MatchContext } from "../contexts/MatchContext";
import { AuthContext } from "../contexts/AuthContext";

import Colours from "../constants/colours";
import baseUrl from "../constants/baseUrl";
import { CircularProgress } from "@material-ui/core";
import { FaUserFriends } from "react-icons/fa";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  criteria: {
    marginTop: 20,
  },
  lastCriteria: {
    marginVertical: 20,
  },
  criteriaContainer: {},
  firstButton: {
    backgroundColor: Colours.primary,
    marginVertical: 20,
  },
  secondButton: {
    borderColor: Colours.primary,
    borderWidth: 1,
    marginVertical: 20,
  },
  matchText: {
    fontSize: 18,
    color: "black",
    marginTop: 30,
  },
  matchButton: {
    flex: 0.95,
    justifyContent: "center",
    width: "80%",
    marginTop: 30,
  },
  logo: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colours.primary,
    width: "100%",
  },
  logoTitle: {
    color: "white",
    fontSize: 40,
    margin: 0,
  },
});

export default function HomeScreen({ navigation }) {
  const classes = useStyles();

  //   const [matchState, matchDispatch] = useContext(MatchContext);
  const [state] = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [matchByDegree, setMatchByDegree] = useState(true);
  const [matchBySubject, setMatchBySubject] = useState(true);
  const [matchByPersonality, setMatchByPersonality] = useState(true);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [uri, setUri] = useState("");

  const onPressHandler = () => {
    setLoading(true);
    console.log(matchByDegree);
    console.log(matchBySubject);
    console.log(matchByPersonality);
    console.log(state.userToken);
    fetch(`${baseUrl.au}/match`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.userToken}`,
      },
      body: JSON.stringify({
        degree: matchByDegree,
        subject: matchBySubject,
        personality: matchByPersonality,
      }),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        if (resData.error) {
          setLoading(false);
          alert(resData.error);
        } else {
          let fullName = `${resData.result.firstName} ${resData.result.lastName}`;
          let uri = `https://avataaars.io/png?topType=${resData.result.avatar.topType}&hairColor=${resData.result.avatar.hairColour}&clotheType=${resData.result.avatar.clotheType}&skinColor=${resData.result.avatar.skinColour}&avatarStyle=Circle`;
          //   matchDispatch({
          //     type: "SET_MATCH",
          //     email: resData.result.email,
          //     fullName,
          //     id: resData.id,
          //     uri,
          //   });
          setFullName(fullName);
          setUri(uri);
          setLoading(false);
          setModalOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.container}>
      {/* <MatchModal
        fullName={fullName}
        uri={uri}
        modalOpen={modalOpen}
        sendMessageHandler={() => {
          navigation.navigate("Matches");
          navigation.navigate("Messaging");
          setModalOpen(false);
        }}
        backHandler={() => {
          setModalOpen(false);
        }}
      /> */}

      <div className={classes.criteriaContainer}>
        {/* <MatchCriteria
          isEnabled={matchByDegree}
          setIsEnabled={setMatchByDegree}
          title="Match by degree"
          style={styles.criteria}
          textStyle={{ fontSize: 15 }}
        />
        <MatchCriteria
          isEnabled={matchBySubject}
          setIsEnabled={setMatchBySubject}
          title="Match by subject"
          style={styles.criteria}
          textStyle={{ fontSize: 15 }}
        />
        <MatchCriteria
          isEnabled={matchByPersonality}
          setIsEnabled={setMatchByPersonality}
          title="Match by interests and personality"
          style={styles.lastCriteria}
          textStyle={{ fontSize: 15 }}
        /> */}
        <Switch
          checked={matchByDegree}
          onChange={(event) => {
            setMatchByDegree(event.target.checked);
          }}
          color="primary"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </div>
      <div>
        <h3 className={classes.matchText}>Press to find a match</h3>
        <button onClick={onPressHandler}>
          {loading ? (
            <CircularProgress />
          ) : (
            <div className={classes.logo}>
              <FaUserFriends size={90} color="white" />
              <h1 className={classes.logoTitle}>unify</h1>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
