import React, { Fragment } from 'react';
import { useStorageListener } from './useStorageListener';

export const ChangeAlert = ({ sincronizeTodos }) => {
  const { show, toggleShow } = useStorageListener({ sincronizeTodos });
  if (show)
    return (
      <Fragment>
        <p>Hubo cambios!</p>
        <button onClick={() => toggleShow()}>Volver a cargar</button>
      </Fragment>
    );
  return null;
};
