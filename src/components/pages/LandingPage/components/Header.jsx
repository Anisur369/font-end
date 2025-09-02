import { useNavigate } from "react-router-dom";
import Logo from './../../../../assets/logo.svg';
import React from 'react';
import Login from './../../Auth/Login';


function Header() {
  const isAuthenticated = false;
  const user = { name: "John Doe", role: "Admin" };
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   // Perform logout logic
  //   navigate("/login");
  // };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Leaf Icon" />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a onClick={() => navigate("/job-board")}>Job Board</a>
            </li>
            <li>
              <a onClick={() => navigate("/categories")}>Categories</a>
            </li>
            <li>
              <a onClick={() => navigate(isAuthenticated && user.role === "Tutor" ? "/tutor-hub" : "/login")}>Tutor Hub</a>
            </li>
            <li>
              <a onClick={() => navigate("/language")}>
                {" "}
                <span className="globe">🌐</span> English
              </a>
            </li>
          </ul>
          <a onClick={
            () => navigate("/login")
          } className="login-btn">Login</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;