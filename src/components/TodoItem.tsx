import React from 'react';
import { ToDoItem } from '../types';

interface TodoItemProps {
    item: ToDoItem;
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, toggleTodo }) => {
    const handleToggle = () => {
        toggleTodo(Number(item.id));
    };

    return (
        <div
            onClick={handleToggle}
            style={{
                textDecoration: item.completed ? 'line-through' : 'none',
                cursor: 'pointer'
            }}
        >
            {item.text}
        </div>
    );
};

export default TodoItem;