import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, setTodos }) { 
  const [input, setInput] = useState("");

  //Add a new todo item
  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos([
        ...todos,
        {
            id: Date.now(),
            text: input,
            completed: false,
        },
    ]);
    setTodos([...todos, newTodo]);
    setInput("");
  };

  //Toggle completion


  const toggleComplete = (id) => {
    setTodos(
        todos.map((todo) => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    );
  };

//Delete todo 
  const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};

//Edit todo
const editTodo = (id, newText) => {
  setTodos(
      todos.map((todo) =>
            todo.id === id ? { ...todo, text: newText } : todo
        )
    );
};



  return (
    <div className="todo-container">
      {/* Input Section */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* Todo List */}
      <div className="todo-list">
        {todos.length === 0 && <p className="empty">No tasks added yet.</p>}

        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
