import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="app-name">TODO APP</div>
      <div className="menu-items">
        <ul>
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
