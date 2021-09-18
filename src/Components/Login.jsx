import React from "react";

const loginUrl = "http://fitnesstrac-kr.herokuapp.com/api/";

const Register = () => {
  const loginVerification = loginUrl + "users/register";
  fetch(loginVerification, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      //need to pass the userLoging object w/username and password
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
};
