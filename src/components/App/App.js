import { Route, Routes } from "react-router-dom";
import "./App.css";

import Main from "../Main/Main";

function App() {

  return (
    <main className="page">
          <section>
            <Routes>
              <Route element={<Main/>}/>
            </Routes>
          </section>
    </main>
  );
}

export default App;