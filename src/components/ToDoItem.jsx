import { useState } from "react";

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const saveEdit = () => {
    if (updatedText.trim() === "") return;
    editTodo(todo.id, updatedText);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <input
          className="edit-input"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      ) : (
        <span className={todo.completed ? "completed" : ""}>
          {todo.text}
        </span>
      )}
      {isEditing ? (
        <button className="save-btn" onClick={saveEdit}>
          💾
        </button>
      ) : (
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          ✏️
        </button>
      )}

      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
}

export default ToDoItem;
