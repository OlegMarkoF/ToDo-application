import React from "react";
import "./Footer.css";

function Footer({ todos, handleClear, todoFilter }) {

  return (
    <footer className="footer">
      <section className="footer__contaner">
        <p>{todos.length} items left</p>
        <div className="footer__buttons">
          <button className="footer__menu" onClick={() => todoFilter("all")}>
            All
          </button>
          <button className="footer__menu" onClick={() => todoFilter(false)}>
            Active
          </button>
          <button
            className="footer__menu"
            onClick={ () => todoFilter(true)}
          >
            Completed
          </button>
        </div>
        <button className="footer__menu" onClick={handleClear}>Clear completed</button>
      </section>
    </footer>
  );
}

export default Footer;
