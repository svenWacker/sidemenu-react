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
    <nav>
      <ul>
        <li className="logo">
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
        <li className="nav-link">
          <a
            href="#"
            className="nav-item"
            id="themeButton"
            onClick={toggleTheme}
          >
            {theme === "dark" && <FaMoon />}
            {theme === "solar" && <FaSun />}
            {theme === "light" && <FaLightbulb />}
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
