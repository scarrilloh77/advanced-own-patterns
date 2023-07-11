import React, { Fragment } from 'react';
import { WithStorageListener } from './WithStorageListerner';

const ChangeAlert = ({ show, toggleShow }) => {
  if (show)
    return (
      <Fragment>
        <p>Hubo cambios!</p>
        <button onClick={() => toggleShow()}>Volver a cargar</button>
      </Fragment>
    );
  return null;
};

export const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert);
