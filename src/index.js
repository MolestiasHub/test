import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import Redux from "react-redux";
import { Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { createBrowserHistory } from "history";

const history = createBrowserHistory();


function App () {
  const [resp, setResp] = useState([]);
  const [merch, setMerch] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8080/categories/")
    .then (response => setResp(response.data))
  },[]);
  useEffect(() => {
    Axios.get("http://localhost:8080/merchandise")
    .then (response => setMerch(response.data));
  },[]);

  let onChange = (id) => {
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
            <Categories items={resp} func={onChange}/>
            <Merch items={merch}/>
        </main>
    )
}

const roots = {
  id2 : "http://localhost:8080/merchandise/2",
  id3 : "http://localhost:8080/merchandise/3",
  id4 : "http://localhost:8080/merchandise/4",
  id5 : "http://localhost:8080/merchandise/5",
}

const Merch = React.memo(function Merch (props) {
  return (
    <ul style = {{color: "white", listStyleType: "none", fontSize: "15px"}} className = "a">
      {props.items.map(item => 
        <Link to={roots["id"+item.id]}>
          <li key={item.id} >{item.name}</li>
        </Link>
      )}
    </ul>
  )
});


const Categories = React.memo(function Categories (props) {
  return (
    <ul style = {{color: "white", listStyleType: "none", fontSize: "20px"}} className = "a">
      <li onClick={() => {props.func("all")}}>all</li>
      {props.items.map(item => <li key={item.id} onClick={() => {props.func(item.id)}}>{item.name}</li>)}
    </ul>
  )
});

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
    document.getElementById("root")
)