/* eslint-disable no-duplicate-case */
import React, { useState } from "react";
import {
  FaArrowsAltH,
  FaHome,
  FaBattleNet,
  FaDownload,
  FaConnectdevelop,
} from "react-icons/fa";

export const SideMenu = () => {
  // const SideMenu = () => {
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
            <FaArrowsAltH />
          </a>
        </li>
        <li className="nav-link">
          <a href="#" className="nav-item">
            <FaHome />
            <span className="nav-text">Home</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#" className="nav-item">
            <FaBattleNet />
            <span className="nav-text">Team</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#" className="nav-item">
            <FaDownload />
            <span className="nav-text">Download</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#" className="nav-item">
            <FaConnectdevelop />
            <span className="nav-text">Connect</span>
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
