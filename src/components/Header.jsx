import React from "react";
import Navbar from "./Navbar";

const Header = ({ query, setQuery }) => {
  return (
    <header className="header">
      <div>Header</div>
      <Navbar query={query} setQuery={setQuery}></Navbar>
    </header>
  );
};

export default Header;