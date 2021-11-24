import React from "react";
import { useQuery } from "@apollo/client";
import query from "../queries/CurrentUser";
import { useHistory } from "react-router-dom";

export default function requireAuth(WrappedComponent) {
  return () => {
    const { data, loading, error } = useQuery(query);
    const history = useHistory();
    if(loading) return <div>Loading...</div>;
    if(data.currentUser && !data.currentUser) {
        history.push("/login");
    }
    return <WrappedComponent />;
  };
}