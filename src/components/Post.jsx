import React from 'react';

function Post({ data }) {
  return (
    <article className="post">
      <header>
        <div className="title">
          <h2><a href="single.html">{data.title}</a></h2>
          <p>{data.description}</p>
        </div>
        <div className="meta">
          <time className="published" dateTime="2015-10-25">{data.date}</time>
          <a href="#" className="author">
            <span className="name">{data.author.name}</span>
            <img src={data.author.avatar} alt={`Avatar de ${data.author.name}`} />
          </a>
        </div>
      </header>
      <a href="single.html" className="image featured"><img src={data.image} alt="" /></a>
      <p>{data.content}</p>
      <footer>
        <ul className="actions">
          <li><a href="index.html" className="button large">Continue Reading</a></li>
        </ul>
        <ul className="stats">
          <li><a href="#">General</a></li>
          <li><a href="#" className="icon solid fa-heart">28</a></li>
          <li><a href="#" className="icon solid fa-comment">128</a></li>
        </ul>
      </footer>
    </article>
  );
}

export default Post;