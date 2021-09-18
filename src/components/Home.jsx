import React, { useEffect, useState } from "react";

//we need to check if we have a token
//if we do, we want to hit the "me" route (fetch me)
//no need to create a "me" component

const Home = () => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [userName, setUser] = useState("");

  useEffect(() => {
    fetch("http://fitnesstrac-kr.herokuapp.com/api/users/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setUser(result.username);
      })
      .catch(console.error);
  }, [token]);

  return (
    <div>
      <h1>Welcome to your Fitness {userName} Tracker app!</h1>
    </div>
  );
};

export default Home;
