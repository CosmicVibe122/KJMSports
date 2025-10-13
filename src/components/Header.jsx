import React from 'react';

function Header() {
  return (
    <header id="header">
      <h1><a href="index.html">KJM Sports</a></h1>
      <nav className="links">
        <ul>
          <li><a href="productos3.html">Productos</a></li>
          <li><a href="registro.html">Unete!</a></li>
        </ul>
      </nav>
      <nav className="main">
        <ul>
          <li className="search">
            <a className="fa-search" href="#search">Search</a>
            <form id="search" method="get" action="#">
              <input type="text" name="query" placeholder="Search" />
            </form>
          </li>
          <li className="menu">
            <a className="fa-bars" href="#menu">Menu</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;