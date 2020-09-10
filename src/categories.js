import React, 
    {useState,
    useEffect
  }from "react";
import Axios from "axios";


function Categories (props) {

    return (
        <ul style = {{color: "white", listStyleType: "none", fontSize: "20px"}} className = "flexcat">
          <li onClick={() => {props.onChange("all")}}>all</li>
          {props.items.map(item => <li 
                key={item.id} 
                onClick={() => {props.onChange(item.id)}}
            >{item.name}</li>)}
        </ul>
    )
}

export default Categories;
