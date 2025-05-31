import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { ToDoItem } from '../types';

const App: React.FC = () => {
    const [todos, setTodos] = useState<ToDoItem[]>([]);
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

    const addTodo = (text: string) => {
        const newTodo: ToDoItem = {
            id: Date.now().toString(),
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id.toString() ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <div>
            <h1>Todo App</h1>
            <TodoInput addTodo={addTodo} />
            <FilterButtons currentFilter={filter} setFilter={setFilter} />
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
        </div>
    );
};

export default App;