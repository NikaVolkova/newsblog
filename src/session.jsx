import React from "react";
import username from "src/components/UserName";
export const startSession = (username) => {
    sessionStorage.setItem("email", username.email);
    sessionStorage.setItem("accessToken", username.accessToken);
  }
 
  export const getSession= () => {
    return {
      email: sessionStorage.getItem("email", username.email),
      accessToken: sessionStorage.getItem("accessToken"),
    }
  }
  
  export const endSession = () => {
    sessionStorage.clear();
  }
  
  export const isLoggedIn = () => {
    return getSession().accessToken;
  }