import React, { useContext, useState } from "react";
import { createUseStyles } from "react-jss";

import { FaUserFriends } from "react-icons/fa";
import CircularProgress from "@material-ui/core/CircularProgress";

import StartButton from "../components/StartButton";

import Cookies from "js-cookie";

import Colours from "../constants/colours";
import baseUrl from "../constants/baseUrl";

import { AuthContext } from "../contexts/AuthContext";
import Div100vh from "react-div-100vh";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
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
  form: {
    flex: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input: {
    width: "70%",
    padding: "15px",
    marginBottom: "40px",
  },
  button: {
    backgroundColor: Colours.primary,
    color: "white",
  },
  loader: {
    width: "100%",
  },
});

const SignInScreen = (props) => {
  const classes = useStyles();

  const [state, dispatch] = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    //   dispatch({ type: 'SIGN_IN', token: 'token' })
    setLoading(true);
    fetch(`${baseUrl.au}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((resData) => {
        setLoading(false);
        if (!resData.token) {
          console.log(resData.error);
          alert("Wrong email or password");
        } else {
          console.log(resData);
          Cookies.set("userToken", resData.token);
          Cookies.set("email", resData.email);
          setLoading(false);
          props.history.push("/");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <Div100vh className={classes.container}>
      <div className={classes.logo}>
        <FaUserFriends size={90} color="white" />
        <h1 className={classes.logoTitle}>unify</h1>
      </div>
      <div className={classes.form}>
        <input
          className={classes.input}
          type="text"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className={classes.input}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {loading ? (
          <CircularProgress />
        ) : (
          <StartButton
            className={classes.button}
            onClick={handleSubmit}
            disabled={loading}
          >
            Sign in
          </StartButton>
        )}
      </div>
    </Div100vh>
  );
};

export default SignInScreen;
