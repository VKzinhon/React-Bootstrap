import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importante: Importar o CSS do Bootstrap AQUI para carregar os estilos de todo o site
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);