import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onToggleComplete }) {
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onToggleComplete={onToggleComplete}
                />
            ))}
        </div>
    );
}

export default TodoList;
