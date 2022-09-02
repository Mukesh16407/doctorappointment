import React from "react";
import { Navigate } from "react-router-dom";

export const PublicRoute=(props)=> {
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return props.children;
  }
}

