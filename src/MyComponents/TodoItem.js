import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";


export const TodoItem = ({todo}) => {
  const { onDelete } = useContext(TodoContext);
  return (
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className='btn btn-danger' onClick={ ()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
