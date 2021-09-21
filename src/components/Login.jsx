import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
  };

  const login = (e) => {
    e.preventDefault();

    fetch("http://fitnesstrac-kr.herokuapp.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: pass,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.token);
        window.localStorage.setItem("token", result.token);
      })
      .catch(console.error);
  };

  return (
    <div>
      <h2>Please sign in</h2>
      <form style={formStyle} onSubmit={login}>
        <input
          placeholder="*username"
          type="text"
          value={user}
          onChange={(e) => {
            e.preventDefault();
            setUser(e.target.value);
          }}
        ></input>

        <input
          placeholder="*password"
          type="password"
          value={pass}
          onChange={(e) => {
            e.preventDefault();
            setPass(e.target.value);
          }}
        ></input>
        <Link to="/home">
          <button type="submit">Submit</button>
        </Link>
      </form>

      <Link to="/register">Don't have an account? Register here!</Link>
    </div>
  );
};

export default Form;
