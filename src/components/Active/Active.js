import "./Active.css";
import ToDo from "../ToDo/ToDo";
import ToDoForm from "../ToDoForm/ToDoForm";

function Active({ todos, removeItem, addItem }) {
  return (
    <>
      <main className="main">
      <ToDoForm />
        <section className="main__contaner">
          {/* <ul className="main__list">
            {todos.map((todo) => {
              return (
                <ToDo
                  todo={todo}
                  key={todo.id}
                  removeItem={removeItem}
                />
              );
            })}
          </ul> */}
        </section>
      </main>
    </>
  );
}

export default Active;
