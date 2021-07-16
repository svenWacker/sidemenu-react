/* eslint-disable no-duplicate-case */
import React, { useState } from "react";
import {
  FaArrowsAltH,
  FaHome,
  FaBattleNet,
  FaDownload,
  FaConnectdevelop,
  FaMoon,
  FaSun,
  FaLightbulb,
} from "react-icons/fa";

export const SideMenu = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    switch (theme) {
      case "dark":
        setTheme("light");
        break;
      case "light":
        setTheme("solar");
        break;
      case "solar":
        setTheme("dark");
        break;
      default:
        break;
    }
  };
  return (
    <nav className={`navbar ${theme}`}>
      <ul>
        <li className="logo nav-link">
          <a href="#" className="nav-link">
            <span className="nav-text logo-text">slider</span>
            <FaArrowsAltH className="fa-primary" />
          </a>
        </li>
        <li className="nav-link">
          <a href="#" className="nav-item">
            <FaHome className="fa-primary" />
            <span className="nav-text">Home</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#" className="nav-item">
            <FaBattleNet className="fa-primary" />
            <span className="nav-text">Team</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#" className="nav-item">
            <FaDownload className="fa-primary" />
            <span className="nav-text">Download</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#" className="nav-item">
            <FaConnectdevelop className="fa-primary" />
            <span className="nav-text">Connect</span>
          </a>
        </li>
        <li className="nav-link" id="themeButton" onClick={toggleTheme}>
          <a href="#" className="nav-item">
            {theme === "dark" && <FaMoon className="fa-primary" />}
            {theme === "solar" && <FaSun className="fa-primary" />}
            {theme === "light" && <FaLightbulb className="fa-primary" />}
            <span className="nav-text">Theme</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

const main = () => {
  return <div>Hello</div>;
};
export default main;
