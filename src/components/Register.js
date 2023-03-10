import React, { useEffect, useState } from "react";

import { BASE_URL } from "./posts";

export const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const registerFunction = async (event) => {
    event.preventDefault()
    console.log('register')
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
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
      // You can log ▲▲▲ the result
      // here ▼▼▼ to view the json object before returning it
      console.log(result)
      return result
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
    if (event.target.placeholder === "confirmPassword") {
      setConfirmPassword(event.target.value)
    }
  }

  return (

    <div>
      <form id="registerForm">
        <h2>Register</h2>
        <label>
          <input type="text" value={username} placeholder="username" onChange={handleChange}></input>
        </label>
        <label>
          <input type="password" value={password} placeholder="password" onChange={handleChange}></input>
        </label>
        <label>
          <input type="password" value={confirmPassword} placeholder="confirmPassword" onChange={handleChange}></input></label>
        <button type="submit" onClick={registerFunction}>submit</button>
      </form>
    </div>
  )

}