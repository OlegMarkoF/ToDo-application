import "./All.css";
import React, { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDo from "../ToDo/ToDo";
import { useLocation } from "react-router-dom";

function All({ todos, onDelete, onClick, addItem }) {
  
  const location = useLocation();

  function renderTodos() {
    if (location.pathname === "/") {
      return (
        todos.reverse().map((todo) => {
          return (
            <ToDo
              todo={todo}
              key={todo.id}
              onClick={onClick}
              onDelete={onDelete}
            />
          );
        })
      )
    } 
  }

  return (
    <main className="main">
    <ToDoForm addItem={addItem} />
      <section className="main__contaner">
        <ul className="main__list">
          {renderTodos()}
        </ul>
      </section>
    </main>
  );
}

export default All;
