/* eslint-disable react/jsx-key */

// import { Link } from "react-router-dom";
import { useState } from "react";
const navigationBlocks = ["Mountain", "Beaches", "Birds", "Food"];

import "./style.css";

function Snapshot() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>SnapShot</h1>
      <div className="div">
        <input
          className="search"
          onChange={(e) => setName(e.target.value)}
          placeholder="Search..."
        />
        <button
          type="submit"
          className="Search"
          style={{
            backgroundColor: name.length > 0 ? "#051c33" : "#fcfcfc",
          }}
          id="Search"
        >
          <svg height="32" width="32">
            <path
              d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
              fill="#ffffff"
            ></path>
          </svg>
        </button>
      </div>
      <nav className="nav">
        <ul>
          {navigationBlocks.map((link) => (
            <li>
              <a
                style={{ color: "white", padding: "5px" }}
                className="link"
                href={link === "Mountain" ? "/" : `${link.toLocaleLowerCase()}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Snapshot;
