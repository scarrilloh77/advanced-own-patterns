import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// function App({ saludo, name }) {
//   return (
//     <h1>
//       {saludo}, {name}!
//     </h1>
//   );
// }

// function WithSaludo(WrappedComponent) {
//   return function WrappedComponentWithSaludo(saludo) {
//     return function RealComponent(props) {
//       return (
//         <Fragment>
//           <WrappedComponent {...props} saludo={saludo} />
//           <p>Estamos acompañando al WrappedComponent</p>
//         </Fragment>
//       );
//     };
//   };
// }

// const AppWithSaludo = WithSaludo(App)('Que pasa');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppWithSaludo name="Sebas" /> */}
    <App />
  </React.StrictMode>
);
