import React from "react";
import { Link } from "react-router-dom";
import query from "../queries/CurrentUser";
import { useQuery } from "@apollo/client";

const Header = () => {
  const { data, loading } = useQuery(query);
  if (loading) return <div></div>;
  return (
    <div className="header">
      <div className="app-name">
        <Link to="/">TO-DO APP</Link>
      </div>
      <div className="menu-items">
        <ul>
          {data.currentUser ? (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
