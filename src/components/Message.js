import React, { useEffect } from "react";
import { BASE_URL } from "./posts";


export const Messages = () => {
  const TOKEN = localStorage.getItem('token')

  const postMessage = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts/5e8929ddd439160017553e06/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          message: {
            content: content
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

}