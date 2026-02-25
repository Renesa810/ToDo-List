import './App.css';
import Header from "./MyComponents/Header"
import {Footer} from "./MyComponents/Footer"
import {Todos} from "./MyComponents/Todos"


function App() {
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo", todo);
  }

  let todos=[
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

]


  return (
    <>
      <Header title="MyTodosList"/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
