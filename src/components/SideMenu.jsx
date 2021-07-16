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
        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="cat"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-cat fa-w-16 fa-9x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
            <span className="link-text">Cats</span>
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
