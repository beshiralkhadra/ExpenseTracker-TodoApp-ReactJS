import React, { useState } from "react";
import { Link } from "react-router-dom";
import Api from "../api/Api";
import "./header.css";
import { useGlobalContext } from "../../context/context";

function Header({ submitted, setSubmitted, logged, setLogged }) {
  const { state } = useGlobalContext();
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-nav">
        <Link to="/">
          <img src="/money.png" alt="logo" />
        </Link>
        <button className="burger-menu" onClick={() => setShowNav(!showNav)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div className="nav-options">
        <ul id={showNav ? "hidden" : null}>
          <li>
            {" "}
            <Link to="/expense">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </div>

      <div className="register-btn">
        <ul>
          <li>
            {!state.logged && (
              <Link to="/login">
                <button className="login-btn-header">Login</button>
              </Link>
            )}
          </li>
          <li>
            {state.logged || state.submitted ? (
              <Link to="/login">
                <button
                  className="logout-btn-header"
                  onClick={() => {
                    setSubmitted(false);
                    setLogged(false);
                  }}
                >
                  Logout
                </button>
              </Link>
            ) : null}
          </li>
          <li>
            {!state.submitted && (
              <Link to="/">
                {" "}
                <button className="signup-btn-header">Signup</button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
