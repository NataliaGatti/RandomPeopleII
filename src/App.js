import './App.css';
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React, {useState} from 'react';



function App() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <Header query={query} setQuery={setQuery}></Header>
      <Home query={query}></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
