import React from 'react';
import './TodoList.css';

export const TodoList = ({
  error,
  loading,
  searchedTodos,
  onError,
  onLoading,
  onEmptyTodos,
  render,
}) => {
  return (
    <section className="TodoList-container">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !searchedTodos?.length && onEmptyTodos()}
      {searchedTodos.map(render)}
    </section>
  );
};
