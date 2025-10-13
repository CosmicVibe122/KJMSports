import React from 'react';

// Importa todas las imágenes que usarás en el sidebar
import logo from '../assets/images/logo1.jpg';
import futbolImg from '../assets/images/futbol.jpg';
import natacionImg from '../assets/images/natacion.jpg';
import ciclismoImg from '../assets/images/ciclismo.jpg';
import runningImg from '../assets/images/running.webp';
import lentesArenaImg from '../assets/images/lentes_arena_cobra.webp';
import zapatosNikeImg from '../assets/images/zapato_de_futbol.jpg';
import bicicletaRutaImg from '../assets/images/bicicleta_ruta.avif';
import zapatillaAtletismoImg from '../assets/images/zapatilla_atletismo.jpg';
import trajeArenaImg from '../assets/images/Traje_de_baño_mujer.webp';

function Sidebar() {
  return (
    <section id="sidebar">
      {/* Intro */}
      <section id="intro" style={{ textAlign: 'center' }}>
        <a href="#" className="logo"><img src={logo} alt="KJM Sports Logo" /></a>
        <header>
          <h2>KJM Sports</h2>
          <p>Equipate, entrena, triunfa</p>
        </header>
      </section>

      {/* Mini Posts */}
      <section>
        <div className="mini-posts">
          <article className="mini-post">
            <header><h3><a href="#">futbol</a></h3></header>
            <a href="#" className="image"><img src={futbolImg} alt="" /></a>
          </article>
          <article className="mini-post">
            <header><h3><a href="#">Natacion</a></h3></header>
            <a href="#" className="image"><img src={natacionImg} alt="" /></a>
          </article>
          <article className="mini-post">
            <header><h3><a href="#">Ciclismo</a></h3></header>
            <a href="#" className="image"><img src={ciclismoImg} alt="" /></a>
          </article>
          <article className="mini-post">
            <header><h3><a href="#">Running</a></h3></header>
            <a href="#" className="image"><img src={runningImg} alt="" /></a>
          </article>
        </div>
      </section>

      {/* Posts List */}
      <section>
        <h1>PRODUCTOS DESTACADOS</h1>
        <ul className="posts">
          <li>
            <article>
              <header><h3><a href="#">Lentes Natacion Arena Cobra</a></h3></header>
              <a href="#" className="image"><img src={lentesArenaImg} alt="" /></a>
            </article>
          </li>
          <li>
            <article>
              <header><h3><a href="#">Zapatos de futbol Nike Vapor</a></h3></header>
              <a href="#" className="image"><img src={zapatosNikeImg} alt="" /></a>
            </article>
          </li>
          <li>
            <article>
              <header><h3><a href="#">Bicicleta Ruta</a></h3></header>
              <a href="#" className="image"><img src={bicicletaRutaImg} alt="" /></a>
            </article>
          </li>
          <li>
            <article>
              <header><h3><a href="#">Zapatilla Atletismo</a></h3></header>
              <a href="#" className="image"><img src={zapatillaAtletismoImg} alt="" /></a>
            </article>
          </li>
          <li>
            <article>
              <header><h3><a href="#">Traje de Baño Arena</a></h3></header>
              <a href="#" className="image"><img src={trajeArenaImg} alt="" /></a>
            </article>
          </li>
        </ul>
      </section>

      {/* About */}
      <section className="blurb">
        <h2>Sobre Nosotros</h2>
        <p>Somos KJM Sports, una empresa apasionada por el deporte...</p>
        <ul className="actions">
          <li><a href="nosotros.html" className="button">Leer Mas</a></li>
        </ul>
      </section>

      {/* Footer */}
      <section id="footer">
        <ul className="icons">
          <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="#" className="icon solid fa-rss"><span className="label">RSS</span></a></li>
          <li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
        </ul>
        <p className="copyright">&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>. Images: Unsplash.</p>
      </section>
    </section>
  );
}

export default Sidebar;