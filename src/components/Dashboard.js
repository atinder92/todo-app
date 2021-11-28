import React from "react";
import query from "../queries/CurrentUser";
import { useQuery, useMutation } from "@apollo/client";
import CREATE_TODO from "../mutations/CreateTodo";
import TodoManageForm from "./TodoManageForm";

const Dashboard = () => {
  const {
    data: uData,
    loading: loadingCurrentUser,
    error: currentUserError,
  } = useQuery(query);
  const [createTodo] = useMutation(CREATE_TODO);
  if (loadingCurrentUser) return <div>Loading...</div>;
  if (currentUserError) return <div>Error...</div>;
  const formSubmitHandler = ({title, description, dueDate}) => {
    dueDate = new Date(dueDate);
    createTodo({variables: {
      title,
      description,
      createdBy: uData.currentUser.id,
      dueDate
    }, refetchQueries: [{query}]})
  }
  return (
    <div>
      <TodoManageForm onSubmit={formSubmitHandler}/>
    </div>
  );
};

export default Dashboard;
