import React, { useState } from "react";
import "./styles.css";
import data from "./data"
import Menu from "./Menu";
const App = () => {
  const [fil, handleFilter] = useState("");
  const filteredData = fil
    ? data.filter((e) => e.category.toLowerCase() === fil.toLowerCase())
    : data;

  return (
    <div className="container" id="main">
      <h1 className="heading">Our Menu</h1>
      <div className="underLine"></div>
      <ul className="menu-filter-list">
        <li className="filter"  onClick={() => handleFilter("")}>
          All
        </li>
        <li className="filter" data-test-id="menu-item-breakfast" id="filter-btn-1"  onClick={() => handleFilter("BreakFast")}>
          BreakFast
        </li>
        
        <li className="filter"  data-test-id="menu-item-shakes" id="filter-btn-2" onClick={() => handleFilter("Shakes")}>
          Shakes
        </li>
        <li className="filter" data-test-id="menu-item-lunch" id="filter-btn-3"  onClick={() => handleFilter("Lunch")}>
          Lunch
        </li>
      </ul>
      <Menu data={filteredData} />
    </div>
  );
};
export default App;
