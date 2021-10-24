import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import LoginPage from "./Login/Login";
import Details from "./Details/Details";

export default function Project() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/item/:id" component={Details} />
    </BrowserRouter>
  );
}
