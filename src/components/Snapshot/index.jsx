/* eslint-disable react/jsx-key */

const navigationBlocks = ["Mountain", "Beaches", "Birds", "Food"];
import SearchPhoto from "../../pages/searchPhoto/searchPhoto";
import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Snapshot() {
  const [value, setValue] = useState("");
  let navigate = useNavigate();
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    console.log(searchTerm);
    navigate("/search");
    return <SearchPhoto name={value} />;
  };

  return (
    <div>
      <h1>SnapShot</h1>
      <div className="searchForm">
        <input
          className="search"
          onChange={onChange}
          value={value}
          placeholder="Search..."
        />
        <a
          onClick={() => onSearch(value)}
          type="submit"
          className="Search"
          style={{
            backgroundColor: value.length > 0 ? "#051c33" : "#fcfcfc",
          }}
          id="Search"
        >
          <svg height="32" width="32">
            <path
              d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
              fill="#ffffff"
            ></path>
          </svg>
        </a>
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
