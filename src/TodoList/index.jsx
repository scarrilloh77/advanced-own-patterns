import React from 'react';
import './TodoList.css';

export const TodoList = ({
  error,
  loading,
  searchedTodos,
  searchValue,
  totalTodos,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchResults,
  children,
  render,
}) => {
  const renderFunc = children || render;
  return (
    <section className="TodoList-container">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !totalTodos && !searchValue && onEmptyTodos()}
      {searchValue &&
        !searchedTodos.length &&
        onEmptySearchResults(searchValue)}
      {!loading && !error && searchedTodos.map(renderFunc)}
    </section>
  );
};
