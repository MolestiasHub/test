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
                id={item.id}
                key={item.id} 
                onClick={() => {props.onChange(item.id)
                    let temp = document.getElementById(item.id);
                    temp.parentElement.style.background = "none"
                    if (temp.style.background === "none"){
                        temp.style.background = "white";
                        temp.style.color = "black";
                    } else {
                        temp.style.background = "none";
                        temp.style.color = "white";
                    }
                }}
            >{item.name}</li>)}
        </ul>
    )
}

export default Categories;
