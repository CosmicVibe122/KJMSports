import React from 'react';
import Main from '../components/Main'; // Reutilizamos el componente Main que ya tenías

function Home() {
  // Ahora la página Home es la que renderiza el componente Main
  return <Main />;
}

export default Home;