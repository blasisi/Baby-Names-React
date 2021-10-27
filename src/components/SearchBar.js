import React, {useState} from "react";

import data from "../data/babyNamesData.json"

const SearchBar = () => {
   const [baby, setBaby]= useState(data)
   function searchBaby (event){
const filterArr = data.filter((babyEle) => babyEle.name.toLowerCase().includes(event.target.value.toLowerCase()))
setBaby(filterArr)
// create state and put the data as initial value
//map the data and creat the baby names
//add onchnage to our input and call a searchbaby function
//inside the search baby funciton, allwo us to check if it working by console.log
//created the baby names if they are including the value , filter it 
//convert to the lowercase also value to lowercase
// asign data to filter arr bacause filter data will return new array
//call the setbaby function with filter arar, the setbaby will updata our baby, after our state changes our render
//key is is used when creating element more than one, you should pass key 
   }
  return (
    <div className="SearchInput">
      <input type="text" onChange={searchBaby} placeholder="Search.."/>
      <div className="SearchResult">
      {baby.map((val, index) => {
                return <div className={val.sex} key={index}>{val.name}</div>
            })}
            </div>
      </div>
    
  );
}
export default SearchBar;
