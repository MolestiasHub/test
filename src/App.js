import React,
{ useState,
  useEffect
}from "react";
import './App.css';
import Categories from "./categories.js";
import Merch from "./merch.js";
import { Router } from "react-router-dom"
import { createBrowserHistory } from "history";
import Axios from "axios"
import SearchBar from "./Search"

const history = createBrowserHistory();

function App () {
  const [resp, setResp] = useState([]);
  const [merch, setMerch] = useState([]);
  const [categories, setCats] = useState("all");
  const [filter, setFilter] = useState("");

  const onChange = (id) => {
    setCats(id);
  }

  const onChangeSearch = (id) => {
     setFilter(id);
  }
  useEffect (() => {
    Axios.get("http://localhost:8080/merchandise")
      .then (response => setMerch(response.data.map((temp) => {
        if (temp.name.indexOf(filter)>=0){
          return temp;
        }
      })));
  },[filter])

  useEffect(() => {
    if (categories == "all"){
      Axios.get("http://localhost:8080/merchandise")
      .then (response => setMerch(response.data));
    }else{  
      Axios.get("http://localhost:8080/merchandise/",{params: {categories: categories}})
      .then (response => setMerch(response.data));}
  },[categories])

  useEffect(() => {Axios.get("http://localhost:8080/merchandise")
  .then (response => setMerch(response.data))},[])

  useEffect(() => {Axios.get("http://localhost:8080/categories/")
  .then (response => setResp(response.data))},[])
    return (
      <Router history={history}>
        <main>
            <SearchBar func={onChangeSearch}/>
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
