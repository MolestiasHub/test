import React, 
    {useState,
    useEffect
  }from "react";
import Axios from "axios";

function SearchBar (props) {
    return (
        <div style={{marginRight : "15px"}}>
            <input onChange={(e)=>{
                if (e.target.value == null){
                    props.setTemp("")
                }else{
                    props.setTemp(e.target.value)
                }
            }} 
            value={props.value}></input>
            <input type="submit" onClick={()=>{
                props.func(props.value);
                props.setTemp("");
                }}>  
            </input>
            <button onClick={() => {
                props.setCats("");
                props.setTemp("");
                props.setFilter("")
                }}>Reset</button>
        </div>
    )
}

export default SearchBar;