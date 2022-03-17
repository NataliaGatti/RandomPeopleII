import React from "react";
import personas from "../personas/personas.json";
import CardList from "./CardList";

const Home = () => {
  return (
    <div className="home">
      <CardList personas={personas} />
    </div>
  );
};

export default Home;