import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);

  return(
    <div className="container">
      <Header />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;