import {React,
  useState
}from "react";
import './App.css';
import Categories from "./categories.js";
import Merch from "./merch.js";
import { Router } from "react-router-dom"
import { createBrowserHistory } from "history";
import Axios from "axios"

const history = createBrowserHistory();

function App () {
  const [resp, setResp] = useState([]);
  const [merch, setMerch] = useState([]);

  const onChange = (id) => {
    if (id == "all"){
      Axios.get("http://localhost:8080/merchandise")
      .then (response => setMerch(response.data));
    }else{  
      Axios.get("http://localhost:8080/merchandise/?category="+id)
      .then (response => setMerch(response.data));}
  }

  () => {Axios.get("http://localhost:8080/merchandise")
  .then (response => setMerch(response.data))}

  () => {Axios.get("http://localhost:8080/categories/")
  .then (response => setResp(response.data))}

    return (
      <Router>
        <main>
            <h1 style = {{color : "white"}}>Ello</h1>
            <Categories 
              items={resp} 
              onChange={onChange}/>
            <Merch items={merch}/>
        </main>
      </Router>
    )
}

export default App;
