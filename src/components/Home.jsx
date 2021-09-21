import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

//we need to check if we have a token
//if we do, we want to hit the "me" route (fetch me)
//no need to create a "me" component

const Home = (props) => {
  const { username } = props;
  return (
    <div>
      <h1> Welcome to your Fitness Tracker app {username}!</h1>
    </div>
  );
};

export default Home;
