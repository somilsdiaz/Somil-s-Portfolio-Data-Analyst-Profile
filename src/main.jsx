import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/routes';
import './index.css';


const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento con ID 'root'.");
}
