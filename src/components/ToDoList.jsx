import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, setTodos }) { 
  const [input, setInput] = useState("");

  return (
    <div className="input-section">
        <input
            type="text"
            value={input}
            placeholder="Enter a task..."
            onChange={(e) => setInput(e.target.value)}
        />
        <button>Add task</button>
    

        {todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} />
        ))}
    </div>
  );
}

export default ToDoList;
