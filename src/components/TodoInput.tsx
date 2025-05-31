import React, { useState } from 'react';

interface TodoInputProps {
    addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleAddClick = () => {
        if (inputValue.trim()) {
            addTodo(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <div className="todo-input">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddClick}>Add</button>
        </div>
    );
};

export default TodoInput;