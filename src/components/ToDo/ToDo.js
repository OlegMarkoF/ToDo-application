import "./ToDo.css";
import React from "react";
import trash from "../../images/1145530.png";

function ToDo({ todo, onClick, onDelete }) {
 
  return (
    <li className="main__item" key={todo.id + todo.key}>
      <div className="main__box">
      <input
        type="checkbox"
        className="main__checkbox"
        id="item"
        name="item"
        value="yes"
        onClick={() => onClick(todo.id)}
      />
      <label 
      for="item"
      className={todo.complete ? "item-text strike" : "item-text"}
      >
      <p className="item-text">{todo.task}</p></label>
      </div>
      <button className="button__delete" type="button" onClick={() => onDelete(todo.id)}>
        <img alt="корзина" src={trash} className="main__urn"/>
      </button>
    </li>
  );
}

export default ToDo;
