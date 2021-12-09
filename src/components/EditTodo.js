import React from "react";
import { useParams } from "react-router-dom";
const EditTodo = (props) => {
    const {id} = useParams();
    return (
        <div>Editing Todo Id:  {id}</div>
    );
}
export default EditTodo;