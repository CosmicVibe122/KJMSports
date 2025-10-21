import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // <-- Importamos el Provider
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Productos from './pages/Productos.jsx';
import Registro from './pages/Registro.jsx';
import Ofertas from './pages/Ofertas.jsx';

import './index.css';
import './assets/main.css';
import './assets/estilos.css';

// Creamos el enrutador con la definición de nuestras rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App será el componente "marco" o layout
    children: [
      // Las rutas hijas se renderizarán dentro de App
      {
        index: true, // Esta es la ruta por defecto (/)
        element: <Home />,
      },
      {
        path: "productos", // Se accede con /productos
        element: <Productos />,
      },
      {
        path: "registro", // Se accede con /registro
        element: <Registro />,
      },
      {
        path: "ofertas", // Se accede con /registro
        element: <Ofertas />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envolvemos la aplicación con el CartProvider */}
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);