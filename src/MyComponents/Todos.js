import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
    let myStyle={
      minHeight: "70vh"
    }
  
  return (
    <div className="container" style={myStyle}>

        <h3 className='my-5'>Todos List</h3>
        {props.todos.length===0? "No todos to display":
        props.todos.map((todo)=>{
            return <TodoItem todo={todo} onDelete={props.onDelete}/>
        })}

        {/*<TodoItem todo={props.todos[0]}/>*/}

    </div>
  )
}
