import React from 'react';
import './TodoCounter.css';

export const TodoCounter = ({ totalTodos, completedTodos, loading }) => {
  return (
    <h2 className={`TodoCounter ${loading && `TodoCounter--loading`}`}>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
};
