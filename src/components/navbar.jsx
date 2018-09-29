import React from "react";

// Stateless functional component

const Navbar = ({totalCounters}) => { // Object destructuring
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href={window.location.href}>
        {totalCounters} Counters active
      </a>
    </nav>
  );
};

export default Navbar;
