import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";
import "./style.css";

export default function WelcomePage() {
  const history = useHistory();
  const [credentials, setCredentials] = useState({ login: "", password: "" });
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <form className="login">
        <p className="title">Log in</p>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setCredentials({ ...credentials, login: e.target.value })
          }
        />
        <i className="fa fa-user" />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <i className="fa fa-key" />
        <button onClick={(e) => dispatch(login(e, credentials, history))}>
          <i className="spinner" />
          <span className="state">Log in</span>
        </button>
      </form>
      <p />
    </div>
  );
}
