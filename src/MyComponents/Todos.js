import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
  return (
    <div className="container">
        <h3 className='text-center' my-5>Todos List</h3>
        {props.todos.map((todo)=>{
          return <TodoItem todo={todo} onDelete={props.onDelete}/>
        })}

        {/*<TodoItem todo={props.todos[0]}/>*/}

    </div>
  )
}
