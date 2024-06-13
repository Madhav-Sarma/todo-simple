import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, { id: todos.length + 1, text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const handleTodoDelete = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const handleToggleComplete = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <div className="App">
            <h1>Todo App</h1>
            <div className="todo-form">
                <input
                    type="text"
                    placeholder="Enter your task..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={handleAddTodo}>Add Todo</button>
            </div>
            <TodoList todos={todos} onDelete={handleTodoDelete} onToggleComplete={handleToggleComplete} />
        </div>
    );
}

export default App;
