import React from "react";

const Navbar = ({query, setQuery}) => {
   return (
      <input
        type="text"
        className="input"
        placeholder="Ingresa tu búsqueda aquí"
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
      />
  );
}

export default Navbar;
