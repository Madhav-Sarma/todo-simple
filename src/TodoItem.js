import React from 'react';

function TodoItem({ todo, onDelete, onToggleComplete }) {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleComplete(todo.id)}
            />
            <div className="box"><span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            <button className="delete-button" onClick={() => onDelete(todo.id)}>Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;
