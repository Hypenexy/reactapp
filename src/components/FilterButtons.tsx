import React from 'react';

interface FilterButtonsProps {
    currentFilter: 'all' | 'active' | 'completed';
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ currentFilter, setFilter }) => {
    return (
        <div>
            <button 
                onClick={() => setFilter('all')} 
                className={currentFilter === 'all' ? 'active' : ''}
            >
                All
            </button>
            <button 
                onClick={() => setFilter('active')} 
                className={currentFilter === 'active' ? 'active' : ''}
            >
                Active
            </button>
            <button 
                onClick={() => setFilter('completed')} 
                className={currentFilter === 'completed' ? 'active' : ''}
            >
                Completed
            </button>
        </div>
    );
};

export default FilterButtons;