import React from "react";
import { Link } from "react-router-dom"
const roots = "http://localhost:8080/merchandise/"

function Merch (props) {

        return (
            <div style = {{color: "white", listStyleType: "none", fontSize: "15px"}} className = "merch">
              {props.items.map(item => 
                <div className="item">
                  <Link to={roots+item.id}>
                    <h3>{item.name}</h3>        
                  </Link>
                  <h2>{item.price}</h2>
                </div> 
              )}
            </div>
        )
}

export default Merch;