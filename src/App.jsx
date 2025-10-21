import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'; // <-- Importante
import Header from './components/Header';
import Menu from './components/Menu';
import Sidebar from './components/SideBar';

function App() {
  const [isPreload, setIsPreload] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsPreload(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const showSidebar = location.pathname !== '/Productos' && location.pathname !== '/Registro' && location.pathname !== '/Ofertas';
  return (
    <div className={isPreload ? 'is-preload' : ''}>
      <div id="wrapper">
        <Header />
        <Menu />
        
        {/* Aquí es donde se renderizará el contenido de cada página */}
        <Outlet />         
        {showSidebar && <Sidebar />}        
      </div>
    </div>
  );
}

export default App;