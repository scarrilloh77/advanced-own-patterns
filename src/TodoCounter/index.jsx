import React from 'react';
import './TodoCounter.css';

export const TodoCounter = ({ totalTodos, completedTodos }) => {
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
};
