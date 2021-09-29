import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div classname="Menu_style">
        <NavLink exect activeClassName="active_class" to="/About us"></NavLink>
        <NavLink exect activeClassName="active_class" to="/ Services">
          Services
        </NavLink>
        <NavLink exect activeClassName="active_class" to="/Search">
          Search
        </NavLink>
        <NavLink exect activeClassName="active_class" to="/User">
          User
        </NavLink>
        <NavLink exect activeClassName="active_class" to="/ Contect us">
          Contect us
        </NavLink>
      </div>
    </>
  );
};
export default Menu;
