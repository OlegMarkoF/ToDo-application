import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";

import All from "../All/All";
import Completed from "../Completed/Completed";
import Active from "../Active/Active";
import NotFound from "../NotFound/NotFound";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [statusTodos, setStatusTodos] = useState(todos);

  useEffect(() => {
    setTodos(todos)
    setStatusTodos(todos)
  }, [todos])

  const addItem = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  function todoFilter(complete) {
    if (complete === "all") {
      setStatusTodos(todos)
    } else {
      let newTodo = [...todos].filter((todo) => todo.complete === complete);
      setStatusTodos(newTodo)
    }
  }


  const removeItem = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : { ...task }
      ),
    ]);
  };

  const handleClear = () => {
    localStorage.removeItem("todos");
    let newTodo = [...todos].filter((todo) => todo.complete === false);
    setTodos(newTodo);
    // setStatusTodos([]);
    // setTodos([]);
  };

  return (
    <main className="page">
      <section>
        <Header />
        <Routes>
          <Route path="/" element={<All todos={statusTodos} onDelete={removeItem} onClick={handleToggle} addItem={addItem}/>} />
          <Route path="/Completed" element={<Completed/>} />
          <Route path="/Active" element={<Active/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer handleClear={handleClear} todos={statusTodos} todoFilter={todoFilter} />
      </section>
    </main>
  );
}

export default App;
