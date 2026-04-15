/* import './App.css';
import Header from "./MyComponents/Header"
import {Footer} from "./MyComponents/Footer"
import {Todos} from "./MyComponents/Todos"
import {AddTodo} from "./MyComponents/AddTodo"
import {About} from "./MyComponents/About"

import { useState, useEffect, useEffectEvent } from 'react';
import { cleanup } from '@testing-library/react';
import TodoState from "./context/TodoState";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
  <>
  <Router>
    <Header title="MyTodosList"/>

    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
          </>
        } 
      />

      <Route path="/about" element={<About />} />
    </Routes>

    <Footer/>
  </Router>
  </>
  );
}

export default App;
 */

import './App.css';
import Header from "./MyComponents/Header"
import { Footer } from "./MyComponents/Footer"
import { Todos } from "./MyComponents/Todos"
import { AddTodo } from "./MyComponents/AddTodo"
import { About } from "./MyComponents/About"

import TodoState from "./context/TodoState";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <TodoState>   {/* ✅ Wrap with context */}
      <Router>
        <Header title="MyTodosList"/>

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <AddTodo />   {/* ❌ no props */}
                <Todos />     {/* ❌ no props */}
              </>
            } 
          />

          <Route path="/about" element={<About />} />
        </Routes>

        <Footer/>
      </Router>
    </TodoState>
  );
}

export default App;