import './App.css';
import Header from "./MyComponents/Header"
import {Footer} from "./MyComponents/Footer"
import {Todos} from "./MyComponents/Todos"
import {AddTodo} from "./MyComponents/AddTodo"
import { useState } from 'react';


function App() {
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "task1",
      desc: "need to do task1"
    },
    {
      sno: 2,
      title: "task2",
      desc: "need to do task1"
    },
    {
      sno: 3,
      title: "task3",
      desc: "need to do task1"
    }

]);


  return (
    <>
      <Header title="MyTodosList"/>
      <AddTodo/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
