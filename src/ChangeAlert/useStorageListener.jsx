import React, { useState } from 'react';

export const useStorageListener = ({ sincronizeTodos }) => {
  const [storageChange, setStorageChange] = useState(false);

  window.addEventListener('storage', (change) => {
    if (change.key === 'TODOS_V1') {
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    sincronizeTodos();
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow,
  };
};
