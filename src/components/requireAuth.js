import React from "react";
import { useQuery } from "@apollo/client";
import query from "../queries/CurrentUser";
import { Redirect } from "react-router-dom";

export default function requireAuth(WrappedComponent) {
  return () => {
    const { data, loading, error } = useQuery(query);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;

    if (!data.currentUser) {
      return <Redirect to="/login" />;
    }
    return <WrappedComponent />;
  };
}
