import React from 'react';

function Menu() {
  return (
    <section id="menu">
      <section>
        <form className="search" method="get" action="#">
          <input type="text" name="query" placeholder="Search" />
        </form>
      </section>
      <section>
        <ul className="links">
          <li>
            <a href="index.html">
              <h3>Home</h3>
              <p>Página de Inicio</p>
            </a>
          </li>
          <li>
            <a href="blog.html">
              <h3>Blogs</h3>
              <p>Lee nuestros blogs</p>
            </a>
          </li>
          <li>
            <a href="contacto.html">
              <h3>Contacto</h3>
              <p>Formulario de contacto</p>
            </a>
          </li>
          <li>
            <a href="nosotros.html">
              <h3>Nosotros</h3>
              <p>Equipate, entrena, triunfa</p>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <ul className="actions stacked">
          <li><a href="registro.html" className="button large fit">Log In</a></li>
        </ul>
      </section>
    </section>
  );
}

export default Menu;