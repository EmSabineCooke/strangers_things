import React, { useState } from "react";
import { BASE_URL } from "./posts";
import { useNavigate } from "react-router-dom";


export const Login = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const loginFunction = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      });
      const result = await response.json();

      localStorage.setItem("token", result.data.token);
      if (localStorage.length > 0) {
        navigate("/");
      };
      return result;

    } catch (err) {
      console.error(err);
    }

  }



  const handleChange = (event) => {
    if (event.target.placeholder === "username") {
      setUsername(event.target.value)
    }
    if (event.target.placeholder === "password") {
      setPassword(event.target.value)
    }
  }

  return (
    <div>
      <form id="loginForm">
        <h2>login</h2>
        <label>Username
          <input type="text" value={username} placeholder="username" onChange={handleChange}></input>
        </label>
        <label>
          <input type="password" value={password} placeholder="password" onChange={handleChange}></input>
        </label>
        <button type="submit" onClick={loginFunction}>submit</button>
      </form>
    </div>
  )




}