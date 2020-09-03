import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import Redux from "react-redux";

function App () {
  const [resp, setResp] = useState([]);
  const [merch, setMerch] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8080/categories/")
    .then (response => setResp(response.data));
    Axios.get("http://localhost:8080/merchandise")
    .then (response => setMerch(response.data));
  },[]);

  let cating = (id) => {
    if (id == "all"){
      Axios.get("http://localhost:8080/merchandise")
      .then (response => setMerch(response.data));
    }else{  
      Axios.get("http://localhost:8080/merchandise/?category="+id)
      .then (response => setMerch(response.data));}
  }


    return (
        <main>
            <h1 style = {{color : "white"}}>Ello</h1>
            <Categories items={resp} func={cating}/>
            <Merch items={merch}/>
        </main>
    )
}

const Merch = React.memo(function Merch (props) {
  return (
    <ul style = {{color: "white", listStyleType: "none", fontSize: "15px"}} className = "a" valu>
      {props.items.map(item => <li key={item.id} >{item.name}</li>)}
    </ul>
  )
});


const Categories = React.memo(function Categories (props) {

  return (
    <ul style = {{color: "white", listStyleType: "none", fontSize: "20px"}} className = "a">
      <li onClick={props.func("all")}>all</li>
      {props.items.map(item => <li key={item.id} onClick={props.func}>{item.name}</li>)}
    </ul>
  )
});

ReactDOM.render(
    <App />,
    document.getElementById("root")
)