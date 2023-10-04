import React, { useState } from "react";
import "./ToDoForm.css";

const ToDoForm = ({ addItem }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(userInput);
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form__inputs">
      <input className="form__input"
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="What needs to be done?"
      />
      <button className="form__btn">Ok</button>
    </form>
  );
};

export default ToDoForm;