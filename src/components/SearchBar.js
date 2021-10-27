import React from "react";
import data from "../data/babyNamesData.json"

const SearchBar = (props) => {
  return (
    <div className="SearchInput">
      <input type="text" placeholder="Search.."/>
      <div className="SearchResult">
      {data.map((val, key) => {
                return <div> {val.name}</div>
            })}
            </div>
      </div>
    
  );
}
export default SearchBar;
