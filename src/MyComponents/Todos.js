// import React, { useContext } from "react";
// import {TodoItem} from "./TodoItem";
// import { TodoContext } from "../context/TodoContext";

// export const Todos = (props) => {
//   const { todos, onDelete } = useContext(TodoContext);


//     let myStyle={
//       minHeight: "70vh"
//     }
  
//   return (
//     <div className="container" style={myStyle}>

//         <h3 className='my-5'>Todos List</h3>
//         {props.todos.length===0? "No todos to display":
//         props.todos.map((todo)=>{
//             return (<TodoItem todo={todo} onDelete={props.onDelete}/>)
//         })}

//         {/*<TodoItem todo={props.todos[0]}/>*/}

//     </div>
//   )
// }


import React, { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

export const Todos = () => {

  const { todos, onDelete } = useContext(TodoContext);

  return (
    <div className="container" style={{minHeight: "70vh"}}>
      <h3 className='my-5'>Todos List</h3>

      {todos.length === 0 ? "No todos to display" : todos.map((todo) => (
            <TodoItem key={todo.sno} todo={todo} />
          ))}
    </div>
  );
}