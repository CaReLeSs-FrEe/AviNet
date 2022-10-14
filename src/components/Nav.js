import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Nav() {
  const { isLoggedIn, user } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="./">
          AviNet
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="./Home">
                Home
              </Link>
            </li>
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="./Signup">
                    SignUp
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./Login">
                    LogIn
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
