import React from 'react';
import TodoItem from './TodoItem';
import { ToDoItem } from '../types';

interface TodoListProps {
    todos: ToDoItem[];
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    item={todo} 
                    toggleTodo={toggleTodo} 
                />
            ))}
        </ul>
    );
};

export default TodoList;