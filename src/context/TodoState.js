import React, { useState, useEffect } from "react";
import { TodoContext } from "./TodoContext";

const TodoState = (props) => {

  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [state, setState] = useState({
    past: [],
    present: initTodo,
    future: []
  });

  const addTodo = (title, desc) => {

    const newTodo = {
      sno: state.present.length + 1,
      title,
      desc
    };

    setState({
      past: [...state.past, state.present],
      present: [...state.present, newTodo],
      future: []
    });
  };

  const onDelete = (todo) => {
    const updated = state.present.filter((t) => t !== todo);

    setState({
      past: [...state.past, state.present],
      present: updated,
      future: []
    });
  };

  const undo = () => {
    if (state.past.length === 0) return;

    const previous = state.past[state.past.length - 1];

    setState({
      past: state.past.slice(0, -1),
      present: previous,
      future: [state.present, ...state.future]
    });
  };

  const redo = () => {
    if (state.future.length === 0) return;

    const next = state.future[0];

    setState({
      past: [...state.past, state.present],
      present: next,
      future: state.future.slice(1)
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.present));
  }, [state.present]);

  return (
    <TodoContext.Provider value={{
      todos: state.present,
      addTodo,
      onDelete,
      undo,
      redo
    }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;