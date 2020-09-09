import React, 
    {useState,
    useEffect
  }from "react";
import Axios from "axios";

function SearchBar (props) {
    let a = "";
    return (
        <div>
            <input onChange={(e)=>a=e.target.value}></input>
            <input type="submit" onClick={()=>props.func(a)}></input>
        </div>
    )
}

export default SearchBar;