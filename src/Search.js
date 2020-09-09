import React, 
    {useState,
    useEffect
  }from "react";
import Axios from "axios";

function SearchBar (props) {
    const [temp, setTemp] = useState("");
    return (
        <div>
            <input onChange={(e)=>setTemp(e.target.value)} value={temp}></input>
            <input type="submit" onClick={()=>props.func(temp)}></input>
        </div>
    )
}

export default SearchBar;