import { Route, Switch } from "react-router";
import "./App.css";
import { Login, Register, Home, Routines } from "./components";
import React, { useEffect, useState } from "react";

function App() {
  // verifies if "token" from user is stored in local storage
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [userName, setUser] = useState("");

  // Verifies the user is logged in by requesting user name
  useEffect(() => {
    fetch("http://fitnesstrac-kr.herokuapp.com/api/users/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      // in the response json we pull the username and store it in a state value
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setUser(result.username);
      })
      .catch(console.error);
  }, []);

  // Switch/Route for our components
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home}>
          <Home username={userName} />
        </Route>
        <Route path="/routines" component={Routines}>
          <Routines username={userName} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
