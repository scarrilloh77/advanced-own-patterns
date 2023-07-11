import React, { useState } from 'react';

export const WithStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener({ sincronizeTodos }) {
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

    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
};
