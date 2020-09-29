import React from "react";
import StartUpScreen from "./pages/StartUpScreen";
import Home from "./pages/Home";

import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import StartRoute from "./components/StartRoute";
import SignInScreen from "./pages/SignInScreen";
import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import MatchesScreen from "./pages/MatchesScreen";
import MessagingScreen from "./pages/MessagingScreen";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <StartRoute path="/start" component={StartUpScreen} />
          <StartRoute path="/signup-email" component={Home} />
          <StartRoute path="/signin" component={SignInScreen} />
          <ProtectedRoute exact path="/" component={HomeScreen} />
          <ProtectedRoute exact path="/profile" component={ProfileScreen} />
          <ProtectedRoute exact path="/matches" component={MatchesScreen} />
          <ProtectedRoute exact path="/messages" component={MessagingScreen} />

          {/* <Route path='*' component={NotFound} /> */}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
