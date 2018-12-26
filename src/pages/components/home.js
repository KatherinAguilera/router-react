import React from 'react';
import './generic-page.css';
import Related from './related';

const Home = () => (
  <div className="Page">
  <Related className= "HomeMenu"/>
    <div className = "Home">
      <h1>Bienvenido a Platzi Video</h1>
      <p>Platzi Video es una plataforma creada en los cursos de <a href="https://platzi.com/react">React</a>, <a href="https://platzi.com/redux">Redux</a> y <a href="https://platzi.com/router">React Router</a></p>
      <p>Puedes encontrar su versión móvil en el curso de <a href="https://platzi.com/native">React Native</a></p>
    </div>
  </div>
)

export default Home