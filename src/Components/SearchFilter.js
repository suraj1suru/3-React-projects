import React from "react";
import { useState } from "react";
import JSONDATA from "../MOCK_DATA.json";

function SearchFilter() {
  const [user, userName] = useState("");
  console.log(user);
  return (
    <div>
      <input
        type="text"
        value={user}
        onChange={(e) => userName(e.target.value)}
      />
      {JSONDATA.filter((val)=> {
        if(user === ""){
            return val;
        }else if(val.first_name.toLowerCase().includes(user.toLowerCase())){
           return val;
        }
      }).map((val, key) => {
        return (
          <div>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchFilter;
