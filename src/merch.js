import {React}from "react";
import { Link } from "react-router-dom"
const roots = "http://localhost:8080/merchandise/"

function Merch (props) {

        return (
            <ul style = {{color: "white", listStyleType: "none", fontSize: "15px"}} className = "a">
              {props.items.map(item => 
                <Link to={roots+item.id}>
                  <li key={item.id} >{item.name}</li>
                </Link>
              )}
            </ul>
        )
}

export default Merch;