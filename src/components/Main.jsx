import React from 'react';
import ImageSlider from './ImageSlider';
import Post from './Post';

// Importa las imágenes para los posts
import noticiaDeportivaImg from '../assets/images/Noticia Deportiva.png';
import autorNoticiaImg from '../assets/images/noticias2.jpeg';
import autorJaneDoeImg from '../assets/images/avatar.jpg';

// Datos de los posts (la forma correcta de manejar contenido en React)
const postsData = [
  {
    id: 1,
    title: "Algunas Noticias del Deporte Nacional",
    description: "Pelluhue Coronó a Damián Correa,\"el Duao\" como campeón en la Categoría DropKnee Del Campeonato de Bodyboard Invierno 2025",
    date: "October 25, 2015",
    author: {
      name: "Maty Jones",
      avatar: autorNoticiaImg,
    },
    image: noticiaDeportivaImg,
    content: "La ola de Tres Peñas, “La Guerrera” volvió a rugir con fuerza en el Campeonato de Bodyboard de Pelluhue – Invierno 2025, coronando a tres campeones provenientes de la Región de Valparaíso y uno de la región del Maule, quienes marcaron presencia en lo más alto del podio",
  },
  {
    id: 2,
    title: "Futbol",
    description: "Lorem ipsum dolor amet nullam consequat etiam feugiat",
    date: "October 22, 2015",
    author: {
      name: "Jane Doe",
      avatar: autorJaneDoeImg,
    },
    
    content: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula.",
  }
];

function Main() {
  return (
    <div id="main">
      {/* Post especial con el video y el slider */}
      <article className="post">
        <header>
          <div className="title" style={{ backgroundColor: 'rgba(0, 0, 0, 0.801)' }}>
            <h2 style={{ color: 'azure' }}><a href="single.">Vive el Deporte</a></h2>
            <p style={{ color: 'aliceblue' }}>Maximiza tu experiencia como deportista</p>
          </div>
        </header>
        <div style={{ textAlign: 'center', marginTop: '-35px' }}>
          <h2>Disfruta la experiencia del deporte</h2>
          <iframe
            width="650"
            height="400"
            style={{ marginBottom: '20px' }}
            src="https://www.youtube.com/embed/CXssx6oVxPY?autoplay=1&mute=1&loop=1&playlist=CXssx6oVxPY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <ImageSlider />
        </div>
      </article>

      {/* Mapeo de los posts de datos para crear componentes reutilizables */}
      {postsData.map(post => (
        <Post key={post.id} data={post} />
      ))}
      
      <ul className="actions pagination">
        <li><a href="#" className="disabled button large previous">Previous Page</a></li>
        <li><a href="#" className="button large next">Next Page</a></li>
      </ul>
    </div>
  );
}

export default Main;