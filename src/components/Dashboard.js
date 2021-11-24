import React from "react";
import query from "../queries/CurrentUser";
import { useQuery } from "@apollo/client";
const Dashboard = () => {
  const { data, loading, error } = useQuery(query);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <div>
      <p>
        <b>Hello User: {data.currentUser.email}</b>
      </p>
    </div>
  );
};

export default Dashboard;
