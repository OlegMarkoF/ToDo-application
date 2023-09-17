import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ToDoList from "../ToDoList/ToDoList";

function Main() {
  return (
    <>
      <Header />
      <main className="main">
          <ToDoList/>
      </main>
      <Footer/>
    </>
  );
}

export default Main;
