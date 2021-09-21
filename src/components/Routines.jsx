import React, { useEffect, useState } from "react";
import { Home } from "./Home";
//we need to check if we have a token
//if we do, we want to hit the "me" route (fetch me)
//no need to create a "me" component

const Routines = (props) => {
  // passed in username prop to verify a user is logged in and pass username value for routines
  const { username } = props;
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  console.log(username);
  const myRoutinesUrl =
    "http://fitnesstrac-kr.herokuapp.com/api/users/" + `${username}/routines`;

  const getRoutine = (e) => {
    e.preventDefault();
    // fetch is passing username and token in order to receive routines
    fetch(myRoutinesUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      // json erroring out , not sure if we need key/value pairs for the response
      .then((response) => response.json())
      .then((result) => {
        return result.json();
      })
      .catch(console.error);
  };

  return (
    // getRoutine should fetch Routines when the button is clickeds
    <div>
      <button onClick={getRoutine}>
        <h1>My Routines </h1>
      </button>
    </div>
  );
};

export default Routines;
