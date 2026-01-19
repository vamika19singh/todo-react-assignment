

function ToDoItem({ todo }) {
    return (
        <div className="todo-item">
            <span>{todo.text}</span>
        </div>
    );
}

export default ToDoItem;